import React from 'react'

const RegisterForm=({ save, submit,data})=>{
    return(
        <div class="container card m-5" >
           <h2 class="text-center">Register Form</h2>
          <div class='row'>
               <div class="col-12">
                       <label htmlFor="fullName" className="form-label">Full name</label>
                       <input type="text" className="form-control" name="fullName" aria-describedby="nameHelp" id="fullname" value={data.fullname} onChange={save}/> 
                       <div id="nameHelp" className="form-text">Please provide your fullname.</div>
               </div>
          </div>
          <div class="row">
                <div class="col-12">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="text" className="form-control" name="email" aria-describedby="emailHelp" id="email" value={data.email}  onChange={save} />
                      <div id="emailHelp" className="form-text">Please provide your email</div>
                </div>
          </div>
          <div class="row">
                <div class="col-12">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" name="password" aria-describedby="passHelp"  id="password" value={data.password}  onChange={save}/>
                      <div id="passHelp" className="form-text">Please provide your password.</div>
                </div>
          </div>
          <div class="row">
                <div class="col-12">
                  <div class="form-check">
                        <input class="form-check-input" type="checkbox" checked={data.checked} id="checked" onChange={save}/>
                        <label class="form-check-label" for="flexCheckDefault">I agree to the terms and conditions </label>  
                  </div>
                </div> 
          </div>
          {data.checked &&
            <div class="row">
                <div class="col-12">
                     <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
                </div>
          </div>}
         



        </div>
    )
}
export default RegisterForm