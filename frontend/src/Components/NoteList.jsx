import { Component } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

class NoteList extends Component {

    /* State for Notes */
    state = { notes: [] }

    componentDidMount() {
        this.getNotes();
    }

    /* GET Request to Backend for notes */
    async getNotes() {
        const response = await axios.get('http://localhost:4000/api/notes');
        this.setState({ notes: response.data });

    }

    /* DELETE Note */
    deleteNote = async (id) =>{
        await axios.delete('http://localhost:4000/api/notes/' + id);
        console.log(id);
        this.getNotes();

    }


    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map( note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    {note.title}
                                    <Link className="btn btn-secondary" to={"/edit/" + note._id}>
                                        Edit
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <p>{note.author}</p>
                                    <p>{note.content}</p>
                                    <p>{format(note.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>Delete</button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        );
    }
}

export default NoteList;