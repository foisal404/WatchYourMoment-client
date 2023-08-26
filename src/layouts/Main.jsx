import { Outlet } from "react-router-dom";
import NavHead from "../shared/NavHead";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <>
      <NavHead />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer/>
    </>
  );
};

export default Main;
