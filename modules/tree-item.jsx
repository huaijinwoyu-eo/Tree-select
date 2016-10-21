var React = require("react");
var ReactDOM = require("react-dom");
var TreeItem=React.createClass({
    render:function(){
        return(
            <div className="tree-item">
                <div className="base-info">
                    <div className="clearfix">
                        <img src={this.props.Date.picList[0]} alt="" className="fl top"/>
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
                            <input type="radio" name="check" className="uncheck"/>
                            <input type="radio" name="check" className="check"/>
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
    }
});

module.exports = TreeItem;