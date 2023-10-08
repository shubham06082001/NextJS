import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const AdminLayout = ({ children }: Props) => {
    return (
        <div>
            Admin layout
            <aside>Admin Sidebar</aside>
            <div>{children}</div>
        </div>
    )
}

export default AdminLayout
