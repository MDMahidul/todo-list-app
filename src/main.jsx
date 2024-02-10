import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import { Toaster } from 'react-hot-toast'
import TaskProvider from './Provider/TaskProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </TaskProvider>
  </React.StrictMode>
);
