import React from 'react';
import ReactDom from 'react-dom';
import Storage from './components/storage.jsx';
import Profile from './components/profile.jsx';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selected: null
      };
  }

  handleSearch(term) {
      if (term.charAt(0) === '@') {

      } else if (term.charAt(0) === '#') {

      } else {
          console.log('Error - search term must be a tag or a user: ', term);
      }
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