import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Solutions } from "./pages/Solutions";
import { SolutionDetail } from "./pages/SolutionDetail";
import { News } from "./pages/News";
import { NewsDetail } from "./pages/NewsDetail";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:productId", Component: ProductDetail },
      { path: "solutions", Component: Solutions },
      { path: "solutions/:solutionId", Component: SolutionDetail },
      { path: "news", Component: News },
      { path: "news/:newsId", Component: NewsDetail },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
