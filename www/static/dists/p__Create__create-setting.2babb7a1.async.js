(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{EK8P:function(e,a,t){"use strict";var s=t("g09b"),i=t("tAuX");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("+L6B");var n=s(t("2/Rp"));t("/xke");var o,l,r,p=s(t("TeRw")),d=t("MuoO"),c=t("7DNP"),m=i(t("q1tI")),h=t("LLXN"),u=t("4/zt"),g=s(t("vGHg")),f=s(t("q76B")),w=s(t("QDog")),_=s(t("n9hB")),v=s(t("hMqj")),D=(o=(0,d.connect)(e=>{var a=e.loading,t=e.teamControl;return{buildAppsLoading:a.effects["createApp/buildApps"],deleteAppLoading:a.effects["appControl/deleteApp"],currentTeamPermissionsInfo:t.currentTeamPermissionsInfo,soundCodeLanguage:t.codeLanguage,packageNpmOrYarn:t.packageNpmOrYarn}},null,null,{withRef:!0}),o((r=class extends m.PureComponent{constructor(e){super(e),this.handlePermissions=(e=>{var a=this.props.currentTeamPermissionsInfo;return v.default.querySpecifiedPermissionsInfo(a,e)}),this.loadDetail=(()=>{var e=this.props.dispatch,a=this.fetchParameter(),t=a.team_name,s=a.app_alias;e({type:"appControl/fetchDetail",payload:{team_name:t,app_alias:s},callback:e=>{this.setState({appDetail:e})},handleError:e=>{var a=_.default.getCode(e);a&&404===a&&this.handleJump("exception/404")}})}),this.handleBuild=(e=>{var a=this.props,t=a.dispatch,s=a.soundCodeLanguage,i=a.packageNpmOrYarn,n=(this.state.appDetail,this.fetchParameter()),o=n.team_name,l=n.app_alias;0==e?((0,u.setNodeLanguage)({team_name:o,app_alias:l,lang:s,package_tool:i}),t({type:"createApp/buildApps",payload:{team_name:o,app_alias:l},callback:e=>{e&&(t({type:"global/fetchGroups",payload:{team_name:o}}),window.sessionStorage.removeItem("codeLanguage"),window.sessionStorage.removeItem("packageNpmOrYarn"),window.sessionStorage.removeItem("advanced_setup"),this.handleJump("components/".concat(l,"/overview")))}})):p.default.warning({message:(0,h.formatMessage)({id:"notification.warn.save"})})}),this.handleDelete=(()=>{var e=this.props.dispatch,a=this.fetchParameter(),t=a.team_name,s=a.app_alias;e({type:"appControl/deleteApp",payload:{team_name:t,app_alias:s,is_force:!0},callback:()=>{e({type:"global/fetchGroups",payload:{team_name:t}}),window.sessionStorage.removeItem("codeLanguage"),window.sessionStorage.removeItem("packageNpmOrYarn"),window.sessionStorage.removeItem("advanced_setup"),this.handleJump("index")}})}),this.handleJump=(e=>{var a=this.props.dispatch,t=this.fetchParameter(),s=t.team_name,i=t.region_name;a(c.routerRedux.replace("/team/".concat(s,"/region/").concat(i,"/").concat(e)))}),this.showDelete=(()=>{this.setState({showDelete:!0})}),this.fetchParameter=(()=>{return{team_name:w.default.getCurrTeamName(),region_name:w.default.getCurrRegionName(),app_alias:this.getAppAlias()}}),this.handleBuildSwitch=(e=>{this.setState({handleBuildSwitch:e})}),this.state={appPermissions:this.handlePermissions("queryAppInfo"),appDetail:null,handleBuildSwitch:!1}}componentDidMount(){this.loadDetail()}componentWillUnmount(){this.props.dispatch({type:"appControl/clearDetail"})}getAppAlias(){return this.props.match.params.appAlias}render(){var e=this.props,a=e.buildAppsLoading,t=e.deleteAppLoading,s=this.state,i=s.showDelete,o=s.appPermissions.isDelete,l=s.handleBuildSwitch,r=this.state.appDetail||{};return r.service?m.default.createElement("div",null,m.default.createElement("h2",{style:{textAlign:"center"}},(0,h.formatMessage)({id:"componentCheck.advanced.setup"})),m.default.createElement("div",{style:{overflow:"hidden"}},m.default.createElement(g.default,{updateDetail:this.loadDetail,appDetail:r,handleBuildSwitch:this.handleBuildSwitch}),m.default.createElement("div",{style:{background:"#fff",padding:"20px",textAlign:"right",position:"fixed",bottom:0,left:0,right:0,zIndex:2,borderTop:"1px solid #e8e8e8"}},m.default.createElement(n.default,{loading:a,style:{marginRight:8},onClick:()=>this.handleBuild(l),type:"primary"},(0,h.formatMessage)({id:"button.confirm_create"})),o&&m.default.createElement(n.default,{onClick:this.showDelete,type:"default"},(0,h.formatMessage)({id:"button.abandon_create"}))),i&&m.default.createElement(f.default,{loading:t,onOk:this.handleDelete,title:(0,h.formatMessage)({id:"confirmModal.abandon_create.create_check.title"}),subDesc:(0,h.formatMessage)({id:"confirmModal.delete.strategy.subDesc"}),desc:(0,h.formatMessage)({id:"confirmModal.delete.create_check.desc"}),onCancel:()=>{this.setState({showDelete:!1})}}))):null}},l=r))||l);a.default=D}}]);