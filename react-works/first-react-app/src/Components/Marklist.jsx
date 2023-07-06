import react from 'react'
const Marklist=(props)=>{

  return(
      <table>
        <thead>
            <tr>
                <th>Name </th>
                <th>Age </th>
                <th>Marks </th>
            </tr>
        </thead>
        <body>
            {
                props.values.map(element =>{
                    return(
                        <tr>
                            <td>{element.name}</td>
                            <td>{element.age}</td>
                            <td>{element.marks}</td>
                        </tr>
                    )
                }
                    
                )

           }
        </body>
      </table>
  )

}
export default Marklist