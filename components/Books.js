var React = require('react')
var ReactDOM = require('react-dom')

var Books = React.createClass({
  render: function() {
    return (

      <div className="books clearfix">
        <div className="book"><img src="images/github.jpg" alt className="cover" /></div>
        <div className="book"><img src="images/tealeaf-http.jpg" alt className="cover" /></div>
        <div className="book"><img src="images/tlcl-book.jpg" alt className="cover" /></div>
      </div>
    );
  }
});
ReactDOM.render(<Books />, document.getElementById('books'));