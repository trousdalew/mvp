import React from 'react';

class Storage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        let users = [];
        let tags = [];

      return (
        <div class="storage">
            <h3>Users:</h3>
            <h3>Tags:</h3>
        </div>
      );
    }
}

export default Storage;