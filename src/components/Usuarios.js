import React, {Component}from "react";
import UsersCatalogo from "./UsersCatalogo";


class Usuarios extends Component{
  constructor(){
      super()
      this.state = {
          userslist: []
      }
  }
  componentDidMount(){
      fetch('http://localhost:3001/api/users')
          .then(respuesta => {
              return respuesta.json()
          })
          .then(users => {
            console.log(users)
            return this.setState({userslist: users.users})
          })
          .catch(error => console.log(error))
  }

  render(){
      return (
      <React.Fragment>
      <div className="col-lg-6 mb-4 cat">						
                   
                   <div className="card shadow mb-4">
                       <div className="card-header py-3">
                           <h2 className="m-0 font-weight-bold text-gray-800">Usuarios en base de datos</h2>
                       </div>
                       <div className="card-body">
                           <div className="row">
                           {this.state.userslist.map((users,index)=>{
                          return <UsersCatalogo {...users} key={index} />
                          })}
                             
                           </div>
                   </div>
                   </div>
      </div>
      
      </React.Fragment>
      )
      }
}


export default Usuarios;