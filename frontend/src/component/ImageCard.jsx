import React from "react";
import "./imageCard.css";
function ImageCard(props){
    
    return <>
<div style={{height:"400px",width:"100%",position:"relative",textAlign:"center"}}>
        <img  src={props.img} style={{objectFit:"fill" , width:"100%" ,height:"100%"}} alt="abc"/>
         <h1 className="imageCardDiv"  style={{position:"absolute",top:"55%",bottom:"45%",color:"steelblue",fontSize:props.size,width:"95vw",fontFamily: "sans-serif",textAlign:"right"}}>{props.title}</h1>
    </div>
    </>
}
export default ImageCard;
