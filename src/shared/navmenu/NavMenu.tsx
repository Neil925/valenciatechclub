import "./NavMenu.scss";
import { Link } from "react-router-dom";

export default function NavMenu(props: { toggleMenu: () => void, expanded: boolean }) {
  return (
    <div id="navMenu" style={ {width: "0px"}}>
      <nav className="nav-links">
        <Link to="/" onClick={props.toggleMenu}>Home</Link>
        <Link to="/events" onClick={props.toggleMenu}>Events</Link>
        <Link to="/members" onClick={props.toggleMenu}>Members</Link>
        <Link to="/join-us" onClick={props.toggleMenu}>Join Us</Link>
      </nav>
    </div>
  );
}
