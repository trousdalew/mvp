import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    render() {

      return (
        <div class="search">
            <input class="search-bar" type="text" placeholder="Enter @user or #tag..." />
            <button class="btn search-btn-input">
              Analyze
            </button>
        </div>
      );
    }
}

export default Search;