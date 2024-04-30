import "./cardcontainer.css"
import Card from "../card/card" 


function getCards(n){
    var elements = [];
    for(let i =0; i < n; i++){
        elements.push(<Card key={i}></Card>);
    }
    return elements;       
};

export default function Cardcontainer({count}){
    
    return (
        <div className="cardcontainer">
            <div>cardcontainer</div>
            {getCards(count)}
        </div>
    )
}