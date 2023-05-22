import { createBrowserRouter } from "react-router-dom";

import Login from "components/auth/Login";
import Register from "components/auth/Register";
import Layout from "components/layout";
import Dashboard from "components/dashboard";
import Comments from "components/comments";
import Profile from "components/profile";
import Users from "components/users";
import Home from "components/auth/Home";
import Video from "components/auth/Video";
import Game from "components/auth/Game";
import Commen1 from "components/auth/Commen1";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const VIDEO = "/video";
export const GAME = "/game";
export const COMMEN1 = "/commen1";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
  { path: ROOT, element: <Home /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: VIDEO, element: <Video /> },
  { path: GAME, element: <Game /> },
  { path: COMMEN1, element: <Commen1 /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
    ],
  },
]);
