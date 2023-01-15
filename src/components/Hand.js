import React, {useState} from "react";
import Menu from "./Menu";

const Hand = () => {
    const [color, setColor] = useState("red");
    const handleScroll = (event)=>{
        if (event.currentTarget.scrollTop > 150){
            setColor("orange");
        } else {
            setColor ("red");
        }
    };
    return (
        <div style={{border: "3px solid black",
        width: "400px",
        height: "100px",
        overflow: "scroll",
        backgroundColor: color,
        }}
        onScroll= {handleScroll}
        >
            <Menu/>
        {/* <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p> */}
        </div>
    )
}

export default Hand;