import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import { Login, SignUp, Home, AddPost, AllPost, EditPost, Post, UserPost } from './pages/pages.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
    },

      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
          path: "/all-posts",
          element: (
              <AuthLayout authentication>
                  {" "}
                  <AllPost />
              </AuthLayout>
          ),
      },
      {
          path: "/add-post",
          element: (
              <AuthLayout authentication>
                  {" "}
                  <AddPost />
              </AuthLayout>
          ),
      },
      {
          path: "/edit-post/:slug",
          element: (
              <AuthLayout authentication>
                  {" "}
                  <EditPost />
              </AuthLayout>
          ),
      },
      {
          path: "/post/:slug",
          element: <Post />,
      },{
        path: "/userpost",
        element: (
            <AuthLayout authentication>
                {" "}
                <UserPost />
            </AuthLayout>
        ),
    },
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
