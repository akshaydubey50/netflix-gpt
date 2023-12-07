import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Css & component import
import "../App.css"
import Login from './Login'
import Browse from './Browse'

export default function Body() {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}
