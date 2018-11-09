import React, { Component } from "react";
import { Button } from "antd";

class Counter extends Component {
  state = {
    size: "large"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    console.log("counter - Rendered");
    const size = this.state.size;
    return (
      <div>
        <Button
          size={size}
          style={{ margin: 30 }}
          className={this.getAntbtnClasses()}
        >
          {this.formatCount()}
        </Button>

        <Button
          style={{ margin: 30 }}
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </Button>

        <Button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          size={size}
          type="danger"
          theme="outlined"
        >
          Delete
        </Button>
      </div>
    );
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
  getAntbtnClasses() {
    let classes = "ant-btn-";
    classes += this.props.counter.value === 0 ? "primary" : "danger";
    return classes;
  }
}

export default Counter;
