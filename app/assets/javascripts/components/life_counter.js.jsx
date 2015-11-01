var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;

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
      <div className="life-counter">
        <div className="life">{this.state.life}</div>
        <ButtonGroup className="plus" bsSize="large">
          <Button onClick={this.calcLife(1)}>+1</Button>
          <Button onClick={this.calcLife(5)}>+5</Button>
        </ButtonGroup>
        <ButtonGroup className="minus" bsSize="large">
          <Button onClick={this.calcLife(-1)}>-1</Button>
          <Button onClick={this.calcLife(-5)}>-5</Button>
        </ButtonGroup>
      </div>
    );
  }
});
