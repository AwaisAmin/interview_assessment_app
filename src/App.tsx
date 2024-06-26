import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Layout } from "./components";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "", element: <Home /> }],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
