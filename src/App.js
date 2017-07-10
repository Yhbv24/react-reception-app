import React, { Component } from 'react';
import token from './token';
import MessageForm from './MessageForm';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reasons: [
        'Meeting',
        'Delivery',
        'Visiting'
      ]
    }
  }
  componentWillMount() {
    var emps = [];
    var _this = this;
    request
   .post('https://slack.com/api/users.list')
   .send({
     token: token,
     presence: true
   })
   .type('form')
   .end(function(err, res){
     if (err || !res.ok) {
       alert('Oh no! error');
     } else {
       for (var i = 0; i < res.body.members.length; i++) {
         if (res.body.members[i].profile.real_name_normalized !== '' && !res.body.members[i].deleted && res.body.members[i].profile.real_name_normalized !== 'slackbot' && res.body.members[i].profile.real_name_normalized !== 'Trello') {
           emps.push(res.body.members[i]);
         }
       }
       _this.setState({
         employees: emps
       });
     }
   });
  }
  render() {
    if (this.state.employees) {
      return (<div className="main-input-form">
        <MessageForm employees={this.state.employees} reasons={this.state.reasons} />
      </div>);
    } else {
      return (<div>
          <p>Loading...</p>
        </div>
      );
    }
  }
}

export default App;
