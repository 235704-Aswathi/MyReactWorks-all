import React from 'react'
import RegisterForm from './RegisterForm'
import axios from 'axios'
import Notification from './Notification'
function Register(){
    
        
       
            const [formdata, setformdata]=React.useState({
               'fullname':'',
               'email':'',
               'password':'',
               'checked':false
              })
              const [userCreated, setUserCreated] = React.useState(false)

              function register(event) {

                       event.target.disabled = true
                       const payload = {
                            "fullName": formdata.fullname,
                            "email": formdata.email,
                            "password": formdata.password
                        }
            
                 axios.post('http://localhost:3000/user', payload)
                  .then(response => {
                        console.log(response.status)
                    if (response.status === 201) {
                      setUserCreated(true)
                     }
                    })
                  .catch(err => {
                    setUserCreated(false)
                    console.error(err)
                  })
                }
            
         
             
              function saveData(event){
                   const{id,type,value,checked}=event.target 
                     setformdata(
                        function(prevFormData){
                       return{
                           ...prevFormData,
                           [id]:type==='checked'?checked:value
                            }
                     }
                     )
                  
               }
            return(
                   <div className="d-flex justify-content-center align-items-center">
                     {!userCreated? 
                       <RegisterForm 
                       save={saveData} 
                       submit={register} 
                       data={formdata} />:
                       <Notification 
                       status={userCreated}/>}
                   </div>
                  )  
    
}
export default Register