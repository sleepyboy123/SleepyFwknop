import React from 'react';
import {API} from '../config.js'

import styles from './SetUser.module.css';

class SetUser extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            food: "",
            title: ""
        }
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    addUser = e => {
        if (this.state.name === "" || this.state.food === "" || this.state.title === "") {
            return 0;
        }
        e.preventDefault();
        // Connect to NodeJS and create user
        fetch(API + '/insert/' + this.state.name + "/" + this.state.food + "/" + this.state.title + "/").then(res => {
            console.log(res)
        })
        this.setState({
            name: "",
            food: "",
            title: ""
        })
    }
    // insert/' + this.state.name + "/" + this.state.food + "/" + this.state.title

    render() {
        return (
            <form className={styles.form} onSubmit={this.addUser}>
                <input className={styles.input} type="text" name="name" autocomplete="off" placeholder="Name" onChange={this.updateInput} value={this.state.name} required/>
                <input className={styles.input} type="text" name="food" autocomplete="off" placeholder="Food" onChange={this.updateInput} value={this.state.food} required/>
                <input className={styles.input} type="text" name="title" autocomplete="off" placeholder="Title" onChange={this.updateInput} value={this.state.title} required/>
                <button className={styles.button} type="submit">Submit</button>
            </form>
        )
    }
}

export default SetUser;