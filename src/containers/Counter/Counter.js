import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
      default:
        console.log("Couldnot meet any criterias");
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={() => this.props.incrementCounter()}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.decrementCounter()}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.incrementWithValue(5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.decWithValue(5)}
        />
        <CounterControl label="Reset" clicked={() => this.props.reset()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch({ type: "INC_COUNTER" }),
    decrementCounter: () => dispatch({ type: "DEC_COUNTER" }),
    incrementWithValue: (num) => dispatch({ type: "ADD_COUNTER", value: num }),
    decWithValue: (num) => dispatch({ type: "SUB_COUNTER", value: num }),
    reset: () => dispatch({ type: "RESET" }),
    resetWithValue: () => dispatch({ type: "RESET_WITH_VALUE", value: num }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
