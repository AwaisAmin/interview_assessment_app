// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
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
      <Stepper />
      <Footer />
    </>
  );
}

export default App;
