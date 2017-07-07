import React, { Component } from 'react';
import token from './token';
import EmpOptions from './EmpOptions';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  componentWillMount() {
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
       _this.setState({
         employees: res.body.members
       })
     }
   });
  }
  render() {
    if (this.state.employees) {
      return (<div><EmpOptions employees={this.state.employees}/></div>);
    } else {
      return (<div><p>Loading...</p></div>);
    }
  }
}

export default App;
