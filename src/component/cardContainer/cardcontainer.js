import "./cardcontainer.css";
import Card from "../card/card";
import { Outlet, Link } from "react-router-dom";
function getCards(n) {
  var elements = [];
  for (let i = 0; i < n; i++) {
    elements.push(<Card key={i}></Card>);
  }
  return elements;
}

function showProdutButton() {
  return (
    <>
      <Link className="link" to="/productCategory">
        Add Product category
      </Link>
      <Link className="link" to="/product">
        Add Product
      </Link>
    </>
  );
}

export default function Cardcontainer({ count, user }) {
  console.log("-----111", user);
  return (
    <div className="cardcontainer">
      <div>cardcontainer</div>
      {user ? showProdutButton() : getCards(count)}
      <Outlet />
    </div>
  );
}
