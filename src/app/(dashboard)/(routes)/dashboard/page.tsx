import { UserButton } from '@clerk/nextjs'
import React from 'react'




export default function DashboardPage() {
    return (
    <div>
        <h1>Dashboard (protected)</h1>
        <UserButton afterSignOutUrl='/'/>

    </div>
    )

}
