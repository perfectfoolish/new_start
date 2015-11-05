var React = require('react');
var cx = require('classnames');

var Button = React.createClass({
  render: function() {
    var classes = cx({
      button: true,
      green: this.props.isGreen,
      pink: this.props.isPink
    });
    return (
      <a href="#" className={classes} >{this.props.text}</a>
      );
  }
});
module.exports = Button;