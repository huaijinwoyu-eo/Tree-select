var React = require("react");
var ReactDOM = require("react-dom");
var Jquery = require("jquery");
//选择选项模块
var SelectItems = require("./select-item.jsx");
//大分类模块
var SectionItem = require("./section-item.jsx");
//结果
var ResultList = require("./result.jsx");
//动画模块
var ReactCSSTransitionGroup = require("react-addons-css-transition-group");

var Select = React.createClass({
    getInitialState:function(){
        return {
            SelectedName: "",
            SelectedDate: {},
            BaseDate: {},
            PostDate: []
        }

    },
    HandleGetMessage:function(){
        Jquery.ajax({
            type:"GET",
            url:"./test.json",
            success:function(data){
                this.setState({
                    BaseDate:data
                });
                $(".select-item").css({
                    marginBottom:0
                });
                var D_Height = $(document).height();
                var S_Height = $(window).innerHeight();
                $(window).scroll(function(){
                    if($(window).scrollTop()>1320 && $(window).scrollTop()<D_Height-S_Height){
                        $(".select-result").css({
                            position:"fixed",
                            bottom:"0"
                        })
                    }else {
                        $(".select-result").css({
                            position:"relative"
                        })
                    }
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
    },
    //删除选项方法
    HandleDelete:function(event){

    },
    //添加选项方法
    HandleAdd:function(event){
        console.log(Jquery(event.target).attr("data-name"))
    },
    render:function(){
        var SectionItems = [];
        for(var i in this.state.BaseDate){
            SectionItems.push(<SectionItem key={i} Date={this.state.BaseDate[i]} name={i} add={this.HandleAdd} remove={this.HandleDelete}/>);
        }
        var SelectedSection;
        SelectedSection = <SectionItem key={this.state.SelectedName} Date={this.state.SelectedDate} name={this.state.SelectedName} add={this.HandleAdd} remove={this.HandleDelete} />;
        return(
                <div>
                    <div className="container">
                        <SelectItems Fn={this.HandleClick}/>
                    </div>
                    <div id="select-section" className="container">
                        <ReactCSSTransitionGroup
                            transitionName="SectionItem">
                            {SelectedSection}
                        </ReactCSSTransitionGroup>
                    </div>
                    <div className="section-all">
                        <div className="container">
                            {SectionItems}
                        </div>
                    </div>
                    <div className="select-result">
                        <div className="container">
                            <div id="result-item" className="clearfix">
                                <ResultList Date = {this.state.PostDate}/>
                            </div>
                            <div className="res-code">
                                <input type="image" src="images/yanzhenma.png"/>
                                <input type="text" placeholder="请输入左侧验证码"/>
                            </div>
                            <div className="submit">
                                <a href="#">提交投票</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
    },
    componentDidMount:function(){
        setTimeout(function(){
            this.HandleGetMessage()
        }.bind(this),2000);

    }
});

ReactDOM.render(
    <Select/>,
    document.getElementById("select")
);

