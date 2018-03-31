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
      console.log('Searching for: ', term);
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