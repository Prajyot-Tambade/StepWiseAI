import React from 'react'
import RouteLayout from "../layout/RootLayout"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

const Approutes = () => {

  // Router Setup
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<RouteLayout />} >
        <Route index element={<h1 className="text-center">StepWiseAI</h1>} />
      </Route>
      
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default Approutes
