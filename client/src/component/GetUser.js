import React from 'react';

import styles from './GetUser.module.css';

class GetUser extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    }
    
    fetchTasks = e => {
        // Connect to NodeJS API and get all users
        // Take return value and add it to user array
        this.setState({
            users: []
        })
    }

    deleteTask(id) {
        // Connect to NodeJS API and delete specified user
    }

    render() {
        return (
            <div>
                <button className={styles.search} onClick={this.fetchTasks}>Search</button>
                {this.state.users.length === 0 ? <div></div> : 
                <div>
                    <br></br>
                    <table>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Food</th>
                            <th>Title</th>
                            <th>Delete</th>
                        </tr>
                        {this.state.users.map(item => {
                            return (
                                <tr>
                                    <td>{item.customer_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.food}</td>
                                    <td>{item.title}</td>
                                    <button className={styles.delete} onClick={() => {this.deleteTask(item.customer_id)}}>Delete</button>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                }
            </div>
        )
    }
}

export default GetUser;