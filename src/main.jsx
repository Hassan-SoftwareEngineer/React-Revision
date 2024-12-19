import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import Posts from "./Routes/Posts";
import NewPost, {action as newPostAction} from './Routes/NewPost';
import RootLayout from "./Routes/RootLayout";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loader as postsLoader } from './Routes/Posts';
import PostDetails, {loader as postDetailsLoader} from "./Routes/PostDetails";


const router = createBrowserRouter([
  {
  path : "/",
  element : <RootLayout />,
  errorElement: <div>Something went wrong while loading the app!</div>, 
  children : [
    { path : "/",
      element : <Posts />,
      loader : postsLoader,
      errorElement : <div> Error During Fetching Posts </div>,
      children : [
        {
          path : "/create-post",
          element : <NewPost />,
          action : newPostAction
        },
        {
          path : ":id",
          element : <PostDetails />,
          loader : postDetailsLoader
        }
      ],

    },
    
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)