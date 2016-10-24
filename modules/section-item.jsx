var React = require("react");
var ReactDOM = require("react-dom");
var TreeItem = require("./tree-item.jsx");
var NoDate = require("./noDate.jsx");
var SectionItem = React.createClass({
    render:function(){
        var TreeItems = [];
        if(!this.props.Date){
            TreeItems = [];
            TreeItems.push(<NoDate key={Math.random()} Date="该区间没有相应数据……"/>);
        }else {
            for (var i in this.props.Date){
                TreeItems.push(<TreeItem key={i} Date={this.props.Date[i]} add = {this.props.add} remove={this.props.remove} />)
            }
        }
        return(
            <div className="section-item">
                {this.props.name?<div className="section-title">{this.props.name}</div>:""}

                {TreeItems}

            </div>
        )
    }
});
module.exports = SectionItem;