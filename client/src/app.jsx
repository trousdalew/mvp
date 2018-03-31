import React from 'react';
import ReactDom from 'react-dom';
import Storage from './components/storage.jsx';
import Profile from './components/profile.jsx';
import Search from './components/search.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selected: null
      };
  }

  handleSearch(term) {
      console.log('Searching for: ', term);
      let endpoint = 'user/' + term.substring(1);
      if (term.charAt(0) === '#') {
          endpoint = 'tag/' + term.substring(1);
      }
      axios.get('http://localhost:3013/search/' + endpoint).then((result) => {
          console.log('Received: ', result.data);
          this.setState({
            selected: {
                name: term,
                wordCount: result.data.word_count,
                personality: result.data.personality,
                values: result.data.values,
                needs: result.data.needs
            }
          });
          console.log('New state: ', this.state.selected);
      }).catch((err) => {
        console.log('Error searching: ', err);
      });
  }

  render() {
      return (
          <div class='analyzer'>
            <Storage selected={this.state.selected} />
            <Profile selected={this.state.selected} />
            <Search handleSearch={this.handleSearch.bind(this)} />
          </div>
      );
  }
}

ReactDom.render(<App />, document.getElementById('app'));