import { Router } from 'express';

const routes = new Router();

import TodoController from './controllers/TodoController';

routes.post('/todos',TodoController.store);
routes.get('/todos',TodoController.show);

routes.get('/todos/:owner',TodoController.index);

routes.put('/todos/:_id',TodoController.update);
routes.delete('/todos/:_id',TodoController.delete);

export default routes;