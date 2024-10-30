import { RouterProvider } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import { router } from "./router/router"



const App = () => {
  return (
    <>
      <Navbar /> 
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}
export default App
