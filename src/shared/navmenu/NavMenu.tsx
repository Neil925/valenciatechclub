import "./NavMenu.scss";
import { Link } from "react-router-dom";

export default function NavMenu() {
  return (
    <div id="navMenu" style={ {width: "0px"}}>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/members">Members</Link>
        <Link to="/join-us">Join Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}
