import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    handleKey(event) {
        if (!this.searchbar) {
          this.searchbar = event.target;
        }
        if (event.key === 'Enter') {
            this.handleClick();
        } else {
            this.state.term = this.searchbar.value;
        }
    }

    handleClick() {
      if (this.state.term.length > 1) {
          if (this.state.term.charAt(0) !== '@' && this.state.term.charAt(0) !== '#') {
            this.props.handleSearch('@' + this.state.term);
          } else {
            this.props.handleSearch(this.state.term);
          }
          this.searchbar.value = '';
          this.setState({
            term: ''
          });
      }
    }

    render() {

      return (
        <div class="search">
            <input class="search-bar" type="text" placeholder="Enter @user or #tag..." onKeyUp={this.handleKey.bind(this)} />
            <button class="btn search-btn-input" onClick={this.handleClick.bind(this)}>
              Analyze
            </button>
        </div>
      );
    }
}

export default Search;