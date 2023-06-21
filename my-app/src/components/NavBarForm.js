import React, { Component } from 'react'
import css from './css/NavBarForm.module.css';


export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true,
      }
    }

    handleClick = () => {
        this.setState((prevState)=>{
            console.log('prevState:', prevState);

        })

    }
  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <button onClick={this.handleClick}>Log in</button>
      </div>
    )
  }
}

export default NavBarForm