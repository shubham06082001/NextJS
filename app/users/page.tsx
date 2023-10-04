import React from "react"

interface User {
  id: number
  name: string
  email: string
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  })
  const users: User[] = await res.json()
  return (
    <main>
      Users Page
      <hr />
      <p>{new Date().toLocaleTimeString()}</p>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <a href="/">Home Page</a>
      <hr />
      <a href="/users/new">New Users Page</a>
    </main>
  )
}

export default UsersPage
