import { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import NoteList from './Components/NoteList';
import CreateNote from './Components/CreateNote';
import CreateUser from './Components/CreateUser';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Navigation}/>
        <Route path='/' exact component={NoteList}/>
        <Route path='/notes' component={CreateNote}/>
        <Route path='/users/:id' component={CreateUser}/>
      </BrowserRouter>
    );
  }
}

export default App;
