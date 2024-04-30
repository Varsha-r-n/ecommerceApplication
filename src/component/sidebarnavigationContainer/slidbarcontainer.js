import "./slidbarcontainer.css";
import SlideBox from "../sidebarNavigation/slidbox.js";

function getbox(n) {
  var elements = [];
  for (let i = 0; i < n; i++) {
    elements.push(<SlideBox key={i}></SlideBox>);
  }
  return elements;
}

export default function Slidbarcontainer({ count }) {
  return <div className="slidbarcontainer">{getbox(count)}</div>;
}
