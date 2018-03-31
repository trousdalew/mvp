import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        let body = <p>Search for a user or tag to get started.</p>;

      return (
        <div class="profile">
            <div class="profile-head">
              <h2>Profile</h2>
            </div>
            <div class="profile-body">
              {body}
            </div>
        </div>
      );
    }
}

export default Profile;