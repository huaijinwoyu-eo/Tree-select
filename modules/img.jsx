var React = require("react");
var ReactDOM = require("react-dom");
var Img = React.createClass({
    render:function () {
        return(
            <img src={this.props.src} alt=""/>
        )
    }
});
module.exports = Img;