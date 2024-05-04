// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stepper from "./components/Stepper";
// import Layout from "./components/Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [{ path: "" }],
//   },
// ]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <Navbar />
      {/* <Stepper /> */}
    </>
  );
}

export default App;
