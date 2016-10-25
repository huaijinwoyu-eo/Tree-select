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
    //属性初始化
    getInitialState:function(){
        return {
            check1:true,
            check2:false,
            SelectedName: "",
            SelectedDate: {},
            BaseDate: {},
            PostDate: []
        }

    },
    //获取数据
    HandleGetMessage:function(){
        Jquery.ajax({
            type:"GET",
            url:"./test.json",
            cache: false,
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
    //选择按钮
    HandleClick:function(event){
        this.setState({
            SelectedName:event.target.innerHTML,
            SelectedDate:this.state.BaseDate[event.target.innerHTML]
        });
    },
    //删除选项方法
    HandleDelete:function(event){
        this.setState({
            check1:event.target.checked,
            check2:false
        },function(){
            console.log("second+check1:",this.state.check1);
            console.log("second+check2:",this.state.check2);
        });
        this.setState({
            check1:true,
            check2:false
        });
        var CheckId = Jquery(event.target).attr("data-id");
        var Name = Jquery(event.target).attr("data-name");
        for(var i=0; i<this.state.PostDate.length; i++){
            if(this.state.PostDate[i].id===CheckId){
                var temp = this.state.PostDate;
                temp.splice(i,1);
                Jquery(".tree-item .name").each(function(){
                     if(Jquery(this).text()===Name){
                         Jquery(this).parent().parent().parent().find(".uncheck").trigger("click");
                     }
                });
                console.log("temp",temp);
                console.log("state",this.state.PostDate);
            }
        }
    },
    //添加选项方法
    HandleAdd:function(event){
        if(event.target.checked!==this.state.check2){
            this.setState({
                check2:event.target.checked,
                check1:false
            },function(){
                console.log("second+check1:",this.state.check1);
                console.log("second+check2:",this.state.check2);
            });
            this.setState({
                check1:true,
                check2:false
            });
            if(this.state.PostDate.length<10){
                console.log(this.state.PostDate.length);
                var flag = true;
                for(var i=0; i<this.state.PostDate.length; i++){
                    if(this.state.PostDate[i].id===Jquery(event.target).attr("data-id")){
                        flag=false;
                        break;
                    }else {
                        flag=true;
                    }
                }
                if(flag){
                    var CheckId = Jquery(event.target).attr("data-id");
                    var CheckName = Jquery(event.target).attr("data-name");
                    var CheckSrc = Jquery(event.target).attr("data-src");
                    var temp = this.state.PostDate;
                    var tempObject = {
                        id:CheckId,
                        name:CheckName,
                        src:CheckSrc
                    };
                    temp.push(tempObject);
                    this.setState({
                        PostDate:temp
                    });
                }
            }else {
                alert("只允许选择10个。")
            }
        }
    },
    //渲染
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
                                <ResultList Date = {this.state.PostDate} remove={this.HandleDelete}/>
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
    //模块加载完之后执行的函数
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

