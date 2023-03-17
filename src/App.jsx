import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <div id="App" className="h-full flex-grow px-6 md:px-16 py-4">
        <Outlet />
      </div>
    </>
  )
}

export default App;