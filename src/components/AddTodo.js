import React from 'react'

export const AddTodo = () => {
  return (
    <div className="input-group my-3">
      <input type="text" className="form-control" id="newTaskInput" placeholder="What do you plan?"></input>
      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
    </div>
  )
}