import "./headercontainer.css";
import logo from "../../logo.svg";
import { Outlet, Link } from "react-router-dom";
export default function Headercontainer({ user, setUser }) {
  function getLinks() {
    return (
      <>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/registration">
          Registration
        </Link>
      </>
    );
  }
  function logout() {
    document.cookie = `token = `
    document.cookie = `userid = `
    setUser("");
  }
  function welcomeUser(user) {
    return (
      <div className="userWelcome">
        welcome {user}
        <span onClick={logout} className="logoutLink">
          Logout
        </span>
      </div>
    );
  }
  return (
    <>
      <div className="headercontainer">
        <div className="logo">
          <Link to="/">
            <img src={logo} height={75} width={75}></img>
          </Link>
        </div>
        <div className="headerActionItems">
          <input type="text" className="searchBox" />
          <button className="searchButton">Search</button>
          {user ? welcomeUser(user) : getLinks()}
        </div>
        <Outlet />
      </div>
    </>
  );
}
