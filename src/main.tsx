import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { element } from './router/Routes'
import IsLoading from './pages/isLoading/IsLoading'
import { Provider } from 'react-redux'
import store from './global/redux/Store'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Suspense fallback={<IsLoading />}>
      <Provider store={store}>
        <RouterProvider router={element} />
        <ToastContainer position="top-left" autoClose={5000} />
      </Provider>
    </Suspense>
    
  </React.StrictMode>,
)
