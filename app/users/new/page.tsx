import { useRouter } from "next/navigation"
import React from "react"

const newUsersPage = () => {
  const router = useRouter();
  return (
    <main>
      New Users Page
      <button className='btn btn-primary' onClick={() => router.back()}>Create</button>
      <hr />
      <a href="/users">Users</a>
      <hr />
      <a href="/">Home Page </a>
    </main>
  )
}

export default newUsersPage
