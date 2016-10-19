var React = require("react");
var ReactDOM = require("react-dom");
var TreePic = React.createClass({
    render:function(){
        var Imgs = [];
        //for(var i =0;i<this.props.ImgSrc.length;i++){
        //    Imgs.push("<img src="+this.props.ImgSrc[i]+">")
        //}
        return(
            <div className="pic-wrap">
                <div className="close-btn">X</div>
                <div className="container">
                    <div className="pic-list">

                    </div>
                </div>
            </div>
        )
    }
});