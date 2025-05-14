import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomepageLayout from './components/layout/HomepageLayout';
import Homepage from './page/Homepage';
import CustomCursor from './components/common/CustomCursor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      }
    ],
  },
]);

const App = () => {

  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
};

export default App