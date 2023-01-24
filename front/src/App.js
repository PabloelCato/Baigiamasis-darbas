
 import "./App.css";
import { BrowserRouter, Routes, Route, Outlet,} from "react-router-dom";
import Add from "./components/Addcar";
import Cars from "./components/Cars";
import Home from "./components/Home";
import Loging from "./components/Login";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Special from "./components/special";
import Addspecial from "./components/Addspecial";
import Navbar from "./components/Navigation";

const NavLayout = () => (
  <>
  <Navbar />
  <Outlet /> 
  </>
)



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path="/Cars" element={<NavLayout />} >
        <Route index element ={<Cars />} />
        </Route>
        <Route path="/special" element={<NavLayout />} >
        <Route index element ={<Special />} />
        </Route>
        <Route path="/" element={<Home />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/add" element={<Add />} />
          <Route path="/Register" element={<Signup />} />
          <Route path="/Login" element={<Loging />} />
          <Route path="/special" element={<Special />} />
          <Route path="/addspecial" element={<Addspecial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import "./App.css";
// import { createBrowserRouter, Routes, RouterProvider, Outlet,} from "react-router-dom";
// import Add from "./components/Addcar";
// import Cars from "./components/Cars";
// import Home from "./components/Home";
// import Loging from "./components/Login";
// import Signup from "./components/Signup";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Special from "./components/special";
// import Addspecial from "./components/Addspecial";
// import Navbar from "./components/Navigation";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// };


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Cars />,
//       },
//       {
//         path: "/special",
//         element: <Special />,
//       },
//       {
//         path: "/addCars",
//         element: <Add />,
//       },
//       {
//         path: "/addspecial",
//         element: <Addspecial />,
//       },
//     ],
//   },
//   {
//     path: "/register",
//     element: <Signup />,
//   },
//   {
//     path: "/login",
//     element: <Loging />,
//   },
//   {
//     path: "/Home",
//     element: <Home />,
//   },
// ]);

// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//         <RouterProvider router={router} />
//       </div>
//     </div>
//   );
// }

// export default App;


