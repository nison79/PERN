import React from 'react'

const UsersList = () => {
  return (
    <div className="list-group">
      <table className=" table table-hover table-dark">
        <thead>
          <tr className="bg primary">
            <th scope="col">id</th>
            <th scope="col">ip</th>
            <th scope="col">name</th>
            <th scope="col">time_in</th>
            <th scope="col">time_out</th>
            <th scope="col">places_visits</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>123.1.1.1</td>
            <td>George Nikoglou</td>
            <td>2021-01-07 22:52:43.096693</td>
            <td>2021-01-07 22:58:43.096693</td>
            <td>Instagram</td>
            <td>georgenison@gmail.com</td>
            <td><button className = "btn btn-warning">Edit</button></td>
            <td><button className = "btn btn-danger">Delete</button></td>
          </tr>

          <tr>
            <td>1</td>
            <td>123.1.1.1</td>
            <td>George Nikoglou</td>
            <td>2021-01-07 22:52:43.096693</td>
            <td>2021-01-07 22:58:43.096693</td>
            <td>Instagram</td>
            <td>georgenison@gmail.com</td>
            <td><button className = "btn btn-warning">Edit</button></td>
            <td><button className = "btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsersList
