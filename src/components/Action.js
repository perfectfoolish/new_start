var React = require('react')
var Button = require('./Button.js')

var Action = React.createClass({
  render: function() {
    return (

      <div className="action clearfix">
      <Button isPink={true} text={'Search'}/>
      </div>
      );
  }
});
module.exports = Action;
