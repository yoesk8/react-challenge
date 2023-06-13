import React from 'react';
import css from './css/NavBarSimple.module.css';

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello",
            buttonText:"Login",
        };
    }

    handleClick = () => {
        this.setState((prevState) => {
            console.log("Previous State:", prevState);
            return {
                message: prevState.message === "Hello" ? "Goodbye" : "Hello",
                buttonText : prevState.buttonText === "Login" ? "Logout" : "Login"
            };
        });
    };

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default NavBarSimple;
