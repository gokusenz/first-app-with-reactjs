var React = require('react')
var ReactDom = require('react-dom')

var Hello = React.createClass({
    render: function() {
        return (
            <div>Hello ReactJS World!</div>
        )
    }
})

ReactDOM.render(<Hello />, document.getElementById('app'))