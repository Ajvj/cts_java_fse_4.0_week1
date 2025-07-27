import React from 'react';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  updateEntry = () => {
    this.setState({ entrycount: this.state.entrycount + 1 });
  };

  updateExit = () => {
    this.setState({ exitcount: this.state.exitcount + 1 });
  };

  render() {
    return (
      <div>
        <h1>Mall Entry/Exit Counter</h1>
        <p>People Entered: {this.state.entrycount}</p>
        <p>People Exited: {this.state.exitcount}</p>
        <button onClick={this.updateEntry}>Login</button>
        <button onClick={this.updateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
