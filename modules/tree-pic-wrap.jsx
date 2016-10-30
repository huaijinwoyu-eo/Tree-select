var React = require("react");
var ReactDOM = require("react-dom");
var Img = require("./img.jsx");
var TreePic = React.createClass({
    render:function(){
        var Imgs = [];
        for(var i =0;i<this.props.Date.picList.length;i++){
           Imgs.push(<Img src={this.props.Date.picList[i]}/>)
        }
        return(
            <div className="pic-wrap">
                <div onClick={this.HandleClick} className="close-btn">X</div>
                <div className="container">
                    <div className="pic-list">
                        {Imgs}
                    </div>
                    <div className="info">
                        <p className="name">{this.props.Date.name}</p>
                        <p>
                            <span>树龄：</span>
                            <span>{this.props.Date.age}</span>
                        </p>
                        <p>
                            <span>胸（地）围：</span>
                            <span>{this.props.Date.around}</span>
                        </p>
                        <p>
                            <span>树高：</span>
                            <span>{this.props.Date.height}</span>
                        </p>
                        <p>
                            <span>冠幅（平均）：</span>
                            <span>{this.props.Date.haround}</span>
                        </p>
                        <p>
                            <span>树木综合积点：</span>
                            <span>{this.props.Date.point}</span>
                        </p>
                        <p>
                            <span>生长势：</span>
                            <span>{this.props.Date.szs}</span>
                        </p>
                        <p>{this.props.Date.summary}</p>
                    </div>
                </div>
            </div>
        )
    },
    HandleClick:function () {
        $("#pic-wrap").find(".pic-wrap").remove();
    },
    componentDidMount:function () {
        $(".pic-list").owlCarousel({
            items:1,
            nav:true,
            navText:"",
            loop:true
        });
    }
});

module.exports=TreePic;