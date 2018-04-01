import React from 'react';
import Radar from 'react-d3-radar';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      let body = <p>Search for a user or tag to get started.</p>;
      
      console.log('Profile selected: ', this.props.selected);
        
      if (this.props.selected) {
            let personality = <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={(point) => {
                if (point) {
                console.log('hovered over a data point');
                } else {
                console.log('not over anything');
                }
            }}
            data={{
                variables: [
                {key: 'Openness', label: 'Openness'},
                {key: 'Extraversion', label: 'Extraversion'},
                {key: 'Agreeableness', label: 'Agreeableness'},
                {key: 'Conscientiousness', label: 'Conscientiousness'},
                {key: 'Emotional Range', label: 'Emotional Range'}
                ],
                sets: [
                {
                    key: this.props.selected.name,
                    label: this.props.selected.name,
                    values: {
                        Openness: this.props.selected.personality[0].percentile * 10, 
                        Extraversion: this.props.selected.personality[2].percentile * 10, 
                        Agreeableness: this.props.selected.personality[3].percentile * 10,
                        Conscientiousness: this.props.selected.personality[1].percentile * 10,
                        'Emotional Range': this.props.selected.personality[4].percentile * 10
                    },
                }
                ]
            }}
            />;

            let values = <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={(point) => {
                if (point) {
                console.log('hovered over a data point');
                } else {
                console.log('not over anything');
                }
            }}
            data={{
                variables: [
                {key: 'Openness to Change', label: 'Openness to Change'},
                {key: 'Conservation', label: 'Conservation'},
                {key: 'Hedonism', label: 'Hedonism'},
                {key: 'Self-Enhancement', label: 'Self-Enhancement'},
                {key: 'Self-Transcendence', label: 'Self-Transcendence'}
                ],
                sets: [
                {
                    key: this.props.selected.name,
                    label: this.props.selected.name,
                    values: {
                        'Openness to Change': this.props.selected.values[1].percentile * 10, 
                        Conservation: this.props.selected.values[0].percentile * 10, 
                        Hedonism: this.props.selected.values[2].percentile * 10,
                        'Self-Enhancement': this.props.selected.values[3].percentile * 10,
                        'Self-Transcendence': this.props.selected.values[4].percentile * 10
                    },
                }
                ]
            }}
            />;

            let needs = <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={(point) => {
                if (point) {
                console.log('hovered over a data point');
                } else {
                console.log('not over anything');
                }
            }}
            data={{
                variables: [
                {key: 'Challenge', label: 'Challenge'},
                {key: 'Closeness', label: 'Closeness'},
                {key: 'Curiosity', label: 'Curiosity'},
                {key: 'Excitement', label: 'Excitement'},
                {key: 'Harmony', label: 'Harmony'},
                {key: 'Ideal', label: 'Ideal'},
                {key: 'Liberty', label: 'Liberty'},
                {key: 'Love', label: 'Love'},
                {key: 'Practicality', label: 'Practicality'},
                {key: 'Self-Expression', label: 'Self-Expression'},
                {key: 'Stability', label: 'Stability'},
                {key: 'Structure', label: 'Structure'}
                ],
                sets: [
                {
                    key: this.props.selected.name,
                    label: this.props.selected.name,
                    values: {
                        'Challenge': this.props.selected.needs[0].percentile * 10, 
                        Closeness: this.props.selected.needs[1].percentile * 10, 
                        Curiosity: this.props.selected.needs[2].percentile * 10,
                        'Excitement': this.props.selected.needs[3].percentile * 10,
                        'Harmony': this.props.selected.needs[4].percentile * 10,
                        'Ideal': this.props.selected.needs[5].percentile * 10, 
                        Liberty: this.props.selected.needs[6].percentile * 10, 
                        Love: this.props.selected.needs[7].percentile * 10,
                        'Practicality': this.props.selected.needs[8].percentile * 10,
                        'Self-Expression': this.props.selected.needs[9].percentile * 10,
                        'Stability': this.props.selected.needs[10].percentile * 10, 
                        Structure: this.props.selected.needs[11].percentile * 10
                    },
                }
                ]
            }}
            />;

        body = <div class="profile-body">
                 <h3>{this.props.selected.name}</h3>
                 <h4>Personality</h4>
                 {personality}
                 <h4>Values</h4>
                 {values}
                 <h4>Needs</h4>
                 {needs}
               </div>;
      }

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