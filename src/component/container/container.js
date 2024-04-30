import "./container.css";
import Bodycontainer from "../bodyContainer/bodycontainer";
import Headercontainer from "../headerContainer/headercontainer";
import { useState } from "react";

export default function Container() {
  const [count, setCount] = useState(5);
  function setValue(e) {
    console.log("-----", e.target.value);
    setCount(e.target.value);
  }
  return (
    <>
      <div className="container">
        <Headercontainer count={count} />
        <Bodycontainer count={count} />
      </div>
    </>
  );
}
