import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <>
      {/* Ubicacion NavBar */}
      <NavBar />
      {/* Ubicacion de Contenido Principal */}
      <main className="container-fluid">
        <Outlet />
      </main>
    </>
  );
}
