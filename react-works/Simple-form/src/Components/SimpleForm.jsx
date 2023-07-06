import React from 'react'
import "./SimpleForm.css"
function SimpleForm(){

    const[formdata, setformdata]=React.useState({
        'fname':'',
        'lastname':'',
        'username':'',
        'city':'',
        'state':'choose',
        'zip':''
     }) 
     
     const submit=()=>{
        console.log(formdata)
    }
    function SaveData(event){
        const{id,value}=event.target 
        setformdata(
            function(prevFormData){
                return{
                    ...prevFormData,
                    [id]:value

                }
            }
        )
    }
        
    

    return(
      <div className="container card">
        <div className="row">
            <div className="col-4">
            <form>
                 <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                     <input type="email" className="form-control" id="fname" aria-describedby="emailHelp"  value={formdata.fname} onChange={SaveData}/>
                 </div>
            </form>
            </div>
            <div className="col-4">
                 <div className="mb-3">
                     <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                     <input type="email" className="form-control" id="lastname" aria-describedby="emailHelp"  value={formdata.lastname} onChange={SaveData} />
                 </div>

            </div>
            <div className="col-4">
                 <div className="mb-3">
                 <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                 <div className="input-group">
                       <span className="input-group-text">@</span>
                       <input type="text" className="form-control" id="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={SaveData} value={formdata.username}/>
                 </div>
            </div>

            </div>
        </div>

        <div className="row">
            <div className="col-6">
            <div className="mb-3">
                     <label htmlFor="city" className="form-label">City</label>
                     <input type="text" className="form-control" id="city" onChange={SaveData} value={formdata.city}/>
                 </div> 
            </div>
            <div className="col-3">
              <div className="mb-3">
                  <label htmlFor="disabledSelect" className="form-label" >State</label>
                  <select id="state" className="form-select" onChange={SaveData} value={formdata.state}>
                        <option value='choose'>Choose</option>
                        <option value="kerala">Kerala</option>
                        <option value="TamilNadu">TamilNadu</option>
                        <option value="Goa">Goa</option>
                  </select>
              </div>
            </div>
            <div className="col-3">
                 <div className="mb-3">
                     <label htmlFor="exampleInputPassword1" className="form-label">Zip</label>
                     <input type="text" className="form-control" id="zip" onChange={SaveData} value={formdata.zip}/>
                 </div>
            </div>
        </div>
            <div className="row">
                <div className="col-2">
                 <button type="submit" onClick={submit} className="btn btn-primary">Submit</button>
                 </div>
            </div>
      </div>
    )
}
export default SimpleForm