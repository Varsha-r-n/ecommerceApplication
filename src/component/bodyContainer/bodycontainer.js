import "./bodycontainer.css";
import Slidbarcontainer from "../sidebarnavigationContainer/slidbarcontainer";
import Cardcontainer from "../cardContainer/cardcontainer";

export default function Bodycontainer({count, user}) {
  return (
    <>
      <div className="bodycontainer">
        <Slidbarcontainer count={count} />
        <Cardcontainer count={count} user={user}/>
      </div>
    </>
  );
}
