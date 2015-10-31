var LifeCounter = React.createClass({

  getInitialState() {
    return {
      life: 20
    };
  },
  calcLife: function(n) {
    return function() {
      this.setState({life: this.state.life + n})
    }.bind(this)
  },
  render: function() {
    return (
      <div>
        <div>{this.state.life}</div>
        <button onClick={this.calcLife(1)}>+1</button>
        <button onClick={this.calcLife(5)}>+5</button>
        <button onClick={this.calcLife(-1)}>-1</button>
        <button onClick={this.calcLife(-5)}>-5</button>
      </div>
    );
  }
});
