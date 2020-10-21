import Router from 'koa-router';
import services from './services';

export default (router, io) => {
  const profilesService = new services.ProfilesService();
  const teachersService = new services.TeachersService();
  const subjectsService = new services.SubjectsService();
  const clustersService = new services.ClustersService();
  const apiRouter = new Router();

  apiRouter
    .get('/profiles', async (ctx) => {
      const { teacherId, subjectId, clusterId } = ctx.request.query;
      const tId = Number(teacherId);
      const sId = Number(subjectId);
      const cId = Number(clusterId);
      if (tId) {
        ctx.body = await profilesService.getProfilesByTeacherId(tId);
      } else if (sId) {
        ctx.body = await profilesService.getProfilesBySubjectId(sId);
      } else if (cId) {
        ctx.body = await profilesService.getProfilesByClusterId(sId);
      } else {
        ctx.body = await profilesService.getProfiles();
      }
    })
    .post('/profiles', async (ctx) => {
      const { data } = ctx.request.body;
      const createdProfile = await profilesService.insertProfile(data);
      ctx.status = 201;
      ctx.body = createdProfile[0];
      io.emit('newProfile', createdProfile[0]);
    });

  return router
    .get('/', async (ctx) => {
      const profiles = await profilesService.getProfiles();
      const teachers = await teachersService.getTeachers();
      const subjects = await subjectsService.getSubjects();
      const clusters = await clustersService.getClusters();
      await ctx.render('root', {
        gon: {
          profiles,
          teachers,
          subjects,
          clusters,
        },
      });
    })
    .use('/api/v1/stat', apiRouter.routes(), apiRouter.allowedMethods());
};
