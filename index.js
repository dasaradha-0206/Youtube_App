import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Body from './body';
import NextVideo from './nextvideo';
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom';
const AppLayout=()=>{
  return <div>
    <Navbar/>
    <Outlet/>
  </div>
}
const ways =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/videos/:id",
        element:<NextVideo/>
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);
