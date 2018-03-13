webpackJsonp([8],{191:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _pageController=__webpack_require__(17),_pageController2=_interopRequireDefault(_pageController),_appApiCenter=__webpack_require__(10),_pageAppApiCenter=__webpack_require__(19),_widget=__webpack_require__(4),_widget2=_interopRequireDefault(_widget),_bindDomain=__webpack_require__(512),Msg=(_interopRequireDefault(_bindDomain),_widget2.default.Message),template=__webpack_require__(207),createAddPortTmp=function(){return $("#createPortTmp").html()},createDomainTmp=function(domain){return'<p js-data-domain="'+domain+'"><span>'+domain+'</span><a style="margin-left:10px;" href="javascript:;" data-domain="'+domain+'" class="delDomain">解绑</button></p>'},AppPort=(0,_pageController2.default)({template:template,property:{tenantName:"",serviceAlias:"",servicecName:"",language:"",code_from:"",serviceId:"",renderData:{appInfo:{},pageData:{}}},method:{getInitData:function(){var _this=this,self=this;(0,_appApiCenter.getAppInfo)(this.tenantName,this.serviceAlias).done(function(appInfo){_this.renderData.appInfo=appInfo,(0,_pageAppApiCenter.getPagePortAppData)(_this.tenantName,_this.serviceAlias).done(function(pageData){_this.renderData.pageData=pageData,_this.render(),setTimeout(function(){$(".port-table").each(function(){var $table=$(this),port=$table.attr("js-port"),protocol=$table.attr("js-protocol");port&&protocol&&self.loadPortUrl(port,protocol)})})})})},loadPortUrl:function(port,protocol){(0,_appApiCenter.loadPortUrl)(this.tenantName,this.serviceAlias,port,protocol).done(function(data){$("#sever_show_"+port).find("span").html(data.jsInnerUrl||"-"),$("#port_show_"+port).find("a").html(data.jsOuterUrl||"-").attr("href",data.jsOuterHerf)})},handleAddPort:function(port,protocol){var self=this;return(0,_appApiCenter.addPort)(this.tenantName,this.serviceAlias,port,protocol).done(function(res){self.getInitData()})},sowEidtPortDialog:function(port){var self=this,form=_widget2.default.create("form",{hideLabel:!0,items:[{name:"port",type:"text",value:port,label:"端口"}]}),dialog=_widget2.default.create("dialog",{title:"修改端口 ",width:"400px",height:"200px",domEvents:{".btn-success click":function(){var newPort=form.getValue("port");if(newPort==port)return form.destroy(),dialog.destroy(),void(form=dialog=null);self.checkPort(newPort)&&(0,_appApiCenter.editPort)(self.tenantName,self.serviceAlias,port,newPort).done(function(){form.destroy(),dialog.destroy(),self.getInitData()})}},event:{onCancel:function(){form.destroy(),form=dialog=null}}});dialog.setContent(form.getElement())},sowEidtProtocolDialog:function(port,protocol){var self=this,form=_widget2.default.create("form",{hideLabel:!0,items:[{name:"protocol",type:"select",value:protocol,items:[{text:"http",value:"http"},{text:"tcp",value:"tcp"},{text:"udp",value:"udp"},{text:"mysql",value:"mysql"}],label:"协议"}]}),dialog=_widget2.default.create("dialog",{title:"修改协议 ",width:"400px",height:"200px",domEvents:{".btn-success click":function(){var newProtocol=form.getValue("protocol");newProtocol===protocol?(form.destroy(),dialog.destroy(),form=dialog=null):(0,_appApiCenter.editProtocol)(self.tenantName,self.serviceAlias,port,newProtocol).done(function(){form.destroy(),dialog.destroy(),form=dialog=null,self.getInitData()})}},event:{onCancel:function(){form.destroy(),form=dialog=null}}});dialog.setContent(form.getElement())},sowEidtPortAliasDialog:function(port,portAlias){var self=this,form=_widget2.default.create("form",{hideLabel:!0,items:[{name:"portAlias",type:"text",value:portAlias,label:"别名"}]}),dialog=_widget2.default.create("dialog",{title:"修改别名 ",width:"400px",height:"200px",domEvents:{".btn-success click":function(){var newPortAlias=form.getValue("portAlias");newPortAlias===portAlias?(form.destroy(),dialog.destroy(),form=dialog=null):(0,_appApiCenter.editPortAlias)(self.tenantName,self.serviceAlias,port,newPortAlias).done(function(){form.destroy(),dialog.destroy(),form=dialog=null,self.getInitData()})}},event:{onCancel:function(){form.destroy(),form=dialog=null}}});dialog.setContent(form.getElement())},checkPort:function(value){if(value=value||"",!/^[0-9]+$/.test(value))return void Msg.warning("端口必须为数字!");if("docker"===this.language||"docker-image"===this.language||"docker-compose"===this.language){if(!(value>=1&&value<=65535))return Msg.warning("端口号必须在0~65535之间！"),!1}else if(!(value>=1025&&value<=65535))return Msg.warning("端口号必须在1025~65535之间！"),!1;return!0},handleDelDomain:function(port,doMain){return(0,_appApiCenter.delDomain)(this.tenantName,this.serviceAlias,this.serviceId,port,doMain)},showDelDomainConfirm:function(port,doMain){var self=this;doMain.indexOf("//")>-1&&(doMain=doMain.split("//")[1]);var confirm=_widget2.default.create("confirm",{title:"解绑域名",content:"确定要解绑 "+doMain+" 域名吗?",event:{onOk:function(){self.handleDelDomain(port,doMain).done(function(){confirm.destroy(),confirm=null,self.getInitData()})}}})},handleAddDomain:function(port,domain){return(0,_appApiCenter.addDomain)(this.tenantName,this.serviceAlias,this.serviceId,port,domain)},showAddDomainDialog:function(port){_widget2.default.create("bindDomain",{tenantName:this.tenantName,serviceAlias:this.serviceAlias,serviceId:this.serviceId,port:port,onSuccess:function(protocol,domain){$(".domain-box").each(function(){$(this).attr("port")===port&&$(this).append(createDomainTmp(domain))})}})},handleDelPort:function(port){return(0,_appApiCenter.delAppPort)(this.tenantName,this.serviceAlias,port).done(function(){Msg.success("操作成功")})},showDelPortConfirm:function(port){var self=this,confirm=_widget2.default.create("confirm",{title:"应用端口删除",content:"<h3>确定要删除此端口 "+port+" 吗？</h3>",event:{onOk:function(){self.handleDelPort(port).done(function(){$("table[js-port="+port+"]").remove(),confirm.destroy()})}}})},handlePortInnerOpen:function(port){var self=this;(0,_appApiCenter.openAppInner)(this.tenantName,this.serviceAlias,port).done(function(data){self.getInitData()}).fail(function(){self.getInitData()})},handlePortInnerClose:function(port){var self=this;(0,_appApiCenter.closeAppInner)(this.tenantName,this.serviceAlias,port).done(function(data){self.getInitData()}).fail(function(){self.getInitData()})},handlePortOuterOpen:function(port){var self=this;(0,_appApiCenter.openAppOuter)(this.tenantName,this.serviceAlias,port).done(function(data){self.getInitData()}).fail(function(){self.getInitData()})},handlePortOuterClose:function(port){var self=this;(0,_appApiCenter.closeAppOuter)(this.tenantName,this.serviceAlias,port).done(function(data){self.getInitData()}).fail(function(){self.getInitData()})}},domEvents:{"#add_service_port click":function(e){$("#create-port-wrap").append(createAddPortTmp())},".port-cancel click":function(e){$(e.currentTarget).closest(".port-open").remove()},".port-save click":function(e){var $form=$(e.currentTarget).closest("form"),port=$form.find("[name=port_port]").val(),protocol=$form.find("[name=port_protocol]").val();this.checkPort(port)&&this.handleAddPort(port,protocol)},".port-delete click":function(e){var port=$(e.currentTarget).parents(".port-table").attr("js-port");port&&this.showDelPortConfirm(port)},".js-edit-port click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port");port&&this.sowEidtPortDialog(port)},".js-edit-protocol click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port"),protocol=$target.closest(".port-table").attr("js-protocol");port&&this.sowEidtProtocolDialog(port,protocol)},".js-edit-port-alias click":function(e){var $target=$(e.currentTarget),portAlias=$target.closest(".port-table").attr("port-alias"),port=$target.closest(".port-table").attr("js-port");port&&portAlias&&this.sowEidtPortAliasDialog(port,portAlias)},".delDomain click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port"),doMain=$target.attr("data-domain");doMain&&this.showDelDomainConfirm(port,doMain)},".fn-bind-domain click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port");port&&this.showAddDomainDialog(port)},".port-inner-open click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port");this.handlePortInnerOpen(port)},".port-inner-close click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port");this.handlePortInnerClose(port)},".port-outer-open click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port");this.handlePortOuterOpen(port)},".port-outer-close click":function(e){var $target=$(e.currentTarget),port=$target.closest(".port-table").attr("js-port");this.handlePortOuterClose(port)}},onReady:function(){this.renderData.tenantName=this.tenantName,this.renderData.serviceAlias=this.serviceAlias,this.getInitData()}});window.AppPortController=AppPort,exports.default=AppPort},207:function(module,exports){module.exports='\x3c!-- 多端口修改开始 02 --\x3e\n    <style type="text/css">\n        .port-table {min-width: 200px;}\n        .port-table th:nth-child(1) {width:100px;}\n        .port-table th:nth-child(2) {width:100px;}\n        .port-table th:nth-child(3) {width:60%;}\n        .port-table th:nth-child(4) {width:20%;}\n        .port-table .child-talbe td {padding:5px 0;}\n        .port-table .child-talbe tr td:nth-child(1) {color:#ccc;font-size:13px;}\n        .port-table.table-bordered > thead > tr > th, .port-table.table-bordered > tbody > tr > th, .port-table.table-bordered > tfoot > tr > th, .port-table.table-bordered > thead > tr > td, .port-table.table-bordered > tbody > tr > td, .port-table.table-bordered > tfoot > tr > td{\n            border:1px solid #f7f7f7;\n        }\n        .port-table th {background:#f7f7f7;}\n    </style>\n    <section class="panel panel-default">\n        \x3c!-- title line start --\x3e\n        <div class="panel-heading clearfix">端口开放<small>(配置变化后需重启)</small>\n        </div>\n        <div class="panel-body">\n       \n        <script type="text/template" id="createPortTmp">\n            <div class="port-open">\n                <form class="form-inline createPortForm">\n                    <div class="form-group">\n                        <span>端口号</span>\n                        <input name="port_port" type="number" class="form-control tab-port" />\n                    </div>\n                    <div class="form-group">\n                        <span>协议类型</span>\n                        <select name="port_protocol" class="form-control">\n                            <option value="http">http</option>\n                            <option value="tcp">tcp</option>\n                            <option value="udp">udp</option>\n                            <option value="mysql">mysql</option>\n                        </select>\n                    </div>\n                    <div class="form-group" style="display: none;">\n                        <input name="port_alias" value="" class="tab-alias">\n                    </div>\n                    <div class="form-group">\n                        <button type="button" class="port-save btn btn-success btn-sm">确定</button>\n                        <button type="button" class="port-cancel btn btn-default btn-sm">取消</button>\n                    </div>\n                </form>\n            </div>\n        <\/script>\n        \x3c!-- table start --\x3e\n        {{ each pageData.ports || [] }}\n            <table  class="table port-table js-ports table-bordered" js-port="{{ $value.container_port }}" js-protocol="{{ $value.protocol }}" port-alias="{{ $value.port_alias }}">\n                <thead>\n                <tr port="{{ $value.container_port }}" protocol="{{ $value.protocol }}" port-alias="{{ $value.port_alias }}"  class="active">\n                    <th>端口号</th>\n                    <th>协议类型</th>\n                    <th class="hidden-xs">服务信息</th>\n                    <th class="hidden-xs">操作</th>\n                </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td rowspan="2" style="vertical-align: middle;">\n                            <span>{{ $value.container_port }}</span>\n                           \n                        </td>\n                        <td rowspan="2" style="vertical-align: middle;">\n                            <span id="edit_protocol_{{ $value.container_port }}" data-value="{{ $value.protocol }}">{{ $value.protocol }}</span>\n                            {{if pageData.port_changeable}}\n                                <a href="javascript:;" style="color: #28cb75;" data-title="更改协议类型"\n                                    id="edit_protocol_{{ $value.container_port }}"\n                                    data-url="/ajax/{{ tenantName }}/{{ serviceAlias }}/ports/{{ $value.container_port }}"\n                                    data-value="{{ $value.protocol }}"\n                                    class="fn-rename glyphicon glyphicon-edit edit-protocol js-edit-protocol"></a>\n                            {{/if}}\n                        </td>\n                        <td class="hidden-xs">\n                            <table class="child-talbe" style="width:100%">\n                                <tbody>\n                                    <tr>\n                                        <td width="70">内部访问</td>\n                                        <td>\n                                            {{if $value.is_inner_service}}\n                                                <label class="checkbox">\n                                                    <input type="checkbox" class="port-inner-close" checked="true" />\n                                                    <span class="check-bg"></span>\n                                                </label>\n                                            {{else}}\n                                                <label class="checkbox">\n                                                    <input type="checkbox" class="port-inner-open"/>\n                                                    <span class="check-bg"></span>\n                                                </label>\n                                            {{/if}}\n                                            \n                                        </td>\n                                    <tr>\n                                        <td>服务地址</td>\n                                        <td>\n                                             <span class="fn-sever-link" \n                                            id="sever_show_{{ $value.container_port }}"\n                                             port="{{ $value.container_port }}">\n                                                <span>-</span>\n                                            </span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>使用别名</td>\n                                        <td>\n                                           <span\n                                                class="" data-title=""\n                                                data-url="/ajax/{{ tenantName }}/{{ serviceAlias }}/ports/{{ $value.container_port }}"\n                                                data-value="{{ $value.port_alias }}"\n                                            >\n                                                {{ $value.port_alias }}_HOST:{{ $value.port_alias }}_PORT\n                                            </span>\n                                            <a href="javascript:;" style="color: #28cb75;" \n                                                data-title="更改别名"\n                                                data-url="/ajax/{{ tenantName }}/{{ serviceAlias }}/ports/{{ $value.container_port }}"\n                                                data-value="{{ $value.port_alias }}"\n                                                class="glyphicon glyphicon-edit edit-port-alias js-edit-port-alias"\n                                            ></a>\n                                        </td>\n                                </tbody>\n                            </table>\n                        </td>\n                        <td rowspan="2" style="vertical-align: middle;" class="hidden-xs">\n                            <button type="button" class="port-delete btn btn-default btn-sm"\n                                 {{if !pageData.port_changeable}}style="display:none;"{{/if}}\n                            >删除</button>\n                            {{if $value.is_outer_service && $value.protocol == \'http\' }}\n                                <button type="button" class="btn btn-default btn-sm fn-bind-domain">新增绑定域名</button>\n                            {{/if}}\n                        </td>\n                    </tr>\n                    <tr class="hidden-xs">\n                        <td>\n                            <table class="child-talbe" style="width:100%">\n                                <tbody>\n                                    <tr> \n                                        <td width="70">\n                                            外部访问\n                                        </td>\n                                        <td>\n                                            {{if $value.is_outer_service}}\n                                                <label class="checkbox">\n                                                    <input type="checkbox" class="port-outer-close" checked="true"/>\n                                                    <span class="check-bg"></span>\n                                                </label>\n                                            {{else}}\n                                                <label class="checkbox">\n                                                    <input type="checkbox" class="port-outer-open" />\n                                                    <span class="check-bg"></span>\n                                                </label>\n                                            {{/if}}\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>访问地址</td>\n                                        <td>\n                                            <span class="fn-sever-link" \n                                                id="port_show_{{ $value.container_port }}"\n                                                port="{{ $value.container_port }}"\n                                            >\n                                                <a href="" target="_blank">-</a>\n                                             </span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>绑定域名</td>\n                                        <td>\n                                           <div id="showLink{{ $value.container_port }}" class="showlink-box">\n                                                {{ if $value.is_outer_service &&  $value.protocol == \'http\' }}\n                                                    <div style="display:inline-block;"  port="{{ $value.container_port }}" class="domain-box domain-box" id="domain-box">\n                                                        \x3c!-- 多个域名 展示--\x3e\n                                                        {{if pageData.serviceDomainDict[$value.container_port]}}\n                                                            {{each pageData.serviceDomainDict[$value.container_port] $domain $index}}\n                                                                <div js-data-domain="{{ $domain }}">\n                                                                    <a target="_blank" href="{{$domain}}">{{ $domain }}</span>\n                                                                    <a href="javascript:;" data-domain="{{ $domain }}" class="delDomain">\n                                                                        解绑\n                                                                    </a>\n                                                                </div>\n                                                            {{/each}}\n                                                        {{/if}}\n                                                        \x3c!-- 多个域名 展示--\x3e\n                                                    </div>\n                                                    \n                                                {{/if}}\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                    </tr>\n                </tbody>\n                \x3c!-- 表格 内容  结束 --\x3e\n            </table>\n        {{/each}}\n        \x3c!-- table end --\x3e\n         \x3c!-- title line end --\x3e\n        <div id="create-port-wrap">\n            \n        </div>\n        </div>\n        <div class="panel-footer clearfix">\n            <div class="pull-right">\n                <button type="button" class="btn btn-success" id="add_service_port" {{if !pageData.port_changeable}}style="display:none;"{{/if}}>新增服务端口</button>\n            </div>\n        </div>\n    </section>\n    \x3c!-- 多端口修改结束  02 --\x3e'},512:function(module,exports,__webpack_require__){"use strict";function noop(){}var _widget=__webpack_require__(4),_widget2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_widget),_apiCenter=__webpack_require__(20),_appApiCenter=__webpack_require__(10),Msg=_widget2.default.Message;_widget2.default.define("bindDomainForm",{extend:"form",_defaultOption:{labelCol:3,rowNum:1,items:[{name:"protocol",label:"协议",type:"select",items:[{text:"HTTP",value:"http"},{text:"HTTPS",value:"https"},{text:"HTTP转HTTPS",value:"httptohttps"},{text:"HTTP与HTTPS共存",value:"httpandhttps"}]},{name:"domain",type:"text",label:"域名",required:!0,requiredError:"请输入域名",regx:"^((www\\.)|([a-zA-Z0-9-_]+\\.)*)?([a-zA-Z0-9-_])+\\.([a-zA-Z]+)(:[0-9]+)?$",regxError:"域名格式不正确"},{name:"keySelect",type:"info",label:"选择已有证书",value:'<div class="keySelect-wrap text-left"><select name="savedKeys" class="form-control" style="display:inline-block;width:250px;margin-right: 10px;"></select><span class="btn btn-primary btn-sm toAddZhengshu">新建证书</span></div><div class="keyCreate-wrap text-left" style="display:none;"><span class="text-danger" style="margin-right:10px;">您还没有创建证书，请先</span><span class="btn btn-primary btn-sm toAddZhengshu">新建证书</span></div>'}]},_init:function(option){this.callParent(option),"bindDomainForm"==this.ClassName&&(this._create(),this.bind())},_create:function(){this.callParent(),this.hideInput("key"),this.hideInput("license"),this.hideInput("keySelect")},destroy:function(){this.callParent()}}),_widget2.default.define("createCertificateForm",{extend:"form",_defaultOption:{labelCol:3,rowNum:1,items:[{name:"alias",type:"text",label:"证书名称",required:!0,requiredError:"请输入证书名称"},{name:"private_key",type:"textarea",label:"key",required:!0,requiredError:"请输入key"},{name:"certificate",type:"textarea",label:"证书",required:!0,requiredError:"请输入证书"}]},_init:function(option){this.callParent(option),"createCertificateForm"==this.ClassName&&(this._create(),this.bind())},destroy:function(){this.callParent()}}),_widget2.default.define("bindDomain",{extend:"dialog",_defaultOption:{onSuccess:noop,onFail:noop,onCancel:noop,id:"createDomainDialog",title:"绑定域名",width:"600px",height:"400px",autoDestroy:!0,savedKeys:[],tenantName:"",serviceAlias:"",port:"",serviceId:"",btns:[{classes:"btn btn-success addDomain",text:"确认绑定"},{classes:"btn btn-success addzhengshu",text:"添加证书"},{classes:"btn btn-default btn-cancel",text:"取消"},{classes:"btn btn-default btn-back",text:"返回"}]},_init:function(option){var self=this;this.element;option.domEvents={".addDomain click":function(){self.handleAddDomain()},".addzhengshu click":function(){self.handleAddCertificate()},".toAddZhengshu click":function(){self.toAddCertificate()},".btn-back click":function(){self.toAddDomain()},"[name=protocol] change":function(){"http"===self.bindDomainForm.getValue("protocol")?(self.bindDomainForm.hideInput("key"),self.bindDomainForm.hideInput("license"),self.bindDomainForm.hideInput("keySelect")):(self.bindDomainForm.showInput("key"),self.bindDomainForm.showInput("license"),self.bindDomainForm.showInput("keySelect"))}},this.callParent(option),"bindDomain"==this.ClassName&&(this._create(),this.bind())},_create:function(){this.callParent();var self=this;this.bindDomainForm=_widget2.default.create("bindDomainForm",{onSubmit:function(){self.handleAddDomain()}}),this.createCertificateForm=_widget2.default.create("createCertificateForm",{}),this.setContent(this.bindDomainForm.getElement()),this.appendContent(this.createCertificateForm.getElement()),this.toAddDomain(),this.getSertificate()},getSertificate:function(){var self=this;(0,_apiCenter.getSertificate)(this.option.tenantName,this.option.serviceAlias).done(function(list){self.option.savedKeys=list,self.renderSavedKeys()}).fail(function(){self.renderSavedKeys()})},handleAddDomain:function(){var form=this.bindDomainForm,$element=this.element;if(form.valid()){var keyId=$element.find("[name=savedKeys]").val(),protocol=form.getValue("protocol"),domain=$.trim(form.getValue("domain")),self=this;if(!keyId&&"http"!==protocol)return void Msg.warning("请选择证书!");(0,_appApiCenter.addDomain)(this.option.tenantName,this.option.serviceAlias,this.option.serviceId,this.option.port,domain,protocol,keyId).done(function(data){self.destroy(),self.option.onSuccess(protocol,domain)})}},toAddDomain:function(){this.bindDomainForm.show(),this.createCertificateForm.hide(),this.element.find(".addDomain").show(),this.element.find(".btn-cancel").show(),this.element.find(".addzhengshu").hide(),this.element.find(".btn-back").hide(),this.createCertificateForm.reset()},handleAddCertificate:function(){var addLicenseForm=this.createCertificateForm,self=(this.element,this);if(addLicenseForm.valid()){var alias=addLicenseForm.getValue("alias"),privateKey=addLicenseForm.getValue("private_key"),certificate=addLicenseForm.getValue("certificate");(0,_apiCenter.addSertificate)(this.option.tenantName,this.option.serviceAlias,privateKey,certificate,alias).done(function(data){self.getSertificate(),self.toAddDomain()})}},toAddCertificate:function(){this.bindDomainForm.hide(),this.createCertificateForm.show(),this.element.find(".addDomain").hide(),this.element.find(".btn-cancel").hide(),this.element.find(".addzhengshu").show(),this.element.find(".btn-back").show()},renderSavedKeys:function(){if(this.option.savedKeys.length>0){this.element.find(".keySelect-wrap").show(),this.element.find(".keyCreate-wrap").hide(),this.element.find("[name=savedKeys]").html("");for(var savedKeys=this.option.savedKeys,i=0;i<savedKeys.length;i++){var keysOption=$('<option value="'+savedKeys[i].id+'">'+savedKeys[i].alias+"</option>");this.element.find("[name=savedKeys]").append(keysOption)}}else this.element.find(".keySelect-wrap").hide(),this.element.find(".keyCreate-wrap").show()},destroy:function(){this.bindDomainForm.destroy(),this.createCertificateForm.destroy(),this.bindDomainForm=this.createCertificateForm=null,this.callParent()}})},536:function(module,exports,__webpack_require__){module.exports=__webpack_require__(191)}},[536]);