import React, { Component } from 'react';
import * as PS from './password'
import './PasswordBar.css'

class PasswordBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.allowedChars = 'Password must contain only numbers, letters, ' +
            PS.specialChars.reduce((concat,curr) => concat + ", " + curr);
        this.showTooltip = props.showTooltip;
    }

    getStrength() {
        return PS.strengthAdjective(PS.strength(this.state.password));
    }

    handleChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
                    this.showTooltip ? (
                        <div class='col-md-4'>
                            <input type='password' 
                                value={this.state.password} 
                                onChange={this.handleChange}
                                class='form-control'
                                data-toggle='tooltip'
                                data-placement='bottom'
                                title={this.allowedChars}
                                ></input>
                            <div class={this.getStrength() + ' strength'}></div>
                        </div>
                    ) : (
                        <div class='col-md-4'>
                            <input type='password' 
                                value={this.state.password} 
                                onChange={this.handleChange}
                                class='form-control'
                                ></input>
                            <div class={this.getStrength() + ' strength'}></div>
                        </div>
                        )
                    );
    }
}

export default PasswordBar;