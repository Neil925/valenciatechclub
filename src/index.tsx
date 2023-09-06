import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./routes/home/HomePage";
import Join from "./routes/join/Join";
import Contact from "./routes/contact/Contact";
import Members from "./routes/members/Members";
import Events from "./routes/events/Events";
import Error from "./routes/error/Error";
import Admin from "./routes/admin/Admin";
import About from "./routes/about/landing/Landing";
import NavBar from "./shared/navbar/NavBar";
import Footer from "./shared/footer/Footer";
import NavMenu from "./shared/navmenu/NavMenu";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { aboutus } from "./utilities/helper";

library.add(fab, fas);


function BasicLayout() {
  return (
    <>
      <NavBar />
      <NavMenu />
      <div className="outlet">
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
          <Route path="join-us" element={<Join />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="members" element={<Members />} />
          <Route path="events" element={<Events />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path={aboutus} >
          <Route index element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
