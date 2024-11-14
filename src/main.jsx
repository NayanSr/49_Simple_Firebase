import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {path:'/', element: <HomePage/>},
      {path:'/login', element: <Login/>}
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



/* Steps

1. create a project in console in firebase
2. install firebase
3. register project for web
4. copy configaration file and paste in a .js file in src

*/