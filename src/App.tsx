import "@patternfly/patternfly/patternfly.css";
import {
  Page,
  PageSection,
} from "@patternfly/react-core";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { userLoader, postsLoader, commentsLoader } from "./loaders";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments"



const router = createBrowserRouter([
  {
    path: "/users",
    element: <Users />,
    loader: () => userLoader(),
  },
  {
    path: "/comments",
    element: <Comments />,
    loader: () => commentsLoader(),
  },
  {
    path: "/posts",
    element: <Posts />,
    loader: () => postsLoader(),
  },
  {
    path: "*",
    element: <Navigate to="/users" replace />
  }

]);




function App() {

  return (
    <>
    <Page header={<Navbar />} isManagedSidebar sidebar={<Sidebar />}>
        <PageSection>
          <RouterProvider router={router} />
        </PageSection>
      </Page>
    </>
  );
}

export default App;
