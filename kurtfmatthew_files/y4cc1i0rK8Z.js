/*!CK:3333119081!*//*1439789355,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RrHiO"]); }

__d('ContextualLayer.react',['ContextualLayer','React','ReactLayer','Style'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=j.createClass({propTypes:{contextRef:l.func,context:function(n,o,p){if(n.context==null==(n.contextRef==null))return new Error('Exactly one of `context` or `contextRef` must be set on `'+(p+'`.'));var q=n[o];if(q!=null){if(typeof q!=='object')return new Error('Invalid `'+o+'` supplied to `'+p+'`, '+'expected a React component.');if(i.isValidElement(q))return new Error('Invalid `'+o+'` supplied to `'+p+'`, '+'expected a React component instance. You\'re passing a React '+'descriptor.');}}},immutableProps:{modal:null},createLayer:function(n){var o=this._getContextNode(),p={context:o,contextBounds:this.props.contextBounds,position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties},q=new h(p,n);this._node=n;this._matchContextSize(this.props);if(this.props.contextBounds)q.setContextWithBounds(o,this.props.contextBounds);q.conditionShow(this.props.shown);return q;},receiveProps:function(n,o){this.updateBehaviors(o.behaviors,n.behaviors);var p=this._getContextNode();if(n.contextBounds){this.layer.setContextWithBounds(p,n.contextBounds);}else this.layer.setContext(p);this._matchContextSize(n);this.layer.setPosition(n.position);this.layer.setAlignment(n.alignment);this.layer.setOffsetX(n.offsetX);this.layer.setOffsetY(n.offsetY);this.layer.conditionShow(n.shown);},getDefaultEnabledBehaviors:function(){return h.getDefaultBehaviorsAsObject();},_getContextNode:function(){var n;if(this.props.context){n=i.findDOMNode(this.props.context);}else if(this.props.contextRef)n=i.findDOMNode(this.props.contextRef());return n;},_matchContextSize:function(n){var o=this._node,p=this._getContextNode();if(n.containerWidthMatchContext)k.set(o,'width',p.offsetWidth+'px');if(n.containerHeightMatchContext)k.set(o,'height',p.offsetHeight+'px');}});f.exports=m;},null);
__d('SearchableTextInput.react',['EventListener','React','AbstractTextFieldMixin.react','AbstractTextInput.react','getActiveElement'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=Object.assign||function(p){for(var q=1;q<arguments.length;q++){var r=arguments[q];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))p[s]=r[s];}return p;},n=i.PropTypes,o=i.createClass({displayName:'SearchableTextInput',propTypes:m({},j.propTypes,{queryString:n.string,searchSource:n.object,searchSourceOptions:n.object,onEntriesFound:n.func.isRequired,searchOnFocus:n.bool,searchOnUpdate:n.bool,required:n.bool,onPaste:n.func,onFocus:n.func,onChange:n.func}),componentDidMount:function(){if(this.props.onPaste)this._listener=h.listen(this.refs.input.getTextFieldDOM(),'paste',this.props.onPaste);},componentWillReceiveProps:function(p){},componentDidUpdate:function(p){if(this.props.searchOnUpdate)if(p.queryString!==this.props.queryString)this.search(this.props.queryString);},componentWillUnmount:function(){if(this._listener){this._listener.remove();this._listener=null;}},_onInputFocus:function(){this.props.searchSource.bootstrap((function(){if(this.props.searchOnFocus)this.search(this.props.queryString);}).bind(this));this.props.onFocus&&this.props.onFocus();},_onSearchCallback:function(p,q,r){if(this.props.queryString===q)this.props.onEntriesFound(p,q,r);},_onChange:function(event){this.props.onChange&&this.props.onChange(event);var p=event.target.value;setTimeout((function(){return this.search(p);}).bind(this));},search:function(p){this.props.searchSource.search(p,this._onSearchCallback,this.props.searchSourceOptions);},focusInput:function(){var p=this.getTextFieldDOM();if(l()===p){this._onInputFocus();}else p.offsetHeight&&p.focus();},blurInput:function(){var p=this.getTextFieldDOM();p.offsetHeight&&p.blur();},getTextFieldDOM:function(){return this.refs.input.getTextFieldDOM();},render:function(){var p=this.props.queryString||'';return (i.createElement(k,m({},this.props,{onChange:this._onChange,onFocus:this._onInputFocus,ref:'input',role:'combobox',value:p})));}});f.exports=o;},null);
__d('SearchSourceQueryStatus',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ACTIVE:'ACTIVE',COMPLETE:'COMPLETE'};f.exports=h;},null);
__d("TypeaheadNavigation",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={moveUp:function(i,j,k){var l=i.indexOf(j),m=l==-1?i.length-1:l-1;k(m==-1?null:i[m]);},moveDown:function(i,j,k){var l=i.indexOf(j)+1;k(l==i.length?null:i[l]);}};f.exports=h;},null);
__d('TypeaheadView.react',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=Object.assign||function(m){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p))m[p]=o[p];}return m;},k=h.PropTypes,l=h.createClass({displayName:'TypeaheadView',propTypes:{entries:k.array.isRequired,extraRendererProps:k.object,highlightedEntry:k.object,isVisible:k.bool,queryString:k.string,Renderer:k.func.isRequired,selectedEntry:k.object},_onSelect:function(m,n){if(this.props.onSelect)this.props.onSelect(m,n);},_onHighlight:function(m){this.props.onHighlight(m);},render:function(){var m=!this.props.isVisible?"hidden_elem":'',n=j({highlightedEntry:this.props.highlightedEntry,selectedEntry:this.props.selectedEntry,entries:this.props.entries,onSelect:this._onSelect,onHighlight:this._onHighlight,onRenderHighlight:this.props.onRenderHighlight,ariaOwneeID:this.props.ariaOwneeID,queryString:this.props.queryString},this.props.extraRendererProps),o=this.props.Renderer;return (h.createElement('div',{className:m},h.createElement(o,n)));}});f.exports=l;},null);
__d('AbstractTypeahead.react',['AbstractTextFieldMixin.react','ContextualLayer.react','InputSelection','React','ReactLayeredComponentMixin','SearchableTextInput.react','SearchSourceQueryStatus','TypeaheadNavigation','TypeaheadView.react','cx','getOrCreateDOMID','joinClasses','uniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=Object.assign||function(z){for(var aa=1;aa<arguments.length;aa++){var ba=arguments[aa];for(var ca in ba)if(Object.prototype.hasOwnProperty.call(ba,ca))z[ca]=ba[ca];}return z;},v=k.PropTypes,w=[],x=10,y=k.createClass({displayName:'AbstractTypeahead',mixins:[l],propTypes:u({},h.propTypes,{inputClassName:v.string,inputID:v.string,autoCapitalize:v.string,autoComplete:v.string,autoCorrect:v.string,queryString:v.string,searchSource:v.object.isRequired,searchSourceOptions:v.object,excludedEntries:v.object,presenter:v.object.isRequired,onSelectAttempt:v.func,onEntriesFound:v.func,onNoEntriesFound:v.func,onEnterWithoutSelection:v.func,autoHighlight:v.bool,showEntriesOnFocus:v.bool,selectOnBlur:v.bool,selectOnTab:v.bool,focusedOnInit:v.bool,hideViewWithEntries:v.bool,disabled:v.bool,entriesWidthMatchContext:v.bool,selectedEntry:v.object,onTypeaheadVisibilityChanged:v.func,onPaste:v.func,navigation:v.object}),getDefaultProps:function(){return {autoComplete:'off',autoCorrect:'off',selectOnBlur:false,selectOnTab:true,hideViewWithEntries:true,entriesWidthMatchContext:true,navigation:o};},getInitialState:function(){return {highlightedEntry:null,isAutoHighlight:this.props.autoHighlight,ariaActiveDescendantID:null,ariaOwneeID:t(),activeEntries:null,focused:!!this.props.focusedOnInit,viewIsVisible:!!this.props.focusedOnInit};},_onRenderHighlight:function(z){var aa=r(z);this.setState({ariaActiveDescendantID:aa});},_determineViewVisibility:function(z,aa){if(!z)return false;var ba=z.length>0&&(this.props.showEntriesOnFocus||this.props.queryString.length>0);return !!(aa&&(this.props.presenter.alwaysVisibleOnFocus||ba));},_onEntriesFound:function(z,aa,ba){if(!this.isMounted())return;if(this.props.excludedEntries){var ca=this.props.excludedEntries;z=z.filter(function(ka){return !ca.hasOwnProperty(ka.getUniqueID());});}var da=this.props.presenter,ea=typeof da.sortEntries=='function'?da.sortEntries(z,this.state.activeEntries,this.props.queryString):z,fa=ea.slice(0,da.maxEntries||x),ga=this._determineViewVisibility(fa,this.state.focused);if(!fa.length){this.setState({ariaActiveDescendantID:null,activeEntries:fa,highlightedEntry:null,isAutoHighlight:this.props.autoHighlight});this._setViewIsVisible(ga);if(this.props.onNoEntriesFound&&ba===n.COMPLETE)this.props.onNoEntriesFound();return;}if(this.props.onEntriesFound)this.props.onEntriesFound(fa,ba);var ha=this.state.highlightedEntry,ia=ha&&fa.indexOf(ha)!==-1;if(!this.props.autoHighlight){this.setState({activeEntries:fa,highlightedEntry:ia?ha:null});if(ga)this._setViewIsVisible(true);return;}var ja=this.state.isAutoHighlight;if(ja){ha=fa[0];}else{ha=ia?ha:fa[0];ja=!ia;}this.setState({activeEntries:fa,highlightedEntry:ha,isAutoHighlight:ja});if(ga)this._setViewIsVisible(true);},_onInputFocus:function(){var z=this._determineViewVisibility(this.state.activeEntries,true);if(z)this._setViewIsVisible(true);this.setState({focused:true});this.props.onFocus&&this.props.onFocus();},_onInputBlur:function(){if(this.props.hideViewWithEntries)this._close();if(this.props.selectOnBlur&&this.state.highlightedEntry)this.props.onSelectAttempt(this.state.highlightedEntry);this.setState({focused:false});this.props.onBlur&&this.props.onBlur();},_onInputClick:function(z){var aa=this.getTextFieldDOM(),ba=j.get(aa);if(ba&&ba.start==ba.end)aa.select();this.props.onClick&&this.props.onClick(z);},_onEscape:function(){this._close();this.blurInput();this.setState({focused:false});this.props.onEscape&&this.props.onEscape();},_onEnter:function(event){if(this.props.onEnterWithoutSelection&&(!this.state.viewIsVisible||!this.state.highlightedEntry)){this.props.onEnterWithoutSelection(event);return;}if(!this.state.viewIsVisible)return;if(!this.state.highlightedEntry){event.preventDefault();return;}if(this.props.hideViewWithEntries)this._close();if(this.props.onSelectAttempt)this.props.onSelectAttempt(this.state.highlightedEntry);event.preventDefault();},_onTab:function(event){if(this.props.selectOnTab&&this.state.viewIsVisible&&this.props.onSelectAttempt&&this.state.highlightedEntry){if(this.props.hideViewWithEntries){this._close();event.preventDefault();}this.props.onSelectAttempt(this.state.highlightedEntry);}},_onDownArrow:function(event){event.preventDefault();this.props.navigation.moveDown(this.state.activeEntries||w,this.state.highlightedEntry,this._setHighlight);},_onUpArrow:function(event){event.preventDefault();this.props.navigation.moveUp(this.state.activeEntries||w,this.state.highlightedEntry,this._setHighlight);},_setHighlight:function(z){this.setState({highlightedEntry:z,isAutoHighlight:!z});},_onInputChange:function(event){if(this.props.onChange)this.props.onChange(event);this._setViewIsVisible(this.state.focused&&(this.props.showEntriesOnFocus||event.target.value.length>0)&&(this.state.activeEntries!=null&&this.state.activeEntries.length>0));},_onViewHighlight:function(z){this.setState({highlightedEntry:z,isAutoHighlight:false});},_getView:function(){return (k.createElement(p,{Renderer:this.props.presenter.ViewRenderer,extraRendererProps:this.props.presenter.extraRendererProps,highlightedEntry:this.state.highlightedEntry,selectedEntry:this.props.selectedEntry,isVisible:this.state.viewIsVisible,ariaOwneeID:this.state.ariaOwneeID,onHighlight:this._onViewHighlight,onRenderHighlight:this._onRenderHighlight,onSelect:this.props.onSelectAttempt,entries:this.state.activeEntries||w,queryString:this.props.queryString}));},_setViewIsVisible:function(z){if(z!==this.state.viewIsVisible){if(this.props.onTypeaheadVisibilityChanged)this.props.onTypeaheadVisibilityChanged(z,this.state.activeEntries||w);this.setState({viewIsVisible:z});}},componentWillReceiveProps:function(z){if(!z.queryString&&!this.props.showEntriesOnFocus)this.clearActiveEntries();},componentDidUpdate:function(){var z=this._determineViewVisibility(this.state.activeEntries,this.state.focused);if(z)this._setViewIsVisible(true);},renderLayers:function(){if(!this.props.presenter.useLayer)return {};var z=null,aa=null;if(this.props.context){z=this.props.context;}else aa=(function(){return this.refs.input;}).bind(this);return {typeaheadView:k.createElement(i,{alignment:this.props.presenter.alignment,behaviors:this.props.presenter.layerBehaviors,containerWidthMatchContext:this.props.entriesWidthMatchContext,contextRef:aa,context:z,position:this.props.presenter.layerPosition||"below",shown:this.state.viewIsVisible,shouldSetARIAProperties:false},this._getView())};},render:function(){var z=this.state.activeEntries,aa=!!(z&&z.length),ba=k.createElement(m,{'aria-activedescendant':this.state.ariaActiveDescendantID,'aria-expanded':aa,'aria-autocomplete':'list','aria-label':this.props.ariaLabel,'aria-owns':this.state.ariaOwneeID,required:this.props.required,ref:'input',autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,className:this.props.inputClassName,id:this.props.inputID,queryString:this.props.queryString,placeholder:this.props.placeholder,maxLength:this.props.maxLength,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,searchOnFocus:!!this.props.showEntriesOnFocus,disabled:this.props.disabled,onEntriesFound:this._onEntriesFound,onEscape:this._onEscape,onBlur:this._onInputBlur,onFocus:this._onInputFocus,onChange:this._onInputChange,onDownArrow:this._onDownArrow,onUpArrow:this._onUpArrow,onTab:this._onTab,onEnter:this._onEnter,onBackspace:this.props.onBackspace,onPaste:this.props.onPaste,onClick:this._onInputClick,tabIndex:this.props.tabIndex}),ca=null;if(!this.props.presenter.useLayer)ca=this._getView();return (k.createElement('span',u({},this.props,{className:s(this.props.className,"_58ah"),onBlur:null,onClick:null,onFocus:null,tabIndex:null}),ba,ca));},componentDidMount:function(){if(this.props.focusedOnInit)this.refs.input.focusInput();},clearActiveEntries:function(){this.setState({ariaActiveDescendantID:null,activeEntries:null,highlightedEntry:null});},focusInput:function(){this.refs.input.focusInput();},blurInput:function(){if(this.refs.input.blur){this.refs.input.blur();}else if(this.refs.input.blurInput)this.refs.input.blurInput();},hideView:function(){this._setViewIsVisible(false);},_close:function(){this._setViewIsVisible(false);this.clearActiveEntries();},getTextFieldDOM:function(){return this.refs.input.getTextFieldDOM();}});f.exports=y;},null);
__d('TypeaheadViewPropTypes',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes,j={ariaOwneeID:i.string,highlightedEntry:i.object,entries:i.array.isRequired,onSelect:i.func.isRequired,onHighlight:i.func,onRenderHighlight:i.func,role:i.string};f.exports=j;},null);
__d('XUITypeaheadTextOnlyView.react',['React','TypeaheadViewItem','TypeaheadViewPropTypes','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'XUITypeaheadTextOnlyViewItem',mixins:[i.Mixin],propTypes:i.propTypes,render:function(){var n=this.props.entry,o="_599m"+(this.props.highlighted?' '+"_599n":'');return (h.createElement('li',{'aria-label':n.getTitle(),'aria-selected':this.props.highlighted,className:o,key:n.getUniqueID(),onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role,title:n.getTitle()},h.createElement('div',{className:"_599p"},n.getTitle())));}}),m=h.createClass({displayName:'XUITypeaheadTextOnlyView',propTypes:j,getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(n){var o=n===this.props.highlightedEntry;return (h.createElement(l,{entry:n,highlighted:o,key:n.getUniqueID(),onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var n="_599r"+(!this.props.entries.length?' '+"_599s":'');return (h.createElement('ul',{className:n,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});f.exports=m;},null);
__d('XUITypeaheadViewContainer.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUITypeaheadViewContainer',render:function(){return (h.createElement('ul',{className:j("_599r",this.props.className),id:this.props.arieaOwneeID,role:this.props.role},this.props.children));}});f.exports=k;},null);
__d('XUITypeaheadViewItem.react',['BackgroundImage.react','Badge.react','ImageBlock.react','React','TypeaheadViewItem','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=Object.assign||function(r){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u))r[u]=t[u];}return r;},p=k.PropTypes,q=k.createClass({displayName:'XUITypeaheadViewItem',mixins:[l.Mixin],propTypes:o({},l.propTypes,{splitText:p.bool}),render:function(){var r=this.props.entry,s=this.props.splitSubtext?r.getSubtitle().split(' \u00b7 ')[0]:r.getSubtitle(),t=s?k.createElement('div',{className:"_599q"},s):null,u=r.getPhoto()?k.createElement(h,{width:32,height:32,backgroundSize:'cover',src:r.getPhoto()}):k.createElement('span',null),v=r.getAuxiliaryData(),w=null;if(v&&v.verified)w=k.createElement(i,null);var x="_599m"+(!t?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":'');x=n(x,this.props.className);return (k.createElement('li',{'aria-selected':this.props.highlighted,className:x,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},k.createElement(j,{spacing:'medium'},u,k.createElement('div',null,k.createElement('div',{className:"_599p"},r.getTitle(),w),t))));}});f.exports=q;},null);
__d('XUITypeaheadView.react',['React','TypeaheadViewPropTypes','XUITypeaheadViewContainer.react','XUITypeaheadViewItem.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.createClass({displayName:'XUITypeaheadView',propTypes:i,getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(n){var o=n===this.props.highlightedEntry;return (h.createElement(k,{key:n.getUniqueID(),entry:n,highlighted:o,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var n=!this.props.entries.length?"_599s":'';return (h.createElement(j,{className:n,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});f.exports=m;},null);
__d('update',['Object.assign','keyOf','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();'use strict';var k=({}).hasOwnProperty;function l(w){if(Array.isArray(w)){return w.concat();}else if(w&&typeof w==='object'){return h(new w.constructor(),w);}else return w;}var m=i({$push:null}),n=i({$unshift:null}),o=i({$splice:null}),p=i({$set:null}),q=i({$merge:null}),r=i({$apply:null}),s=[m,n,o,p,q,r],t={};s.forEach(function(w){t[w]=true;});function u(w,x,y){!Array.isArray(w)?j(0):undefined;var z=x[y];!Array.isArray(z)?j(0):undefined;}function v(w,x){!(typeof x==='object')?j(0):undefined;if(k.call(x,p)){!(Object.keys(x).length===1)?j(0):undefined;return x[p];}var y=l(w);if(k.call(x,q)){var z=x[q];!(z&&typeof z==='object')?j(0):undefined;!(y&&typeof y==='object')?j(0):undefined;h(y,x[q]);}if(k.call(x,m)){u(w,x,m);x[m].forEach(function(ba){y.push(ba);});}if(k.call(x,n)){u(w,x,n);x[n].forEach(function(ba){y.unshift(ba);});}if(k.call(x,o)){!Array.isArray(w)?j(0):undefined;!Array.isArray(x[o])?j(0):undefined;x[o].forEach(function(ba){!Array.isArray(ba)?j(0):undefined;y.splice.apply(y,ba);});}if(k.call(x,r)){!(typeof x[r]==='function')?j(0):undefined;y=x[r](y);}for(var aa in x)if(!(t.hasOwnProperty(aa)&&t[aa]))y[aa]=v(w[aa],x[aa]);return y;}f.exports=v;},null);
__d('XUITypeahead.react',['AbstractTypeahead.react','React','Image.react','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','cx','joinClasses','update'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=Object.assign||function(z){for(var aa=1;aa<arguments.length;aa++){var ba=arguments[aa];for(var ca in ba)if(Object.prototype.hasOwnProperty.call(ba,ca))z[ca]=ba[ca];}return z;};function t(z,aa){var ba={};for(var ca in z){if(aa.indexOf(ca)>=0)continue;if(!Object.prototype.hasOwnProperty.call(z,ca))continue;ba[ca]=z[ca];}return ba;}var u=i.PropTypes,v={ViewRenderer:o,useLayer:true},w={ViewRenderer:o,useLayer:false},x={ViewRenderer:n,useLayer:true},y=i.createClass({displayName:'XUITypeahead',propTypes:s({maxEntries:u.number,onChange:u.func.isRequired,onSelectAttempt:u.func.isRequired,onEntriesFound:u.func,onNoEntriesFound:u.func,selectedEntry:u.instanceOf(k),tallInput:u.bool,viewStyle:u.oneOf(['textonly','rich','richNoLayer']),clearable:u.bool,onClear:u.func,showPhoto:u.bool,highlightOnSelect:u.bool,presenter:u.object,inputID:u.string},m.propTypes),getDefaultProps:function(){return {viewStyle:'rich'};},componentWillMount:function(){},focusInput:function(){this.refs.typeahead&&this.refs.typeahead.focusInput();},blurInput:function(){this.refs.typeahead&&this.refs.typeahead.blurInput();},hideView:function(){this.refs.typeahead.hideView();},getTextFieldDOM:function(){return this.refs.typeahead.getTextFieldDOM();},_onClear:function(){this.props.onClear();setTimeout((function(){return this.focusInput();}).bind(this),0);},render:function(){var z="_55r1"+(!!this.props.tallInput?' '+"_55r2":''),aa=null;if(this.props.presenter){aa=this.props.presenter;}else if(this.props.viewStyle=='rich'){aa=v;}else if(this.props.viewStyle=='richNoLayer'){aa=w;}else aa=x;if(!this.props.presenter&&this.props.maxEntries)aa=r(aa,{maxEntries:{$set:this.props.maxEntries}});var ba=this.props.showPhoto&&this.props.selectedEntry?i.createElement(j,{className:"_wrl",src:this.props.selectedEntry.getPhoto()}):null,ca=this.props.clearable?i.createElement(l,{className:"_wrm"+(!this.props.queryString?' '+"hidden_elem":''),size:this.props.tallInput?'medium':'small',type:'button',onClick:this._onClear}):null,da=this.props,ea=da.className,fa=t(da,['className']);return (i.createElement(m,this.props,i.createElement('span',{className:q("_wrn"+(!!this.props.tallInput?' '+"_213j":'')+(!!ca?' '+"_4ehf":'')+(!!ba?' '+"_4ehg":'')+(!!this.props.queryString?' '+"_4in7":'')+(this.props.highlightOnSelect&&this.props.selectedEntry?' '+"_wrr":''),ea)},ba,i.createElement(h,s({},fa,{inputClassName:z,ref:'typeahead',presenter:aa})),ca)));}});f.exports=y;},null);
__d('AbstractSearchSource',['Promise'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){}var j={bootstrap:function(k){if(!this._bootstrapPromise)this._bootstrapPromise=new h((function(l){this.bootstrapImpl(l);}).bind(this));return this._bootstrapPromise.then(k);},search:function(k,l,m){this.searchImpl(k,l,m);},bootstrapImpl:function(k){k();},searchImpl:function(k,l,m){throw new Error('Abstract method #searchImpl is not implemented.');}};Object.assign(i.prototype,j);i.Mixin=j;f.exports=i;},null);
__d('SearchSourceCallbackManager',['SearchSourceQueryStatus','createObjectFrom','invariant'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.ACTIVE,l=h.COMPLETE;function m(o){'use strict';this.$SearchSourceCallbackManager1=o.parseFn;!(typeof this.$SearchSourceCallbackManager1==='function')?j(0):undefined;this.$SearchSourceCallbackManager2=o.matchFn;!(typeof this.$SearchSourceCallbackManager2==='function')?j(0):undefined;this.$SearchSourceCallbackManager3=o.alwaysPrefixMatch||false;this.$SearchSourceCallbackManager4=o.indexFn||n;this.reset();}m.prototype.search=function(o,p,q){'use strict';var r=this.$SearchSourceCallbackManager5(o,p,q);if(r)return 0;this.$SearchSourceCallbackManager6.push({queryString:o,callback:p,options:q});var s=this.$SearchSourceCallbackManager6.length-1;this.$SearchSourceCallbackManager7.push(s);return s;};m.prototype.$SearchSourceCallbackManager5=function(o,p,q){'use strict';var r=this.$SearchSourceCallbackManager8(o),s=!!this.$SearchSourceCallbackManager9[o];if(!r.length){p([],o,s?l:k);return s;}var t=r.map(function(u){return this.$SearchSourceCallbackManager10[u];},this);p(t,o,s?l:k);return s;};m.prototype.$SearchSourceCallbackManager11=function(){'use strict';var o=this.$SearchSourceCallbackManager7;this.$SearchSourceCallbackManager7=[];o.forEach(this.$SearchSourceCallbackManager12,this);};m.prototype.$SearchSourceCallbackManager12=function(o){'use strict';var p=this.$SearchSourceCallbackManager6[o];if(!p)return;var q=this.$SearchSourceCallbackManager5(p.queryString,p.callback,p.options);if(q){delete this.$SearchSourceCallbackManager6[o];return;}this.$SearchSourceCallbackManager7.push(o);};m.prototype.reset=function(){'use strict';this.$SearchSourceCallbackManager10={};this.$SearchSourceCallbackManager13={};this.$SearchSourceCallbackManager14={};this.$SearchSourceCallbackManager15={};this.$SearchSourceCallbackManager9={};this.$SearchSourceCallbackManager7=[];this.$SearchSourceCallbackManager6=[undefined];};m.prototype.addLocalEntries=function(o){'use strict';o.forEach(function(p){var q=p.getUniqueID(),r=this.$SearchSourceCallbackManager4(p);this.$SearchSourceCallbackManager10[q]=p;this.$SearchSourceCallbackManager13[q]=r;var s=this.$SearchSourceCallbackManager1(r);s.tokens.forEach(function(t){if(!this.$SearchSourceCallbackManager14.hasOwnProperty(t))this.$SearchSourceCallbackManager14[t]={};this.$SearchSourceCallbackManager14[t][q]=true;},this);},this);this.$SearchSourceCallbackManager11();};m.prototype.addQueryEntries=function(o,p,q){'use strict';if(q===l)this.setQueryStringAsExhausted(p);var r=this.$SearchSourceCallbackManager8(p),s=this.$SearchSourceCallbackManager1(p).flatValue;this.$SearchSourceCallbackManager15[s]=i(r,true);o.forEach(function(t){var u=t.getUniqueID();this.$SearchSourceCallbackManager10[u]=t;this.$SearchSourceCallbackManager13[u]=this.$SearchSourceCallbackManager4(t);this.$SearchSourceCallbackManager15[s][u]=true;},this);this.$SearchSourceCallbackManager11();};m.prototype.unsubscribe=function(o){'use strict';delete this.$SearchSourceCallbackManager6[o];};m.prototype.removeEntry=function(o){'use strict';delete this.$SearchSourceCallbackManager10[o];};m.prototype.getAllEntriesMap=function(){'use strict';return this.$SearchSourceCallbackManager10;};m.prototype.setQueryStringAsExhausted=function(o){'use strict';this.$SearchSourceCallbackManager9[o]=true;};m.prototype.unsetQueryStringAsExhausted=function(o){'use strict';delete this.$SearchSourceCallbackManager9[o];};m.prototype.$SearchSourceCallbackManager8=function(o){'use strict';var p=this.$SearchSourceCallbackManager16(o,this.$SearchSourceCallbackManager17(o)),q=this.$SearchSourceCallbackManager16(o,this.$SearchSourceCallbackManager18(o)),r=p.concat(q),s={},t=[];r.forEach(function(u){if(!s[u]&&this.$SearchSourceCallbackManager10[u]!==undefined){t.push(u);s[u]=true;}},this);return t;};m.prototype.$SearchSourceCallbackManager16=function(o,p){'use strict';var q=this.$SearchSourceCallbackManager19(o,p),r=this.$SearchSourceCallbackManager10;function s(t,u){if(q[t]!==q[u])return q[t]?-1:1;var v=r[t],w=r[u];if(v.getOrder()!==w.getOrder())return v.getOrder()-w.getOrder();var x=v.getTitle().length,y=w.getTitle().length;if(x!==y)return x-y;return v.getUniqueID()-w.getUniqueID();}return p.sort(s).slice();};m.prototype.$SearchSourceCallbackManager19=function(o,p){'use strict';var q={};p.forEach(function(r){q[r]=this.$SearchSourceCallbackManager2(o,this.$SearchSourceCallbackManager13[r]);},this);return q;};m.prototype.$SearchSourceCallbackManager17=function(o){'use strict';var p=this.$SearchSourceCallbackManager1(o,this.$SearchSourceCallbackManager3),q=this.$SearchSourceCallbackManager3?p.sortedTokens:p.tokens,r=q.length,s=p.isPrefixQuery?r-1:null,t={},u={},v={},w=false,x={},y=0;q.forEach(function(aa,ba){if(x.hasOwnProperty(aa))return;y++;x[aa]=true;for(var ca in this.$SearchSourceCallbackManager14){var da=ca===aa&&!t.hasOwnProperty(ca),ea=false;if(!da)ea=(this.$SearchSourceCallbackManager3||s===ba)&&ca.indexOf(aa)===0;if(!da&&!ea)continue;if(ca===aa){if(u.hasOwnProperty(ca))w=true;t[ca]=true;}else{if(t.hasOwnProperty(ca)||u.hasOwnProperty(ca))w=true;u[ca]=true;}for(var fa in this.$SearchSourceCallbackManager14[ca])if(ba===0||v.hasOwnProperty(fa)&&v[fa]==y-1)v[fa]=y;}},this);var z=Object.keys(v).filter(function(aa){return v[aa]==y;});if(w||y<r)z=this.$SearchSourceCallbackManager20(o,z);return z;};m.prototype.$SearchSourceCallbackManager18=function(o){'use strict';var p=this.$SearchSourceCallbackManager1(o).flatValue,q=this.$SearchSourceCallbackManager21(p);if(this.$SearchSourceCallbackManager15.hasOwnProperty(p))return q;return this.$SearchSourceCallbackManager20(o,q);};m.prototype.$SearchSourceCallbackManager21=function(o){'use strict';var p=0,q=null,r=this.$SearchSourceCallbackManager15;Object.keys(r).forEach(function(s){if(o.indexOf(s)===0&&s.length>p){p=s.length;q=s;}});return (r.hasOwnProperty(q)?Object.keys(r[q]):[]);};m.prototype.$SearchSourceCallbackManager20=function(o,p){'use strict';return p.filter(function(q){return this.$SearchSourceCallbackManager2(o,this.$SearchSourceCallbackManager13[q]);},this);};function n(o){return [o.getTitle(),o.getKeywordString()].join(' ');}f.exports=m;},null);
__d('AbstractAsyncSearchSource',['AbstractSearchSource','SearchSourceCallbackManager','SearchSourceQueryStatus','SearchableEntry','TokenizeUtil','emptyFunction','isValidUniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=Object.assign||function(u){for(var v=1;v<arguments.length;v++){var w=arguments[v];for(var x in w)if(Object.prototype.hasOwnProperty.call(w,x))u[x]=w[x];}return u;},p,q,r=j.ACTIVE,s=j.COMPLETE;p=h;q=p&&p.prototype;Object.assign(t,p);t.prototype=Object.create(p.prototype);t.prototype.constructor=t;t.__superConstructor__=p;function t(u,v,w){'use strict';q.constructor.call(this);this.$AbstractAsyncSearchSource1=u.bootstrapRequests;this.$AbstractAsyncSearchSource2=u.queryRequests;this.$AbstractAsyncSearchSource3=u.auxiliaryFields;this.$AbstractAsyncSearchSource4=u.asyncErrorHandler||m;this.$AbstractAsyncSearchSource5=u.packageFn||this.$AbstractAsyncSearchSource6;this.$AbstractAsyncSearchSource7=u.requestData||{};this.$AbstractAsyncSearchSource8=u.getAllForEmptyQuery;this.$AbstractAsyncSearchSource9=[];this.$AbstractAsyncSearchSource10=new i({parseFn:l.parse,matchFn:l.isQueryMatch,indexFn:u.indexFn});this.$AbstractAsyncSearchSource11=v;this.$AbstractAsyncSearchSource12=w;}t.prototype.bootstrapImpl=function(u){'use strict';if(!this.$AbstractAsyncSearchSource1||!this.$AbstractAsyncSearchSource1.length){u();return;}var v=this.$AbstractAsyncSearchSource1.length,w=0;this.$AbstractAsyncSearchSource1.forEach((function(x){this.$AbstractAsyncSearchSource13(this.$AbstractAsyncSearchSource7,x,(function(y){this.$AbstractAsyncSearchSource10.addLocalEntries(y);this.$AbstractAsyncSearchSource9=this.$AbstractAsyncSearchSource9.concat(y);w++;if(w===v){u();u=null;}}).bind(this));}).bind(this));};t.prototype.searchImpl=function(u,v,w){'use strict';if(this.$AbstractAsyncSearchSource8&&u===''){this.getBootstrappedEntries(function(ca){v(ca,u);});return;}var x=null,y={},z=this.$AbstractAsyncSearchSource10.search(u,function(ca,da,ea){if(!x){x=ca;x.forEach(function(fa){y[fa.getUniqueID()]=true;});}else ca.forEach(function(fa){var ga=fa.getUniqueID();if(!y[ga]){x.push(fa);y[ga]=true;}});v(x,da,ea);},w);if(!z||!this.$AbstractAsyncSearchSource2||!this.$AbstractAsyncSearchSource2.length)return;var aa=o({value:u,existing_ids:x&&x.map(function(ca){return ca.getUniqueID();}).join(',')},this.$AbstractAsyncSearchSource7),ba=this.$AbstractAsyncSearchSource2.length;this.$AbstractAsyncSearchSource2.forEach(function(ca){this.$AbstractAsyncSearchSource13(aa,ca,(function(da){ba--;this.$AbstractAsyncSearchSource14(da,u,ba?r:s);}).bind(this));},this);};t.prototype.getBootstrappedEntries=function(u){'use strict';return this.bootstrap((function(){return u(this.$AbstractAsyncSearchSource9||[]);}).bind(this));};t.prototype.getAllEntriesMap=function(){'use strict';return this.$AbstractAsyncSearchSource10.getAllEntriesMap();};t.prototype.setRequestData=function(u){'use strict';this.$AbstractAsyncSearchSource7=u;};t.prototype.$AbstractAsyncSearchSource13=function(u,v,w){'use strict';this.$AbstractAsyncSearchSource11(u,v,(function(x){return (w(this.$AbstractAsyncSearchSource12(x,this.$AbstractAsyncSearchSource5).filter(function(y){return !!y;})));}).bind(this),this.$AbstractAsyncSearchSource4);};t.prototype.$AbstractAsyncSearchSource15=function(u){'use strict';this.$AbstractAsyncSearchSource10.addLocalEntries(u);};t.prototype.$AbstractAsyncSearchSource14=function(u,v,w){'use strict';this.$AbstractAsyncSearchSource10.addQueryEntries(u,v,w);};t.prototype.$AbstractAsyncSearchSource6=function(u,v){'use strict';var w=u.title||u.text,x=u.uniqueID||u.uid;if(!w||!n(x))return null;return new k({uniqueID:x,order:u.order||u.index||v,title:w,subtitle:u.subtitle||u.category||u.subtext,keywordString:u.keywordString||u.tokens,type:u.type,photo:u.photo,uri:u.uri||u.path,auxiliaryData:this.$AbstractAsyncSearchSource16(u)});};t.prototype.$AbstractAsyncSearchSource16=function(u){'use strict';var v;if(this.$AbstractAsyncSearchSource3){v={};for(var w in this.$AbstractAsyncSearchSource3){var x=this.$AbstractAsyncSearchSource3[w];v[w]=u[x];}}if(u.aux_data)v=o({},v,u.aux_data);return v;};f.exports=t;},null);
__d('FeedPlaceHolderStory.react',['Locale','React','XUICard.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.createClass({displayName:'FeedPlaceHolderStory',render:function(){return (i.createElement(j,{className:l("_2iwp",this.props.className)},i.createElement('div',{className:(h.isRTL()?"direction_rtl":'')+(' '+"_2iwo")},i.createElement('div',{className:"_2iwq"},i.createElement('div',{className:"_2iwr"}),i.createElement('div',{className:"_2iws"}),i.createElement('div',{className:"_2iwt"}),i.createElement('div',{className:"_2iwu"}),i.createElement('div',{className:"_2iwv"}),i.createElement('div',{className:"_2iww"}),i.createElement('div',{className:"_2iwx"}),i.createElement('div',{className:"_2iwy"}),i.createElement('div',{className:"_2iwz"}),i.createElement('div',{className:"_2iw-"}),i.createElement('div',{className:"_2iw_"}),i.createElement('div',{className:"_2ix0"})))));}});f.exports=m;},null);
__d('highlight',['Animation','Style'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m,n){new h(k).from('background',n||'#fff9d7').to('background',m||'#fff').ease(h.ease.both).duration(2000).ondone(function(){i.set(k,'background','');l&&l();}).go();}f.exports=j;},null);
__d("TimelineLoadState",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={NOT_LOADED:0,LOADING:1,LOADED:2};f.exports=h;},null);
__d('TimelineCapsuleUtilities',['CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={setFirstUnit:function(j){var k=true;for(var l=0;l<j.childNodes.length;++l){var m=j.childNodes[l];if(m.id.indexOf('tl_unit_')===0)if(k){k=false;h.addClass(m,'firstUnit');}else{h.removeClass(m,'firstUnit');break;}}}};f.exports=i;},null);
__d('WebAsyncSearchSourceUtils',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={normalizeResponse:function(i,j){var k=i.getPayload(),l;if(Array.isArray(k)){l=k;}else if(k&&k.entries){l=k.entries;}else l=[];return l.map(j,this);}};f.exports=h;},null);
__d('WebAsyncSearchSource',['AbstractAsyncSearchSource','AbstractSearchSource','AsyncRequest','WebAsyncSearchSourceUtils'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=Object.assign||function(p){for(var q=1;q<arguments.length;q++){var r=arguments[q];for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s))p[s]=r[s];}return p;},m,n;m=i;n=m&&m.prototype;Object.assign(o,m);o.prototype=Object.create(m.prototype);o.prototype.constructor=o;o.__superConstructor__=m;function o(p){'use strict';n.constructor.call(this);this.$WebAsyncSearchSource1=new h(p,this.$WebAsyncSearchSource2,k.normalizeResponse);}o.prototype.bootstrapImpl=function(p){'use strict';this.$WebAsyncSearchSource1.bootstrap(p);};o.prototype.searchImpl=function(p,q,r){'use strict';this.$WebAsyncSearchSource1.search(p,q,r);};o.prototype.getBootstrappedEntries=function(p){'use strict';return this.$WebAsyncSearchSource1.getBootstrappedEntries(p);};o.prototype.getAllEntriesMap=function(){'use strict';return this.$WebAsyncSearchSource1.getAllEntriesMap();};o.prototype.setRequestData=function(p){'use strict';this.$WebAsyncSearchSource1.setRequestData(p);};o.prototype.$WebAsyncSearchSource2=function(p,q,r,s){'use strict';new j(q.uri).setData(l({},p,q.data)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(r).setErrorHandler(s).send();};f.exports=o;},null);