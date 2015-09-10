/*!CK:2969119848!*//*1439789259,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["QJ4HG"]); }

__d("ComposerTargetType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SELF_USER:"feed",OTHER_USER:"wall",GROUP:"group",PAGE:"page",EVENT:"event",RECOMMENDATION:"recommendation",EXAMPLE:"example"};},null,{});
__d("ComposerType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={INLINE:"inline",ADVANCED:"advanced",NORMAL:"normal"};},null,{});
__d("ComposerWaterfallEvent",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_CANCEL:"composer_cancel",COMPOSER_CANCEL_INTENT:"intent_composer_cancel",COMPOSER_ENTRY:"composer_entry",COMPOSER_NOT_RENDERED:"composer_not_renderer",COMPOSER_POST:"composer_post",COMPOSER_POST_CANCEL:"composer_post_cancel",COMPOSER_POST_FAILURE:"composer_post_failure",COMPOSER_POST_FAILURE_FATAL:"composer_post_fatal_failure",COMPOSER_POST_FAILURE_GIVEUP:"composer_post_giveup_failure",COMPOSER_POST_SUCCESS:"composer_post_success",COMPOSER_POST_COMPLETED:"composer_post_completed",COMPOSER_WRITTEN:"composer_written",ALBUM_ADD:"add_album",ALBUM_CANCEL:"cancel_album",ALBUM_INTENT:"intent_album",ALBUM_REMOVE:"remove_album",FRIEND_TAG_ADD:"add_friend_tag",FRIEND_TAG_CANCEL:"cancel_friend_tag",FRIEND_TAG_INTENT:"intent_friend_tag",FRIEND_TAG_REMOVE:"remove_friend_tag",FRIEND_TAG_SEARCH:"search_friend_tag",FRIEND_SHOW_MORE:"show_more_friend_tag",LOCATION_ADD:"add_location",LOCATION_CANCEL:"cancel_location",LOCATION_INTENT:"intent_location",LOCATION_REMOVE:"remove_location",LOCATION_SCROLL:"scroll_location",LOCATION_SEARCH:"search_location",EMBEDS_ADD:"add_embed",EMBEDS_CANCEL:"cancel_embed",EMBEDS_INTENT:"intent_embed",MINUTIAE_ADD:"add_minutiae",MINUTIAE_CANCEL:"cancel_minutiae",MINUTIAE_CHANGE_ICON:"change_icon_minutiae",MINUTIAE_CHANGE_ICON_CANCEL:"change_icon_cancel_minutiae",MINUTIAE_CHANGE_ICON_INTENT:"change_icon_intent_minutiae",MINUTIAE_CHANGE_ICON_SEARCH:"change_icon_search_minutiae",MINUTIAE_INTENT:"intent_minutiae",MINUTIAE_REMOVE:"remove_minutiae",MINUTIAE_SCROLL:"scroll_minutiae",MINUTIAE_SEARCH:"search_minutiae",MINUTIAE_TYPE_CLICK:"type_click_minutiae",MINUTIAE_SEE_MORE:"see_more_minutiae",MINUTIAE_CHAIN_SKIP:"skip_chain_minutiae",MINUTIAE_CHAIN_SUGGEST:"suggest_chain_minutiae",MINUTIAE_ICONPICKER_QUERY:"minutiae_iconpicker_query",MINUTIAE_ICONPICKER_BOOTSTRAP:"minutiae_iconpicker_bootstrap",MINUTIAE_ICONPICKER_SELECT:"minutiae_iconpicker_select",MEDIA_INTENT:"intent_media",MEDIA_CANCEL:"cancel_media",PHOTO_ADD:"add_photo",PHOTO_ADD_FAILURE:"add_photo_failure",PHOTO_ADD_SUCCESS:"add_photo_success",PHOTO_REMOVE:"remove_photo",PRIVACY_ADD:"add_privacy",PRIVACY_CANCEL:"cancel_privacy",PRIVACY_INTENT:"intent_privacy",PRIVACY_SCROLL:"scroll_privacy",PRIVACY_SEE_ALL_LISTS:"see_all_lists_privacy",SELECT_FRIEND_TIMELINE_INTENT:"intent_select_friend_timeline",SELECT_FRIEND_TIMELINE_ADD:"add_select_friend_timeline",SELECT_FRIEND_TIMELINE_CANCEL:"cancel_select_friend_timeline",SERVER_POST_BEGIN:"server_composer_post_begin",SERVER_POST_FAILURE:"server_composer_post_failure",SERVER_POST_SUCCESS:"server_composer_post_succeeded",POST_POST_WITH_TAG_BEGIN:"post_post_with_tag_begin",POST_POST_WITH_TAG_FAILURE:"post_post_with_tag_failure",POST_POST_WITH_TAG_SUCCESS:"post_post_with_tag_success",TARGET_SELECTOR_INTENT:"intent_target_selector",TARGET_SELECTOR_CANCEL:"cancel_target_selector",VIDEO_ADD:"add_video",VIDEO_ADD_FAILURE:"add_video_failure",VIDEO_ADD_SUCCESS:"add_video_success",VIDEO_REMOVE:"remove_video"};},null,{});
__d('getDOMImageSize',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(n){n.onload=null;n.onerror=null;n.onreadystatechange=null;n._callback=null;n._thisObj=null;n._srcStr=null;n.parentNode&&n.parentNode.removeChild(n);}function j(){var n=this;if(n._callback)n._callback.call(n._thisObj,n.naturalWidth||n.width,n.naturalHeight||n.height,n._srcStr);i(n);}function k(){var n=this;if(n.readyState==='complete')j.call(n);}function l(){var n=this;if(n._callback)n._callback.call(n._thisObj,0,0,n._srcStr);i(n);}function m(n,o,p){p=p||null;if(!n){o.call(p,0,0,'');return;}var q=document.body;if(!q){setTimeout(m.bind(this,n,o,p),500);return;}var r;if(typeof n==='string'){r=n;}else if(typeof n==='object')if(typeof n.width==='number'&&typeof n.height==='number'){if(typeof n.src==='string'){r=n.src;if(n.naturalWidth&&n.naturalHeight){o.call(p,n.naturalWidth,n.naturalHeight,r);return;}}if(typeof n.uri==='string'){r=n.uri;if(n.width&&n.height){o.call(p,n.width,n.height,r);return;}}}else if(n instanceof h)r=n.toString();if(!r){o(0,0,n);return;}var s=document.createElement('img');s.onreadystatechange=k;s.onload=j;s.onerror=l;s._callback=o;s._thisObj=p;s._srcStr=r;s.src=r;s.style.cssText='\n    position:absolute;\n    left:-5000px;\n    top:-5000px;\n    width:auto;\n    height:auto;\n    clip:rect(0 0 0 0);\n  '.replace(/\s+/,' ');q.insertBefore(s,q.firstChild);}f.exports=m;},null);
__d('CachedDOMImageSizePool',['debounce','getDOMImageSize'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l){'use strict';this.$CachedDOMImageSizePool1={};this.$CachedDOMImageSizePool2=l;this.$CachedDOMImageSizePool3=0;this.$CachedDOMImageSizePool4=k;this.$CachedDOMImageSizePool5=h(this.$CachedDOMImageSizePool6,5000,this);this.$CachedDOMImageSizePool7={};this.$CachedDOMImageSizePool8={};}j.prototype.get=function(k,l,m){'use strict';if(!k){l.call(m,0,0,k);return;}var n=this.$CachedDOMImageSizePool1[k];if(n){n.lastAccessTime=Date.now();l.call(m,n.width,n.height,n.src);}else if(this.$CachedDOMImageSizePool7[k]){this.$CachedDOMImageSizePool7[k].push(l);this.$CachedDOMImageSizePool8[k].push(m);}else{this.$CachedDOMImageSizePool7[k]=[l];this.$CachedDOMImageSizePool8[k]=[m];i(k,this.$CachedDOMImageSizePool9,this);}};j.prototype.set=function(k,l,m){'use strict';if(this.$CachedDOMImageSizePool3>this.$CachedDOMImageSizePool4)this.$CachedDOMImageSizePool5();var n=this.$CachedDOMImageSizePool1;if(k&&!n[k]){var o={width:l,height:m,src:k,lastAccessTime:Date.now()};n[k]=o;this.$CachedDOMImageSizePool3++;}};j.prototype.$CachedDOMImageSizePool9=function(k,l,m){'use strict';this.set(m,k,l);var n=this.$CachedDOMImageSizePool7[m],o=this.$CachedDOMImageSizePool8[m];for(var p=0,q=n.length;p<q;p++)n[p].call(o[p],k,l,m);delete this.$CachedDOMImageSizePool7[m];delete this.$CachedDOMImageSizePool8[m];};j.prototype.$CachedDOMImageSizePool6=function(){'use strict';var k=Date.now(),l=this.$CachedDOMImageSizePool1,m=this.$CachedDOMImageSizePool3,n=this.$CachedDOMImageSizePool2;for(var o in l){var p=l[o];if(k-p.lastAccessTime>n){delete l[o];m--;}}this.$CachedDOMImageSizePool3=m;};f.exports=j;},null);
__d('BackgroundImage.react',['CachedDOMImageSizePool','React','XUISpinner.react','cx','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=Object.assign||function(t){for(var u=1;u<arguments.length;u++){var v=arguments[u];for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w))t[w]=v[w];}return t;},o=i.PropTypes,p='(-?(\\d+\\.)?\\d+(px|\\%))',q=new RegExp('^'+p+'?(\\s'+p+')?$','g'),r=new h(50,10*60*1000),s=i.createClass({displayName:'BackgroundImage',propTypes:{src:o.string,width:o.number.isRequired,height:o.number.isRequired,backgroundSize:o.oneOf(['contain','cover','containinside','coverinside']),loadingIndicatorStyle:o.oneOf(['none','large','small']),backgroundPosition:function(t,u,v){var w=t[u];if(w){!(typeof w==='string')?l(0):undefined;!w.match(q)?l(0):undefined;}},onImageLoad:o.func,optimizeResizeSpeed:o.bool,onContextMenu:o.func},getInitialState:function(){return {imageWidth:null,imageHeight:null,imageSrc:this.props.src,loading:true};},getDefaultProps:function(){return {optimizeResizeSpeed:false,loadingIndicatorStyle:'none'};},componentDidMount:function(){this._resolveImageSize();},componentDidUpdate:function(t){if(this.props.src!==this.state.imageSrc)this.setState({imageWidth:0,imageHeight:0,imageSrc:this.props.src,loading:true},this._resolveImageSize);},_resolveImageSize:function(){var t=this.state.imageSrc;if(t)r.get(t,this._onImageSizeResolved,this);},render:function(){var t={width:this.props.width+'px',height:this.props.height+'px'},u=m(this.props.className,"_5f0d");return (i.createElement('div',n({},this.props,{className:m(this.props.className,u),style:n({},this.props.style||{},t),onContextMenu:this.props.onContextMenu}),this._renderImage(),this._renderContent(),this._renderLoadingIndicator()));},_renderLoadingIndicator:function(){if(!this.state.loading||this.props.loadingIndicatorStyle==='none')return null;return (i.createElement('div',{className:"_1qe- _5lar"},i.createElement('div',{className:"_1qe_"},i.createElement('div',{className:"_1qf0"},i.createElement(j,{size:this.props.loadingIndicatorStyle})))));},_renderContent:function(){if(this.props.children)return (i.createElement('div',{className:"_1qe-"},i.createElement('div',{className:"_1qe_"},i.createElement('div',{className:"_1qf0"},this.props.children))));},_renderImage:function(){if(!this.state.imageWidth||!this.state.imageHeight)return;var t=this.props.width,u=this.props.height,v,w;switch(this.props.backgroundSize){case 'cover':v='cover';w=false;break;case 'coverinside':v='cover';w=true;break;case 'contain':v='contain';w=false;break;case 'containinside':v='contain';w=true;}var x=this.state.imageWidth,y=this.state.imageHeight,z=t/u,aa=x/y;if(v==='contain')if((x>t||!w)&&aa>=z){x=t;y=x/aa;}else if(y>u||!w){y=u;x=y*aa;}if(v==='cover')if((x>t||!w)&&aa>=z){y=u;x=y*aa;}else if(y>u||!w){x=t;y=x/aa;}var ba=this._getImageStyle(x,y);return (i.createElement('img',{alt:'',className:"_5i4g"+(this.props.optimizeResizeSpeed?' '+"_5sjv":''),style:ba,src:this.state.imageSrc}));},_getImageStyle:function(t,u){var v;if(this.props.backgroundPosition){v=this.props.backgroundPosition.split(' ');}else v=['50%','50%'];return {width:Math.round(t)+'px',height:Math.round(u)+'px',left:this._getBackgroundPositionPxValue('left',v[0],t,u),top:this._getBackgroundPositionPxValue('top',v[1]||v[0],t,u)};},_getBackgroundPositionPxValue:function(t,u,v,w){var x=parseFloat(u),y=u.substr(x.toString().length);if(y==='px')return u;if(t==='left'){return Math.round((this.props.width-v)*(x/100))+'px';}else return Math.round((this.props.height-w)*(x/100))+'px';},_onImageSizeResolved:function(t,u,v){if(!this.isMounted()||this.state.imageSrc!==v)return;var w=this.props.onImageLoad?this.props.onImageLoad.bind(null,t,u):null;this.setState({imageWidth:t,imageHeight:u,loading:false},w);}});f.exports=s;},null);
__d('XUIBlock',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k={propTypes:{background:j.oneOf(['base-wash','light-wash','white','highlight','transparent'])},getDefaultProps:function(){return {background:'transparent'};},getBackgroundClass:function(l){var m=(l.background==='base-wash'?"_4-u5":'')+(l.background==='light-wash'?' '+"_57d8":'')+(l.background==='white'?' '+"_4-u8":'')+(l.background==='highlight'?' '+"_4-u7":'');return m;}};f.exports=k;},null);
__d('XUICard.react',['React','XUIBlock','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var p=arguments[o];for(var q in p)if(Object.prototype.hasOwnProperty.call(p,q))n[q]=p[q];}return n;},m=h.createClass({displayName:'XUICard',propTypes:i.propTypes,getDefaultProps:function(){return l({},i.getDefaultProps(),{background:'white'});},render:function(){var n=k("_4-u2",i.getBackgroundClass(this.props));return (h.createElement('div',l({},this.props,{className:k(this.props.className,n)}),this.props.children));}});f.exports=m;},null);
__d('XUICardSection.react',['React','XUIBlock','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();'use strict';var l=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var p=arguments[o];for(var q in p)if(Object.prototype.hasOwnProperty.call(p,q))n[q]=p[q];}return n;},m=h.createClass({displayName:'XUICardSection',propTypes:i.propTypes,getDefaultProps:i.getDefaultProps,render:function(){var n=k("_4-u3",i.getBackgroundClass(this.props));return (h.createElement('div',l({},this.props,{className:k(this.props.className,n)}),this.props.children));}});f.exports=m;},null);
__d('AbstractTextFieldMixin.react',['React','Keys','cx','invariant','joinClasses','cloneWithProps'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=h.PropTypes,o={propTypes:{value:n.string,placeholder:n.string,tabIndex:n.string,maxLength:n.number,autoComplete:n.string,onBackspace:n.func,onBackTab:n.func,onBlur:n.func,onChange:n.func,onDownArrow:n.func,onEnter:n.func,onEscape:n.func,onFocus:n.func,onKeyDown:n.func,onLeftArrow:n.func,onNoShiftEnter:n.func,onRightArrow:n.func,onShiftEnter:n.func,onShiftDownArrow:n.func,onShiftUpArrow:n.func,onTab:n.func,onUpArrow:n.func,required:n.bool,type:n.string,autoCapitalize:n.string,autoCorrect:n.string},getInitialState:function(){return {focused:false,value:this.props.defaultValue||''};},getValue:function(){return this.props.value!=null?this.props.value:this.state.value;},onInputKeyDown:function(p){var q=this.props,r=p.keyCode,s=p.shiftKey;if(r===i.BACKSPACE&&!s&&q.onBackspace){q.onBackspace(p);}else if(r===i.TAB&&!s&&q.onTab){q.onTab(p);}else if(r===i.TAB&&s&&q.onBackTab){q.onBackTab(p);}else if(r===i.UP){if(s){if(q.onShiftUpArrow)q.onShiftUpArrowAttempt(p);}else if(q.onUpArrow)q.onUpArrow(p);}else if(r===i.DOWN&&q.onDownArrow){if(s){if(q.onShiftDownArrow)q.onShiftDownArrow(p);}else if(q.onDownArrow)q.onDownArrow(p);}else if(r===i.LEFT&&q.onLeftArrow){q.onLeftArrow(p);}else if(r===i.RIGHT&&q.onRightArrow){q.onRightArrow(p);}else if(r===i.RETURN){if(q.onEnter)q.onEnter(p);if(s){if(q.onShiftEnter)q.onShiftEnter(p);}else if(q.onNoShiftEnter)q.onNoShiftEnter(p);}else if(r===i.ESC&&q.onEscape)q.onEscape(p);if(q.onKeyDown)q.onKeyDown(p);},onInputChange:function(p){if(this.props.onChange)this.props.onChange(p);if(this.props.value==null)this.setState({value:p.target.value});},focusInput:function(){this.getTextFieldDOM().focus();},blurInput:function(){this.getTextFieldDOM().blur();},onInputBlur:function(event){if(this.props.onBlur)this.props.onBlur(event);if(!event.isDefaultPrevented())this.setState({focused:false});},onInputFocus:function(event){if(this.props.onFocus)this.props.onFocus(event);if(!event.isDefaultPrevented())this.setState({focused:true});},getTextFieldDOM:function(){return h.findDOMNode(this.refs[this.getTextFieldRef()]);},getTextFieldRef:function(){return 'textField';},setTextFieldPropsOn:function(p){return m(p,{'aria-activedescendant':this.props['aria-activedescendant'],'aria-autocomplete':this.props['aria-autocomplete'],'aria-label':this.props['aria-label'],'aria-expanded':this.props['aria-expanded'],'aria-owns':this.props['aria-owns'],'data-testid':this.props['data-testid'],required:this.props.required,ref:this.getTextFieldRef(),role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,onKeyDown:this.onInputKeyDown,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:this.getValue(),id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,title:this.props.title,type:this.props.type||p.props.type});},render:function(){var p=l(this.props.className,"_58ak"+(!this.getValue()?' '+"_3ct8":''));!this.renderTextField?k(0):undefined;return (h.createElement('label',{className:p},this.renderTextField()));}};f.exports=o;},null);
__d('AbstractTextInput.react',['AbstractTextFieldMixin.react','React','cx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.createClass({displayName:'AbstractTextInput',mixins:[h],renderTextField:function(){return this.setTextFieldPropsOn(i.createElement('input',{type:'text',className:"_58al",size:this.props.size,tabIndex:this.props.tabIndex,onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onPaste:this.props.onPaste}));}});f.exports=k;},null);
__d('filterObject',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();'use strict';var h=Object.prototype.hasOwnProperty;function i(j,k,l){if(!j)return null;var m={};for(var n in j)if(h.call(j,n)&&k.call(l,j[n],n,j))m[n]=j[n];return m;}f.exports=i;},null);
__d('XUIError',['ARIA','Bootloader','CSS','DataStore','DOM','Event','JSXDOM','Parent','Promise','cx','filterObject','getActiveElement','getElementText','invariant','isNode','memoize','nl2br'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();'use strict';var y=Object.assign||function(ra){for(var sa=1;sa<arguments.length;sa++){var ta=arguments[sa];for(var ua in ta)if(Object.prototype.hasOwnProperty.call(ta,ua))ra[ua]=ta[ua];}return ra;},z='data-xui-error-alignh',aa='XUIError',ba='data-xui-error',ca="_1tp7",da='data-xui-error-position';m.listen(document.documentElement,'mouseover',function(event){if(o.byClass(s(),ca))return;var ra=o.byClass(event.getTarget(),ca);if(ra){na(ra);}else oa();});m.listen(document.documentElement,'focusin',function(event){var ra=o.byClass(event.getTarget(),ca);if(ra){na(ra);}else oa();});m.listen(document.documentElement,'focusout',function(event){oa();});var ea=w(function(){return new p(function(ra,sa){i.loadModules(["ContextualDialog","ContextualLayerAutoFlip","ContextualLayerUpdateOnScroll","LayerRefocusOnHide","React"],function(ta,ua,va,wa,xa){var ya={ContextualDialog:ta,ContextualLayerAutoFlip:ua,ContextualLayerUpdateOnScroll:va,LayerRefocusOnHide:wa,React:xa};ra(y({},ya,fa(ya)));});});});function fa(ra){var sa=ra.ContextualDialog,ta=ra.ContextualLayerAutoFlip,ua=ra.ContextualLayerUpdateOnScroll,va=ra.LayerRefocusOnHide,wa=n.div({className:"_1tp8"}),xa=n.div({className:"_53ij _1tp9"},n.div({className:"_1tpa"}),wa),ya=new sa({addedBehaviors:[ua,ta],theme:{wrapperClassName:"_1tpb",arrowDimensions:{offset:12,length:16}}},xa);ya.disableBehavior(va);ya.shouldSetARIAProperties(false);return {dialog:ya,dialogBodyNode:xa,dialogMessageNode:wa};}var ga=null;function ha(ra){return y({message:ra.getAttribute(ba),position:ra.getAttribute(da),alignh:ra.getAttribute(z)},k.get(ra,aa));}function ia(ra,sa){k.set(ra,aa,sa);}function ja(ra,sa){k.set(ra,aa,y({},k.get(ra,aa),sa));}function ka(ra){k.remove(ra,aa);}var la=false,ma=false;function na(ra){ea().done(function(sa){var ta=sa.React,ua=sa.dialog,va=sa.dialogMessageNode,wa=ha(ra),xa=wa.message;if(xa==null)return;var ya=ta.isValidElement(xa);if(la&&!ya)ta.unmountComponentAtNode(va);if(ya){ta.render(xa,va);}else{!(typeof xa==='string'||v(xa))?u(0):undefined;if(typeof xa==='string')xa=x(xa);l.setContent(va,xa);}la=ya;ua.setContext(ra).setPosition(wa.position||'right').setAlignment(wa.alignh||(wa.position==='above'||wa.position==='below'?'right':null)).show();h.notify(t(va));ga=ra;});ma=true;}function oa(){if(!ma)return;ea().done(function(ra){var sa=ra.React,ta=ra.dialog,ua=ra.dialogMessageNode;if(!ga)return;if(la){sa.unmountComponentAtNode(ua);la=false;}ta.hide();ga=null;});}function pa(ra){if(l.contains(ra,s()))na(ra);}var qa={set:function(ra){var sa=ra.target,ta=ra.message,ua=ra.position,va=ra.alignh;!(ta!==null)?u(0):undefined;j.addClass(sa,ca);ja(sa,r({message:ta,position:ua,alignh:va},function(wa){return wa!==undefined;}));pa(sa);},clear:function(ra){j.removeClass(ra,ca);ra.removeAttribute(ba);ka(ra);if(ra===ga)oa();},updatePosition:function(){if(!ma)return;ea().done(function(ra){var sa=ra.dialog;if(ga)sa.updatePosition();});},__setReactError:function(ra,sa){var ta=sa.message,ua=sa.position,va=sa.alignh;!(ta!==null)?u(0):undefined;ia(ra,{message:ta,position:ua,alignh:va});pa(ra);},__clearReactError:function(ra){ka(ra);if(ra===ga)oa();}};f.exports=qa;},null);
__d('XUIError.react',['React','XUIError','cx','joinClasses','onlyChild'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();'use strict';var m=h.PropTypes,n="_1tp7",o=h.createClass({displayName:'ReactXUIError',propTypes:{xuiError:m.any,xuiErrorPosition:m.oneOf(['above','below','left','right']),xuiErrorAlignh:m.oneOf(['left','center','right'])},componentDidMount:function(){if(this.props.xuiError!=null)i.__setReactError(h.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentDidUpdate:function(){if(this.props.xuiError==null){i.__clearReactError(h.findDOMNode(this));}else i.__setReactError(h.findDOMNode(this),{message:this.props.xuiError,position:this.props.xuiErrorPosition,alignh:this.props.xuiErrorAlignh});},componentWillUnmount:function(){i.__clearReactError(h.findDOMNode(this));},render:function(){var p=l(this.props.children);if(this.props.xuiError!=null)p=h.cloneElement(p,{className:k(p.props.className,n)});return p;}});f.exports=o;},null);
__d('XUITextInput.react',['AbstractTextInput.react','React','XUIError.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=Object.assign||function(o){for(var p=1;p<arguments.length;p++){var q=arguments[p];for(var r in q)if(Object.prototype.hasOwnProperty.call(q,r))o[r]=q[r];}return o;},n=i.createClass({displayName:'XUITextInput',propTypes:m({},h.propTypes,j.propTypes),render:function(){var o="_55r1"+(this.props.height=='tall'?' '+"_55r2":''),p=i.createElement(h,m({},this.props,{ref:'textInput',className:l(this.props.className,o)}));return (i.createElement(j,this.props,p));},focusInput:function(){this.refs.textInput.focusInput();},blurInput:function(){this.refs.textInput.blurInput();}});f.exports=n;},null);
__d('ComposerXStore',['Arbiter','ge'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={};function k(m,n){return 'ComposerX/'+m+'/'+n;}var l={set:function(m,n,o){if(!j[m])j[m]={};j[m][n]=o;h.inform(k(m,n),{},h.BEHAVIOR_STATE);},get:function(m,n){if(j[m])return j[m][n];return null;},getAllForComposer:function(m){return j[m]||{};},waitForComponents:function(m,n,o){h.registerCallback(o,n.map(k.bind(null,m)));}};h.subscribe('page_transition',function(){for(var m in j)if(!i(m))delete j[m];});f.exports=l;},null);
__d('fileSliceName',['UserAgent_DEPRECATED'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='slice',j;if(j=h.chrome()){if(j<21)i='webkitSlice';}else if(j=h.firefox()){if(j<13)i='mozSlice';}else if(!(j=h.safari()))if(h.webkit())i='webkitSlice';f.exports=i;},null);
__d('fileSlice',['fileSliceName'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=b.File&&b.File.prototype[h];f.exports=i;},null);
__d('VideoUploadFeatureDetector',['UserAgent_DEPRECATED','fileSlice'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={supportsChunking:function(){return typeof i==='function'&&this.supportsXHR();},supportsFullProgress:function(){return !h.firefox();},supportsFileAPI:function(){return 'FileList' in window;},supportsFileReading:function(){return 'FileReader' in window&&'DataView' in window;},supportsXHR:function(){return 'FormData' in window;}};f.exports=j;},null);
__d('ComposerXDragDropUtils',['Arbiter','CSS','DOMQuery','Parent','VideoUploadFeatureDetector','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={handleDragEnterAndLeave:function(p){var q=j.scry(k.byClass(p,"_119"),"._2wr");h.subscribe('dragenter',function(r,s){if(p==s.element)q.forEach(i.hide);});h.subscribe('dragleave',function(r,s){if(p==s.element)q.forEach(i.show);});},filterImages:function(p){var q=l.supportsFileAPI(),r=[];for(var s=0;s<p.length;s++)if(p[s].type.match('image/*')){r.push(p[s]);}else if(q&&p[s].type.match('video/*'))r.push(p[s]);return r;}};f.exports=o;},null);
__d('uuid',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(i){var j=Math.random()*16|0,k=i=='x'?j:j&3|8;return k.toString(16);});}f.exports=h;},null);
__d('ComposerXSessionIDs',['DOM','cx','uuid'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l={getSessionID:function(m){return k[m];},resetSessionID:function(m){k[m]=j();},createSessionIDInput:function(m){return h.create('input',{type:'hidden',name:'composer_session_id',className:"_5r_b",value:m});}};f.exports=l;},null);
__d('ShareModeConst',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={SELF_PAGE:'selfpage',PAGE:'page',SELF_POST:'self',FRIEND:'friend',GROUP:'group',ALBUM:'album',MESSAGE:'message',ONE_CLICK:'oneclick',EVENT:'event',UNKNOWN:'unknown'};f.exports=h;},null);
__d('ComposerXMarauderLogger',['Event','ComposerTargetType','ComposerType','ComposerWaterfallEvent','ComposerXSessionIDs','MarauderLogger','ShareModeConst'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=Object.assign||function(s){for(var t=1;t<arguments.length;t++){var u=arguments[t];for(var v in u)if(Object.prototype.hasOwnProperty.call(u,v))s[v]=u[v];}return s;},p={},q=j.NORMAL,r={logEvent:function(s,t,u){if(!u)u={};var v=p[t],w=l.getSessionID(t);if(!v||!w)return;if(u.logOncePerSession){if(!v.loggedEventTypes[w])v.loggedEventTypes[w]={};if(v.loggedEventTypes[w][s])return;v.loggedEventTypes[w][s]=true;}var x=o({},u.extraData,{composer_type:q,composer_version:v.composerVersion,target_type:v.targetType,target_id:v.targetID,ref:v.entryPointRef});if(u.logDetails){x.has_photo=v.hasPhoto;x.has_video=v.hasVideo;x.xy_tag_count=v.numXYTags;x.with_tag_count=v.numWithTags;x.tags_user=v.numUserTags;}m.log(s,'composer',x,undefined,undefined,w);},registerComposer:function(s,t,u,v,w){p[s.id]={targetID:w,targetType:t,entryPointRef:u,composerVersion:v,loggedEventTypes:{},hasPhoto:false,hasVideo:false,numWithTags:0,numXYTags:0,numUserTags:0};},getInstance:function(s){return p[s];},updateHasPhoto:function(s,t){if(!p[s])return;p[s].hasPhoto=t;},updateHasVideo:function(s,t){if(!p[s])return;p[s].hasVideo=t;},updateNumWithTags:function(s,t){if(!p[s])return;p[s].numWithTags=t;},updateNumXYTags:function(s,t){if(!p[s])return;p[s].numXYTags=t;p[s].numWithTags=p[s].numWithTags-t;},updateNumUserTags:function(s,t){if(!p[s])return;p[s].numUserTags=t;},listenForPostEvents:function(s,t){if(!t)return [];return [h.listen(t,'submit',function(){r.logPost(s);}),h.listen(t,'success',function(){r.logPostSuccess(s);}),h.listen(t,'error',function(event){r.logPostFailure(s,{error_info:{error_code:event.data.response.error,error_description:event.data.response.errorDescription,error_summary:event.data.response.errorSummary}});})];},setShareMode:function(s,t){var u=p[s];if(!u)return;switch(t){case n.SELF_POST:u.targetType=i.SELF_USER;break;case n.FRIEND:u.targetType=i.OTHER_USER;break;case n.PAGE:case n.SELF_PAGE:u.targetType=i.PAGE;break;case n.GROUP:u.targetType=i.GROUP;break;default:u.targetType=i.OTHER;}},logEntry:function(s,t){if(typeof t==='string')return;r.logEvent(k.COMPOSER_ENTRY,s,{logOncePerSession:true,extraData:t});},logCompleted:function(s,t){r.logEvent(k.COMPOSER_POST_COMPLETED,s,{extraData:t});},logPost:function(s,t){r.logEvent(k.COMPOSER_POST,s,{extraData:t});},logPostSuccess:function(s,t){r.logEvent(k.COMPOSER_POST_SUCCESS,s,{extraData:t});},logPostFailure:function(s,t){r.logEvent(k.COMPOSER_POST_FAILURE,s,{extraData:t});}};f.exports=r;},null);
__d('PhotosMimeType',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';if(this instanceof h===false)return new h(i);this.$PhotosMimeType1=i.split('/');}h.prototype.isImage=function(){'use strict';return this.$PhotosMimeType1[0]==='image';};h.prototype.isJpeg=function(){'use strict';return this.isImage()&&(this.$PhotosMimeType1[1]==='jpeg'||this.$PhotosMimeType1[1]==='pjpeg');};f.exports=h;},null);
__d('DataTransfer',['PhotosMimeType','createArrayFromMixed','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=new RegExp('\u000D\u000A','g'),l='\u000A',m={'text/rtf':1,'text/html':1};function n(p){if(p.kind=='file')return p.getAsFile();}function o(p){'use strict';this.data=p;this.types=p.types?i(p.types):[];}o.prototype.isRichText=function(){'use strict';return this.types.some(function(p){return m[p];});};o.prototype.getText=function(){'use strict';var p;if(this.data.getData)if(!this.types.length){p=this.data.getData('Text');}else if(this.types.indexOf('text/plain')!=-1)p=this.data.getData('text/plain');return p?p.replace(k,l):null;};o.prototype.getHTML=function(){'use strict';if(this.data.getData)if(!this.types.length){return this.data.getData('Text');}else if(this.types.indexOf('text/html')!=-1)return this.data.getData('text/html');};o.prototype.isLink=function(){'use strict';return this.types.some(function(p){return p.indexOf('url')!=-1||p.indexOf('text/uri-list')!=-1;});};o.prototype.isImage=function(){'use strict';var p=this.types.some(function(t){return t.indexOf('application/x-moz-file')!=-1;});if(p)return true;var q=this.getFiles();for(var r=0;r<q.length;r++){var s=q[r].type;if(!h(s).isImage())return false;}return true;};o.prototype.getCount=function(){'use strict';if(this.data.hasOwnProperty('items')){return this.data.items.length;}else if(this.data.hasOwnProperty('mozItemCount')){return this.data.mozItemCount;}else if(this.data.files)return this.data.files.length;return null;};o.prototype.getFiles=function(){'use strict';if(this.data.items){return Array.prototype.slice.call(this.data.items).map(n).filter(j.thatReturnsArgument);}else if(this.data.files){return Array.prototype.slice.call(this.data.files);}else return [];};o.prototype.hasFiles=function(){'use strict';return this.getFiles().length>0;};f.exports=o;},null);
__d("DragDropFileUpload",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();g.isSupported=function(){return typeof FileList!=="undefined";};},null);
__d('DocumentDragDrop',['Event','Arbiter','CSS','DOM','DOMQuery','DragDropFileUpload','emptyFunction','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p={},q=0;function r(){q=0;o(p).forEach(function(w){j.removeClass(w.element,w.className);i.inform('dragleave',{element:w.element});});}var s=null;function t(){s&&clearTimeout(s);s=setTimeout(function(){r();},500);}function u(){if(!m.isSupported())return;h.listen(document,'dragenter',function(w){if(q===0)o(p).forEach(function(x){j.addClass(x.element,x.className);i.inform('dragenter',{element:x.element,event:w});});q++;t();});h.listen(document,'dragleave',function(w){q--;if(q===0)r();t();});h.listen(document,'drop',function(w){r();var x=w.getTarget();if(l.isNodeOfType(w.getTarget(),'input'))if(x.type==='file')return;w.prevent();});h.listen(document,'dragover',h.prevent);document.addEventListener('dragover',t,true);u=n;}var v={init:function(){u();},registerStatusElement:function(w,x){u();p[k.getID(w)]={element:w,className:x};if(q>0)j.addClass(w,x);},removeStatusElement:function(w){var x=k.getID(w),y=p[x];if(y){j.removeClass(y.element,y.className);delete p[x];}}};f.exports=v;},null);
__d('DragDropTarget',['Arbiter','Event','SubscriptionsHandler','CSS','DataTransfer','DocumentDragDrop','DragDropFileUpload','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();function p(q){this._element=q;this._listeners=new j();this._statusElem=q;this._dragEnterCount=0;this._enabled=false;}Object.assign(p.prototype,{_onFilesDropCallback:o,_onURLDropCallback:o,_onPlainTextDropCallback:o,_onDropCallback:o,_fileFilterFn:o.thatReturnsArgument,setOnDocumentDragEnterCallback:function(q){this._onDocumentDragEnterCallback=q;return this;},setOnDocumentDragLeaveCallback:function(q){this._onDocumentDragLeaveCallback=q;return this;},setOnDragEnterCallback:function(q){this._onDragEnterCallback=q;return this;},setOnDragLeaveCallback:function(q){this._onDragLeaveCallback=q;return this;},setOnFilesDropCallback:function(q){this._onFilesDropCallback=q;return this;},setOnURLDropCallback:function(q){this._onURLDropCallback=q;return this;},setOnPlainTextDropCallback:function(q){this._onPlainTextDropCallback=q;return this;},setOnDropCallback:function(q){this._onDropCallback=q;return this;},enable:function(){if(!n.isSupported())return this;this._listeners.engage();m.registerStatusElement(this._statusElem,'fbWantsDragDrop');this._listeners.addSubscriptions(i.listen(this._element,'dragenter',this._onDragEnter.bind(this)),i.listen(this._element,'dragleave',this._onDragLeave.bind(this)),i.listen(this._element,'dragover',this._onDragOver.bind(this)),i.listen(this._element,'drop',(function(q){this._dragEnterCount=0;k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');var r={},s=false,t=this._fileFilterFn(q.dataTransfer.files);if(t.length){this._onFilesDropCallback(t,q);r.files=t;s=true;}var u=q.dataTransfer.getData('url')||q.dataTransfer.getData('text/uri-list');if(u){this._onURLDropCallback(u,q);r.url=u;s=true;}var v=q.dataTransfer.getData('text/plain');if(v){this._onPlainTextDropCallback(v,q);r.plainText=v;s=true;}if(s)this._onDropCallback(r,q);q.kill();}).bind(this)));this._listeners.addSubscriptions(h.subscribe('dragenter',this._onDocumentDragEnter.bind(this)),h.subscribe('dragleave',this._onDocumentDragLeave.bind(this)));this._enabled=true;return this;},disable:function(){if(!this._enabled)return this;m.removeStatusElement(this._statusElem,'fbWantsDragDrop');k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._listeners.release();this._enabled=false;return this;},setFileFilter:function(q){this._fileFilterFn=q;return this;},setStatusElement:function(q){this._statusElem=q;return this;},_onDragEnter:function(q){if(this._dragEnterCount===0){var r=new l(q.dataTransfer);k.addClass(this._statusElem,'fbDropReady');if(r.isLink()||!r.isImage()){k.addClass(this._statusElem,'fbDropReadyLink');}else if(r.getCount()>1){k.addClass(this._statusElem,'fbDropReadyPhotos');}else k.addClass(this._statusElem,'fbDropReadyPhoto');this._onDragEnterCallback&&this._onDragEnterCallback();}this._dragEnterCount++;q.preventDefault();},_onDragLeave:function(q){this._dragEnterCount=Math.max(this._dragEnterCount-1,0);if(this._dragEnterCount===0){k.removeClass(this._statusElem,'fbDropReady');k.removeClass(this._statusElem,'fbDropReadyPhoto');k.removeClass(this._statusElem,'fbDropReadyPhotos');k.removeClass(this._statusElem,'fbDropReadyLink');this._onDragLeaveCallback&&this._onDragLeaveCallback();}},_onDragOver:function(q){if(!q.dataTransfer){i.kill(q);return;}var r=q.dataTransfer.effectAllowed;q.dataTransfer.dropEffect=r=='move'||r=='linkMove'?'move':'copy';i.kill(q);},_onDocumentDragEnter:function(event,q){if(this._onDocumentDragEnterCallback&&q.element==this._element)this._onDocumentDragEnterCallback();},_onDocumentDragLeave:function(event,q){this._dragEnterCount=0;this._onDragLeave(event);if(this._onDocumentDragLeaveCallback&&q.element==this._element)this._onDocumentDragLeaveCallback();}});f.exports=p;},null);
__d('LitestandComposer',['Arbiter','Bootloader','ReactComposerIDGenerator','Run','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=600;function n(p,q){i.loadModules(["Animation","ComposerXController","ComposerXMarauderLogger","DOM","LitestandStream"],function(r,s,t,u,v){if(!j.isComposerID(p))s.reset(p);if(!v||!q)return;u.prependContent(v.getStreamRoot(),q);new r(q).from('opacity',0).to('opacity',1).duration(m).go();t.logCompleted(p);});}var o={initComposer:function(p){var q=new l();q.addSubscriptions(h.subscribe('LitestandComposer/publish',(function(r,s){if(s.composer_id===p)n(p,s.markup);}).bind(this)));k.onLeave(function(){q.release();});}};f.exports=o;},null);