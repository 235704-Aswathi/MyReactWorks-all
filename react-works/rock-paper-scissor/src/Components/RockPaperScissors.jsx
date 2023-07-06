import React from 'react'
import './RockPaperScissors.css'
function RockPaperScissors(){

    const[UserScore,setUserScore]=React.useState(0);
    const[ComputerScore, setComputerScore]=React.useState(0);
    const[NoResult, setNoResult]=React.useState(0);
    const[message,SetMessage]=React.useState(0);

    function ComputerChoice(){
        const options=['R','P','S'];
        const choice=Math.floor(Math.random()*3);
        return options[choice];
    }
    function Play(UserChoice){
        const machineChoice=ComputerChoice();
        const Result=UserChoice+machineChoice;
        console.log(Result)
        switch (Result) {
            case 'RS':
            case 'PR':
            case 'SP':
                setUserScore(UserScore+1);
                SetMessage("User won")
                break;
            case 'SR':
            case 'RP':
            case 'PS':
                setComputerScore(ComputerScore+1);
                SetMessage("Computer Won")
                break;
            default:
                setNoResult(NoResult+1);
                SetMessage("Draw");
                break;
        }
    }


    return(
    <div class="Container">
       <div class="Heading">
           <h1>Rock Paper Scissors </h1>
       </div>

        <div className="images">
          <button onClick={()=>Play('R')}> <img src="src\assets\icon-rock.svg"/></button>
          <button onClick={()=>Play('P')}>< img src="src\assets\icon-paper.svg"/></button>
          <button onClick={()=>Play('S')}> <img src="src\assets\icon-scissors.svg"/></button>
        </div>

        <div className="points">
            <div classname="user">
                <h4>User</h4>
                <h5>{UserScore}</h5>
            </div>
            <div classname="draw">
                <h4>Draw</h4>
                <h5>{ComputerScore}</h5>
            </div>
            <div classname="computer">
                <h4>Computer</h4>
                <h5>{NoResult}</h5>
            </div> 
           
        </div>
        <div class="message">
                
                <h5>{message}</h5>
         </div>

    </div>
    )
}
export default RockPaperScissors