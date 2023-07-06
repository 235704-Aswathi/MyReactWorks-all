import React from 'react'
import './PasswordGenerator.css'

function PasswordGenerator(){

    const[password, setPassword]=React.useState(0);
    const array=[6,7,8];
    const value=Math.floor(Math.random()*3);
    const UpperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LowerCase='abcdefghijklmnopqrstuvwxyz';
    const SpecialChara='~!@#$%^&*';
    const Numbers='1234567890';
    const args=[UpperCase,LowerCase,SpecialChara,Numbers];

      const getRandomChar=(argument)=>{
          return argument[Math.floor(Math.random()*argument.length)];
      }
 
      const generatePassword=()=>{
          let  pass='';
          pass=pass+getRandomChar(UpperCase[Math.floor(Math.random()*args.length)]);
          pass=pass+getRandomChar(LowerCase[Math.floor(Math.random()*args.length)]);
          pass=pass+getRandomChar(SpecialChara[Math.floor(Math.random()*args.length)]);
          pass=pass+getRandomChar(Numbers[Math.floor(Math.random()*args.length)]);
          
          
          for(let i=0; i<array[value]-4;i++){
              pass=pass+getRandomChar(args[Math.floor(Math.random()*args.length)]);
          }
          setPassword(pass);
      }
    return( 
        <div class="Container">
             <div class="heading">
                <h2>Password Generator </h2>
             </div>
             <div class="button">
                <button onClick={generatePassword}>Generate</button>
                <h5>{password}</h5>
             </div>
        </div>
    )
}
export default PasswordGenerator