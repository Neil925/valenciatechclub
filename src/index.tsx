import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Members from "./routes/members/Members";
import Events from "./routes/events/Events";
import Error from "./routes/error/Error";
import Admin from "./routes/admin/Admin";
import Shadow from "./routes/shadow/Shadow";
import NavBar from "./shared/navbar/NavBar";
import Footer from "./shared/footer/Footer";
import NavMenu from "./shared/navmenu/NavMenu";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);


function BasicLayout() {
  return (
    <>
      <NavBar />
      <NavMenu />
      <div className="outet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

function AdminLayout() {
  return <Outlet />;
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="members" element={<Members />} />
          <Route path="events" element={<Events />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/the-eminence-in-shadow" element={<Shadow />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
