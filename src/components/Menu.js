function Menu (sent) {
    return (
    <div className="menu">
        <div>
            <img width={150} src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="logo"/>
        </div>
        <div>
           <ul>
                {/* {sent.map((e) => {
                    return <li>{e}</li>;
                    
                })} */}
            
           </ul>
           <button className="btn">Get Started</button>
        </div>
    </div>
    );
}

export default Menu;

