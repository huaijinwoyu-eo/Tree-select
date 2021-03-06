var React = require("react");
var ReactDOM = require("react-dom");
//图片列表
var TreePic = require("./tree-pic-wrap");
var TreeItem=React.createClass({
    render:function(){
        return(
            <div className="tree-item">
                <div className="base-info">
                    <div className="clearfix">
                        <img onClick={this.HandleClick} src={this.props.Date.picList[0]} alt="" className="fl top"/>
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
                        </div>
                    </div>
                    <div className="summary">
                        {this.props.Date.summary}
                    </div>
                    <div className="vote-info clearfix">
                        <form className="vote-btn">
                            <input type="radio" name="check" className="uncheck" data-id={this.props.Date.code} data-name={this.props.Date.name} data-src={this.props.Date.picList[0]} onChange={this.props.remove}/>
                            <input type="radio" name="check" className="check" data-id={this.props.Date.code} data-name={this.props.Date.name} data-src={this.props.Date.picList[0]}  onChange={this.props.add}/>
                            <div className="state1 dib">已投票</div>
                            <div className="state2 dib">为Ta投票</div>
                            <div className="btn"></div>
                        </form>
                        <div className="fav fl">{this.props.Date.fav}票</div>
                        <div className="ra-list fl">{this.props.Date.range}名</div>
                    </div>
                </div>
            </div>
        );
    },
    HandleClick:function () {
        ReactDOM.render(
            <TreePic Date={this.props.Date}/>,
            document.getElementById("pic-wrap")
        )
    }
});

module.exports = TreeItem;