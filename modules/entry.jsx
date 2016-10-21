var React = require("react");
var ReactDOM = require("react-dom");
var Jquery = require("jquery");
//选择选项模块
var SelectItems = require("./select-item.jsx");
//大分类模块
var SectionItem = require("./section-item.jsx");
//动画模块
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");


var Select = React.createClass({
    getInitialState:function(){
        return{
            SelectedName:"",
            SelectedDate:{},
            BaseDate:{}
        }
    },
    HandleGetMessage:function(){
        Jquery.ajax({
            type:"GET",
            url:"./test.json",
            success:function(data){
                this.setState({
                    BaseDate:data
                })
            }.bind(this),
            error:function(){
                alert("请稍候重试。")
            }
        });
    },
    HandleClick:function(event){
        this.setState({
            SelectedName:event.target.innerHTML,
            SelectedDate:this.state.BaseDate[event.target.innerHTML]
        });
        console.log(this.state)
    },
    render:function(){
        var SectionItems = [];
        for(var i in this.state.BaseDate){
            SectionItems.push(<SectionItem key={i} Date={this.state.BaseDate[i]} name={i} />);
        }
        return(
                <div>
                    <div className="container">
                        <SelectItems Fn={this.HandleClick}/>
                    </div>
                    <div id="select-section" className="container">
                        <ReactCSSTransitionGroup
                            transitionName="SectionItem">
                            <SectionItem Date={this.state.SelectedDate} name={this.state.SelectedName} />
                        </ReactCSSTransitionGroup>
                    </div>
                    <div className="section-all">
                        <div className="container">
                            {SectionItems}
                        </div>
                    </div>
                </div>
            )
    },
    componentDidMount:function(){
        setTimeout(function(){
            this.HandleGetMessage()
        }.bind(this),3000);

    }
});

ReactDOM.render(
    <Select/>,
    document.getElementById("select")
);

