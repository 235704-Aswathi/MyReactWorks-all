import react from 'react'
import Marklist from './Marklist'

const marks=[
    {name:'Anu Poly' , age:'22', marks:'A'},
    {name:'Jeevamol', age:'21', marks:'B'},
    {name:'Chinnu PT', age:'24',marks:'A+'}

]
function Markroot(){
    return (
        <Marklist values={marks}/>
    )
}
export default Markroot