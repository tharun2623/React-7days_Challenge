import React from 'react'
import './index.css';
import Login from './components/main.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Homepage from './components/homepage.jsx';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Login/>
   },
   {
      path: '/home',
      element: <Homepage/>
   }
]);
const App = () => {
   return <RouterProvider router={router}/>
}

export default App
