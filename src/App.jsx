import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <main className="px-6 md:px-16 py-4">
          <Outlet />
        </main>
      </div>
    </>
  )
}
