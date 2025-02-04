import React from 'react'
import RouteLayout from "../layout/RootLayout"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Home from '../pages/Home'

const Approutes = () => {

  // Router Setup
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<RouteLayout />} >
        <Route index element={<Home />} />
      </Route>
      
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default Approutes
