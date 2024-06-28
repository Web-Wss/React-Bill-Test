// 创建路由实例 绑定path element

import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import New from "@/pages/New";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "month",
        index: true,
        element: <Month />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
  },
]);

export default router;
