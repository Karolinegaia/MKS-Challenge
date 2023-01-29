import { createBrowserRouter } from "react-router-dom";
import {Ecommerce} from "../Page/Ecommerce";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Ecommerce/>,
    },
]);