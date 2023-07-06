import React from 'react'
import { ThemeProvider } from './ThemeProvder'
function Theme(){
    const {textColor,setBgColor,setTextColor}=React.useContext(ThemeProvider);
  return(
     <div class="container">
         <h1>Theme</h1>
           <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              {/* <button class="btn btn-primary" type="button"> Change Theme</button> */}
              <input type="button" onClick={()=>{ 
                if(textColor==='dark'){
                    setBgColor('dark')
                    setTextColor('light')
                }
                else{
                    setBgColor('light')
                    setTextColor('dark')
                }
            }} value={'Change'} />
           </div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Eaque accusamus, doloribus quibusdam in sequi reiciendis quidem eum harum magnam quasi laboriosam sapiente aliquam alias? Maiores hic animi non excepturi sapiente ex necessitatibus aliquam libero quae, eius reiciendis dolores omnis officiis, repellendus exercitationem? Debitis dolores assumenda obcaecati iste reiciendis maxime rerum? Cum, dicta! Placeat sed asperiores eum pariatur minus exercitationem quos eaque nostrum recusandae consectetur, fugiat earum expedita obcaecati minima quibusdam voluptatem molestiae necessitatibus dicta iusto. Eos corrupti dolorem tempora quia explicabo, rerum, voluptates quasi unde provident repellendus itaque! Corporis quia voluptatum modi officia a culpa porro consequuntur libero qui eveniet!</p>
     </div>
 )   
}
export default Theme



