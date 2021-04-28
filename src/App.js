import { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robotArr: []
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get('/api/robots')
      .then(res => this.setState({ robotArr: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete(id) {
    axios.delete(`/api/robots/${id}`)
      .then(res => this.setState({ robotArr: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div>ROBOTS!!!</div>
        {
          this.state.robotArr.map(robotObj => {
            return (
              <div key={robotObj.id}>
                <h2>{robotObj.name}</h2>
                <img src={robotObj.image} alt={robotObj.name} />
                < br />
                <button onClick={() => this.handleDelete(robotObj.id)}>DELETE</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
