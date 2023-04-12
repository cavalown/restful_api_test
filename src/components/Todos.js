import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { EditTodo } from './EditTodo';

export const Todos = () => {
  const todos = [
    {
      id: 'ccc00b31-eb6b-4db7-a5d6-c5459e7af472',
      content: '這是第一個範例的todo喔！',
      isCompleted: false
    },
    {
      id: 'ab81e6ce-fe9a-4e94-9448-e1d9eb3ab201',
      content: '這是第二個範例的todo喔！',
      isCompleted: false
    },
  ]
  const todoList = todos.map((todo, index) =>
    <tr key={todo.id} className='align-middle'>
      <th scope="row">{index}</th>
      <td>
        <div className="form-check form-switch">
          <input className="form-check-input mx-auto" type="checkbox" role="switch" id={todo.id}></input>
        </div>
      </td>
      <td className='text-start'>{todo.content}</td>
      <td className='text-center'>
        <button type="button" className="btn text"><FontAwesomeIcon icon="fa-solid fa-pen-to-square" /></button>
        <button type="button" className="btn text"><FontAwesomeIcon icon="fa-solid fa-trash-can" /></button>
      </td>
    </tr>
  )
  return (
    <div className='mt-5'>
      <table className="table table-striped table-hover">
        <thead>
          <tr className='align-middle'>
            <th scope="col">#</th>
            <th scope="col">Done</th>
            <th scope="col">Task</th>
            <th scope="col">Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList}
        </tbody>
      </table>
      <EditTodo />
    </div>
  )
}
