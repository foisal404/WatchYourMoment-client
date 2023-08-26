import { Outlet } from "react-router-dom";
import NavHead from "../shared/NavHead";

const Main = () => {
  return (
    <>
      <NavHead />
      <Outlet />
    </>
  );
};

export default Main;
