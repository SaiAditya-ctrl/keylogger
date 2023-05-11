import React from "react";
import {saveAs} from "file-saver";


export default function Imagcode() {

   const handleClick = ()=>{
    let url = "/files/my-tax.pdf"
    saveAs(url, "Tax-data");
   }

   return (
     <div className="App">
         <button onClick={handleClick}>Dowload Tax data</button>
     </div>
   );
}