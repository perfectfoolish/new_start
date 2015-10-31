var React = require('react')
var ReactDOM = require('react-dom')

var Haoduo = React.createClass({
  render: function() {
    return (

      <div className="haoduo clearfix">
        <h2>好多视频网</h2>
        <p>happypeter web 开发技巧分享</p>
        <a href="#" className="visit-haoduo">访问</a>
      </div>
    );
  }
});
ReactDOM.render(<Haoduo />, document.getElementById('haoduo'));