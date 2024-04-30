import "./headercontainer.css";
import HeadBox from "../headerNavigation/headBox";
import logo from "../../logo.svg"
function getheadBox(n) {
  var elements = [];
  for (let i = 0; i < n; i++) {
    elements.push(<HeadBox key={i}></HeadBox>);
  }
  return elements;
}
export default function Headercontainer({ count }) {
  return (
    <>
      <div className="headercontainer">
        <div className="logo">
          <img src={logo} height={75} width={75}></img>
        </div>
        {/* {getheadBox(count)} */}
        <div className="headerActionItems">
          <input type="text" className="searchBox" />
          <button className="searchButton">Search</button>
          <a href='#' className="link">Login</a>
          <a href='#' className="link">Registration</a>
        </div>
      </div>
    </>
  );
}
