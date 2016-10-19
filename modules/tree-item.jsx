var React = require("react");
var ReactDOM = require("react-dom");
var TreeItem=React.createClass({
    render:function(){
        return(
            <div className="tree-item">
                <div className="base-info">
                    <div className="clearfix">
                        <img src="" alt="" className="fl top"/>
                        <div className="info">
                            <p className="name">{}</p>
                            <p>
                                <span>树龄：</span>
                                <span>{}</span>
                            </p>
                            <p>
                                <span>胸（地）围：</span>
                                <span>{}</span>
                            </p>
                            <p>
                                <span>树高：</span>
                                <span>{}</span>
                            </p>
                            <p>
                                <span>冠幅（平均）：</span>
                                <span>{}</span>
                            </p>
                            <p>
                                <span>树木综合积点：</span>
                                <span>{}</span>
                            </p>
                            <p>
                                <span>生长势：</span>
                                <span>{}</span>
                            </p>
                        </div>
                    </div>
                    <div className="summary">
                        {}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TreeItem;