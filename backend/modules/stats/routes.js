import Router from 'koa-router';
import services from './services';

export default (router, io) => {
  const profilesService = new services.ProfilesService();
  const apiRouter = new Router();

  apiRouter
    .get('/profiles', async (ctx) => {
      const { teacherId, subjectId } = ctx.request.query;
      const tId = Number(teacherId);
      const sId = Number(subjectId);
      if (tId) {
        ctx.body = await profilesService.getProfilesByTeacherId(tId);
      } else if (sId) {
        ctx.body = await profilesService.getProfilesBySubjectId(sId);
      } else {
        ctx.body = await profilesService.getProfiles();
      }
    })
    .post('/profiles', async (ctx) => {
      const { data } = ctx.request.body;
      const createdProfile = await profilesService.insertProfile(data);

      ctx.status = 201;
      ctx.body = createdProfile;
      io.emit('newProfile', createdProfile);
    });

  return router
    .get('/', async (ctx) => {
      const profiles = await profilesService.getProfiles();
      await ctx.render('root', {
        gon: {
          profiles,
        },
      });
    })
    .use('/api/v1/root', apiRouter.routes(), apiRouter.allowedMethods());
};
