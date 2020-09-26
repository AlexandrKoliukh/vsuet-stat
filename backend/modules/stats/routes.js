import Router from 'koa-router';
import services from './services';

export default (router, io) => {
  const profilesService = new services.ProfilesService();
  const teachersService = new services.TeachersService();
  const subjectsService = new services.SubjectsService();
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
      const teachers = await teachersService.getTeachers();
      const subjects = await subjectsService.getSubjects();
      await ctx.render('root', {
        gon: {
          profiles,
          teachers,
          subjects,
        },
      });
    })
    .use('/api/v1/stat', apiRouter.routes(), apiRouter.allowedMethods());
};
