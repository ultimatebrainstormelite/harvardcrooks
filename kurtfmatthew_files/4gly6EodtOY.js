/*!CK:1871954130!*//*1439789256,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pXW23"]); }

__d("XAYMTPanelSaveSettingsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ads\/growth\/aymt\/homepage_panel\/save_settings\/",{time_range:{type:"Enum",enumType:1},ad_account_id:{type:"Int"},promoted_object:{type:"Int"},collapsed:{type:"Int"},dismiss_nux:{type:"Bool",defaultValue:false},flash_insights_dismiss_nux:{type:"Bool",defaultValue:false},refresh_panel:{type:"Bool",defaultValue:false}});},null,{});
__d('AdvertiserHomePagelet',['AsyncRequest','DOM','URI','XAYMTPanelSaveSettingsController','$'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m={init:function(n,o){var p=k.getURIBuilder().setBool('refresh_panel',true).getURI();p.addQueryData(j.getRequestURI().getQueryData());new h().setURI(p).setStatusElement(o).setErrorHandler(function(q){i.setContent(l('pagelet_advertiser_panel'),'');}).send();}};f.exports=m;},null);
__d('LeftNavItemClassicDraggableContainer.react',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();'use strict';var i=h.PropTypes,j=h.createClass({displayName:'LeftNavItemClassicDraggableContainer',propTypes:{itemID:i.oneOfType([i.string,i.number]).isRequired,section:i.object.isRequired,draggableBound:i.object,ItemDraggableBehavior:i.func},render:function(){return (h.createElement('div',{'data-itemid':this.props.itemID},this.props.children));},componentDidMount:function(){var k=this.props,l=k.section,m=k.itemID,n=k.draggableBound,o=k.ItemDraggableBehavior;if(o&&!this.draggable)this.draggable=new o(h.findDOMNode(this),l,m,n);},componentWillUnmount:function(){this.draggable.destroy();this.draggable=null;}});f.exports=j;},null);
__d('LeftNavItem.react',['Arbiter','BootloadedComponent.react','DOMContainer.react','Image.react','LeftNavItemClassicDraggableContainer.react','Link.react','JSResource','PagesHighlanderGating','React','URI','XUIButton.react','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w;'use strict';var x=p.createElement('span',{className:"_upa"}),y=p.createElement(s,{className:'uiSideNavSpinner'});v=p.Component;w=v&&v.prototype;Object.assign(z,v);z.prototype=Object.create(v.prototype);z.prototype.constructor=z;z.__superConstructor__=v;function z(aa){w.constructor.call(this,aa);this.state=this.$LeftNavItem1(aa);this.state.hasUsedPopoverMenu=false;this.state.showPopoverOnMount=false;}z.prototype.componentWillReceiveProps=function(aa){var ba=this.$LeftNavItem1(aa);if(aa.inEditMode)ba.showPopoverOnMount=false;this.setState(ba);};z.prototype.$LeftNavItem1=function(aa){var ba=aa.model,ca=aa.section.props.id,da=ba.count>0,ea=ca==='pinnedNav'&&ba.sortable,fa=ca==='bookmarksSeeAllEntSection',ga=ba.keys.some(function(ja){return ja===aa.selectedKey;}),ha=ba.keys.some(function(ja){return ja===aa.loadingKey;}),ia=ea&&aa.inEditMode;return {hasCount:da,hasSortableItems:ea,inSeeAllSection:fa,isSelected:ga,isLoading:ha,isSorting:ia};};z.prototype.render=function(){var aa=this.props.model,ba=this.state;return (p.createElement('li',{className:"clearfix"+(' '+"sideNavItem")+(' '+"stat_elem")+(ba.isSelected?' '+"selectedItem":'')+(ba.isLoading?' '+"_5afd":''),'data-sortable':ba.isSorting?aa.sortable:null,id:"navItem_"+aa.id},this.$LeftNavItem2(this.$LeftNavItem3())));};z.prototype.$LeftNavItem3=function(){var aa=this.props.model,ba=this.props.section,ca=this.state,da=p.createElement('a',{key:'link','data-testid':'left_nav_item_'+aa.link.title,className:"_5afe"+(ca.hasSortableItems?' '+"sortableItem":''),'data-gt':aa.datagt,title:aa.link.title,rel:aa.link.rel,href:aa.link.href,ajaxify:aa.link.ajaxify,draggable:'false',onClick:function(){return h.inform('LeftNavController/setItemCount',{item:aa,count:0});}},this.$LeftNavItem4(aa),this.$LeftNavItem5(aa.image),p.createElement('div',{className:"linkWrap"+(ca.hasCount?' '+"hasCount":'')+(!ca.hasCount?' '+"noCount":'')},aa.name,ca.inSeeAllSection?this.$LeftNavItem6(aa.count):null));return [aa.auxcontent?p.createElement(j,{key:'auxpopover'},aa.auxcontent):null,this.$LeftNavItem7(aa,ba,this.props.loadDragDropModules,this.state.hasUsedPopoverMenu),this.$LeftNavItem8(da,aa)];};z.prototype.$LeftNavItem7=function(aa,ba,ca,da){if(!aa.editmenu)return null;var ea=(function(){this.setState({hasUsedPopoverMenu:true,showPopoverOnMount:true});ca&&ca();}).bind(this),fa=u._("Edit {Link name} link",[u.param('Link name',aa.name)]),ga=p.createElement(m,{href:'#',title:fa,'aria-label':fa,onClick:da?null:ea,className:"_1wc5 _26tg accessible_elem"});if(da)ga=p.createElement(i,{bootloadPlaceholder:ga,bootloadLoader:n('BookmarkPopoverMenu.react'),module:'BookmarkPopoverMenu.react',navSection:ba,model:aa,showOnMount:this.state.showPopoverOnMount},ga);var ha=this.state.inSeeAllSection?"bookmark_edit_button_see_all":"bookmark_edit_button";return (p.createElement('div',{className:'buttonWrap','data-testid':ha,key:'popover'},p.createElement('div',{className:'uiSideNavEditButton'},ga)));};z.prototype.$LeftNavItem5=function(aa){return (p.createElement('span',{className:'imgWrap','data-testid':"bookmark_icon_"+(this.state.inSeeAllSection?"see_all":"left_nav")},p.createElement(k,{src:aa,height:'16',width:'16',draggable:'false',alt:''})));};z.prototype.$LeftNavItem6=function(aa){if(!this.state.hasCount)return null;return (p.createElement('span',{className:"countValue"+(' '+"_5aff")},aa<=20?aa:'20+'));};z.prototype.$LeftNavItem4=function(aa){var ba=this.state;if(ba.inSeeAllSection)return null;var ca=ba.hasCount&&!ba.isSorting;if(ba.isLoading||ca||ba.isSorting)return (p.createElement('div',{className:'rfloat'},ba.isLoading?y:null,ca?this.$LeftNavItem6(aa.count):null,ba.isSorting?x:null));return null;};z.prototype.$LeftNavItem9=function(aa){if(aa.type!=='type_page'||o.isHighlanderDeprecated)return null;var ba=new q(aa.link.href),ca=new q("?ref=hl");ca.setDomain(ba.getDomain());ca.setProtocol(ba.getProtocol());ca.setPath(ba.getPath());return (p.createElement('form',{action:'/menu/identity_switch',method:'post',rel:'async'},p.createElement('input',{type:'hidden',name:'user_id',value:aa.id}),p.createElement('input',{type:'hidden',name:'url',value:ca.toString()}),p.createElement(r,{className:"_85u",use:'confirm',label:u._("Log in")})));};z.prototype.$LeftNavItem2=function(aa){if(!this.state.isSorting)return aa;return (p.createElement(l,{itemID:this.props.model.id,section:this.props.section,draggableBound:this.props.draggableBound,ItemDraggableBehavior:this.props.ItemDraggableBehavior},aa));};z.prototype.$LeftNavItem8=function(aa,ba){var ca=null;if(this.state.inSeeAllSection)ca=this.$LeftNavItem9(ba);if(!ca)return aa;return (p.createElement('div',{key:'link',className:'clearfix'},aa,ca));};f.exports=z;},null);
__d('LeftNavItemPlaceholder.react',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();'use strict';var j=h.createClass({displayName:'LeftNavItemPlaceholder',render:function(){return (h.createElement('li',{className:'sideNavItem stat_elem'},h.createElement('a',{className:"_5afe clearfix sortableItem"})));}});f.exports=j;},null);
__d('LeftNavSection.react',['Arbiter','Bootloader','InlineBlock.react','LeftNavItem.react','LeftNavItemPlaceholder.react','LeftRight.react','Link.react','React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();'use strict';var r='more',s=o.createClass({displayName:'LeftNavSection',getInitialState:function(){return {inEditMode:false,draggableBound:null,placeholderIdx:-1};},render:function(){var t=this,u=this.props,v=u.ItemDraggableBehavior,w=u.loadingKey,x=u.loadDragDropModules,y=u.model,z=u.selectedKey,aa=y.items,ba=this.state,ca=ba.inEditMode,da=ba.draggableBound;if(aa.length===0)return null;var ea=aa.map(function(ia){ia.datagt=this._getDataGT('item',this.props,ia.datagt);return (o.createElement(k,{key:ia.id,model:ia,section:t,selectedKey:z,loadingKey:w,inEditMode:ca,draggableBound:da,loadDragDropModules:x,ItemDraggableBehavior:v}));},this);if(this.state.placeholderIdx>=0)ea.splice(this.state.placeholderIdx,0,o.createElement(l,{key:'itemplaceholder',ref:'placeholder'}));var fa="_bui"+(this._isPinnedSection()?' '+"droppableNav":'')+(!this._isPinnedSection()?' '+"nonDroppableNav":'')+(' '+"_3-8w")+(!ca?' '+"_3-96":''),ga=this._isPinnedSection()?o.createElement('div',{className:"_3hge stat_elem"},o.createElement(n,{className:'navEditDone',ref:'Donelink',onClick:function(){i.loadModules(["LeftNavDragController"],function(){h.inform('LeftNavDragController/toggleEditMode',{section:t});});}},o.createElement('span',{className:"_3hgf"},q._("Done")))):null,ha=this._getDataGT(r,this.props);return (o.createElement('div',{id:this.props.id,className:"homeSideNav",'data-ft':y.dataft,'data-testid':'left_nav_section_'+(y.title||'FAVORITES'),ref:'sectionBody'},this._renderHeader(ha),o.createElement('ul',{className:fa,'data-ft':y.dataft},ea),ga));},componentDidUpdate:function(t,u){if(this.state.inEditMode)o.findDOMNode(this.refs.Donelink).focus();},_renderHeader:function(t){var u=this.props.model,v;if(u.title){var w=u.seeallhref?o.createElement(n,{href:u.seeallhref,'data-gt':t},o.createElement(m,null,o.createElement('span',{className:'sectionDragHandle'},u.title),u.remainingcount?o.createElement(j,{className:"_3-91"},o.createElement('div',{className:"_1cwg _5ol3"},u.seealltext)):null)):o.createElement('span',{className:'sectionDragHandle'},u.title);v=o.createElement('h4',{className:'navHeader'},w);}else v=null;return v;},_isPinnedSection:function(){return this.props.id==='pinnedNav';},_getDataGT:function(t,u,v){var w=u.id,x=u.model,y=u.total;v=v?JSON.parse(v):{};if(w!=="bookmarksSeeAllEntSection"){v.masher=t.toString();v.total=y.toString();}if(t===r){v.nav_section=x.id;v.nav_items_count=x.items?x.items.length:0;v.remaining_count=x.remainingcount;}v=JSON.stringify(v);return v;}});f.exports=s;},null);
__d('LeftNavSectionPlaceholder.react',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();'use strict';var j=h.createClass({displayName:'LeftNavSectionPlaceholder',render:function(){var k={height:this.props.height+'px',width:this.props.width+'px'};return (h.createElement('div',{className:'homeSideNav',style:k},h.createElement('ul',{className:"_bui"})));}});f.exports=j;},null);
__d('LeftNavContainer.react',['Bootloader','LeftNavSection.react','LeftNavSectionPlaceholder.react','React','emptyFunction','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();'use strict';function n(p){p.setState({loadDragDropModules:l});h.loadModules(["LeftNavDragController","LeftNavItemDraggableBehavior"],function(q,r){q.subscribe();p.setState({DragController:q,ItemDraggableBehavior:r});});}var o=k.createClass({displayName:'LeftNavContainer',getInitialState:function(){return {placeholderIdx:-1,placeholderWidth:0,placeholderHeight:0,loadDragDropModules:(function(){return n(this);}).bind(this),DragController:null,ItemDraggableBehavior:null};},componentDidMount:function(){var p=this.state.DragController;if(p)p.subscribe();},componentWillUnmount:function(){var p=this.state.DragController;if(p)p.unsubscribe();},render:function(){var p=this.props.model,q=k.createElement(i,{selectedKey:p.selectedKey,loadingKey:p.loadingKey,model:p.pinnedSection,key:'pinnedNav',id:'pinnedNav',ref:'pinnedNav',loadDragDropModules:this.state.loadDragDropModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,total:p.total}),r=p.sections.map((function(s){return (k.createElement(i,{selectedKey:p.selectedKey,loadingKey:p.loadingKey,model:s,key:s.id,id:s.id,loadDragDropModules:this.state.loadDragDropModules,ItemDraggableBehavior:this.state.ItemDraggableBehavior,total:p.total}));}).bind(this));if(this.state.placeholderIdx>-1)r.splice(this.state.placeholderIdx,0,k.createElement(j,{key:'placeholder',width:this.state.placeholderWidth,height:this.state.placeholderHeight}));return (k.createElement('div',null,q,r));},getPinnedSection:function(){var p=this.refs.pinnedNav;!p?m(0):undefined;return p;}});f.exports=o;},null);
__d('LeftNavModel',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();'use strict';var i,j=null,k={init:function(l){i=l;},initAdditionalItems:function(l){j=l.items;},setSelectedKey:function(l){i.loadingKey=null;i.selectedKey=l||i.defaultKey;},setLoadingKey:function(l){i.loadingKey=l;},setItemCount:function(l,m){l.count=m;},updateItemCounts:function(l,m){m.forEach(function(n){var o=k.findItemByKey(n.key);if(o)o.count=o.count+n.count;});},findItemByKey:function(l){return k.findItem(function(m){return m.keys.some(function(n){return n===l;});});},findItem:function(l){var m;for(var n=0;n<i.sections.length;n++){m=i.sections[n].items.find(l);if(m)return m;}if(j){m=j.find(l);if(m)return m;}return i.pinnedSection.items.find(l);},findItemByURI:function(l){var m=l.getQueryData().sk;if(m){return k.findItemByKey(m);}else if(k._isHomePath(l)){return k.findItemByKey(i.defaultKey);}else return k.findItem(function(n){return n.path&&n.path.some(function(o){if(typeof o==='object'&&o.regex)return l.getPath().match(o.regex);return o===l.getPath();});});},_isHomePath:function(l){var m=h.getRequestURI();return (l.getDomain()===m.getDomain()&&(l.getPath()==='/'||l.getPath()==='/home.php'));}};f.exports=k;},null);
__d('LeftNavController',['Arbiter','BlueBar','Bootloader','ChannelConstants','DOMDimensions','LeftNavConfig','LeftNavModel','NavigationMessage','React','Run','SubscriptionsHandler','CSS','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();'use strict';var u=Object.assign||function(ia){for(var ja=1;ja<arguments.length;ja++){var ka=arguments[ja];for(var la in ka)if(Object.prototype.hasOwnProperty.call(ka,la))ia[la]=ka[la];}return ia;},v,w,x,y=null,z,aa={init:function(ia,ja){w=ia;n.init(ja);var ka=function(na){j.loadModules(["LeftNavActions"],function(oa){oa.initModel(ja);na(oa);ba();});};x=new r();x.addSubscriptions(h.subscribe('LeftNavController/toggleFavorite',function(na,oa){return ka(function(pa){return (pa.toggleFavorite(na,oa,y));});}),h.subscribe('LeftNavController/updatePinnedSection',function(na,oa){var pa=oa.idOrder;return ka(function(qa){return (qa.updatePinnedSection(na,pa));});}),h.subscribe('LeftNavController/setItemCount',function(na,oa){var pa=oa.item,qa=oa.count;n.setItemCount(pa,qa);ba();}),h.subscribe(k.getArbiterType('nav_update_counts'),function(na,oa){var pa=oa.obj.items;n.updateItemCounts(na,pa);ba();}),h.subscribeOnce('AsyncLayout/initialized',function(){return z=true;}),h.subscribe(o.NAVIGATION_ITEM_REMOVED,function(na,oa){return ka(function(pa){return (pa.removeItemByKey(na,oa));});}),h.subscribe(o.NAVIGATION_COMPLETED,function(){n.setSelectedKey(ja.loadingKey);ba();}),h.subscribe(o.NAVIGATION_FAILED,function(){n.setLoadingKey(null);ba();}),h.subscribe(o.NAVIGATION_COUNT_UPDATE,function(na,oa){var pa=n.findItemByKey(oa&&oa.key);if(pa){n.setItemCount(pa,oa.hide?0:pa.count+oa.count);ba();}}),h.subscribe(o.NAVIGATION_SELECT,function(na,oa){var pa=oa.sk;if(oa.asLoading){n.setLoadingKey(pa);}else n.setSelectedKey(pa);}),h.subscribe('LeftNavDragController/toggleEditMode',function(){return s.toggleClass(w,"_2ryg");}));var la=n.findItemByKey(ja.selectedKey);if(la)la.count=0;if(ja.dynamicBK)ja=ha(ia,ja);var ma=m.Container;v=p.render(p.createElement(ma,{model:ja}),w);q.onLeave(this.uninstall.bind(this));},uninstall:function(){z=false;x.release();if(v.componentWillUnmount)v.componentWillUnmount();},initAdditionalItems:function(ia){n.initAdditionalItems(ia);},initPageTransitions:function(ia){ia.registerHandler(function(ja){return z&&ca(ja);},6);},mountSeeAllPayload:function(ia){y=ia;}};function ba(){v.forceUpdate();}function ca(ia){var ja=n.findItemByURI(ia);return ja&&ja.endpoint&&da(ja,ia);}function da(ia,ja){n.setLoadingKey(ia.keys[0]);n.setItemCount(ia,0);ba();fa(ia.endpoint,u({},ea(ia,ja),ja.getQueryData()));return true;}function ea(ia,ja){var ka={};ka.sidecol=true;ka.path=ja.getPath();var la=ga(ia.keys);la=la.text?la.text:la.numeric;ka.sk=la;ka.key=la;return ka;}function fa(ia,ja){ja.endpoint=ia;h.inform(o.NAVIGATION_BEGIN,{useAjaxPipe:true,params:ja});}function ga(ia){var ja=/^(app|group|fl)_/,ka={};for(var la=0;la<ia.length;la++){var ma=ja.test(ia[la]);if(ma&&!ka.numeric){ka.numeric=ia[la];}else if(!ma&&!ka.text)ka.text=ia[la];if(ka.numeric&&ka.text)break;}return ka;}function ha(ia,ja){var ka=l.getViewportDimensions().height,la=i.getBar(),ma=la?l.getElementDimensions(la).height:50,na=24,oa=na+6,pa=ja.sections.length+1,qa=ja.pinnedSection.items.length,ra=ka-ma-na*3,sa=Math.floor((ra-oa*pa)/na-qa);if(sa<=0)sa=1;var ta=ja.rankedItems[sa-1];for(var ua in ta)if(ta[ua]===0)sa=sa>1?--sa:1;ta=ja.rankedItems[sa-1];var va=0;for(ua in ta)ta[va++]=ta[ua]>0?ta[ua]:1;for(va=0;va<ja.sections.length;va++){var wa=ja.sections[va].items;ja.sections[va].items=wa.slice(0,ta[va]);ja.sections[va].remainingcount+=wa.length-ta[va];}ja.rankedItems=[];return ja;}f.exports=aa;},null);