import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'

import { RouterProvider } from 'react-router'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import router from './routes/route.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
