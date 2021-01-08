import React from 'react'

const AddUser = () => {
  return (
    <div className = " container mb-4">
      <form className='col' action="">
          <div className="form row">
            <div className="col sm">
              <input type = "text" className="form-control" placeholder="name"></input>
            </div>
            <div className="col sm">
              <input type="text" className="form-control" placeholder="email"/>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="password"/>
            </div>
            <button className=" btn btn-sm btn-primary mt-5" type="button">Login</button>
          </div>
      </form>
      
    </div>
  )
}

export default AddUser
