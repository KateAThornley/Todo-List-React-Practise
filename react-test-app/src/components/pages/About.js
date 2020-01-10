import React from "react";

class About extends React.Component {
  getStyle = () => {
    return {
      color: "#333",
      background: "#fff",
      padding: "4px"
    };
  };
  render() {
    return (
      <React.Fragment>
        <h1 style={{ color: "#333", paddingTop: "6px", textAlign: "center" }}>
          About
        </h1>
        <div style={this.getStyle()}>
          <h3>Welcome!</h3>
          <p>
            This is the ToDo List App. It has been created by following a
            tutorial offered by Youtuber Traversy Media.abs This app was built
            in order to better understand how React works as a framework on JS.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

const headerDivStyle = {
  background: "#fff",
  color: "#333"
};
export default About;
