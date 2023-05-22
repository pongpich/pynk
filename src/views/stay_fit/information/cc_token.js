import React, { Component } from "react";
import { connect } from "react-redux";

class Cc_token extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageUrl: window.location.href
    };
  }

  componentDidMount() {
    window.gbFunc(this.props.program.price) //ใช้จริง
    //window.gbFunc(1) // สำหรับเทส
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="mydiv">
        <form
          id="checkout-form"
          action={
            (this.state.pageUrl.includes("localhost") || this.state.pageUrl.includes("127.0.0.1")) ?
              "http://localhost:3000/#/cc_checkout"
              :
              "https://fit.bebefitroutine.com/#/cc_checkout"
          }
        >
          <div id="gb-form" style={{ height: "600px" }}></div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ exerciseProgram }) => {
  const { program } = exerciseProgram;
  return { program };
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Cc_token);