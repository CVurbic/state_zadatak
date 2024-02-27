import React from 'react'

class LifeCycle extends React.Component {
    componentWillMount(){
        console.log("Component will mount!");
    }
    componentDidMount(){
        console.log("Component did mount!");
        this.getList()
    }

     getList = () =>{
        console.log("Getting lists.....")
    }



render(){

    return (
        <div><h3>Hello mounting methods!</h3></div>
        )
    }
}

export default LifeCycle