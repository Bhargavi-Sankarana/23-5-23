import React,{Component} from 'react'

class About extends Component{
    state={
        employees:[]
    }
    componentDidMount(){
        fetch("https://reqres.in/api/users?page=2")
        .then((res)=>{
            console.log(res)
            return res.json()
        })
        .then((updated)=>{
            console.log(updated.data)
            this.setState({
                employees:updated.data
            })
        })
    }
    render(){
    return(
        <div>
            {
                this.state.employees.map((employees)=>(
                    <div>
                        <p>Name:{employees.first_name}</p>
                        <p>Email:{employees.email}</p>
                        <img src={employees.avatar} width="8%"/>
                        </div>
                ))
            }
        </div>
    );
}
}

export default About