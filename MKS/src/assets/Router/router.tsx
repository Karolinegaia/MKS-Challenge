import { createBrowserRouter } from "react-router-dom";
import {Ecommerce} from "../Page/Ecommerce";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Ecommerce/>,
    },
]);