import React from 'react'
function ReactForms(){
    const[formData, setFormData]=React.useState({
        'username':'',
        'password':'',
        'isRobot':false,
        'location':2
    })

    // function ValueChange(event){
    //    setFormData(
    //        function(prevFormData){
    //            return{
    //                ...prevFormData,
    //                [event.target.id]:event.target.value
    //            }
    //        }
    //    ) 
    // }
    function ValueChange(event){
        const {id,value,type,checked}=event.target
        setFormData(
            function(prevFormData){
                return{
                    ...prevFormData,
                    [id]: type==='checkbox' ? checked :value
                }
            }
        )
}
    function login(event){
        console.log(formData.username+':'+formData.password)
    }

   return(
    <div class="Container">
        <div class="heading">
            <h2>Form</h2>
        </div>
        <div class="mb-3">
           <label for="username" class="form-label">USERNAME</label>
           <input type="USERNAME" class="form-control" id="username" placeholder="enter username" value={formData.username}   onChange={ValueChange}/>
        </div>
        
        <div class="mb-3">
           <label for="password" class="form-label">PASSWORD</label>
           <input type="PASSWORD" class="form-control" id="password" placeholder="enter password" value={formData.password} onChange={ValueChange}/>
        </div>
        <div className='p-2'>
                <div className="text-bold">{formData.username}</div>
                <div className="text-bold">{formData.password}</div>
        </div>

        <div className="form-group">
                <label htmlFor="">Select a location</label>
                <select class="form-select" aria-label="Default select example" name="location"
                onChange={ValueChange} value={formData.location}>
                    <option value="">Select an option</option>
                        <option value="1">Kochi</option>
                        <option value="2">Banglore</option>
                        <option value="3">Pune</option>
                </select>
            </div>
        <div className="form-check ">
                <input className="form-check-input" type="checkbox" id="isRobot"
                checked={formData.isRobot} onChange={ValueChange}/>
                <label className="form-check-label"htmlFor="isRobot">
                I  am Not a Robot
                </label>
        </div>
        {
                 formData.isRobot&&
                // <button className='btn btn-lg btn-primary' onClick={login}> </button>
                <button type="submit" class="btn btn-primary mb-3"  onClick={login}>SUBMIT</button>
        }   

    </div>
   )

}
export default ReactForms