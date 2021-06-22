import { Component } from 'react';
import axios from 'axios';

const urlAPI = 'http://localhost:4000/api/users/';

class CreateUser extends Component {

    /* State for users */
    state = { users: [], username: '' }

    /* Call API from Backend */
    async componentDidMount() {
        this.getUsers();
    }

    /* GET Users Request */
    getUsers = async () => {
        const response = await axios.get(urlAPI);
        this.setState({ users: response.data });
    }

    /* POST Request to Backend */
    onSubmitUser = async (e) => {
        e.preventDefault();
        if (this.state.username !== '') {
            await axios.post('http://localhost:4000/api/users', {
                username: this.state.username
            });
            this.getUsers();
            this.setState({ username: '' });
        }else{
            alert('NO data valid');
        }
    }

    /* DELETE Request to Backend */
    deleteUser = async (idUser) => {
        await axios.delete(urlAPI + idUser);
        this.getUsers();
    }

    /* Capture name */
    onChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    renderSuccess() {
        const dataJsx =
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <label className="form-label">Add User</label>
                        <form onSubmit={this.onSubmitUser}>
                            <div className="form-group">
                                <input className="form-control" type="text" value={this.state.username} onChange={this.onChangeUsername} />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="list-group">
                        {
                            this.state.users.map((user) =>
                                <li
                                    className="list-group-item list-group-item-action"
                                    aria-current="true"
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                    {user.username}
                                </li>)
                        }
                    </div>
                </div>
            </div>
        return dataJsx;
    }

    render() {
        if (this.state.users) {
            return this.renderSuccess();
        } else {
            return <div>No data....</div>
        }
    }
}


export default CreateUser;