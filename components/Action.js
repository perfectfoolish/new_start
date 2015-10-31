var React = require('react')
var ReactDOM = require('react-dom')

var Action = React.createClass({
  render: function() {
    return (

      <div className="action clearfix">
      <a href="#" className="action-button button" />
      </div>
      );
  }
});
ReactDOM.render(<Action />, document.getElementById('action'));