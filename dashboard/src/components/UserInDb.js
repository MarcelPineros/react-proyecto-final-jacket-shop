import React, { Component } from "react";

class UserInDb extends Component {
  constructor (){
    super()
    this.state = {
      userList : []
    }
  }
  componentDidMount () {
    fetch("api/users/detail")
    .then (respuesta => respuesta.json())
    .then (users => {
      this.setState({usersList: users.data})
    })
    .catch ( error => console.log(error))
  }
  render() {

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
           User in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Nombre</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Apellido</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Email</div>
              </div>
            </div>          
            </div>
        </div>
      </div> 
    </div>  
  );
}
}

export default UserInDb;
