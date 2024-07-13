import "./container.css";
import Bodycontainer from "../bodyContainer/bodycontainer";
import { useState } from "react";

export default function Container({user}) {
  const [count, setCount] = useState(5);
  return (
    <>
      <div className="container">
        <Bodycontainer count={count} user ={user} />
      </div>
    </>
  );
}
