import { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateNote extends Component {

    state = { users: [], userSelected: '',  title: '', content: '', date: new Date(), editing: false, _id: '' }

    /* Call data from Users API */
    async componentDidMount(){
        this.getUsers();
        if( this.props.match.params.id ){
            await this.setState({ editing: true, _id: this.props.match.params.id});
            this.getNote();
        }
    }

    /* GET Note */
    getNote = async () => {
        const response = await axios.get('http://localhost:4000/api/notes/' + this.state._id);
        console.log(response.data);
        this.setState({
            userSelected: response.data.author,
            title: response.data.title,
            content: response.data.content,
            date: new Date(response.data.date)
        });
    }

    /* GET Users Request */
    getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: response.data.map( user => user.username), userSelected: response.data[0].username});
    }

    /* CREATE or UPDATE one Note - Send data to Backend (POST Request)*/
    onSubmitNote = async (e) => {
        e.preventDefault();
        const newNote = {
            author: this.state.userSelected,
            title: this.state.title,
            content: this.state.content,
            date: this.state.date
        }
        if( this.state.editing ){
            await axios.put('http://localhost:4000/api/notes/' + this.state._id , newNote);
        }else{
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/';
    }

    /* Capture Data from inputs */
    onChangeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    /* Capture a new Date from DatePicker */
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
                        <select className="form-control" name="userSelected" value={this.state.userSelected} onChange={this.onChangeData}>
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
                            value={this.state.title}
                            placeholder="Title" 
                            onChange={this.onChangeData}
                        >
                        </input>
                        <br/>

                        <textarea 
                            className="form-control" 
                            type="text" 
                            name="content" 
                            value={this.state.content}
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