import { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateNote extends Component {

    state = { users: [], userSelected: '',  title: '', content: '', date: new Date() }

    /* Call data from Users API */
    componentDidMount(){
        this.getUsers();
    }

    /* get Users Request */
    getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: response.data.map( user => user.username) });
    }

    /* Create one Note */
    onSubmitNote = (e) => {
        e.preventDefault();
        console.log(this.state.userSelected, this.state.title, this.state.content, this.state.date);
    }

    /* Capture Data */
    onChangeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    /* Capture a new Date */
    onChangeDate = (date) => {
        this.setState({ date: date});
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3" >
                <div className="card card-body">
                    <h3>Create Note</h3>
                    {/* Select User */}
                    <div className="form-group">
                        <select className="form-control" name="userSelected" onChange={this.onChangeData}>
                            {
                                this.state.users.map( (user) => <option key={user} value={user}>
                                    {user}
                                </option>)
                            }
                        </select>
                        <br/>

                        <input 
                            className="form-control" 
                            type="text" 
                            name="title" 
                            placeholder="Title" 
                            onChange={this.onChangeData}
                        >
                        </input>
                        <br/>

                        <textarea 
                            className="form-control" 
                            type="text" 
                            name="content" 
                            placeholder="Content" 
                            onChange={this.onChangeData}>
                        </textarea>
                        
                        <br/>
                        <div className="form-control">
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>

                    </div>
                    <br/>
                    <form onSubmit={this.onSubmitNote}>
                        <button type="submit" className="btn btn-primary">Save Note</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateNote;