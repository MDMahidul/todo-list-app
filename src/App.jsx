import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 xl:my-10 md:ml-64  xl:ml-[19rem] dark:bg-gray-700 bg-white xl:max-w-5xl xl:rounded-xl">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App
