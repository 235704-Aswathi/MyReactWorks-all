import React from 'react'

class Clock extends React.Component{
 
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {
            message: props.heading,
            date: new Date()
        }
    }
    updateClock(){
        this.setState({date:new Date()});
    }
    componentDidMount(){
        console.log('timer mount')
        this.timerId=setInterval(()=>this.updateClock(),1000)
    }
    componentWillUnmount(){
       clearInterval( this.timerId)
    }
    render(){
        console.log('render'+this.state.date)
        return(
            <>
            <p>{this.state.message}</p>
            <p>{this.state.date.toLocaleTimeString("en-US")}</p>
            </>
        )
    }
}
export default Clock