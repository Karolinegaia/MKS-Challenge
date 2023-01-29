import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import  {router} from "./assets/router/router"
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <section className='container'>
      <RouterProvider router={router}/>
    </section>    
  </React.StrictMode>
)
