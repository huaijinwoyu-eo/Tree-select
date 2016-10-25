var React = require("react");
var ReactDOM = require("react-dom");
var ResultItem = require("./result-item.jsx");
//动画模块
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");
var ResultList = React.createClass({
    render:function(){
        var List = [];
        this.props.Date.map(function(item){
             List.push(<ResultItem key={item.id} src={item.src} name={item.name} id={item.id} remove={this.props.remove}/>);
        }.bind(this));
        return(
            <div>
                <ReactCSSTransitionGroup transitionName="SectionItem">
                    {List}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});
module.exports = ResultList;