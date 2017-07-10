import React, { Component } from 'react';

class MessageForm extends Component {
  constructor() {
    super();
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.empChange = this.empChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.orgChange = this.orgChange.bind(this);
    this.reasonChange = this.reasonChange.bind(this);
  }
  empChange(e) {
    this.setState({
      emp: e.target.value
    });
  }
  nameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  orgChange(e) {
    this.setState({
      org: e.target.value
    });
  }
  reasonChange(e) {
    this.setState({
      reason: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('test');
  }
  render() {
    return (<form>
      <select className="emp-select" name="emp" onChange={this.empChange}>
        <option defaultValue="" disabled>Office Directory</option>
        {this.props.employees.map((emp, i) =>
          <option value={emp.id} key={i}>{emp.profile.real_name}</option>)
        }
      </select>
      <select className="reason-select" name="reason">
        {this.props.reasons.map((reason, i) =>
          <option value={reason} key={i}>{reason}</option>)
        }
      </select>
      <input type="text" name="name" placeholder="YOUR NAME" onChange={this.nameChange }/>
      <input type="text" name="org" placeholder="YOUR ORGANIZATION" />
      <button type="submit" onSubmit={this.onSubmit}>Message</button>
    </form>)
  }
}

export default MessageForm;
