import "./container.css";
import Bodycontainer from "../bodyContainer/bodycontainer";
import { useState } from "react";

export default function Container() {
  const [count, setCount] = useState(5);
  return (
    <>
      <div className="container">
        <Bodycontainer count={count} />
      </div>
    </>
  );
}
