import "./bodycontainer.css";
import Slidbarcontainer from "../sidebarnavigationContainer/slidbarcontainer";
import Cardcontainer from "../cardContainer/cardcontainer";

export default function Bodycontainer({count}) {
  return (
    <>
      <div className="bodycontainer">
        <Slidbarcontainer count={count} />
        <Cardcontainer count={count} />
      </div>
    </>
  );
}
