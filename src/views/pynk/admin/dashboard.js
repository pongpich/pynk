import React, { Component } from "react";
import { postTest } from "../../../redux/pynk/post";
import { connect } from 'react-redux'

class DashboardPynk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
    };
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  render() {
    const {title,description} = this.state;
    return (
      <>
        <div>
          <label htmlFor="field1">Field 1:</label>
          <input
            type="text"
            id="field1"
            name="field1"
            placeholder="Enter value for field 1"
            value={this.state.title}
            onChange={(event) => this.handleChange(event)}
          />
          <br />
          <label htmlFor="field2">Field 2:</label>
          <input
            type="text"
            id="field2"
            name="field2"
            placeholder="Enter value for field 2"
            value={this.state.description}
            onChange={(event) => this.handleChange(event)}
          />
          <button className="btn btn-success" onClick={() => this.props.postTest(title,description)}>กดเลย</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ dashboardPynk }) => {
  const { statusPostTest } = dashboardPynk;
  return { statusPostTest };
};

const mapActionsToProps = { postTest };

export default connect(mapStateToProps, mapActionsToProps)(DashboardPynk);
