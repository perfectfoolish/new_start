var React = require('react')
var SearchButton = require('./SearchButton.js');

var Action = React.createClass({
  render: function() {
    return (

      <div className="action clearfix">
      <SearchButton />
      </div>
      );
  }
});
module.exports = Action;
