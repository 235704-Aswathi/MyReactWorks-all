import React from 'react'
import './HappyCrew.css'

function HappyCrew(){

    const[formData, setformData]=React.useState({

        'name':'',
        'mail':'',
        'cargo':false,
        'commuter':false,
        'touring':false
    } )
    
    const submit=()=>{
        console.log(formData)
    }
    function SaveData(event){
        const{id,type,value,checked}=event.target 
        setformData(
            function(prevFormData){
                return{
                    ...prevFormData,
                   [id]:type==='checkbox' ? checked :value

                }
            }
        )
    }
    return(
        <div class='container'>
        <form class="form"><br></br>
            <h1>Join the Happy Crew</h1>
            <h2>Get weekly ebike tips,news and discounts!</h2><br></br>
            <div >
                <label for="name" class="form-group"><b>First Name</b><span class="red">*</span></label>
                <input type="text" required name="name" class="form-input" id="name" autocomplete="off"  onChange={SaveData} value={formData.name} />
            </div>
            <div>
                <label for="mail" class="form-group"><b>Email</b><span class="red">*</span></label>
                <input type="email" required name="mail" class="form-input" id="mail" autocomplete="off"  onChange={SaveData} value={formData.mail}/>
            </div>
            <div class="form-group">
                <label for="interest"><b>What are you interested in?</b></label><br></br>
                <input type="checkbox" name="interest" class="check" id="cargo"  onChange={SaveData} checked={formData.cargo}/>Cargo<br></br>
                <input type="checkbox" name="interest" class="check" id="commuter" onChange={SaveData} checked={formData.commuter} />Commuter<br></br>
                <input type="checkbox" name="interest" class="check" id="touring" onChange={SaveData} checked={formData.touring}/>Touring
            </div>
            <button type="button" onClick={submit}>Subscribe</button>
            <hr></hr>
        </form>
        </div>
    )
}
export default HappyCrew