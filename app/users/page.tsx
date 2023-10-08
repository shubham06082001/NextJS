import React, { Suspense } from "react"
import UserTable from './UserTable';

interface Props {
  searchParams: {
    sortOrder: string
  }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <main>
      Users Page
      <hr />
      <p>{new Date().toLocaleTimeString()}</p>
      <hr />
      <Suspense fallback={<p>Loading...</p>}>
       <UserTable sortOrder={sortOrder} />
      </Suspense>
      <hr />
      <a href="/">Home Page</a>
      <hr />
      <a href="/users/new">New Users Page</a>
    </main>
  )
}

export default UsersPage
