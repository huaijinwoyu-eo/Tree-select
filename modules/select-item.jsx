var React = require("react");
var ReactDOM = require("react-dom");
var Jquery = require("jquery");
var SectionItem = require("./section-item.jsx");
var SelectItem = React.createClass({
    render:function(){
        return(
            <ul className="select-item list-inline">
                <li onClick={this.props.Fn}>A-B</li>
                <li onClick={this.props.Fn}>C-D</li>
                <li onClick={this.props.Fn}>E-F</li>
                <li onClick={this.props.Fn}>G-H</li>
                <li onClick={this.props.Fn}>I-J</li>
                <li onClick={this.props.Fn}>K-L</li>
                <li onClick={this.props.Fn}>M-N</li>
                <li onClick={this.props.Fn}>O-P</li>
                <li onClick={this.props.Fn}>Q-R</li>
                <li onClick={this.props.Fn}>S-T</li>
                <li onClick={this.props.Fn}>U-V</li>
                <li onClick={this.props.Fn}>W-X</li>
                <li onClick={this.props.Fn}>Y-Z</li>
            </ul>
        )
    },
    componentDidMount:function(){
        Jquery(".select-item li").off("click").on("click",function(){
            Jquery(".select-item li.cur").removeClass("cur");
            Jquery(this).addClass("cur");
        })
    }
});

module.exports = SelectItem;
