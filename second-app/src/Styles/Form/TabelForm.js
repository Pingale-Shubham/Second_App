import React, { Component } from 'react'

class TableForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName  : '',
         FirstName : '',
         LastName  : '',
         Address :'',
         Email : '',         
         MobileNumber: '',
         DOB:'',
        //  Day:'',
        //  Month:'',
        //  Year:'',
         Gender : 'Male',
         Education : 'BE',
         Comment : ''

      }
    }
    HandleUserName = (event) =>{
        this.setState({
            UserName : event.target.value
        })
    }

    HandleFirstName = (event) =>{
        this.setState({
            FirstName : event.target.value
        })
    }

    HandleLastName = (event) =>{
        this.setState({
            LastName : event.target.value
        })
    }

    HandleEmail = (event) =>{
        this.setState({
            Email : event.target.value
        })
    }
   
    HandleAddress = (event) =>{
        this.setState({
            Address : event.target.value
        })
    }

    HandleNumber = (event) =>{
        this.setState({
            MobileNumber : event.target.value
        })
    }
    HandleDOB = (event) => {
        this.setState({
            DOB : event.target.value
        })
    }

    // HandleDay = (event) =>{
    //     this.setState({
    //         Day : event.target.value
    //     })
    // }

    // HandleMonth = (event) =>{
    //     this.setState({
    //         Month : event.target.value
    //     })
    // }

    // HandleYear = (event) =>{
    //     this.setState({
    //         Year : event.target.value
    //     })
    // }

    HandleGender = (event) =>{
        this.setState({
            Gender : event.target.value
        })
    }

    HandleEducation = (event) =>{
        this.setState({
            Education : event.target.value
        })
    }


    HandleComment = (event) =>{
        this.setState({
            Comment : event.target.value
        })
    }


    HandleSubmit = (event) =>{
        alert(`${this.state.UserName},
        ${this.state.FirstName} ${this.state.LastName},
        ${this.state.Address},
        ${this.state.Email},
        ${this.state.MobileNumber},
        ${this.state.DOB},
        ${this.state.Gender},
        ${this.state.Education},
        ${this.state.Comment}`)

        event.preventDefault()
    }
  render() {
    return (
    <>
    <form onSubmit={this.HandleSubmit}>
    <h3>
      <div>Form</div><br/><br/></h3>
      
      {/* <label>UserName : </label>
      <input type='text' value={this.state.UserName} onChange={this.HandleUserName} /> */}

      <br/><br/>
      <label>First Name : </label>
      <input type='text' value={this.state.FirstName} onChange={this.HandleFirstName} />

      <label>Last Name : </label>
      <input type='text' value={this.state.LastName} onChange={this.HandleLastName} />

      <br/><br/>
      <label>Address : </label>
      <input type='text' value={this.state.Address} onChange={this.HandleAddress} />

      <br/><br/>
      <label>Email-id : </label>
      <input type='text' value={this.state.Email} onChange={this.HandleEmail} />

      <br/><br/>
      <label>Mobile Number :</label>
      <input type='number' value={this.state.MobileNumber} onChange={this.HandleNumber} />
    
      <br/><br/>
      <label>Date of Birth :</label>
      <input type='date' value={this.state.DOB} onChange={this.HandleDOB}/>      


      {/* <label>Day: </label>
      <input type='Number' value={this.state.Day} onChange={this.HandleDay} />

      <label>Month : </label>
      <input type='Number' value={this.state.Month} onChange={this.HandleMonth} />

      <label>Year : </label>
      <input type='Number' value={this.state.Year} onChange={this.HandleYear} /> */}

      <br/><br/>
      <label>Gender : </label>
      <select value={this.state.Gender} onChange={this.HandleGender}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        </select>

        <br/><br/>
        <label>Education : </label>
      <select value={this.state.Education} onChange={this.HandleEducation}>
        <option value='BE'>BE</option>
        <option value='BTech'>BTech</option>
        <option value='ME'>ME</option>
        <option value='MTech'>MTech</option>
        <option value='MCA'>MCA</option>
        <option value='MSC'>MSC</option>
        </select>

      <br/><br/>
      <label>Comment : </label>
      <textarea type='text' value={this.state.Comment} onChange={this.HandleComment} />

      <br /><br/>
      <button type='Submit'>Submit</button>

      </form>
      
    </>
    )
  }
}

export default TableForm
