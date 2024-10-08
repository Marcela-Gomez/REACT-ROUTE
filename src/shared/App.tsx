import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from "../Home/HomePage"
import { Navbar } from "./NavBar/NavBar"
import { StartPage } from "../start/StartPage"
export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>

    },{
      path: '/start',
      element: <StartPage/>
    },
    {
      path: '*',
      element: <Navbar/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App