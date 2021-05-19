import { Component } from "react";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

export default class Index extends Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          style={{ width: 40, height: 40, outline: "none" }}
          ToggledStyle={{ right: 20 }}
        />
      </div>
    );
  }
}
