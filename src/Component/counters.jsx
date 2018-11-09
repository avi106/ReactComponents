import React, { Component } from "react";
import Counter from "./counter";
import { Button } from "antd";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <Button onClick={onReset} style={{ margin: 30 }} type="primary">
          Reset
        </Button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
