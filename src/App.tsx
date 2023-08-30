import { useLocation } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <div className="App">
      <h1 className="z-50 w-full fixed shadow-sm shadow-slate-700 top-0 md:text-2xl xs:text-sm text-yellow-100 bg-indigo-300 font-bold p-4">
        {currentRoute.startsWith("/edit/") ||
        currentRoute === "/" ||
        currentRoute === "/contact_form"
          ? "Contact Management App"
          : "Charts and Maps"}
      </h1>

      <div className="md:flex md:w-full xs:w-full ss:w-full">
        <div className="md:w-auto xs:w-auto">
          <SideBar />
        </div>
        <div className="w-full md:flex-1 xs:w-full">
          <div className="flex justify-center items-center h-full w-full">
            <AllRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
