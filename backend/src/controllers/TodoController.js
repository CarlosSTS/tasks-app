import * as Yup from 'yup'

import Todo from "../model/Todo";

class TodoController {
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      owner: Yup.string().required(),
      hours: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' })
    }

    const todo = await Todo.create(request.body)
    return response.json(todo)
  }
 
  async show(request, response) {
    const todos = await Todo.find()
    return response.json(todos)
  }

  async index(request, response) {
    const { owner } = request.params;
    const todos = await Todo.find({ owner })
    return response.json(todos)
  }

  async update(request, response) {
    const { _id } = request.params;
    const todo = await Todo.findById({ _id: _id })

    if (!todo) {
      return response.status(400).json({ error: 'Todo not exists' })
    }
    
    await Todo.updateOne(request.body)
    return response.json(todo)
  }

  async delete(request, response) {
    const { _id } = request.params;
    const todo = await Todo.findById({ _id: _id })

    if (!todo) {
      return response.status(400).json({ error: 'Todo not exists' })
    }

    await Todo.deleteOne(todo)

    return response.status(204).send();
  }
}

export default new TodoController();