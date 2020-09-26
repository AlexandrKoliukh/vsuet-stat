import Router from 'koa-router';
import services from './services';
import authenticated from '../auth/utils';

export default (router, io) => {
  const tasksService = new services.TasksService();
  const columnsService = new services.ColumnsService();
  // const usersTasksService = new services.UsersTasksService();
  const apiRouter = new Router();

  apiRouter
    .get('/columns', authenticated(), async (ctx) => {
      ctx.body = await columnsService.getColumns();
    })
    .delete('/task/:id', authenticated(), async (ctx) => {
      const taskId = Number(ctx.params.id);
      const data = await tasksService.deleteTask(taskId);

      ctx.status = 204;
    });

  return router
    .get('/tasks', authenticated(), async (ctx) => {
      const columns = await columnsService.getColumns();
      const tasks = await tasksService.getAllTasks();
      const { username } = ctx.state.user;
      await ctx.render('tasks', {
        gon: {
          username,
          tasks,
          columns,
        },
      });
    })
    .use('/api/v1/root', apiRouter.routes(), apiRouter.allowedMethods());
};
