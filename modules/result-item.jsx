var React = require("react");
var ReactDOM = require("react-dom");

var ResultItem = React.createClass({
    render:function(){
        return(
            <div className="item">
                <div className="img">
                    <div data-id={this.props.id} data-name={this.props.name} className="close fa fa-close" onClick={this.props.remove}></div>
                    <div className="tag">已选</div>
                    <img src={this.props.src} alt=""/>
                </div>
                <div className="name">
                    {this.props.name}
                </div>
            </div>
        )
    }
});
module.exports = ResultItem;