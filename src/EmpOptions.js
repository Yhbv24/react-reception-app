import React, { Component } from 'react';

class EmpOptions extends Component {
  render() {
    return (<select>
      {this.props.employees.map((emp, i) =>
        <option value={emp.id} key={i}>{emp.profile.real_name}</option>)}
    </select>)
  }
}

export default EmpOptions;
