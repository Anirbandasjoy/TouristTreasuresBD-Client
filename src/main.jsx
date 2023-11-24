import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './context/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          toastOptions={{
            position: "top-center",
            style: {
              background: "#283046",
              color: 'white'
            }
          }}
        />
      </QueryClientProvider>
    </AuthProvider>

  </React.StrictMode>,
)
