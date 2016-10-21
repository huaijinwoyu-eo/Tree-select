var React = require("react");
var ReactDOM = require("react-dom");
var NoDate = React.createClass({
    render:function(){
        return(
            <div className="noDate">
                {this.props.Date}
            </div>
        )
    }
});

module.exports = NoDate;