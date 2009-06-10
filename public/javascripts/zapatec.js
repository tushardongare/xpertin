/*
 *
 * Copyright (c) 2004-2009 by Zapatec, Inc.
 * http://www.zapatec.com
 * 1700 MLK Way, Berkeley, California,
 * 94709, U.S.A.
 * All rights reserved.
 *
 *
 */


if(typeof Zapatec=='undefined'){Zapatec=function(){};}
Zapatec.version='07-02';if(typeof zapatecDoNotInclude=='undefined'){zapatecDoNotInclude=0;}
if(typeof zapatecDoNotLoadThemes=='undefined'){zapatecDoNotLoadThemes=0;}
if(Zapatec.doNotInclude){zapatecDoNotInclude=1;}
if(typeof zapatecDict!='function'){zapatecTranslate=Zapatec.translate=function(sPhrase){return sPhrase;};zapatecTranslateArray=Zapatec.translateArray=function(aArray){return aArray;};}
if(typeof Zapatec.zapatecPath=='undefined'){Zapatec.zapatecPath=function(){if(document.documentElement){var aTokens=document.documentElement.innerHTML.match(/<script[^>]+src="([^"]*zapatec(-src)?\.js[^"]*)"/i);if(aTokens&&aTokens.length>=2){aTokens=aTokens[1].split('?');aTokens=aTokens[0].split('/');if(Array.prototype.pop){aTokens.pop();}else{aTokens.length-=1;}
return aTokens.length?aTokens.join('/')+'/':'';}}
return'';}();}
if(typeof zapatecUtils!='function'){if(typeof Zapatec=='undefined'){Zapatec=function(){};}
Zapatec.Utils=function(){};zapatecUtils=Zapatec.Utils;Zapatec.Utils.getAbsolutePos=function(el,scrollOff){var SL=0,ST=0;if(!scrollOff){var is_div=/^div$/i.test(el.tagName);if(is_div&&el.scrollLeft)
SL=el.scrollLeft;if(is_div&&el.scrollTop)
ST=el.scrollTop;}
var r={x:el.offsetLeft-SL,y:el.offsetTop-ST};if(el.offsetParent){var tmp=this.getAbsolutePos(el.offsetParent);r.x+=tmp.x;r.y+=tmp.y;}
return r;};Zapatec.Utils.getElementOffset=function(oEl){if(!oEl){return;}
var iLeft=iTop=iWidth=iHeight=0;var sTag;if(typeof oEl.getBoundingClientRect=='function'){var oRect=oEl.getBoundingClientRect();iLeft=oRect.left;iTop=oRect.top;iWidth=oRect.right-iLeft;iHeight=oRect.bottom-iTop;iLeft+=zapatecUtils.getPageScrollX();iTop+=zapatecUtils.getPageScrollY();if(Zapatec.is_ie){iLeft-=2;iTop-=2;}}else{iWidth=oEl.offsetWidth;iHeight=oEl.offsetHeight;var sPos=Zapatec.Utils.getStyleProperty(oEl,'position');if(sPos=='fixed'){iLeft=oEl.offsetLeft+Zapatec.Utils.getPageScrollX();iTop=oEl.offsetTop+Zapatec.Utils.getPageScrollY();}else if(sPos=='absolute'){while(oEl){sTag=oEl.tagName;if(sTag){sTag=sTag.toLowerCase();if(sTag!='body'&&sTag!='html'||Zapatec.is_khtml){iLeft+=parseInt(oEl.offsetLeft,10)||0;iTop+=parseInt(oEl.offsetTop,10)||0;}}
oEl=oEl.offsetParent;sTag=oEl?oEl.tagName:null;if(sTag){sTag=sTag.toLowerCase();if(sTag!='body'&&sTag!='html'){iLeft-=oEl.scrollLeft;iTop-=oEl.scrollTop;}}}}else{var bMoz=(Zapatec.is_gecko&&!Zapatec.is_khtml);var fStyle=Zapatec.Utils.getStyleProperty;var oP=oEl;while(oP){if(bMoz){sTag=oP.tagName;if(sTag){sTag=sTag.toLowerCase();if(sTag=='body'&&!(fStyle(oP,'-moz-box-sizing')=='border-box')){iLeft+=parseInt(fStyle(oP,'border-left-width'));iTop+=parseInt(fStyle(oP,'border-top-width'));}}}
iLeft+=parseInt(oP.offsetLeft,10)||0;iTop+=parseInt(oP.offsetTop,10)||0;oP=oP.offsetParent;}
oP=oEl;while(oP.parentNode){oP=oP.parentNode;sTag=oP.tagName;if(sTag){sTag=sTag.toLowerCase();if(sTag!='body'&&sTag!='html'&&sTag!='tr'){iLeft-=oP.scrollLeft;iTop-=oP.scrollTop;}}}}}
return{left:iLeft,top:iTop,x:iLeft,y:iTop,width:iWidth,height:iHeight};};zapatecUtilsGetElementOffset=Zapatec.Utils.getElementOffset;Zapatec.Utils.getElementOffsetScrollable=function(oEl){var oOffset=zapatecUtilsGetElementOffset(oEl);if(!oOffset){return;}
if(oEl.scrollLeft){oOffset.left-=oEl.scrollLeft;oOffset.x=oOffset.left;}
if(oEl.scrollTop){oOffset.top-=oEl.scrollTop;oOffset.y=oOffset.top;}
return oOffset;};Zapatec.Utils.getElementOffsetRelative=function(oEl){var fOffset=zapatecUtils.getElementOffsetScrollable;var oOffset=fOffset(oEl);if(!oOffset){return;}
var oEl=oEl.offsetParent;while(oEl){var sPosition=zapatecUtils.getStyleProperty(oEl,'position');if(sPosition!='static'){var oOffsetParent=fOffset(oEl);oOffset.left-=oOffsetParent.left;oOffset.x=oOffset.left;oOffset.top-=oOffsetParent.top;oOffset.y=oOffset.top;return oOffset;}
oEl=oEl.offsetParent;}
return oOffset;};Zapatec.Utils.fixBoxPosition=function(box,leave){var screenX=Zapatec.Utils.getPageScrollX();var screenY=Zapatec.Utils.getPageScrollY();var sizes=Zapatec.Utils.getWindowSize();leave=parseInt(leave,10)||0;if(box.x<screenX){box.x=screenX+leave;}
if(box.y<screenY){box.y=screenY+leave;}
if(box.x+box.width>screenX+sizes.width){box.x=screenX+sizes.width-box.width-leave;}
if(box.y+box.height>screenY+sizes.height){box.y=screenY+sizes.height-box.height-leave;}};Zapatec.Utils.isRelated=function(el,evt){evt||(evt=window.event);var related=evt.relatedTarget;if(!related){var type=evt.type;if(type=="mouseover"){related=evt.fromElement;}else if(type=="mouseout"){related=evt.toElement;}}
try{while(related){if(related==el){return true;}
related=related.parentNode;}}catch(e){};return false;};Zapatec.Utils.removeClass=function(el,className){if(!(el&&el.className)){return;}
var cls=el.className.split(" ");for(var i=cls.length;i>0;){if(cls[--i]==className){cls.splice(i,1);}}
el.className=cls.join(" ");};Zapatec.Utils.addClass=function(el,className){Zapatec.Utils.removeClass(el,className);el.className+=" "+className;};Zapatec.Utils.replaceClass=function(el,className,withClassName){if(!Zapatec.isHtmlElement(el)||!className){return false;}
el.className=el.className.replace(className,withClassName);};Zapatec.Utils.getElement=function(ev){if(Zapatec.is_ie){if(window.event){return window.event.srcElement;}else{return null;}}else{return ev.currentTarget;}};Zapatec.Utils.getTargetElement=function(ev){if(Zapatec.is_ie){if(window.event){return window.event.srcElement;}else{return null;}}else{return ev.target;}};Zapatec.Utils.getMousePos=function(oEv){oEv||(oEv=window.event);var oPos={pageX:0,pageY:0,clientX:0,clientY:0};if(oEv){var bIsPageX=(typeof oEv.pageX!='undefined');var bIsClientX=(typeof oEv.clientX!='undefined');if(bIsPageX||bIsClientX){if(bIsPageX){oPos.pageX=oEv.pageX;oPos.pageY=oEv.pageY;}else{oPos.pageX=oEv.clientX+Zapatec.Utils.getPageScrollX();oPos.pageY=oEv.clientY+Zapatec.Utils.getPageScrollY();}
if(bIsClientX){oPos.clientX=oEv.clientX;oPos.clientY=oEv.clientY;}else{oPos.clientX=oEv.pageX-Zapatec.Utils.getPageScrollX();oPos.clientY=oEv.pageY-Zapatec.Utils.getPageScrollY();}}}
return oPos;};Zapatec.Utils.stopEvent=function(oEvent){oEvent||(oEvent=window.event);if(oEvent){if(oEvent.stopPropagation){oEvent.stopPropagation();}
oEvent.cancelBubble=true;if(oEvent.preventDefault){oEvent.preventDefault();}
oEvent.returnValue=false;}
return false;};Zapatec.Utils.removeOnUnload=[];Zapatec.Utils.addEvent=function(oElement,sEvent,fListener,bUseCapture,bRemoveOnUnload){if(oElement.addEventListener){if(!bUseCapture){bUseCapture=false;}
oElement.addEventListener(sEvent,fListener,bUseCapture);}else if(oElement.attachEvent){oElement.detachEvent('on'+sEvent,fListener);oElement.attachEvent('on'+sEvent,fListener);if(bUseCapture){oElement.setCapture(false);}}
if(typeof bRemoveOnUnload=='undefined'){bRemoveOnUnload=true;}
if(bRemoveOnUnload){zapatecUtils.removeOnUnload.push({'element':oElement,'event':sEvent,'listener':fListener,'capture':bUseCapture});}};Zapatec.Utils.removeEvent=function(oElement,sEvent,fListener,bUseCapture){if(oElement.removeEventListener){if(!bUseCapture){bUseCapture=false;}
oElement.removeEventListener(sEvent,fListener,bUseCapture);}else if(oElement.detachEvent){oElement.detachEvent('on'+sEvent,fListener);}
for(var iLis=Zapatec.Utils.removeOnUnload.length-1;iLis>=0;iLis--){var oParams=Zapatec.Utils.removeOnUnload[iLis];if(!oParams){continue;}
if(oElement==oParams['element']&&sEvent==oParams['event']&&fListener==oParams['listener']&&bUseCapture==oParams['capture']){Zapatec.Utils.removeOnUnload[iLis]=null;Zapatec.Utils.removeEvent(oParams['element'],oParams['event'],oParams['listener'],oParams['capture']);}}};Zapatec.Utils.createElement=function(type,parent,selectable){var el=null;if(document.createElementNS)
el=document.createElementNS("http://www.w3.org/1999/xhtml",type);else
el=document.createElement(type);if(typeof parent!="undefined"&&parent!=null)
parent.appendChild(el);if(!selectable){if(Zapatec.is_ie)
el.setAttribute("unselectable",true);if(Zapatec.is_gecko)
el.style.setProperty("-moz-user-select","none","");}
return el;};Zapatec.Utils.writeCookie=function(name,value,domain,path,exp_days){value=escape(value);var ck=name+"="+value,exp;if(domain)
ck+=";domain="+domain;if(path)
ck+=";path="+path;if(exp_days){exp=new Date();exp.setTime(exp_days*86400000+exp.getTime());ck+=";expires="+exp.toGMTString();}
document.cookie=ck;};Zapatec.Utils.getCookie=function(name){var pattern=name+"=";var tokenPos=0;while(tokenPos<document.cookie.length){var valuePos=tokenPos+pattern.length;if(document.cookie.substring(tokenPos,valuePos)==pattern){var endValuePos=document.cookie.indexOf(";",valuePos);if(endValuePos==-1){endValuePos=document.cookie.length;}
return unescape(document.cookie.substring(valuePos,endValuePos));}
tokenPos=document.cookie.indexOf(" ",tokenPos)+1;if(tokenPos==0){break;}}
return null;};Zapatec.Utils.makePref=function(obj){function stringify(val){if(typeof val=="object"&&!val)
return"null";else if(typeof val=="number"||typeof val=="boolean")
return val;else if(typeof val=="string")
return'"'+val.replace(/\x22/,"\\22")+'"';else return null;};var txt="",i;for(i in obj)
txt+=(txt?",'":"'")+i+"':"+stringify(obj[i]);return txt;};Zapatec.Utils.loadPref=function(sCookie){var oCookie=zapatecTransport.parseJson({strJson:'{'+sCookie+'}'});if(!oCookie||typeof oCookie!='object'){oCookie={};}
return oCookie;};Zapatec.Utils.mergeObjects=function(dest,src){for(var i in src)
dest[i]=src[i];};Zapatec.Utils.__wch_id=0;Zapatec.Utils.createWCH=function(oEl){if(!Zapatec.is_ie||Zapatec.is_ie5||Zapatec.is_ie7){return null;}
var sId='WCH'+(++Zapatec.Utils.__wch_id);var sIframe=['<iframe id="',sId,'" scrolling="no" frameborder="0" style="z-index:0;position:absolute;visibility:hidden;filter:progid:DXImageTransform.Microsoft.alpha(style=0,opacity=0);border:0;top:0;left:0;width:0;height:0" src="javascript:false"></iframe>'].join('')
if(!oEl){oEl=document.body;}
if(Zapatec.windowLoaded){oEl.insertAdjacentHTML('beforeEnd',sIframe);}else{Zapatec.Utils.addEvent(window,'load',function(){oEl.insertAdjacentHTML('beforeEnd',sIframe);oEl=null;});}
return document.getElementById(sId);};Zapatec.Utils.setupWCH_el=function(f,el,el2){if(f){var pos=zapatecUtils.getElementOffsetRelative(el),X1=pos.x,Y1=pos.y,X2=X1+el.offsetWidth,Y2=Y1+el.offsetHeight;if(el2){var p2=zapatecUtils.getElementOffsetRelative(el2),XX1=p2.x,YY1=p2.y,XX2=XX1+el2.offsetWidth,YY2=YY1+el2.offsetHeight;if(X1>XX1)
X1=XX1;if(Y1>YY1)
Y1=YY1;if(X2<XX2)
X2=XX2;if(Y2<YY2)
Y2=YY2;}
Zapatec.Utils.setupWCH(f,X1,Y1,X2-X1,Y2-Y1);}};Zapatec.Utils.setupWCH=function(f,x,y,w,h){if(f){var s=f.style;(typeof x!="undefined")&&(s.left=x+"px");(typeof y!="undefined")&&(s.top=y+"px");(typeof w!="undefined")&&(s.width=w+"px");(typeof h!="undefined")&&(s.height=h+"px");s.visibility="inherit";}};Zapatec.Utils.hideWCH=function(f){if(f)
f.style.visibility="hidden";};Zapatec.Utils.getPageScrollY=function(){if(window.pageYOffset){return window.pageYOffset;}else if(document.body&&document.body.scrollTop){return document.body.scrollTop;}else if(document.documentElement&&document.documentElement.scrollTop){return document.documentElement.scrollTop;}
return 0;};Zapatec.Utils.getPageScrollX=function(){if(window.pageXOffset){return window.pageXOffset;}else if(document.body&&document.body.scrollLeft){return document.body.scrollLeft;}else if(document.documentElement&&document.documentElement.scrollLeft){return document.documentElement.scrollLeft;}
return 0;};Zapatec.ScrollWithWindow={};Zapatec.ScrollWithWindow.list=[];Zapatec.ScrollWithWindow.stickiness=0.25;Zapatec.ScrollWithWindow.register=function(oElement){var iTop=oElement.offsetTop||0;var iLeft=oElement.offsetLeft||0;Zapatec.ScrollWithWindow.list.push({node:oElement,origTop:iTop,origLeft:iLeft});if(!Zapatec.ScrollWithWindow.interval){Zapatec.ScrollWithWindow.on();}};Zapatec.ScrollWithWindow.unregister=function(oElement){for(var iItem=0;iItem<Zapatec.ScrollWithWindow.list.length;iItem++){var oItem=Zapatec.ScrollWithWindow.list[iItem];if(oElement==oItem.node){Zapatec.ScrollWithWindow.list.splice(iItem,1);if(!Zapatec.ScrollWithWindow.list.length){Zapatec.ScrollWithWindow.off();}
return;}}};Zapatec.ScrollWithWindow.moveTop=function(iTop){Zapatec.ScrollWithWindow.top+=(iTop-Zapatec.ScrollWithWindow.top)*Zapatec.ScrollWithWindow.stickiness;if(Math.abs(Zapatec.ScrollWithWindow.top-iTop)<=1){Zapatec.ScrollWithWindow.top=iTop;}
for(var iItem=0;iItem<Zapatec.ScrollWithWindow.list.length;iItem++){var oItem=Zapatec.ScrollWithWindow.list[iItem];var oElement=oItem.node;oElement.style.position='absolute';if(!oItem.origTop&&oItem.origTop!==0){oItem.origTop=parseInt(oElement.style.top)||0;}
oElement.style.top=oItem.origTop+
parseInt(Zapatec.ScrollWithWindow.top)+'px';}};Zapatec.ScrollWithWindow.moveLeft=function(iLeft){Zapatec.ScrollWithWindow.left+=(iLeft-Zapatec.ScrollWithWindow.left)*Zapatec.ScrollWithWindow.stickiness;if(Math.abs(Zapatec.ScrollWithWindow.left-iLeft)<=1){Zapatec.ScrollWithWindow.left=iLeft;}
for(var iItem=0;iItem<Zapatec.ScrollWithWindow.list.length;iItem++){var oItem=Zapatec.ScrollWithWindow.list[iItem];var oElement=oItem.node;oElement.style.position='absolute';if(!oItem.origLeft&&oItem.origLeft!==0){oItem.origLeft=parseInt(oElement.style.left)||0;}
oElement.style.left=oItem.origLeft+
parseInt(Zapatec.ScrollWithWindow.left)+'px';}};Zapatec.ScrollWithWindow.cycle=function(){var iTop=Zapatec.Utils.getPageScrollY();var iLeft=Zapatec.Utils.getPageScrollX();if(iTop!=Zapatec.ScrollWithWindow.top){Zapatec.ScrollWithWindow.moveTop(iTop);}
if(iLeft!=Zapatec.ScrollWithWindow.left){Zapatec.ScrollWithWindow.moveLeft(iLeft);}};Zapatec.ScrollWithWindow.on=function(){if(Zapatec.ScrollWithWindow.interval){return;}
Zapatec.ScrollWithWindow.top=Zapatec.Utils.getPageScrollY();Zapatec.ScrollWithWindow.left=Zapatec.Utils.getPageScrollX();Zapatec.ScrollWithWindow.interval=setInterval(Zapatec.ScrollWithWindow.cycle,50);};Zapatec.ScrollWithWindow.off=function(){if(!Zapatec.ScrollWithWindow.interval){return;}
clearInterval(Zapatec.ScrollWithWindow.interval);Zapatec.ScrollWithWindow.interval=null;};Zapatec.FixateOnScreen={};Zapatec.FixateOnScreen.getExpression=function(coord,direction){return"Zapatec.Utils.getPageScroll"+direction.toUpperCase()+"() + "+coord;};Zapatec.FixateOnScreen.parseCoordinates=function(element){if(!this.isRegistered(element)){return false;}
var x=0;var y=0;var style=element.style;if(Zapatec.is_ie&&!Zapatec.is_ie7){x=style.getExpression("left").split(" ");x=parseInt(x[x.length-1],10);y=style.getExpression("top").split(" ");y=parseInt(y[y.length-1],10);}else{x=parseInt(style.left,10);y=parseInt(style.top,10);}
x+=Zapatec.Utils.getPageScrollX();y+=Zapatec.Utils.getPageScrollY();return{x:x,y:y};};Zapatec.FixateOnScreen.correctCoordinates=function(x,y){position={x:x,y:y};if(position.x||position.x===0){position.x-=Zapatec.Utils.getPageScrollX();if(Zapatec.is_ie&&!Zapatec.is_ie7){position.x=this.getExpression(position.x,"X");;}else{position.x+="px";}}
if(position.y||position.y===0){position.y-=Zapatec.Utils.getPageScrollY();if(Zapatec.is_ie&&!Zapatec.is_ie7){position.y=this.getExpression(position.y,"Y");;}else{position.y+="px";}}
return position;};Zapatec.FixateOnScreen.register=function(element){if(!Zapatec.isHtmlElement(element)){return false;}
if(this.isRegistered(element)){return true;}
var pos=Zapatec.Utils.getElementOffset(element);pos={x:parseInt(element.style.left,10)||pos.x,y:parseInt(element.style.top,10)||pos.y}
pos=this.correctCoordinates(pos.x,pos.y);if(!Zapatec.is_ie||Zapatec.is_ie7){var restorer=element.restorer;if(!restorer||!restorer.getObject||restorer.getObject()!=element){restorer=element.restorer=new Zapatec.SRProp(element);}
restorer.saveProp("style.position");element.style.position="fixed";element.style.left=pos.x;element.style.top=pos.y;}else{element.style.setExpression("left",pos.x);element.style.setExpression("top",pos.y);}
element.zpFixed=true;return true;};Zapatec.FixateOnScreen.unregister=function(element){if(!Zapatec.isHtmlElement(element)){return false;}
var pos=this.parseCoordinates(element);if(pos===false){return true;}
if(Zapatec.is_ie&&!Zapatec.is_ie7){element.style.removeExpression("left");element.style.removeExpression("top");}
element.style.left=pos.x+"px";element.style.top=pos.y+"px";if(!Zapatec.is_ie||Zapatec.is_ie7){element.restorer.restoreProp("style.position",true);}
element.zpFixed=false;return true;};Zapatec.FixateOnScreen.isRegistered=function(element){if(element.zpFixed){return true;}
return false;};Zapatec.Utils.destroy=function(el){if(el&&el.parentNode)
el.parentNode.removeChild(el);};Zapatec.Utils.newCenteredWindow=function(url,windowName,width,height,scrollbars){var leftPosition=0;var topPosition=0;if(screen.width)
leftPosition=(screen.width-width)/2;if(screen.height)
topPosition=(screen.height-height)/2;var winArgs='height='+height+',width='+width+',top='+topPosition+',left='+leftPosition+',scrollbars='+scrollbars+',resizable';var win=window.open(url,windowName,winArgs);return win;};Zapatec.Utils.getWindowSize=function(){var iWidth=0;var iHeight=0;try{if(Zapatec.is_khtml){iWidth=window.innerWidth||0;iHeight=window.innerHeight||0;}else if(document.compatMode&&document.compatMode=='CSS1Compat'){iWidth=document.documentElement.clientWidth||0;iHeight=document.documentElement.clientHeight||0;}else{iWidth=document.body.clientWidth||0;iHeight=document.body.clientHeight||0;}}catch(oException){};return{width:iWidth,height:iHeight};};Zapatec.Utils.getWindowDimensions=function(){var oSize=zapatecUtils.getWindowSize();try{var iScrollX=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;var iScrollY=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;return{width:oSize.width-iScrollX,height:oSize.height-iScrollY};}catch(oException){return oSize;};};Zapatec.Utils.selectOption=function(sel,val,call_default){var a=sel.options,i,o;for(i=a.length;--i>=0;){o=a[i];o.selected=(o.value==val);}
sel.value=val;if(call_default){if(typeof sel.onchange=="function")
sel.onchange();else if(typeof sel.onchange=="string")
eval(sel.onchange);}};Zapatec.Utils.getNextSibling=function(el,tag,alternateTag){el=el.nextSibling;if(!tag){return el;}
tag=tag.toLowerCase();if(alternateTag)alternateTag=alternateTag.toLowerCase();while(el){if(el.nodeType==1&&(el.tagName.toLowerCase()==tag||(alternateTag&&el.tagName.toLowerCase()==alternateTag))){return el;}
el=el.nextSibling;}
return el;};Zapatec.Utils.getPreviousSibling=function(el,tag,alternateTag){el=el.previousSibling;if(!tag){return el;}
tag=tag.toLowerCase();if(alternateTag)alternateTag=alternateTag.toLowerCase();while(el){if(el.nodeType==1&&(el.tagName.toLowerCase()==tag||(alternateTag&&el.tagName.toLowerCase()==alternateTag))){return el;}
el=el.previousSibling;}
return el;};Zapatec.Utils.getFirstChild=function(el,tag,alternateTag){if(!el){return null;}
el=el.firstChild;if(!el){return null;}
if(!tag){return el;}
tag=tag.toLowerCase();if(el.nodeType==1){if(el.tagName.toLowerCase()==tag){return el;}else if(alternateTag){alternateTag=alternateTag.toLowerCase();if(el.tagName.toLowerCase()==alternateTag){return el;}}}
return Zapatec.Utils.getNextSibling(el,tag,alternateTag);};Zapatec.Utils.getLastChild=function(el,tag,alternateTag){if(!el){return null;}
el=el.lastChild;if(!el){return null;}
if(!tag){return el;}
tag=tag.toLowerCase();if(el.nodeType==1){if(el.tagName.toLowerCase()==tag){return el;}else if(alternateTag){alternateTag=alternateTag.toLowerCase();if(el.tagName.toLowerCase()==alternateTag){return el;}}}
return Zapatec.Utils.getPreviousSibling(el,tag,alternateTag);};Zapatec.Utils.getChildText=function(objNode){if(objNode==null){return'';}
var arrText=[];var objChild=objNode.firstChild;while(objChild!=null){if(objChild.nodeType==3){arrText.push(objChild.data);}
objChild=objChild.nextSibling;}
return arrText.join(' ');};Zapatec.Utils.insertAfter=function(oldNode,newNode){if(oldNode.nextSibling){oldNode.parentNode.insertBefore(newNode,oldNode.nextSibling);}else{oldNode.parentNode.appendChild(newNode);}}
Zapatec.Utils._ids={};Zapatec.Utils.generateID=function(code,id){if(typeof id=="undefined"){if(typeof this._ids[code]=="undefined")
this._ids[code]=0;id=++this._ids[code];}
return"zapatec-"+code+"-"+id;};Zapatec.Utils.addTooltip=function(target,tooltip){return new Zapatec.Tooltip({target:target,tooltip:tooltip});};Zapatec.isLite=true;Zapatec.Utils.checkLinks=function(){var anchors=document.getElementsByTagName('A');for(var ii=0;ii<anchors.length;ii++){if(Zapatec.Utils.checkLink(anchors[ii])){return true;}}
return false;}
Zapatec.Utils.checkLink=function(lnk){if(!lnk){return false;}
if(!/^https?:\/\/((dev|www)\.)?zapatec\.com/i.test(lnk.href)){return false;}
var textContent=""
for(var ii=0;ii<lnk.childNodes.length;ii++){if(lnk.childNodes[ii].nodeType==3){textContent+=lnk.childNodes[ii].nodeValue;}}
if(textContent.length<4){return false;}
var parent=lnk;while(parent&&parent.nodeName.toLowerCase()!="html"){if(Zapatec.Utils.getStyleProperty(parent,"display")=="none"||Zapatec.Utils.getStyleProperty(parent,"visibility")=="hidden"||Zapatec.Utils.getStyleProperty(parent,"opacity")=="0"||Zapatec.Utils.getStyleProperty(parent,"-moz-opacity")=="0"||/alpha\(opacity=0\)/i.test(Zapatec.Utils.getStyleProperty(parent,"filter"))){return false;}
parent=parent.parentNode;}
var coords=Zapatec.Utils.getElementOffset(lnk);if(coords.left<0||coords.top<0){return false;}
return true;}
Zapatec.Utils.checkActivation=function(){if(!Zapatec.isLite)return true;var arrProducts=[]
add_product=function(script,webdir_in,name_in)
{arrProducts[script]={webdir:webdir_in,name:name_in,bActive:false}}
add_product('calendar.js','prod1','Calendar')
add_product('zpmenu.js','menu','Menu')
add_product('tree.js','prod3','Tree')
add_product('form.js','forms','Forms')
add_product('effects.js','effects','Effects')
add_product('hoverer.js','effects','Effects - Hoverer')
add_product('slideshow.js','effects','Effects - Slideshow')
add_product('zpgrid.js','grid','Grid')
add_product('slider.js','slider','Slider')
add_product('zptabs.js','tabs','Tabs')
add_product('zptime.js','time','Time')
add_product('window.js','windows','Window')
var strName,arrName,i
var bProduct=false
var scripts=document.getElementsByTagName('script');for(i=0;i<scripts.length;i++)
{if(/wizard.js/i.test(scripts[i].src))
return true
arrName=scripts[i].src.split('/')
if(arrName.length==0)
strName=scripts[i]
else
strName=arrName[arrName.length-1]
strName=strName.toLowerCase()
if(typeof arrProducts[strName]!='undefined')
{bProduct=true
arrProducts[strName].bActive=true}}
if(!bProduct||Zapatec.Utils.checkLinks()){return true;}
var strMsg='You are using the Free version of the Zapatec Software.\n'+'While using the Free version, a link to www.zapatec.com in this page is required.'
for(i in arrProducts)
if(arrProducts[i].bActive==true)
strMsg+='\nTo purchase the Zapatec '+arrProducts[i].name+' visit www.zapatec.com/website/main/products/'+arrProducts[i].webdir+'/'
alert(strMsg)
return false;}
Zapatec.Utils.clone=function(oSrc){if(typeof oSrc=='object'&&oSrc){var oClone=new oSrc.constructor();var fClone=Zapatec.Utils.clone;for(var sProp in oSrc){oClone[sProp]=fClone(oSrc[sProp]);}
return oClone;}
return oSrc;};Zapatec.is_opera=/opera/i.test(navigator.userAgent);Zapatec.is_ie=(/msie/i.test(navigator.userAgent)&&!Zapatec.is_opera);Zapatec.is_ie6=(Zapatec.is_ie&&/msie 6\.0/i.test(navigator.userAgent));Zapatec.is_ie7=(Zapatec.is_ie&&/msie 7\.0/i.test(navigator.userAgent));Zapatec.is_mac_ie=(/msie.*mac/i.test(navigator.userAgent)&&!Zapatec.is_opera);Zapatec.is_khtml=/Chrome|Safari|Konqueror|AppleWebKit|KHTML/i.test(navigator.userAgent);Zapatec.is_konqueror=/Konqueror/i.test(navigator.userAgent);Zapatec.is_gecko=/Gecko/i.test(navigator.userAgent);Zapatec.is_webkit=/WebKit/i.test(navigator.userAgent);Zapatec.webkitVersion=Zapatec.is_webkit?parseInt(navigator.userAgent.replace(/.+WebKit\/([0-9]+)\..+/,"$1")):-1;Zapatec.Utils.arrIndexOf=function(aArr,vSearchEl,iFromInd){if(!(aArr instanceof Array)){return-1;}
if(Array.prototype.indexOf){return aArr.indexOf(vSearchEl,iFromInd);}
if(!iFromInd){iFromInd=0;}
var iEls=aArr.length;for(var iEl=iFromInd;iEl<iEls;iEl++){if(aArr[iEl]==vSearchEl){return iEl;}}
return-1;};Zapatec.Log=function(objArgs){if(!objArgs){return;}
var strMessage=objArgs.description;if(objArgs.severity){strMessage=objArgs.severity+':\n'+strMessage;}
if(objArgs.type!="warning"){if(Zapatec.Debug){Zapatec.Debug.log.error(strMessage);}else{alert(strMessage);}}};Zapatec.Utils.Array={};Zapatec.Utils.Array.insertBefore=function(arr,el,key,nextKey){var tmp=new Array();for(var i in arr){if(i==nextKey){if(key){tmp[key]=el;}else{tmp.push(el);}}
tmp[i]=arr[i];}
return tmp;}
Zapatec.inherit=function(oSubClass,oSuperClass,oArg){var Inheritance=function(){};Inheritance.prototype=oSuperClass.prototype;oSubClass.prototype=new Inheritance();oSubClass.prototype.constructor=oSubClass;oSubClass.SUPERconstructor=oSuperClass;oSubClass.SUPERclass=oSuperClass.prototype;if(typeof oSuperClass.path!='undefined'){if(oArg&&oArg.keepPath){oSubClass.path=oSuperClass.path;}else{oSubClass.path=Zapatec.getPath(oSubClass.id);}}};Zapatec.getPath=function(sId){var sSrc;if(typeof sId=='string'){var oScript=document.getElementById(sId);if(oScript){sSrc=oScript.getAttribute('src');}}
if(!sSrc){if(typeof Zapatec.lastLoadedModule=='string'){return Zapatec.lastLoadedModule;}
if(document.documentElement){var sHtml=document.documentElement.innerHTML;var aMatch=sHtml.match(/<script[^>]+src=[^>]+>/gi);if(aMatch&&aMatch.length){sHtml=aMatch[aMatch.length-1];aMatch=sHtml.match(/src="([^"]+)/i);if(aMatch&&aMatch.length==2){sSrc=aMatch[1];}}}
if(!sSrc){return'';}}
sSrc=sSrc.replace(/\\/g,'/');var aTokens=sSrc.split('?');aTokens=aTokens[0].split('/');aTokens=aTokens.slice(0,-1);if(!aTokens.length){return'';}
return aTokens.join('/')+'/';};Zapatec.Utils.setWindowEvent=function(oEvent){if(oEvent){window.event=oEvent;}};Zapatec.Utils.emulateWindowEvent=function(aEvents){if(document.addEventListener){var iEvents=aEvents.length;var oUtils=Zapatec.Utils;var iEvent;for(iEvent=0;iEvent<iEvents;iEvent++){document.addEventListener(aEvents[iEvent],oUtils.setWindowEvent,true);}}};Zapatec.Utils.isWindowLoaded=function(){return typeof(document.readyState)!='undefined'?(document.readyState=='loaded'||document.readyState=='complete'):document.getElementsByTagName!=null&&typeof(document.getElementsByTagName('body')[0])!='undefined';}
Zapatec.windowLoaded=Zapatec.Utils.isWindowLoaded();Zapatec.Utils.addEvent(window,"load",function(){Zapatec.windowLoaded=true;});Zapatec.Utils.warnUnload=function(msg,win){Zapatec.Utils.warnUnloadFlag=true;if(typeof(msg)!="string"){msg="All your changes will be lost.";}
if(typeof(win)=='undefined'){win=window;}
Zapatec.Utils.addEvent(win,'beforeunload',function(ev){if(Zapatec.Utils.warnUnloadFlag!=true){return true;}
if(typeof(ev)=='undefined'){ev=window.event;}
ev.returnValue=msg;if(Zapatec.is_khtml){return msg;}else{return false;}});}
Zapatec.Utils.unwarnUnload=function(msg,win){Zapatec.Utils.warnUnloadFlag=false;}
Zapatec.Utils.warnUnloadFlag=false;Zapatec.Utils.getMaxZindex=function(){if(window.opera||Zapatec.is_khtml){return 2147483583;}else if(Zapatec.is_ie){return 2147483647;}else{return 10737418239;}};Zapatec.Utils.maxZindex=zapatecUtils.getMaxZindex();zapatecUtilsMaxZindex=zapatecUtils.maxZindex;Zapatec.Utils.correctCssLength=function(val){if(typeof val=='undefined'||(typeof val=='object'&&!val)){return'auto';}
val+='';if(!val.length){return'auto';}
if(/\d$/.test(val)){val+='px';}
return val;};Zapatec.Utils.destroyOnUnload=[];Zapatec.Utils.addDestroyOnUnload=function(objElement,strProperty){Zapatec.Utils.destroyOnUnload.push([objElement,strProperty]);};Zapatec.Utils.createProperty=function(objElement,strProperty,val){objElement[strProperty]=val;Zapatec.Utils.addDestroyOnUnload(objElement,strProperty);};Zapatec.Utils.addEvent(window,'unload',function(){for(var iObj=Zapatec.Utils.destroyOnUnload.length-1;iObj>=0;iObj--){var objDestroy=Zapatec.Utils.destroyOnUnload[iObj];objDestroy[0][objDestroy[1]]=null;objDestroy[0]=null;}
for(var iLis=Zapatec.Utils.removeOnUnload.length-1;iLis>=0;iLis--){var oParams=Zapatec.Utils.removeOnUnload[iLis];if(!oParams){continue;}
Zapatec.Utils.removeOnUnload[iLis]=null;Zapatec.Utils.removeEvent(oParams['element'],oParams['event'],oParams['listener'],oParams['capture']);}});Zapatec.Utils.htmlEncode=function(str){if(str==null||typeof(str.replace)!='function'){return"";}
str=str.replace(/&/ig,"&amp;");str=str.replace(/</ig,"&lt;");str=str.replace(/>/ig,"&gt;");str=str.replace(/\x22/ig,"&quot;");return str;};Zapatec.Utils.applyStyle=function(elRef,style){if(typeof(elRef)=='string'){elRef=document.getElementById(elRef);}
if(elRef==null||style==null||elRef.style==null){return null;}
if(Zapatec.is_opera){var pairs=style.split(";");for(var ii=0;ii<pairs.length;ii++){var kv=pairs[ii].split(":");if(!kv[1]){continue;}
var value=kv[1].replace(/^\s*/,'').replace(/\s*$/,'');var key="";for(var jj=0;jj<kv[0].length;jj++){if(kv[0].charAt(jj)=="-"){jj++;if(jj<kv[0].length){key+=kv[0].charAt(jj).toUpperCase();}
continue;}
key+=kv[0].charAt(jj);}
switch(key){case"float":key="cssFloat";break;}
try{elRef.style[key]=value;}catch(e){}}}else{elRef.style.cssText=style;}
return true;}
Zapatec.Utils.getStyleProperty=function(oEl,sPr){var oDV=document.defaultView;if(oDV&&oDV.getComputedStyle){var oCS=oDV.getComputedStyle(oEl,'');if(oCS){sPr=sPr.replace(/([A-Z])/g,'-$1').toLowerCase();return oCS.getPropertyValue(sPr);}}else if(oEl.currentStyle){return oEl.currentStyle[sPr];}
return oEl.style[sPr];};Zapatec.Utils.getPrecision=function(dFloat){return(dFloat+'').replace(/^-?\d*\.*/,'').length;};Zapatec.Utils.setPrecision=function(dFloat,iPrecision){dFloat*=1;if(dFloat.toFixed){return dFloat.toFixed(iPrecision)*1;}
var iPow=Math.pow(10,iPrecision);return parseInt(dFloat*iPow,10)/iPow;};Zapatec.Utils.setPrecisionString=function(dFloat,iPrecision){var sFloat=Zapatec.Utils.setPrecision(dFloat,iPrecision)+'';var iOldPrecision=Zapatec.Utils.getPrecision(sFloat);var iZeros=iPrecision-iOldPrecision;if(iZeros){if(!iOldPrecision){sFloat+='.';}
for(var iZero=0;iZero<iZeros;iZero++){sFloat+='0';}}
return sFloat;};Zapatec.Utils.createNestedHash=function(parent,keys,value){if(parent==null||keys==null){return null;}
var tmp=parent;for(var ii=0;ii<keys.length;ii++){if(typeof(tmp[keys[ii]])=='undefined'){tmp[keys[ii]]={};}
if(ii==keys.length-1&&typeof(value)!='undefined'){tmp[keys[ii]]=value;}
tmp=tmp[keys[ii]];}}
Zapatec.implement=function(classOrObject,interfaceStr){if(typeof interfaceStr!="string"){return false;}
if(typeof classOrObject=="function"){classOrObject=classOrObject.prototype;}
if(!classOrObject||typeof classOrObject!="object"){return false;}
var interfaceObj=window;var objs=interfaceStr.split(".");try{for(var i=0;i<objs.length;++i){interfaceObj=interfaceObj[objs[i]];}}catch(e){return false;}
if(typeof classOrObject.interfaces!="object"){classOrObject.interfaces={};classOrObject.interfaces[interfaceStr]=true;}else if(classOrObject.interfaces[interfaceStr]!==true){classOrObject.interfaces=Zapatec.Utils.clone(classOrObject.interfaces);classOrObject.interfaces[interfaceStr]=true;}else{return true;}
for(var iProp in interfaceObj){classOrObject[iProp]=interfaceObj[iProp];}
classOrObject.hasInterface=function(interfaceStr){if(this.interfaces[interfaceStr]===true){return true;}
return false;};classOrObject.requireInterface=function(interfaceStr){if(!this.hasInterface(interfaceStr)){Zapatec.Log({description:"The object with ID '"+this.id+"' has no "+interfaceStr+" interface!"});return false;}
return true;};interfaceObj.setNamedProperty=classOrObject.setNamedProperty=function(name,val){this[name]=val;};interfaceObj.getNamedProperty=classOrObject.getNamedProperty=function(name){return this[name];};return true;};Zapatec.Utils.getCharFromEvent=function(evt){if(!evt){evt=window.event;}
var response={};if(Zapatec.is_gecko&&!Zapatec.is_khtml&&evt.type!="keydown"&&evt.type!="keyup"){if(evt.charCode){response.chr=String.fromCharCode(evt.charCode);}else{response.charCode=evt.keyCode;}}else{response.charCode=evt.keyCode||evt.which;response.chr=String.fromCharCode(response.charCode);}
if(Zapatec.is_opera&&response.charCode==0){response.charCode=null;response.chr=null;}
if(Zapatec.is_khtml&&response.charCode==63272){response.charCode=46;response.chr=null;}
return response;}
Zapatec.Utils.convertHTML2DOM=function(txt){if(!txt){return null;}
var el=document.createElement("div");el.innerHTML=txt;var currEl=el.firstChild;while(!currEl.nodeType||currEl.nodeType!=1){currEl=currEl.nextSibling;}
Zapatec.Utils.destroy(currEl);return currEl;};Zapatec.Utils.escapeRegExp=function(s){return s.replace(/([.*+?^${}()|[\]\/\\])/g,'\\$1');};Zapatec.Utils.getRadioValue=function(oGroup){if(!oGroup){return'';}
if(typeof oGroup.selectedIndex=='number'){return oGroup[oGroup.selectedIndex].value;}else{var iItems=oGroup.length;if(!iItems){return'';}
var oItem;for(var iItem=0;iItem<iItems;iItem++){oItem=oGroup[iItem];if(oItem.checked){return oItem.value;}}}
return'';};Zapatec.Utils.setRadioValue=function(oGroup,sValue){if(!oGroup){return;}
var iItems=oGroup.length;if(!iItems){return;}
var oItem;for(var iItem=0;iItem<iItems;iItem++){oItem=oGroup[iItem];if(oItem.value==sValue){if(typeof oGroup.selectedIndex=='number'){oGroup.selectedIndex=iItem;}else{oItem.checked='checked';}
return;}}};zapatecUtilsRegexpSpacePlus=Zapatec.Utils.utilsRegexpSpacePlus=/\s+/g;Zapatec.Utils.utilsRegexpSpaceLeft=/^\s+/;Zapatec.Utils.utilsRegexpSpaceRight=/\s+$/;Zapatec.Utils.trim=function(sVal){return sVal.replace(zapatecUtils.utilsRegexpSpaceLeft,'').replace(zapatecUtils.utilsRegexpSpaceRight,'');};Zapatec.Utils.multispacekill=function(sVal){return zapatecUtils.trim(sVal).replace(zapatecUtilsRegexpSpacePlus,' ');};Zapatec.Utils.spacekill=function(sVal){return sVal.replace(zapatecUtilsRegexpSpacePlus,'');};Zapatec.Utils.mozTextOverflow=function(oEl){setTimeout(function(){zapatecUtils.mozTextOverflowEllipsis(oEl);},0);};Zapatec.Utils.mozTextOverflowEllipsis=function(oEl){oEl.style.position='relative';var oEllipsis=oEl.zpEllipsis=document.createElement('div');oEllipsis.innerHTML='&hellip;';var oStyle=oEllipsis.style;oStyle.position='absolute';oStyle.right='0';oStyle.bottom='0';oStyle.background='inherit';oStyle.textDecoration='none';oStyle.display='none';oEl.appendChild(oEllipsis);oEl.addEventListener('overflow',function(oEv){var oEl=oEv.currentTarget;var oEllipsis=oEl.zpEllipsis;if(oEllipsis){oEllipsis.style.display='block';}},false);oEl.addEventListener('underflow',function(oEv){var oEl=oEv.currentTarget;var oEllipsis=oEl.zpEllipsis;if(oEllipsis){oEllipsis.style.display='none';}},false);};Zapatec.Utils.compareInt=function(vLeft,vRight){vLeft=parseInt(vLeft);vRight=parseInt(vRight);return(vLeft>vRight)-(vLeft<vRight);};}
if(typeof Zapatec=='undefined'){Zapatec=function(){};}
Zapatec.EventDriven=function(){};zapatecEventDriven=Zapatec.EventDriven;Zapatec.EventDriven.prototype.init=function(){this.events={};};Zapatec.EventDriven.prototype.addEventListener=function(sEvent,fListener,bOnetime){if(typeof fListener!='function'){return false;}
var oEvents=this.events;var oEvent=oEvents[sEvent];if(!oEvent){oEvents[sEvent]={listeners:[]};oEvent=oEvents[sEvent];}else{this.removeEventListener(sEvent,fListener);}
if(bOnetime){oEvent.listeners.push({listener:fListener,onetime:true});}else{oEvent.listeners.push(fListener);}};Zapatec.EventDriven.prototype.addOnetimeEventListener=function(sEvent,fListener){return this.addEventListener(sEvent,fListener,true);};Zapatec.EventDriven.prototype.unshiftEventListener=function(sEvent,fListener){if(typeof fListener!='function'){return false;}
var oEvents=this.events;var oEvent=oEvents[sEvent];if(!oEvent){oEvents[sEvent]={listeners:[]};oEvent=oEvents[sEvent];}else{this.removeEventListener(sEvent,fListener);}
oEvent.listeners.unshift(fListener);};Zapatec.EventDriven.prototype.removeEventListener=function(sEvent,fListener){var oEvents=this.events;if(!oEvents[sEvent]){return 0;}
var aListeners=oEvents[sEvent].listeners;var iRemoved=0;var oListener;for(var iListener=aListeners.length-1;iListener>=0;iListener--){oListener=aListeners[iListener];if(oListener==fListener||oListener.listener==fListener){aListeners.splice(iListener,1);iRemoved++;}}
return iRemoved;};Zapatec.EventDriven.prototype.removeOnetimeEventListeners=function(sEvent){var oEvents=this.events;if(!oEvents[sEvent]){return 0;}
var aListeners=oEvents[sEvent].listeners;var iRemoved=0;for(var iListener=aListeners.length-1;iListener>=0;iListener--){if(aListeners[iListener].onetime){aListeners.splice(iListener,1);iRemoved++;}}
return iRemoved;};Zapatec.EventDriven.prototype.getEventListeners=function(sEvent){var oEvents=this.events;if(!oEvents[sEvent]){return[];}
return oEvents[sEvent].listeners;};Zapatec.EventDriven.prototype.isEventListener=function(sEvent,fListener){var oEvents=this.events;if(!oEvents[sEvent]){return false;}
var aListeners=oEvents[sEvent].listeners;var oListener;for(var iListener=aListeners.length-1;iListener>=0;iListener--){oListener=aListeners[iListener];if(oListener==fListener||oListener.listener==fListener){return true;}}
return false;};Zapatec.EventDriven.prototype.isEvent=function(sEvent){if(this.events[sEvent]){return true;}
return false;};Zapatec.EventDriven.prototype.removeEvent=function(sEvent){var oEvents=this.events;if(oEvents[sEvent]){var undef;oEvents[sEvent]=undef;}};Zapatec.EventDriven.prototype.fireEvent=function(sEvent){var oEvents=this.events;if(!oEvents[sEvent]){return;}
var aListeners=oEvents[sEvent].listeners.slice();var iListeners=aListeners.length;var aArgs,oListener;for(var iListener=0;iListener<iListeners;iListener++){aArgs=[].slice.call(arguments,1);oListener=aListeners[iListener];if(typeof oListener=='function'){oListener.apply(this,aArgs);}else{oListener.listener.apply(this,aArgs);}}
this.removeOnetimeEventListeners(sEvent);};Zapatec.EventDriven.events={};Zapatec.EventDriven.addEventListener=function(sEvent,fListener,bOnetime){if(typeof fListener!='function'){return false;}
var oEvents=zapatecEventDriven.events;var oEvent=oEvents[sEvent];if(!oEvent){oEvents[sEvent]={listeners:[]};oEvent=oEvents[sEvent];}else{zapatecEventDriven.removeEventListener(sEvent,fListener);}
if(bOnetime){oEvent.listeners.push({listener:fListener,onetime:true});}else{oEvent.listeners.push(fListener);}};Zapatec.EventDriven.addOnetimeEventListener=function(sEvent,fListener){return zapatecEventDriven.addEventListener(sEvent,fListener,true);};Zapatec.EventDriven.unshiftEventListener=function(sEvent,fListener){if(typeof fListener!='function'){return false;}
var oEvents=zapatecEventDriven.events;var oEvent=oEvents[sEvent];if(!oEvent){oEvents[sEvent]={listeners:[]};oEvent=oEvents[sEvent];}else{zapatecEventDriven.removeEventListener(sEvent,fListener);}
oEvent.listeners.unshift(fListener);};Zapatec.EventDriven.removeEventListener=function(sEvent,fListener){var oEvents=zapatecEventDriven.events;if(!oEvents[sEvent]){return 0;}
var iRemoved=0;var aListeners=oEvents[sEvent].listeners;var oListener;for(var iListener=aListeners.length-1;iListener>=0;iListener--){oListener=aListeners[iListener];if(oListener==fListener||oListener.listener==fListener){aListeners.splice(iListener,1);iRemoved++;}}
return iRemoved;};Zapatec.EventDriven.removeOnetimeEventListeners=function(sEvent){var oEvents=zapatecEventDriven.events;if(!oEvents[sEvent]){return 0;}
var aListeners=oEvents[sEvent].listeners;var iRemoved=0;for(var iListener=aListeners.length-1;iListener>=0;iListener--){if(aListeners[iListener].onetime){aListeners.splice(iListener,1);iRemoved++;}}
return iRemoved;};Zapatec.EventDriven.getEventListeners=function(sEvent){var oEvents=zapatecEventDriven.events;if(!oEvents[sEvent]){return[];}
return oEvents[sEvent].listeners;};Zapatec.EventDriven.isEventListener=function(sEvent,fListener){var oEvents=zapatecEventDriven.events;if(!oEvents[sEvent]){return false;}
var aListeners=oEvents[sEvent].listeners;var oListener;for(var iListener=aListeners.length-1;iListener>=0;iListener--){oListener=aListeners[iListener];if(oListener==fListener||oListener.listener==fListener){return true;}}
return false;};Zapatec.EventDriven.isEvent=function(sEvent){if(zapatecEventDriven.events[sEvent]){return true;}
return false;};Zapatec.EventDriven.removeEvent=function(sEvent){var oEvents=zapatecEventDriven.events;if(oEvents[sEvent]){var undef;oEvents[sEvent]=undef;}};Zapatec.EventDriven.fireEvent=function(sEvent){var oEvents=zapatecEventDriven.events;var oEvent=oEvents[sEvent];if(!oEvent){return;}
var aListeners=oEvent.listeners.slice();var iListeners=aListeners.length;var oListener,aArgs;for(var iListener=0;iListeners--;iListener++){aArgs=[].slice.call(arguments,1);oListener=aListeners[iListener];if(typeof oListener=='function'){oListener.apply(oListener,aArgs);}else{oListener.listener.apply(oListener,aArgs);}}
Zapatec.EventDriven.removeOnetimeEventListeners(sEvent);};zapatecImagePreloader=Zapatec.ImagePreloader=function(objArgs){this.job=null;this.image=null;if(arguments.length>0)this.init(objArgs);};Zapatec.ImagePreloader.prototype.init=function(objArgs){if(!objArgs||!objArgs.job){return;}
this.job=objArgs.job;this.image=new Image();this.job.images.push(this.image);var objPreloader=this;this.image.onload=function(){objPreloader.job.loadedUrls.push(objArgs.url);setTimeout(function(){objPreloader.onLoad();},0);};this.image.onerror=function(){objPreloader.job.invalidUrls.push(objArgs.url);objPreloader.onLoad();};this.image.onabort=function(){objPreloader.job.abortedUrls.push(objArgs.url);objPreloader.onLoad();};this.image.src=objArgs.url;if(typeof objArgs.timeout=='number'){setTimeout(function(){if(objPreloader.job){if(objPreloader.image.complete){objPreloader.job.loadedUrls.push(objArgs.url);}else{objPreloader.job.abortedUrls.push(objArgs.url);}
objPreloader.onLoad();}},objArgs.timeout);}};Zapatec.ImagePreloader.prototype.onLoad=function(){if(!this.job){return;}
this.image.onload=null;this.image.onerror=null;this.image.onabort=null;var objJob=this.job;this.job=null;objJob.leftToLoad--;if(objJob.leftToLoad==0&&typeof objJob.onLoad=='function'){var funcOnLoad=objJob.onLoad;objJob.onLoad=null;funcOnLoad(objJob);}};zapatecPreloadImages=Zapatec.PreloadImages=function(objArgs){this.images=[];this.leftToLoad=0;this.loadedUrls=[];this.invalidUrls=[];this.abortedUrls=[];this.onLoad=null;if(arguments.length>0)this.init(objArgs);};Zapatec.PreloadImages.prototype.init=function(objArgs){if(!objArgs){return;}
if(!objArgs.urls||!objArgs.urls.length){if(typeof objArgs.onLoad=='function'){objArgs.onLoad(this);}
return;}
this.images=[];this.leftToLoad=objArgs.urls.length;this.loadedUrls=[];this.invalidUrls=[];this.abortedUrls=[];this.onLoad=objArgs.onLoad;for(var iUrl=0;iUrl<objArgs.urls.length;iUrl++){new Zapatec.ImagePreloader({job:this,url:objArgs.urls[iUrl],timeout:objArgs.timeout});}};if(typeof Zapatec=='undefined'){Zapatec=function(){};}
Zapatec.StyleSheet=function(bUseLast){if(bUseLast){if(document.createStyleSheet){if(document.styleSheets.length){this.styleSheet=document.styleSheets[document.styleSheets.length-1];}}else{var aStyleSheets=document.getElementsByTagName('style');if(aStyleSheets.length){this.styleSheet=aStyleSheets[aStyleSheets.length-1];}}}
if(!this.styleSheet){if(document.createStyleSheet){try{this.styleSheet=document.createStyleSheet();}catch(oException){this.styleSheet=document.styleSheets[document.styleSheets.length-1];};}else{this.styleSheet=document.createElement('style');this.styleSheet.type='text/css';var oHead=document.getElementsByTagName('head')[0];if(!oHead){oHead=document.documentElement;}
if(oHead){oHead.appendChild(this.styleSheet);}}}};Zapatec.StyleSheet.prototype.addRule=function(strSelector,strDeclarations){if(!this.styleSheet){return;}
if(document.createStyleSheet){this.styleSheet.cssText+=strSelector+' { '+strDeclarations+' }';}else{this.styleSheet.appendChild(document.createTextNode(strSelector+' { '+strDeclarations+' }'));}};Zapatec.StyleSheet.prototype.removeRules=function(){if(!this.styleSheet){return;}
if(document.createStyleSheet){var iRules=this.styleSheet.rules.length;for(var iRule=0;iRule<iRules;iRule++){this.styleSheet.removeRule();}}else{while(this.styleSheet.firstChild){this.styleSheet.removeChild(this.styleSheet.firstChild);}}};Zapatec.StyleSheet.prototype.addParse=function(strStyleSheet){var arrClean=[];var arrTokens=strStyleSheet.split('/*');for(var iTok=0;iTok<arrTokens.length;iTok++){var arrTails=arrTokens[iTok].split('*/');arrClean.push(arrTails[arrTails.length-1]);}
strStyleSheet=arrClean.join('');strStyleSheet=strStyleSheet.replace(/@[^{]*;/g,'');if(!Zapatec.is_opera){this.addRules(strStyleSheet);}else{var arrStyles=strStyleSheet.split('}');for(var iStl=0;iStl<arrStyles.length;iStl++){var arrRules=arrStyles[iStl].split('{');if(arrRules[0]&&arrRules[1]){var arrSelectors=arrRules[0].split(',');for(var iSel=0;iSel<arrSelectors.length;iSel++){this.addRule(arrSelectors[iSel],arrRules[1]);}}}}};Zapatec.StyleSheet.prototype.addRules=function(cssStr){if(!cssStr||Zapatec.is_opera){return;}
if(Zapatec.is_ie){if(this.styleSheet.disabled){var self=this;setTimeout(function(){self.styleSheet.cssText=cssStr;},10);}else{this.styleSheet.cssText=cssStr;}}else{var cssText=document.createTextNode(cssStr);this.styleSheet.appendChild(cssText);}}
if(typeof zapatecTransport!='function'){if(typeof Zapatec=='undefined'){Zapatec=function(){};}
zapatecTransport=Zapatec.Transport=function(){};if(typeof ActiveXObject!='undefined'){Zapatec.Transport.XMLDOM=null;Zapatec.Transport.XMLHTTP=null;Zapatec.Transport.pickActiveXVersion=function(aVersions){for(var iVn=0;iVn<aVersions.length;iVn++){try{var oDoc=new ActiveXObject(aVersions[iVn]);if(oDoc){return aVersions[iVn];}}catch(oExpn){};}
return null;};Zapatec.Transport.XMLDOM=zapatecTransport.pickActiveXVersion(['Msxml2.DOMDocument.4.0','Msxml2.DOMDocument.3.0','MSXML2.DOMDocument','MSXML.DOMDocument','Microsoft.XMLDOM']);Zapatec.Transport.XMLHTTP=zapatecTransport.pickActiveXVersion(['Msxml2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP','Microsoft.XMLHTTP']);Zapatec.Transport.pickActiveXVersion=null;}
Zapatec.Transport.createXmlHttpRequest=function(){if(typeof ActiveXObject!='undefined'){try{return new ActiveXObject(zapatecTransport.XMLHTTP);}catch(oExpn){};}
if(typeof XMLHttpRequest!='undefined'){return new XMLHttpRequest();}
return null;};Zapatec.Transport.isBusy=function(oArg){var oContr=oArg.busyContainer;if(typeof oContr=='string'){oContr=document.getElementById(oContr);}
if(!oContr){return;}
var sImage=oArg.busyImage;if(typeof sImage!='string'){sImage='';}
sImage=sImage.split('/').pop();if(!sImage.length){sImage='zpbusy.gif';}
var oFC=oContr.firstChild;if(oFC){oFC=oFC.firstChild;if(oFC){oFC=oFC.firstChild;if(oFC&&oFC.tagName&&oFC.tagName.toLowerCase()=='img'){var sSrc=oFC.getAttribute('src');if(typeof sSrc=='string'&&sSrc.length){sSrc=sSrc.split('/').pop();if(sSrc==sImage){return true;}}}}}
return false;};Zapatec.Transport.showBusy=function(oArg){if(zapatecTransport.isBusy(oArg)){return;}
var oContr=oArg.busyContainer;if(typeof oContr=='string'){oContr=document.getElementById(oContr);}
if(!oContr){return;}
var sImage=oArg.busyImage;var sImageWidth=oArg.busyImageWidth;var sImageHeight=oArg.busyImageHeight;if(typeof sImage!='string'||!sImage.length){sImage='zpbusy.gif';}else{if(typeof sImageWidth=='number'||(typeof sImageWidth=='string'&&/\d$/.test(sImageWidth))){sImageWidth+='px';}
if(typeof sImageHeight=='number'||(typeof sImageHeight=='string'&&/\d$/.test(sImageHeight))){sImageHeight+='px';}}
if(!sImageWidth){sImageWidth='65px';}
if(!sImageHeight){sImageHeight='35px';}
var sPath='';if(sImage.indexOf('/')<0){if(Zapatec.zapatecPath){sPath=Zapatec.zapatecPath;}else{sPath=zapatecTransport.getPath('transport.js');}}
var aImg=[];aImg.push('<img src="');aImg.push(sPath);aImg.push(sImage);aImg.push('"');if(sImageWidth||sImageHeight){aImg.push(' style="');if(sImageWidth){aImg.push('width:');aImg.push(sImageWidth);aImg.push(';');}
if(sImageHeight){aImg.push('height:');aImg.push(sImageHeight);}
aImg.push('"');}
aImg.push(' />');var iContainerWidth=oContr.offsetWidth;var iContainerHeight=oContr.offsetHeight;var oBusyContr=zapatecUtils.createElement('div');oBusyContr.style.position='relative';oBusyContr.style.zIndex=2147483583;var oBusy=zapatecUtils.createElement('div',oBusyContr);oBusy.style.position='absolute';oBusy.innerHTML=aImg.join('');oContr.insertBefore(oBusyContr,oContr.firstChild);var iBusyWidth=oBusy.offsetWidth;var iBusyHeight=oBusy.offsetHeight;if(iContainerWidth>iBusyWidth){oBusy.style.left=oContr.scrollLeft+
(iContainerWidth-iBusyWidth)/2+'px';}
if(iContainerHeight>iBusyHeight){oBusy.style.top=oContr.scrollTop+
(iContainerHeight-iBusyHeight)/2+'px';}};Zapatec.Transport.removeBusy=function(oArg){var oContr=oArg.busyContainer;if(typeof oContr=='string'){oContr=document.getElementById(oContr);}
if(!oContr){return;}
if(zapatecTransport.isBusy(oArg)){oContr.removeChild(oContr.firstChild);}};Zapatec.Transport.fetch=function(oArg){if(oArg==null||typeof oArg!='object'){return null;}
if(!oArg.url){return null;}
if(!oArg.method){oArg.method='GET';}
if(typeof oArg.async=='undefined'){oArg.async=true;}
if(!oArg.contentType&&oArg.method.toUpperCase()=='POST'){oArg.contentType='application/x-www-form-urlencoded';}
if(!oArg.content){oArg.content=null;}
if(!oArg.onLoad){oArg.onLoad=null;}
if(!oArg.onError){oArg.onError=null;}
var oRequest=zapatecTransport.createXmlHttpRequest();if(oRequest==null){return null;}
zapatecTransport.showBusy(oArg);var bErrorDisplayed=false;var funcOnReady=function(){zapatecTransport.removeBusy(oArg);try{if(oRequest.status==200||oRequest.status==304||(location.protocol=='file:'&&!oRequest.status)){if(typeof oArg.onLoad=='function'){oArg.onLoad(oRequest);}}else if(!bErrorDisplayed){bErrorDisplayed=true;zapatecTransport.displayError(oRequest.status,"Error: Can't fetch "+oArg.url+'. '+(oRequest.statusText||''),oArg.onError);}}catch(oExpn){if(oExpn.name=='NS_ERROR_NOT_AVAILABLE'){if(!bErrorDisplayed){bErrorDisplayed=true;zapatecTransport.displayError(0,"Error: Can't fetch "+oArg.url+'. File not found.',oArg.onError);}}else{throw(oExpn);}};};try{if(typeof oArg.username!='undefined'&&typeof oArg.password!='undefined'){oRequest.open(oArg.method,oArg.url,oArg.async,oArg.username,oArg.password);}else{oRequest.open(oArg.method,oArg.url,oArg.async);}
if(oArg.async){oRequest.onreadystatechange=function(){if(oRequest.readyState==4){funcOnReady();oRequest.onreadystatechange={};}};}
if(oArg.contentType){oRequest.setRequestHeader('Content-Type',oArg.contentType);}
oRequest.send(oArg.content);if(!oArg.async){funcOnReady();}
return oRequest;}catch(oExpn){zapatecTransport.removeBusy(oArg);if(oExpn.name&&oExpn.name=='NS_ERROR_FILE_NOT_FOUND'){if(!bErrorDisplayed){bErrorDisplayed=true;zapatecTransport.displayError(0,"Error: Can't fetch "+oArg.url+'. File not found.',oArg.onError);}}else{throw(oExpn);}};return null;};Zapatec.Transport.parseHtml=function(sHtml,oContainer){sHtml+='';sHtml=sHtml.replace(/^\s+/g,'');var oTmpContr;if(document.createElementNS){oTmpContr=document.createElementNS('http://www.w3.org/1999/xhtml','div');}else{oTmpContr=document.createElement('div');}
oTmpContr.innerHTML=sHtml;if(oContainer){var oEl=oTmpContr.firstChild;while(oEl){oContainer.appendChild(oEl);oEl=oTmpContr.firstChild;}}else{return oTmpContr;}};Zapatec.Transport.evalGlobalScope=function(sScript){if(typeof sScript!='string'||!sScript.match(/\S/)){return;}
if(window.execScript){window.execScript(sScript,'javascript');}else if(window.eval){window.eval(sScript);}};Zapatec.Transport.setInnerHtml=function(oArg){if(!oArg||typeof oArg.html!='string'){return;}
var sHtml=oArg.html;var oContr=null;if(typeof oArg.container=='string'){oContr=document.getElementById(oArg.container);}else if(typeof oArg.container=='object'){oContr=oArg.container;}
var aScripts=[];if(sHtml.match(/<\s*\/\s*script\s*>/i)){var aTokens=sHtml.split(/<\s*\/\s*script\s*>/i);var aHtml=[];for(var iToken=aTokens.length-1;iToken>=0;iToken--){var sToken=aTokens[iToken];if(sToken.match(/\S/)){var aMatch=sToken.match(/<\s*script([^>]*)>/i);if(aMatch){var aCouple=sToken.split(/<\s*script[^>]*>/i);while(aCouple.length<2){if(sToken.match(/^<\s*script[^>]*>/i)){aCouple.unshift('');}else{aCouple.push('');}}
aHtml.unshift(aCouple[0]);var sAttrs=aMatch[1];var srtScript=aCouple[1];if(sAttrs.match(/\s+src\s*=/i)){srtScript='';}else{srtScript=srtScript.replace(/function\s+([^(]+)/g,'$1=function');}
aScripts.push([sAttrs,srtScript]);}else if(iToken<aTokens.length-1){aTokens[iToken-1]+='</script>'+sToken;}else{aHtml.unshift(sToken);}}else{aHtml.unshift(sToken);}}
sHtml=aHtml.join('');}
if(oContr){if(window.opera){oContr.innerHTML='<form></form>';}
oContr.innerHTML=sHtml;}
for(var iScript=0;iScript<aScripts.length;iScript++){if(aScripts[iScript][1].length){zapatecTransport.evalGlobalScope(aScripts[iScript][1]);}
var sAttrs=aScripts[iScript][0];sAttrs=zapatecUtils.multispacekill(sAttrs).replace(/ = /g,'=');if(sAttrs.indexOf('src=')>=0){var oContr=document.body;if(!oContr){oContr=document.getElementsByTagName('head')[0];if(!oContr){oContr=document;}}
var aAttrs=sAttrs.split(' ');var oScript=zapatecUtils.createElement('script');for(var iAttr=0;iAttr<aAttrs.length;iAttr++){var aAttr=aAttrs[iAttr].split('=');if(aAttr.length>1){oScript.setAttribute(aAttr[0],aAttr[1].match(/^[\s|"|']*([\s|\S]*[^'|"])[\s|"|']*$/)[1]);}else{oScript.setAttribute(aAttr[0],aAttr[0]);}}
oContr.appendChild(oScript);}}};Zapatec.Transport.fetchXmlDoc=function(oArg){if(oArg==null||typeof oArg!='object'){return null;}
if(!oArg.url){return null;}
if(typeof oArg.async=='undefined'){oArg.async=true;}
if(!oArg.onLoad){oArg.onLoad=null;}
if(!oArg.onError){oArg.onError=null;}
if(!oArg.method&&typeof oArg.username=='undefined'&&typeof oArg.password=='undefined'){if(document.implementation&&document.implementation.createDocument){var oDoc=null;if(!oArg.reliable){oArg.reliable=false;}
var oFetchArg={};for(var sKey in oArg){oFetchArg[sKey]=oArg[sKey];}
if(oArg.async){oFetchArg.onLoad=function(oRequest){oFetchArg.onLoad=null;var parser=new DOMParser();oDoc=parser.parseFromString(oRequest.responseText,"text/xml");zapatecTransport.removeBusy(oArg);zapatecTransport.onXmlDocLoad(oDoc,oArg.onLoad,oArg.onError);};}else{oFetchArg.onLoad=null;}
var oRequest=zapatecTransport.fetch(oFetchArg);if(oRequest){if(oArg.async){return oRequest;}else{var parser=new DOMParser();oDoc=parser.parseFromString(oRequest.responseText,"text/xml");zapatecTransport.removeBusy(oArg);zapatecTransport.onXmlDocLoad(oDoc,oArg.onLoad,oArg.onError);return oDoc;}}
return null;}
if(typeof ActiveXObject!='undefined'){zapatecTransport.showBusy(oArg);try{var oDoc=new ActiveXObject(zapatecTransport.XMLDOM);oDoc.async=oArg.async;if(oArg.async){oDoc.onreadystatechange=function(){if(oDoc.readyState==4){zapatecTransport.removeBusy(oArg);zapatecTransport.onXmlDocLoad(oDoc,oArg.onLoad,oArg.onError);oDoc.onreadystatechange={};}};}
oDoc.load(oArg.url);if(!oArg.async){zapatecTransport.removeBusy(oArg);zapatecTransport.onXmlDocLoad(oDoc,oArg.onLoad,oArg.onError);}
return oDoc;}catch(oExpn){zapatecTransport.removeBusy(oArg);};}}
var oFetchArg={};for(var sKey in oArg){oFetchArg[sKey]=oArg[sKey];}
if(oArg.async){oFetchArg.onLoad=function(oRequest){zapatecTransport.parseXml({strXml:oRequest.responseText,onLoad:oArg.onLoad,onError:oArg.onError});};}else{oFetchArg.onLoad=null;}
var oRequest=zapatecTransport.fetch(oFetchArg);if(oRequest){if(oArg.async){return oRequest;}else{return zapatecTransport.parseXml({strXml:oRequest.responseText,onLoad:oArg.onLoad,onError:oArg.onError});}}
return null;};Zapatec.Transport.parseXml=function(oArg){if(oArg==null||typeof oArg!='object'){return null;}
if(!oArg.strXml){return null;}
if(!oArg.onLoad){oArg.onLoad=null;}
if(!oArg.onError){oArg.onError=null;}
if(window.DOMParser){try{var oDoc=(new DOMParser()).parseFromString(oArg.strXml,'text/xml');zapatecTransport.onXmlDocLoad(oDoc,oArg.onLoad,oArg.onError);return oDoc;}catch(oExpn){zapatecTransport.displayError(0,'Error: Cannot parse. String does not appear to be a valid XML fragment.',oArg.onError);};return null;}
if(typeof ActiveXObject!='undefined'){try{var oDoc=new ActiveXObject(zapatecTransport.XMLDOM);oDoc.loadXML(oArg.strXml);zapatecTransport.onXmlDocLoad(oDoc,oArg.onLoad,oArg.onError);return oDoc;}catch(oExpn){};}
return null;};Zapatec.Transport.onXmlDocLoad=function(oDoc,onLoad,onError){var sError=null;if(oDoc.parseError){sError=oDoc.parseError.reason;if(oDoc.parseError.srcText){sError+='Location: '+oDoc.parseError.url+'\nLine number '+oDoc.parseError.line+', column '+
oDoc.parseError.linepos+':\n'+
oDoc.parseError.srcText+'\n';}}else if(oDoc.documentElement&&oDoc.documentElement.tagName=='parsererror'){sError=oDoc.documentElement.firstChild.data+'\n'+
oDoc.documentElement.firstChild.nextSibling.firstChild.data;}else if(!oDoc.documentElement){sError='String does not appear to be a valid XML fragment.';}
if(sError){zapatecTransport.displayError(0,'Error: Cannot parse. '+sError,onError);}else{if(typeof onLoad=='function'){onLoad(oDoc);}}};Zapatec.Transport.serializeXmlDoc=function(oDoc){if(window.XMLSerializer){return(new XMLSerializer).serializeToString(oDoc);}
if(oDoc.xml){return oDoc.xml;}};Zapatec.Transport.fetchJsonObj=function(oArg){if(oArg==null||typeof oArg!='object'){return null;}
if(!oArg.url){return null;}
if(typeof oArg.async=='undefined'){oArg.async=true;}
if(!oArg.reliable){oArg.reliable=false;}
var oFetchArg={};for(var sKey in oArg){oFetchArg[sKey]=oArg[sKey];}
if(oArg.async){oFetchArg.onLoad=function(oRequest){zapatecTransport.parseJson({strJson:oRequest.responseText,reliable:oArg.reliable,onLoad:oArg.onLoad,onError:oArg.onError});};}else{oFetchArg.onLoad=null;}
var oRequest=zapatecTransport.fetch(oFetchArg);if(oRequest){if(oArg.async){return oRequest;}else{return zapatecTransport.parseJson({strJson:oRequest.responseText,reliable:oArg.reliable,onLoad:oArg.onLoad,onError:oArg.onError});}}
return null;};Zapatec.Transport.parseJson=function(oArg){if(oArg==null||typeof oArg!='object'){return null;}
if(!oArg.reliable){oArg.reliable=false;}
if(!oArg.onLoad){oArg.onLoad=null;}
if(!oArg.onError){oArg.onError=null;}
var oJson=null;if(typeof(oArg.strJson)=="string"&&oArg.strJson.length>0){try{if(oArg.reliable){if(oArg.strJson){oJson=eval('('+oArg.strJson+')');}}else{oJson=zapatecTransport.parseJsonStr(oArg.strJson);}}catch(oExpn){var sError='Error: Cannot parse. String does not appear to be a valid JSON fragment: '+
oExpn.message;if(typeof oExpn.text=='string'){sError+='\n'+oExpn.text;}
sError+='\n'+oArg.strJson;zapatecTransport.displayError(0,sError,oArg.onError);return null;};}
if(typeof oArg.onLoad=='function'){oArg.onLoad(oJson);}
return oJson;};Zapatec.Transport.parseJsonStr=function(text){var p=/^\s*(([,:{}\[\]])|"(\\.|[^\x00-\x1f"\\])*"|-?\d+(\.\d*)?([eE][+-]?\d+)?|true|false|null)\s*/,token,operator;function error(m,t){throw{name:'JSONError',message:m,text:t||operator||token};}
function next(b){if(b&&b!=operator){error("Expected '"+b+"'");}
if(text){var t=p.exec(text);if(t){if(t[2]){token=null;operator=t[2];}else{operator=null;try{token=eval(t[1]);}catch(e){error("Bad token",t[1]);}}
text=text.substring(t[0].length);}else{error("Unrecognized token",text);}}else{token=operator=null;}}
function val(){var k,o;switch(operator){case'{':next('{');o={};if(operator!='}'){for(;;){if(operator||typeof token!='string'){error("Missing key");}
k=token;next();next(':');o[k]=val();if(operator!=','){break;}
next(',');}}
next('}');return o;case'[':next('[');o=[];if(operator!=']'){for(;;){o.push(val());if(operator!=','){break;}
next(',');}}
next(']');return o;default:if(operator!==null){error("Missing value");}
k=token;next();return k;}}
next();return val();};Zapatec.Transport.serializeJsonObj=function(v,bAllowFunctions){var a=[];var e=function(s){a[a.length]=s;};var g=function(x){var c,i,l,v;switch(typeof x){case'object':if(x){if(x instanceof Array){e('[');l=a.length;for(i=0;i<x.length;i+=1){if(l<a.length){e(',');}
g(x[i]);}
e(']');return;}else if(x instanceof Date){e('"');e(x.toString());e('"');return;}else if(typeof x.toString!='undefined'){e('{');l=a.length;for(i in x){v=x[i];if(x.hasOwnProperty(i)&&typeof v!='undefined'&&(bAllowFunctions||typeof v!='function')){if(l<a.length){e(',');}
g(i);e(':');g(v);}}
e('}');return;}}
e('null');return;case'number':e(isFinite(x)?+x:'null');return;case'string':l=x.length;e('"');for(i=0;i<l;i+=1){c=x.charAt(i);if(c>=' '){if(c=='\\'||c=='"'){e('\\');}
e(c);}else{switch(c){case'\b':e('\\b');break;case'\f':e('\\f');break;case'\n':e('\\n');break;case'\r':e('\\r');break;case'\t':e('\\t');break;default:c=c.charCodeAt();e('\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16));}}}
e('"');return;case'boolean':e(String(x));return;case'function':if(bAllowFunctions){e(x.toString().replace(/function anonymous/g,'function'));}else{e('null');}
return;default:e('null');return;}};g(v);return a.join('');};Zapatec.Transport.displayError=function(iErrCode,sError,onError){if(typeof onError=='function'){onError({errorCode:iErrCode,errorDescription:sError});}else if(typeof zapatecDebug=='function'){zapatecDebug.log.error('Zapatec.Transport: '+sError);}};Zapatec.Transport.translateUrl=function(oArg){if(!oArg||!oArg.url){return null;}
var aFullUrl=oArg.url.split('?',2);var sUrl=aFullUrl[0];if(sUrl.indexOf(':')>=0){aFullUrl[0]=zapatecTransport.fixUrl(sUrl);return aFullUrl.join('?');}
var oLocation=document.location;var sPort=oLocation.port;if(sPort){sPort=':'+sPort;}
if(sUrl.charAt(0)=='/'){aFullUrl[0]=[oLocation.protocol,'//',oLocation.hostname,sPort,zapatecTransport.fixUrl(sUrl)].join('');}else{var sLocation;if(sPort){sLocation=[oLocation.protocol,'//',oLocation.hostname,sPort,oLocation.pathname].join('');}else{sLocation=oLocation.toString();}
var sRelativeTo;if(typeof oArg.relativeTo!='string'){sRelativeTo=sLocation.split('?',2)[0];}else{sRelativeTo=oArg.relativeTo.split('?',2)[0];if(sRelativeTo.indexOf('/')<0){sRelativeTo=sLocation.split('?',2)[0];}else if(sRelativeTo.charAt(0)!='/'&&sRelativeTo.indexOf(':')<0){sRelativeTo=zapatecTransport.translateUrl({url:sRelativeTo});}}
sRelativeTo=sRelativeTo.split('#')[0];sRelativeTo=sRelativeTo.split('/');sRelativeTo.pop();sRelativeTo=sRelativeTo.join('/');aFullUrl[0]=zapatecTransport.fixUrl(sRelativeTo+'/'+sUrl);}
return aFullUrl.join('?');};Zapatec.Transport.fixUrl=function(sUrl){var aTokens=sUrl.split('/');var aUrl=[];var iTokens=aTokens.length;var sToken;for(var iToken=0;iToken<iTokens;iToken++){sToken=aTokens[iToken];if(sToken=='..'){aUrl.pop();}else if(sToken!='.'){aUrl.push(sToken);}}
return aUrl.join('/');};Zapatec.Transport.loading={};Zapatec.Transport.setupEvents=function(oArg){if(!oArg){return{};}
if(oArg.force||!Zapatec.EventDriven||!oArg.url){return{onLoad:oArg.onLoad,onError:oArg.onError};}
var sUrl=oArg.url;if(typeof oArg.onLoad=='function'){Zapatec.EventDriven.addEventListener('zpTransportOnLoad'+sUrl,oArg.onLoad);}
if(typeof oArg.onError=='function'){Zapatec.EventDriven.addEventListener('zpTransportOnError'+sUrl,oArg.onError);}
if(zapatecTransport.loading[sUrl]){return{loading:true};}else{zapatecTransport.loading[sUrl]=true;return{onLoad:new Function("Zapatec.EventDriven.fireEvent('zpTransportOnLoad"+
sUrl+"');Zapatec.EventDriven.removeEvent('zpTransportOnLoad"+
sUrl+"');Zapatec.EventDriven.removeEvent('zpTransportOnError"+
sUrl+"');zapatecTransport.loading['"+sUrl+"'] = false;"),onError:new Function('oError',"Zapatec.EventDriven.fireEvent('zpTransportOnError"+
sUrl+"',oError);Zapatec.EventDriven.removeEvent('zpTransportOnLoad"+
sUrl+"');Zapatec.EventDriven.removeEvent('zpTransportOnError"+
sUrl+"');zapatecTransport.loading['"+sUrl+"'] = false;")};}};Zapatec.Transport.loadedJS={};Zapatec.Transport.isLoadedJS=function(sUrl,sAbsUrl){if(typeof sAbsUrl=='undefined'){sAbsUrl=zapatecTransport.translateUrl({url:sUrl});}
if(zapatecTransport.loadedJS[sAbsUrl]){return true;}
var aScripts=document.getElementsByTagName('script');for(var iScript=0;iScript<aScripts.length;iScript++){var sSrc=aScripts[iScript].getAttribute('src')||'';if(sSrc==sUrl){zapatecTransport.loadedJS[sAbsUrl]=true;return true;}}
return false;};Zapatec.Transport.getPath=function(sScriptFileName){var aScripts=document.getElementsByTagName('script');for(var iScript=aScripts.length-1;iScript>=0;iScript--){var sSrc=aScripts[iScript].getAttribute('src')||'';var aTokens=sSrc.split('/');var sLastToken=aTokens.pop();if(sLastToken==sScriptFileName){return aTokens.length?aTokens.join('/')+'/':'';}}
for(var sSrc in zapatecTransport.loadedJS){var aTokens=sSrc.split('/');var sLastToken=aTokens.pop();if(sLastToken==sScriptFileName){return aTokens.length?aTokens.join('/')+'/':'';}}
return'';};Zapatec.Transport.include=function(sSrc,sId,bForce){if(zapatecDoNotInclude){return;}
var sAbsUrl=zapatecTransport.translateUrl({url:sSrc});if(!bForce&&zapatecTransport.isLoadedJS(sSrc,sAbsUrl)){return;}
document.write('<script type="text/javascript" src="'+sSrc+
(typeof sId=='string'?'" id="'+sId:'')+'"></script>');zapatecTransport.loadedJS[sAbsUrl]=true;};Zapatec.include=zapatecTransport.include;Zapatec.Transport.includeJS=function(sSrc,sId){setTimeout(function(){var oContr=document.body;if(!oContr){oContr=document.getElementsByTagName('head')[0];if(!oContr){oContr=document;}}
var oScript=document.createElement('script');oScript.type='text/javascript';oScript.src=sSrc;if(typeof sId=='string'){oScript.id=sId;}
oContr.appendChild(oScript);},0);};Zapatec.Transport.loadJS=function(oArg){if(!(oArg instanceof Object)){return;}
if(typeof oArg.async=='undefined'){oArg.async=true;}
var sUrl=null;if(oArg.url){sUrl=oArg.url;}else if(oArg.module){var sPath='';if(typeof oArg.path!='undefined'){sPath=oArg.path;}else if(typeof Zapatec.zapatecPath!='undefined'){sPath=Zapatec.zapatecPath;}
sUrl=sPath+oArg.module+'.js';}else{return;}
var sAbsUrl=zapatecTransport.translateUrl({url:sUrl});if(!oArg.onLoad){oArg.onLoad=null;}
if(!oArg.onError){oArg.onError=null;}
if(zapatecDoNotInclude||(!oArg.force&&zapatecTransport.isLoadedJS(sUrl,sAbsUrl))){if(typeof oArg.onLoad=='function'){oArg.onLoad();}
return;}
var oHandlers=zapatecTransport.setupEvents({url:sAbsUrl,force:oArg.force,onLoad:oArg.onLoad,onError:oArg.onError});if(oHandlers.loading){return;}
zapatecTransport.fetch({url:sUrl,async:oArg.async,onLoad:function(oRequest){if(oArg.force||!zapatecTransport.loadedJS[sAbsUrl]){var aTokens=sUrl.split('/');var sLastToken=aTokens.pop();Zapatec.lastLoadedModule=aTokens.join('/')+'/';zapatecTransport.evalGlobalScope(oRequest.responseText);Zapatec.lastLoadedModule=null;zapatecTransport.loadedJS[sAbsUrl]=true;}
if(typeof oHandlers.onLoad=='function'){oHandlers.onLoad();}},onError:oHandlers.onError});};Zapatec.Transport.includeCSS=function(sHref){var oContr=document.getElementsByTagName('head')[0];if(!oContr){return;}
var oLink=document.createElement('link');oLink.setAttribute('rel','stylesheet');oLink.setAttribute('type','text/css');oLink.setAttribute('href',sHref);oContr.appendChild(oLink);};Zapatec.Transport.loadedCss={};Zapatec.Transport.loadCss=function(oArg){if(!(oArg instanceof Object)){return;}
if(!oArg.url){return;}
if(typeof oArg.async=='undefined'){oArg.async=true;}
var sAbsUrl=zapatecTransport.translateUrl({url:oArg.url});if(!oArg.force){if(zapatecTransport.loadedCss[sAbsUrl]){if(typeof oArg.onLoad=='function'){oArg.onLoad();}
return;}
var aLinks=document.getElementsByTagName('link');for(var iLnk=0;iLnk<aLinks.length;iLnk++){var sHref=aLinks[iLnk].getAttribute('href')||'';sHref=zapatecTransport.translateUrl({url:sHref});if(sHref==sAbsUrl){zapatecTransport.loadedCss[sAbsUrl]=true;if(typeof oArg.onLoad=='function'){oArg.onLoad();}
return;}}}
var oHandlers=zapatecTransport.setupEvents({url:sAbsUrl,force:oArg.force,onLoad:oArg.onLoad,onError:oArg.onError});if(oHandlers.loading){return;}
zapatecTransport.fetch({url:sAbsUrl,async:oArg.async,onLoad:function(oRequest){var sCss=oRequest.responseText;var aResultCss=[];var aImgUrls=[];var aCssUrls=[];var iPos=0;var iNextPos=sCss.indexOf('url(',iPos);while(iNextPos>=0){iNextPos+=4;var sToken=sCss.substring(iPos,iNextPos);var bIsImport=/@import\s+url\($/.test(sToken);aResultCss.push(sToken);iPos=iNextPos;iNextPos=sCss.indexOf(')',iPos);if(iNextPos>=0){var sImgUrl=sCss.substring(iPos,iNextPos);sImgUrl=sImgUrl.replace(/['"]/g,'');sImgUrl=zapatecTransport.translateUrl({url:sImgUrl,relativeTo:oArg.url});sImgUrl=zapatecTransport.translateUrl({url:sImgUrl});aResultCss.push(sImgUrl);if(bIsImport){aCssUrls.push(sImgUrl);}else{aImgUrls.push(sImgUrl);}
iPos=iNextPos;iNextPos=sCss.indexOf('url(',iPos);}}
aResultCss.push(sCss.substr(iPos));sCss=aResultCss.join('');zapatecTransport.loadCssList({urls:aCssUrls,async:oArg.async,onLoad:function(){(new Zapatec.StyleSheet()).addParse(sCss);if(typeof oHandlers.onLoad=='function'){oHandlers.onLoad();}}});zapatecTransport.loadedCss[sAbsUrl]=true;zapatecTransport.preloadImages({urls:aImgUrls,timeout:60000});},onError:oHandlers.onError});};Zapatec.Transport.loadCssList=function(oArg){if(!(oArg instanceof Object)){return;}
if(typeof oArg.async=='undefined'){oArg.async=true;}
if(!oArg.onLoad){oArg.onLoad=null;}
if(!oArg.onError){oArg.onError=null;}
if(!oArg.urls||!oArg.urls.length){if(typeof oArg.onLoad=='function'){oArg.onLoad();}
return;}
var sUrl=oArg.urls.shift();var funcOnLoad=function(){zapatecTransport.loadCssList({urls:oArg.urls,async:oArg.async,force:oArg.force,onLoad:oArg.onLoad,onError:oArg.onError});};zapatecTransport.loadCss({url:sUrl,async:oArg.async,force:oArg.force,onLoad:funcOnLoad,onError:function(oError){zapatecTransport.displayError(oError.errorCode,oError.errorDescription,oArg.onError);funcOnLoad();}});};Zapatec.Transport.imagePreloads=[];Zapatec.Transport.preloadImages=function(oArg){if(typeof zapatecPreloadImages=='function'){zapatecTransport.imagePreloads.push(new zapatecPreloadImages(oArg));}};}
if(typeof Zapatec=='undefined'){Zapatec=function(){};}
Zapatec.Drag=function(){};zapatecDrag=Zapatec.Drag;zapatecUtils.emulateWindowEvent(['mousedown','mousemove','mouseup']);Zapatec.Drag.currentId=null;Zapatec.Drag.start=function(oEv,sId,oArg){var oEl=zapatecWidgetGetElementById(sId);if(!oEl||oEl.zpDragArgs){return true;}
if(!oArg){oArg={};}
var oPos=zapatecUtils.getMousePos(oEv||window.event);zapatecEventDriven.fireEvent('dragStart',{el:oEl,event:oEv,args:oArg});oEl.zpDragArgs={};var oDragArgs=oEl.zpDragArgs;oDragArgs.args=oArg;oDragArgs.resize=oArg.resize;if(oArg.resize=='bottom-right'){oDragArgs.resizeBottomRight=true;}else if(oArg.resize=='top-left'){oDragArgs.resizeTopLeft=true;}
oDragArgs.pageX=oPos.pageX;oDragArgs.pageY=oPos.pageY;oDragArgs.width=oEl.clientWidth;oDragArgs.height=oEl.clientHeight;oDragArgs.prevWidth=oDragArgs.width;oDragArgs.prevHeight=oDragArgs.height;var sTag;var oOffsetParent=oEl.offsetParent;if(oOffsetParent){sTag=oOffsetParent.tagName.toLowerCase();}
if(sTag&&sTag!='body'&&sTag!='html'){oPos=zapatecUtils.getElementOffset(oEl);var oPosParent=zapatecUtils.getElementOffset(oOffsetParent);oDragArgs.left=oPos.left-oPosParent.left;oDragArgs.top=oPos.top-oPosParent.top;}else{oDragArgs.left=oEl.offsetLeft;oDragArgs.top=oEl.offsetTop;}
oDragArgs.right=oDragArgs.left+oDragArgs.width;oDragArgs.bottom=oDragArgs.top+oDragArgs.height;oDragArgs.prevLeft=oDragArgs.prevRealLeft=oDragArgs.left;oDragArgs.prevTop=oDragArgs.prevRealTop=oDragArgs.top;oDragArgs.vertical=oArg.vertical;oDragArgs.horizontal=oArg.horizontal;oDragArgs.limitTop=typeof oArg.limitTop=='number'?oArg.limitTop:-Infinity;oDragArgs.limitBottom=typeof oArg.limitBottom=='number'?oArg.limitBottom:Infinity;oDragArgs.limitLeft=typeof oArg.limitLeft=='number'?oArg.limitLeft:-Infinity;oDragArgs.limitRight=typeof oArg.limitRight=='number'?oArg.limitRight:Infinity;if(typeof oArg.step=='number'){oDragArgs.stepVertical=oDragArgs.stepHorizontal=oArg.step;}
if(typeof oArg.stepVertical=='number'){oDragArgs.stepVertical=oArg.stepVertical;}
if(typeof oArg.stepHorizontal=='number'){oDragArgs.stepHorizontal=oArg.stepHorizontal;}
zapatecDrag.currentId=sId;zapatecUtils.addEvent(document,'mousemove',zapatecDrag.move);zapatecUtils.addEvent(document,'mouseup',zapatecDrag.end);return true;};Zapatec.Drag.move=function(oEv){oEv||(oEv=window.event);if(!zapatecDrag.currentId){return zapatecUtils.stopEvent(oEv);}
var oEl=document.getElementById(zapatecDrag.currentId);if(!(oEl&&oEl.zpDragArgs)){return zapatecUtils.stopEvent(oEv);}
var oDragArgs=oEl.zpDragArgs;var oStyle=oEl.style;var oPos=zapatecUtils.getMousePos(oEv);var oParam={el:oEl,startLeft:oDragArgs.left,startTop:oDragArgs.top,prevLeft:oDragArgs.prevLeft,prevTop:oDragArgs.prevTop,left:oDragArgs.prevLeft,top:oDragArgs.prevTop,realLeft:oDragArgs.prevRealLeft,realTop:oDragArgs.prevRealTop,startWidth:oDragArgs.width,startHeight:oDragArgs.height,prevWidth:oDragArgs.prevWidth,prevHeight:oDragArgs.prevHeight,width:oDragArgs.prevWidth,height:oDragArgs.prevHeight,event:oEv,args:oDragArgs.args};var iOffset,iPos,iStep,iSize;iOffset=oPos.pageX-oDragArgs.pageX;oParam.realLeft=oDragArgs.prevRealLeft=oDragArgs.left+iOffset;iStep=oDragArgs.stepHorizontal;if(iStep){iOffset=Math.round(Math.round(iOffset/iStep)*iStep);}
iPos=oDragArgs.left+iOffset;if(!oDragArgs.vertical){if(oDragArgs.limitLeft<=iPos&&oDragArgs.limitRight>=iPos){if(oStyle.right){oStyle.right='';}
if(oDragArgs.resize){iPos=oDragArgs.left;if(oDragArgs.resizeBottomRight){iSize=oDragArgs.width+iOffset;}else if(oDragArgs.resizeTopLeft){iSize=oDragArgs.width-iOffset;if(iSize>0){iPos=oDragArgs.right-iSize;}}else{if(iOffset>0){iSize=oDragArgs.width+iOffset;}else{iSize=oDragArgs.width-iOffset;iPos=oDragArgs.right-iSize;}}
if(iSize>0){oStyle.width=iSize+'px';oParam.width=oDragArgs.prevWidth=iSize;}}
oStyle.left=iPos+'px';oParam.left=oDragArgs.prevLeft=iPos;}}
iOffset=oPos.pageY-oDragArgs.pageY;oParam.realTop=oDragArgs.prevRealTop=oDragArgs.top+iOffset;iStep=oDragArgs.stepVertical;if(iStep){iOffset=Math.round(Math.floor(iOffset/iStep)*iStep);}
iPos=oDragArgs.top+iOffset;if(!oDragArgs.horizontal){if(oDragArgs.limitTop<=iPos&&oDragArgs.limitBottom>=iPos){if(oStyle.bottom){oStyle.bottom='';}
if(oDragArgs.resize){iPos=oDragArgs.top;if(oDragArgs.resizeBottomRight){iSize=oDragArgs.height+iOffset;}else if(oDragArgs.resizeTopLeft){iSize=oDragArgs.height-iOffset;if(iSize>0){iPos=oDragArgs.bottom-iSize;}}else{if(iOffset>0){iSize=oDragArgs.height+iOffset;}else{iSize=oDragArgs.height-iOffset;iPos=oDragArgs.bottom-iSize;}}
if(iSize>0){oStyle.height=iSize+'px';oParam.height=oDragArgs.prevHeight=iSize;}}
oStyle.top=iPos+'px';oParam.top=oDragArgs.prevTop=iPos;}}
zapatecEventDriven.fireEvent('dragMove',oParam);return zapatecUtils.stopEvent(oEv);};Zapatec.Drag.end=function(oEv){oEv||(oEv=window.event);if(!zapatecDrag.currentId){return zapatecUtils.stopEvent(oEv);}
var oEl=document.getElementById(zapatecDrag.currentId);if(!(oEl&&oEl.zpDragArgs)){return zapatecUtils.stopEvent(oEv);}
var oDragArgs=oEl.zpDragArgs;zapatecUtils.removeEvent(document,'mousemove',zapatecDrag.move);zapatecUtils.removeEvent(document,'mouseup',zapatecDrag.end);var oParam={el:oEl,startLeft:oDragArgs.left,startTop:oDragArgs.top,left:oDragArgs.prevLeft,top:oDragArgs.prevTop,realLeft:oDragArgs.prevRealLeft,realTop:oDragArgs.prevRealTop,startWidth:oDragArgs.width,startHeight:oDragArgs.height,width:oDragArgs.prevWidth,height:oDragArgs.prevHeight,event:oEv,args:oDragArgs.args};zapatecDrag.currentId=null;oEl.zpDragArgs=null;zapatecEventDriven.fireEvent('dragEnd',oParam);return zapatecUtils.stopEvent(oEv);};if(typeof Zapatec=='undefined'){Zapatec=function(){};}
Zapatec.Widget=function(oArg){this.arg=oArg;this.config={};zapatecWidget.SUPERconstructor.call(this);this.init(oArg);};zapatecWidget=Zapatec.Widget;Zapatec.inherit(zapatecWidget,zapatecEventDriven);Zapatec.Widget.id='Zapatec.Widget';Zapatec.Widget.path=Zapatec.getPath('Zapatec.Widget');Zapatec.Widget.prototype.init=function(oArg){zapatecWidget.SUPERclass.init.call(this);if(typeof this.id=='undefined'){var iId=0;while(zapatecWidgetAll[iId]){iId++;}
this.id=iId;zapatecWidgetAll[iId]=this;}
this.configure(oArg);this.addUserEventListeners();this.addStandardEventListeners();this.initLang();this.loadTheme();this.loadTemplate();};Zapatec.Widget.prototype.reconfigure=function(oArg){this.configure(oArg);this.loadTheme();this.loadTemplate();if(oArg&&(oArg.lang||oArg.langCountryCode||oArg.langEncoding)){this.langStr=this.config.lang;if(this.config.langCountryCode&&this.config.langCountryCode.length>0){this.langStr+="_"+this.config.langCountryCode;}
if(this.config.langEncoding&&this.config.langEncoding.length>0){this.langStr+="-"+this.config.langEncoding;}}
if(this.config.lang&&this.config.lang.length>0&&!(Zapatec.Langs[this.config.langId]&&Zapatec.Langs[this.config.langId][this.langStr])){this.debug(this.config.lang+(this.config.langCountryCode?" and country code "+this.config.langCountryCode:"")+(this.config.langEncoding?" and encoding "+this.config.langEncoding:""));this.config.lang=null;this.config.langEncoding=null;this.langStr=null;}};Zapatec.Widget.prototype.reset=function(){this.config={};this.reconfigure(this.arg);};Zapatec.Widget.prototype.configure=function(oArg){this.defineConfigOption('theme','default');this.defineConfigOption('templateFile','default');var sPath=this.constructor.path;if(typeof sPath!='undefined'){this.defineConfigOption('themePath',zapatecTransport.translateUrl({url:'../themes/',relativeTo:sPath}));this.defineConfigOption('templateFilePath',zapatecTransport.translateUrl({url:'../templates/',relativeTo:sPath}));}else{this.defineConfigOption('templateFilePath','../templates/');}
this.defineConfigOption('templates');this.defineConfigOption('asyncTheme',false);this.defineConfigOption('source');this.defineConfigOption('sourceType','html');this.defineConfigOption('sourceFetchMethod','GET');this.defineConfigOption('sourceFetchContentType');this.defineConfigOption('sourceFetchContent');this.defineConfigOption('callbackSource');this.defineConfigOption('asyncSource',true);this.defineConfigOption('reliableSource',true);this.defineConfigOption('callbackConvertSource');this.defineConfigOption('eventListeners',{});this.defineConfigOption('langId');this.defineConfigOption('lang');this.defineConfigOption('langCountryCode');this.defineConfigOption('langEncoding');var oConfig=this.config;var sOption;if(oArg){for(sOption in oArg){if(typeof oConfig[sOption]!='undefined'){oConfig[sOption]=oArg[sOption];}else{this.debug('Unknown config option: '+sOption+'.','warn');}}}
var sConstructorId=this.constructor.id;if(sConstructorId){var oCookie=zapatecTransport.parseJson({strJson:zapatecUtils.getCookie('Zapatec.Config')});if(oCookie){oCookie=oCookie[sConstructorId];if(oCookie){for(sOption in oCookie){if(typeof oConfig[sOption]!='undefined'){oConfig[sOption]=oCookie[sOption];}}}}}};Zapatec.Widget.prototype.getConfiguration=function(){return this.config;};Zapatec.Widget.all=[];zapatecWidgetAll=zapatecWidget.all;Zapatec.Widget.getWidgetById=function(iId){return zapatecWidgetAll[iId];};zapatecWidgetGetWidgetById=zapatecWidget.getWidgetById;Zapatec.Widget.prototype.addCircularRef=function(oElement,sProperty){if(!this.widgetCircularRefs){this.widgetCircularRefs=[];}
this.widgetCircularRefs.push([oElement,sProperty]);};Zapatec.Widget.prototype.createProperty=function(oElement,sProperty,val){oElement[sProperty]=val;this.addCircularRef(oElement,sProperty);};Zapatec.Widget.prototype.removeCircularRefs=function(){if(!this.widgetCircularRefs){return;}
for(var iRef=this.widgetCircularRefs.length-1;iRef>=0;iRef--){var oRef=this.widgetCircularRefs[iRef];try{oRef[0][oRef[1]]=null;}catch(e){};oRef[0]=null;}};Zapatec.Widget.prototype.discard=function(){this.discardEventHandlers();this.discardControls();this.discardTemplates();this.arg=null;this.config=null;zapatecWidgetAll[this.id]=null;this.removeCircularRefs();};Zapatec.Widget.removeCircularRefs=function(){var oWidget;for(var iWidget=zapatecWidgetAll.length-1;iWidget>=0;iWidget--){oWidget=zapatecWidgetAll[iWidget];if(oWidget&&typeof oWidget.discard=='function'){oWidget.discard();}}};zapatecUtils.addEvent(window,'unload',zapatecWidget.removeCircularRefs);Zapatec.Widget.prototype.defineConfigOption=function(sOption,val){if(typeof this.config[sOption]=='undefined'){if(typeof val=='undefined'){this.config[sOption]=null;}else{this.config[sOption]=val;}}};Zapatec.Widget.prototype.addUserEventListeners=function(){var oListeners=this.config.eventListeners;var fListener,iListeners,iListener;for(var sEvent in oListeners){if(oListeners.hasOwnProperty(sEvent)){vListener=oListeners[sEvent];if(vListener instanceof Array){iListeners=vListener.length;for(iListener=0;iListener<iListeners;iListener++){this.addEventListener(sEvent,vListener[iListener]);}}else{this.addEventListener(sEvent,vListener);}}}};Zapatec.Widget.prototype.addStandardEventListeners=function(){this.addEventListener('fetchSourceError',zapatecWidget.loadSourceError);this.addEventListener('loadThemeError',zapatecWidget.loadThemeError);this.addEventListener('loadTemplateError',zapatecWidget.loadTemplateError);};Zapatec.Widget.loadThemeError=function(oError){this.debug('Cannot load theme: '+
(oError&&oError.errorDescription?oError.errorDescription:'')+'.');};Zapatec.Widget.loadTemplateError=function(oError){this.debug('Cannot load template: '+
(oError&&oError.errorDescription?oError.errorDescription:'')+'.');};Zapatec.Widget.loadSourceError=function(oError){this.debug('Cannot load source: '+
(oError&&oError.errorDescription?oError.errorDescription:'')+'.');};Zapatec.Widget.prototype.loadTheme=function(){var oConfig=this.config;if(typeof oConfig.theme=='string'&&oConfig.theme.length){var iPos=oConfig.theme.lastIndexOf('/');if(iPos>=0){iPos++;oConfig.themePath=oConfig.theme.substring(0,iPos);oConfig.theme=oConfig.theme.substring(iPos);}
iPos=oConfig.theme.lastIndexOf('.');if(iPos>=0){oConfig.theme=oConfig.theme.substring(0,iPos);}
oConfig.theme=oConfig.theme.toLowerCase();if(oConfig.theme=='auto'){var sUserAgent=navigator.userAgent;if(sUserAgent.indexOf('Windows NT 6')!=-1){oConfig.theme='winvista';}else if(sUserAgent.indexOf('Windows NT 5')!=-1){oConfig.theme='winxp';}else if(sUserAgent.indexOf('Win')!=-1){oConfig.theme='win2k';}else if(sUserAgent.indexOf('Mac')!=-1){oConfig.theme='macosx';}else{oConfig.theme='default';}}}else{oConfig.theme='';}
if(oConfig.theme){this.fireEvent('loadThemeStart');if(zapatecDoNotLoadThemes){this.themeLoaded=true;this.fireEvent('loadThemeEnd');}else{this.themeLoaded=false;var oWidget=this;zapatecTransport.loadCss({url:oConfig.themePath+oConfig.theme+'.css',async:oConfig.asyncTheme,onLoad:function(){if(!oWidget){return;}
oWidget.themeLoaded=true;oWidget.fireEvent('loadThemeEnd');oWidget=null;},onError:function(oError){if(!oWidget){return;}
oWidget.themeLoaded=true;oWidget.fireEvent('loadThemeEnd');oWidget.fireEvent('loadThemeError',oError);oWidget=null;}});}}};Zapatec.Widget.prototype.loadTemplate=function(){var oConfig=this.config;if(typeof oConfig.templateFile=='string'&&oConfig.templateFile.length){var iPos=oConfig.templateFile.lastIndexOf('/');if(iPos>=0){iPos++;oConfig.templateFilePath=oConfig.templateFile.substring(0,iPos);oConfig.templateFile=oConfig.templateFile.substring(iPos);}
iPos=oConfig.templateFile.lastIndexOf('.');if(iPos>=0){oConfig.templateFile=oConfig.templateFile.substring(0,iPos);}
oConfig.templateFile=oConfig.templateFile.toLowerCase();}else{oConfig.templateFile='';}
if(oConfig.templateFile&&oConfig.templates){this.fireEvent('loadTemplateStart');this.templateLoaded=false;var sTemplateFile=this.constructor.templateFiles;if(sTemplateFile){sTemplateFile=sTemplateFile[oConfig.templateFile];}
if(sTemplateFile){this.parseTemplate(sTemplateFile);}else{var oWidget=this;zapatecTransport.fetch({url:oConfig.templateFilePath+oConfig.templateFile+'.html'+
(typeof zapatecDebug=='function'?'?'+Math.random():''),onLoad:function(oRequest){if(!oWidget){return;}
oWidget.parseTemplate(oRequest.responseText);oWidget=null;},onError:function(oError){if(!oWidget){return;}
oWidget.templateLoaded=true;oWidget.fireEvent('loadTemplateEnd');oWidget.fireEvent('loadTemplateError',oError);oWidget=null;}});}}};Zapatec.Widget.prototype.parseTemplate=function(sHtml){var oContainer=zapatecTransport.parseHtml(sHtml);oContainer.style.display='none';document.body.insertBefore(oContainer,document.body.firstChild);this.initTemplates();document.body.removeChild(oContainer);oContainer=null;this.templateLoaded=true;this.fireEvent('loadTemplateEnd');this.display();};Zapatec.Widget.prototype.initTemplates=function(){this.discardControls();this.discardTemplates();this.templates={};var oTemplates=this.templates;var oTemplateContainers=this.config.templates;if(!oTemplateContainers){this.debug('Missing config option "templates".');return;}
if(!zapatecTemplate){this.debug('Cannot find Zapatec.Template class.');return;}
var sTplContainer,sTplContainerId;for(sTplContainer in oTemplateContainers){sTplContainerId=oTemplateContainers[sTplContainer];if(typeof sTplContainerId=='string'&&sTplContainerId.length){oTemplates[sTplContainer]=new zapatecTemplate({source:sTplContainerId,sourceType:'html'});}}};Zapatec.Widget.prototype.discardTemplates=function(){var oTemplates=this.templates;if(oTemplates){var sTpl,oTpl;for(sTpl in oTemplates){oTpl=oTemplates[sTpl];if(oTpl&&typeof oTpl.discard=='function'){oTpl.discard();oTemplates[sTpl]=null;}}}};Zapatec.Widget.prototype.display=function(){if(!this.templates){this.debug('Templates are not loaded.');}};Zapatec.Widget.prototype.initControls=function(){this.discardControls();this.controls={};};Zapatec.Widget.prototype.discardControls=function(){var oControls=this.controls;if(oControls){var sControl,oControl;for(sControl in oControls){oControl=oControls[sControl];if(oControl&&typeof oControl.discard=='function'){oControl.discard();oControls[sControl]=null;}}}};Zapatec.Widget.prototype.setEventHandlers=function(){this.discardEventHandlers();this.eventHandlers={};};Zapatec.Widget.prototype.addEventHandler=function(sHandlerName,oElement,sEvent,fListener,bUseCapture,bRemoveOnUnload){if(!this.eventHandlers){this.setEventHandlers();}
this.removeEventHandler(sHandlerName);zapatecUtils.addEvent(oElement,sEvent,fListener);this.eventHandlers[sHandlerName]={element:oElement,event:sEvent,handler:fListener};};Zapatec.Widget.prototype.removeEventHandler=function(sHandlerName){if(!this.eventHandlers||!this.eventHandlers[sHandlerName]){return;}
var oHandler=this.eventHandlers[sHandlerName];var oEl=oHandler.element;var sEvent=oHandler.event;var fHandler=oHandler.handler;if(oEl&&typeof sEvent=='string'&&typeof fHandler=='function'){zapatecUtils.removeEvent(oEl,sEvent,fHandler);oHandler.element=null;oHandler.handler=null;this.eventHandlers[sHandlerName]==null;}};Zapatec.Widget.prototype.discardEventHandlers=function(){var oHandlers=this.eventHandlers;if(oHandlers){var sHandler;for(sHandler in oHandlers){this.removeEventHandler(sHandler);}}};Zapatec.Widget.prototype.getClassName=function(oArg){var aClassName=[];if(oArg&&oArg.prefix){aClassName.push(oArg.prefix);}
var sTheme=this.config.theme;if(sTheme!=''){aClassName.push(sTheme.charAt(0).toUpperCase());aClassName.push(sTheme.substr(1));}
if(oArg&&oArg.suffix){aClassName.push(oArg.suffix);}
return aClassName.join('');};Zapatec.Widget.prototype.formElementId=function(oArg){var aId=[];if(oArg&&oArg.prefix){aId.push(oArg.prefix);}else{aId.push('zpWidget');}
aId.push(this.id);if(oArg&&oArg.suffix){aId.push(oArg.suffix);}else{aId.push('-');}
if(typeof this.widgetUniqueIdCounter=='undefined'){this.widgetUniqueIdCounter=0;}else{this.widgetUniqueIdCounter++;}
aId.push(this.widgetUniqueIdCounter);return aId.join('');};Zapatec.Widget.prototype.showContainer=function(effects,animSpeed,onFinish){return this.showHideContainer(effects,animSpeed,onFinish,true);}
Zapatec.Widget.prototype.hideContainer=function(effects,animSpeed,onFinish){return this.showHideContainer(effects,animSpeed,onFinish,false);}
Zapatec.Widget.prototype.showHideContainer=function(effects,animSpeed,onFinish,show){if(this.container==null){return null;}
if(effects&&effects.length>0&&typeof(Zapatec.Effects)=='undefined'){var self=this;zapatecTransport.loadJS({url:Zapatec.zapatecPath+'../zpeffects/src/effects.js',onLoad:function(){self.showHideContainer(effects,animSpeed,onFinish,show);}});return false;}
if(animSpeed==null&&isNaN(parseInt(animSpeed))){animSpeed=5;}
if(!effects||effects.length==0){if(show){this.container.style.display="";}else{this.container.style.display='none';}
if(onFinish){onFinish();}}else{if(show){Zapatec.Effects.show(this.container,animSpeed,effects,onFinish);}else{Zapatec.Effects.hide(this.container,animSpeed,effects,onFinish);}}
return true;}
Zapatec.Widget.prototype.loadData=function(oArg){var oConfig=this.config;if(typeof oConfig.callbackSource=='function'){var oSource=oConfig.callbackSource.call(this,oArg);if(oSource){if(typeof oSource.source!='undefined'){oConfig.source=oSource.source;}
if(typeof oSource.sourceType!='undefined'){oConfig.sourceType=oSource.sourceType;}
if(typeof oSource.method!='undefined'){oConfig.sourceFetchMethod=oSource.method;}
if(typeof oSource.contentType!='undefined'){oConfig.sourceFetchContentType=oSource.contentType;}
if(typeof oSource.content!='undefined'){oConfig.sourceFetchContent=oSource.content;}}}
var vSource=oConfig.source;var sSourceType=oConfig.sourceType;var fConvert=oConfig.callbackConvertSource;if(typeof fConvert!='function'){fConvert=function(obj){return obj;};}
if(vSource&&typeof sSourceType=='string'){sSourceType=sSourceType.toLowerCase();if(sSourceType=='html'){this.fireEvent('loadDataStart');vSource=fConvert(vSource);this.loadDataHtml(zapatecWidget.getElementById(vSource));this.fireEvent('loadDataEnd');}else if(sSourceType=='html/text'){this.fireEvent('loadDataStart');vSource=fConvert(vSource);this.loadDataHtmlText(vSource);this.fireEvent('loadDataEnd');}else if(sSourceType=='html/url'){this.fireEvent('fetchSourceStart');var oWidget=this;this.dataRequest=zapatecTransport.fetch({url:vSource,method:oConfig.sourceFetchMethod,async:oConfig.asyncSource,contentType:oConfig.sourceFetchContentType,content:oConfig.sourceFetchContent,onLoad:function(oRequest){oWidget.dataRequest=null;oWidget.fireEvent('fetchSourceEnd');oWidget.fireEvent('loadDataStart');oWidget.loadDataHtmlText(fConvert(oRequest.responseText));oWidget.fireEvent('loadDataEnd');oWidget=null;},onError:function(oError){oWidget.dataRequest=null;oWidget.fireEvent('fetchSourceError',oError);oWidget.fireEvent('fetchSourceEnd');oWidget.fireEvent('loadDataEnd');oWidget=null;}});}else if(sSourceType=='json'){this.fireEvent('loadDataStart');if(typeof vSource=='string'){if(oConfig.reliableSource){vSource=eval(['(',vSource,')'].join(''));}else{vSource=zapatecTransport.parseJson({strJson:vSource});}}
vSource=fConvert(vSource);this.loadDataJson(vSource);this.fireEvent('loadDataEnd');}else if(sSourceType=='json/url'){this.fireEvent('fetchSourceStart');var oWidget=this;this.dataRequest=zapatecTransport.fetchJsonObj({url:vSource,method:oConfig.sourceFetchMethod,async:oConfig.asyncSource,contentType:oConfig.sourceFetchContentType,content:oConfig.sourceFetchContent,reliable:oConfig.reliableSource,onLoad:function(oResult){oWidget.dataRequest=null;oWidget.fireEvent('fetchSourceEnd');oWidget.fireEvent('loadDataStart');oResult=fConvert(oResult);oWidget.loadDataJson(oResult);oWidget.fireEvent('loadDataEnd');oWidget=null;},onError:function(oError){oWidget.dataRequest=null;oWidget.fireEvent('fetchSourceError',oError);oWidget.fireEvent('fetchSourceEnd');oWidget.fireEvent('loadDataEnd');oWidget=null;}});}else if(sSourceType=='xml'){this.fireEvent('loadDataStart');if(typeof vSource!='object'){vSource=zapatecTransport.parseXml({strXml:vSource});}
vSource=fConvert(vSource);this.loadDataXml(vSource);this.fireEvent('loadDataEnd');}else if(sSourceType=='xml/url'){this.fireEvent('fetchSourceStart');var oWidget=this;this.dataRequest=zapatecTransport.fetchXmlDoc({url:vSource,method:oConfig.sourceFetchMethod,async:oConfig.asyncSource,contentType:oConfig.sourceFetchContentType,content:oConfig.sourceFetchContent,onLoad:function(oResult){oWidget.dataRequest=null;oWidget.fireEvent('fetchSourceEnd');oWidget.fireEvent('loadDataStart');oResult=fConvert(oResult);oWidget.loadDataXml(oResult);oWidget.fireEvent('loadDataEnd');oWidget=null;},onError:function(oError){oWidget.dataRequest=null;oWidget.fireEvent('fetchSourceError',oError);oWidget.fireEvent('fetchSourceEnd');oWidget.fireEvent('loadDataEnd');oWidget=null;}});}}else{this.fireEvent('loadDataStart');vSource=fConvert(zapatecWidget.getElementById(vSource));this.loadDataHtml(vSource);this.fireEvent('loadDataEnd');}};Zapatec.Widget.prototype.loadDataHtml=function(oSource){};Zapatec.Widget.prototype.loadDataHtmlText=function(sSource){var oTempContainer=zapatecTransport.parseHtml(sSource);this.loadDataHtml(oTempContainer.firstChild);};Zapatec.Widget.prototype.loadDataJson=function(oSource){};Zapatec.Widget.prototype.loadDataXml=function(oSource){};Zapatec.Widget.prototype.loadDataAbort=function(){var oRequest=this.dataRequest;if(oRequest){this.dataRequest=null;oRequest.onreadystatechange=function(){};oRequest.abort();}};Zapatec.Widget.prototype.receiveData=function(oArg){if(!oArg){oArg={};}
this.dataSender=oArg.widget;this.fireEvent('receiveData',oArg);};Zapatec.Widget.prototype.replyData=function(){return null;};Zapatec.Widget.prototype.replyDataCancel=function(){this.fireEvent('replyDataCancel');if(typeof this.hide=='function'){this.hide();}
this.dataSender=null;};Zapatec.Widget.prototype.replyDataReturn=function(oArg){if(!oArg){oArg={};}
this.fireEvent('replyDataReturn',oArg);var oWidget=oArg.widget;if(!oWidget){oWidget=this.dataSender;}
if(!oWidget||typeof oWidget.acceptData!='function'){return;}
oWidget.acceptData({widget:this,data:this.replyData()});this.replyDataCancel();};Zapatec.Widget.prototype.acceptData=function(oArg){this.fireEvent('acceptData',oArg);};Zapatec.Widget.prototype.initLang=function(){this.langStr=this.config.lang;if(this.config.langCountryCode&&this.config.langCountryCode.length>0){this.langStr+="_"+this.config.langCountryCode;}
if(this.config.langEncoding&&this.config.langEncoding.length>0){this.langStr+="-"+this.config.langEncoding;}
if(this.config.lang&&this.config.lang.length>0&&!(Zapatec.Langs[this.config.langId]&&Zapatec.Langs[this.config.langId][this.langStr])){this.debug("No language data found for language "+
this.config.lang+(this.config.langCountryCode?" and country code "+this.config.langCountryCode:"")+(this.config.langEncoding?" and encoding "+this.config.langEncoding:""));this.config.lang=null;this.config.langCountryCode=null;this.config.langEncoding=null;this.langStr=null;}};Zapatec.Widget.prototype.getMessage=function(key){if(arguments.length==0){return null;}
if(!Zapatec.Langs[this.config.langId]||!Zapatec.Langs[this.config.langId][this.langStr]||!Zapatec.Langs[this.config.langId][this.langStr][key]){return key;}
var res=Zapatec.Langs[this.config.langId][this.langStr][key];if(arguments.length>1&&typeof(res)=="string"){for(var ii=1;ii<arguments.length;ii++){var re=new RegExp("(^|([^\\\\]))\%"+ii);res=res.replace(re,"$2"+arguments[ii]);}}
return res;};Zapatec.Widget.callMethod=function(iWidgetId,sMethod){var oWidget=zapatecWidgetGetWidgetById(iWidgetId);if(oWidget&&typeof oWidget[sMethod]=='function'){var aArgs=[].slice.call(arguments,2);return oWidget[sMethod].apply(oWidget,aArgs);}};zapatecWidgetCallMethod=zapatecWidget.callMethod;Zapatec.Widget.getElementById=function(element){if(typeof element=='string'){return document.getElementById(element);}
return element;};zapatecWidgetGetElementById=zapatecWidget.getElementById;Zapatec.Widget.getStyle=function(element){var style=element.getAttribute('style')||'';if(typeof style=='string'){return style;}
return style.cssText;};Zapatec.Widget.windowDimensions=null;Zapatec.Widget.onWindowResize=function(){var oWindowDimensions=zapatecWidget.windowDimensions;if(!oWindowDimensions){return;}
var oNewDimensions=zapatecUtils.getWindowDimensions();if(oWindowDimensions.width==oNewDimensions.width&&oWindowDimensions.height==oNewDimensions.height){return;}
zapatecWidget.windowDimensions=oNewDimensions;zapatecEventDriven.fireEvent('windowResized');};zapatecWidget.windowDimensions=zapatecUtils.getWindowDimensions();zapatecUtils.addEvent(window,'resize',zapatecWidget.onWindowResize,false,true);Zapatec.Widget.debug=function(sMsg,sType){if(typeof zapatecDebug=='function'){zapatecDebug.log[sType||'error'](sMsg);}};Zapatec.Widget.prototype.debug=function(sMsg,sType){zapatecWidget.debug(this.constructor.id+'['+this.id+']: '+sMsg,sType);};