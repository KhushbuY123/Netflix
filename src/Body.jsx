import React, { Children } from 'react'
import Login from './Component/Login Page/Login'
import Browse from './Component/Browse/Browse'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
function Body() {
  
 const appRouter=createBrowserRouter([
      {
          path:"/",
          element:<Login/>,
      },
      {
          path:'/login',
          element:<Login/>
      },
      {
          path:'/browse',
          element:<Browse/>
      }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}



export default Body;
