export default function Header({title, para, button}) {
    return(
        <div className="header">
            <div className="text">
                <h1 className="text1">{title}</h1>
                <p className="text1">{para}</p>
                <button className="btn1 text1">{button}</button>
            </div>
        
            <div>
                {/* <img  class="m" src={require("./images/headerImg")} alt="" /> */}
                
            </div>
        </div>
       
    );
}