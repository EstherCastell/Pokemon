import React, { Component } from "react";
import logo from "../../assets/logo.png"
import './Navbar.css'

class Navbar extends Component{
    render() {
        return (
            <div class="ct-header">
                <img className="img-logo" src={ logo } alt="logo"/>
                <h1>PokemonApi</h1>
            </div>
        )
    }
}
export default Navbar;