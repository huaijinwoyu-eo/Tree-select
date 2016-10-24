var React = require("react");
var ReactDOM = require("react-dom");

var ResultList = React.createClass({
    render:function(){
        return(
            <div>
                <div className="item">
                    <div className="img">
                        <img src="images/tree.png" alt=""/>
                    </div>
                    <div className="name">
                        银杏 Ginkgo biloba Linn.dddddd
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = ResultList;