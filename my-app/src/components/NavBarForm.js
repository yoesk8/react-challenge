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
      this.setState((prevState) => ({
          isLoggedIn: !prevState.isLoggedIn,
      }));
      console.log(this.state)
  };


    
  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
          <div>
            <button onClick={this.handleClick}>Log in</button>
          </div>
        ) : (
            <form>
              <button onClick={this.handleClick}>Submit</button>
            </form>
        )}
      </div>
    )
  }
}

export default NavBarForm