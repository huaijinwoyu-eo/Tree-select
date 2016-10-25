var React = require("react");
var ReactDOM = require("react-dom");
var ResultItem = require("./result-item.jsx");
var ResultList = React.createClass({
    render:function(){
        var List = [];
        this.props.Date.map(function(item){
             List.push(<ResultItem key={item.id} src={item.src} name={item.name} id={item.id} remove={this.props.remove}/>);
        }.bind(this));
        return(
            <div>
                {List}
            </div>
        )
    }
});
module.exports = ResultList;