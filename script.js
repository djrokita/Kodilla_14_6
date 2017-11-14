var Counter = React.createClass({
  getDefaultProps: function() {
    console.log('Run interval, run some function');
  },

  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  render: function() {
    console.log('Updates any html collections, run new css styles, change state');
    return (React.createElement('div', {},
      React.createElement('button', {
          onClick: this.increment,
          className: 'btn btn-inc'
        },
        'Zwiększ'),
      React.createElement('button', {
        onClick: this.decrement,
        className: 'btn btn-dec'
      }, 'Zmniejsz'),
      React.createElement('span', {
        className: 'state-display'
      }, 'Stan licznika: ' + this.state.counter)
    ));
  },

  componentDidMount: function() {
    console.log('Request: GET');
  },

  componentWillReceiveProps: function() {
    console.log('Use current props in valiables, run some if/else instruction');
  },

  shouldComponentUpdate: function() {
    return true;
  },

  componentDidUpdate: function() {
    console.log('Request: PUT');
  },

  componentWillUnmount: function() {
    console.log('Switch off some events, stop interval');
  }
});

var counter1 = React.createElement(Counter);
var counter2 = React.createElement(Counter);
var counter3 = React.createElement(Counter);

var element = React.createElement('div', {},
  counter1,
  counter2,
  counter3
);

ReactDOM.render(element, document.getElementById('app'));