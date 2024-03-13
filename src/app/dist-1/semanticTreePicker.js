/*!
 * # Semantic UI 2.2.10 - Transition
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(n,e,i,t){"use strict";e="undefined"!=typeof e&&e.Math==Math?e:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),n.fn.transition=function(){var a,o=n(this),r=o.selector||"",s=(new Date).getTime(),l=[],u=arguments,d=u[0],c=[].slice.call(arguments,1),m="string"==typeof d;e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||e.msRequestAnimationFrame||function(n){setTimeout(n,0)};return o.each(function(e){var f,p,g,v,b,y,h,w,C,A=n(this),S=this;C={initialize:function(){f=C.get.settings.apply(S,u),v=f.className,g=f.error,b=f.metadata,w="."+f.namespace,h="module-"+f.namespace,p=A.data(h)||C,y=C.get.animationEndEvent(),m&&(m=C.invoke(d)),m===!1&&(C.verbose("Converted arguments into settings object",f),f.interval?C.delay(f.animate):C.animate(),C.instantiate())},instantiate:function(){C.verbose("Storing instance of module",C),p=C,A.data(h,p)},destroy:function(){C.verbose("Destroying previous module for",S),A.removeData(h)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete C.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var n=A.parent(),e=A.next();0===e.length?A.detach().appendTo(n):A.detach().insertBefore(e)},repaint:function(){C.verbose("Repainting element");S.offsetWidth},delay:function(n){var i,a,r=C.get.animationDirection();r||(r=C.can.transition()?C.get.direction():"static"),n=n!==t?n:f.interval,i="auto"==f.reverse&&r==v.outward,a=i||1==f.reverse?(o.length-e)*f.interval:e*f.interval,C.debug("Delaying animation by",a),setTimeout(C.animate,a)},animate:function(n){if(f=n||f,!C.is.supported())return C.error(g.support),!1;if(C.debug("Preparing animation",f.animation),C.is.animating()){if(f.queue)return!f.allowRepeats&&C.has.direction()&&C.is.occurring()&&C.queuing!==!0?C.debug("Animation is currently occurring, preventing queueing same animation",f.animation):C.queue(f.animation),!1;if(!f.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",f.animation),!1;C.debug("New animation started, completing previous early",f.animation),p.complete()}C.can.animate()?C.set.animating(f.animation):C.error(g.noAnimation,f.animation,S)},reset:function(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating()},queue:function(n){C.debug("Queueing animation of",n),C.queuing=!0,A.one(y+".queue"+w,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,f)})},complete:function(n){C.debug("Animation complete",f.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),f.onComplete.call(S)))},force:{visible:function(){var n=A.attr("style"),e=C.get.userStyle(),i=C.get.displayType(),a=e+"display: "+i+" !important;",o=A.css("display"),r=n===t||""===n;o!==i?(C.verbose("Overriding default display to show element",i),A.attr("style",a)):r&&A.removeAttr("style")},hidden:function(){var n=A.attr("style"),e=A.css("display"),i=n===t||""===n;"none"===e||C.is.hidden()?i&&A.removeAttr("style"):(C.verbose("Overriding default display to hide element"),A.css("display","none"))}},has:{direction:function(e){var i=!1;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){e!==v.inward&&e!==v.outward||(i=!0)})),i},inlineDisplay:function(){var e=A.attr("style")||"";return n.isArray(e.match(/display.*?;/,""))}},set:{animating:function(n){var e;C.remove.completeCallback(),n=n||f.animation,e=C.get.animationClass(n),C.save.animation(e),C.force.visible(),C.remove.hidden(),C.remove.direction(),C.start.animation(e)},duration:function(n,e){e=e||f.duration,e="number"==typeof e?e+"ms":e,(e||0===e)&&(C.verbose("Setting animation duration",e),A.css({"animation-duration":e}))},direction:function(n){n=n||C.get.direction(),n==v.inward?C.set.inward():C.set.outward()},looping:function(){C.debug("Transition set to loop"),A.addClass(v.looping)},hidden:function(){A.addClass(v.transition).addClass(v.hidden)},inward:function(){C.debug("Setting direction to inward"),A.removeClass(v.outward).addClass(v.inward)},outward:function(){C.debug("Setting direction to outward"),A.removeClass(v.inward).addClass(v.outward)},visible:function(){A.addClass(v.transition).addClass(v.visible)}},start:{animation:function(n){n=n||C.get.animationClass(),C.debug("Starting tween",n),A.addClass(n).one(y+".complete"+w,C.complete),f.useFailSafe&&C.add.failSafe(),C.set.duration(f.duration),f.onStart.call(S)}},save:{animation:function(n){C.cache||(C.cache={}),C.cache.animation=n},displayType:function(n){"none"!==n&&A.data(b.displayType,n)},transitionExists:function(e,i){n.fn.transition.exists[e]=i,C.verbose("Saving existence of transition",e,i)}},restore:{conditions:function(){var n=C.get.currentAnimation();n&&(A.removeClass(n),C.verbose("Removing animation class",C.cache)),C.remove.duration()}},add:{failSafe:function(){var n=C.get.duration();C.timer=setTimeout(function(){A.triggerHandler(y)},n+f.failSafeDelay),C.verbose("Adding fail safe timer",C.timer)}},remove:{animating:function(){A.removeClass(v.animating)},animationCallbacks:function(){C.remove.queueCallback(),C.remove.completeCallback()},queueCallback:function(){A.off(".queue"+w)},completeCallback:function(){A.off(".complete"+w)},display:function(){A.css("display","")},direction:function(){A.removeClass(v.inward).removeClass(v.outward)},duration:function(){A.css("animation-duration","")},failSafe:function(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer)},hidden:function(){A.removeClass(v.hidden)},visible:function(){A.removeClass(v.visible)},looping:function(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),A.removeClass(v.looping))},transition:function(){A.removeClass(v.visible).removeClass(v.hidden)}},get:{settings:function(e,i,t){return"object"==typeof e?n.extend(!0,{},n.fn.transition.settings,e):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:e,onComplete:t,duration:i}):"string"==typeof i||"number"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,duration:i}):"object"==typeof i?n.extend({},n.fn.transition.settings,i,{animation:e}):"function"==typeof i?n.extend({},n.fn.transition.settings,{animation:e,onComplete:i}):n.extend({},n.fn.transition.settings,{animation:e})},animationClass:function(n){var e=n||f.animation,i=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return v.animating+" "+v.transition+" "+i+e},currentAnimation:function(){return C.cache&&C.cache.animation!==t?C.cache.animation:!1},currentDirection:function(){return C.is.inward()?v.inward:v.outward},direction:function(){return C.is.hidden()||!C.is.visible()?v.inward:v.outward},animationDirection:function(e){var i;return e=e||f.animation,"string"==typeof e&&(e=e.split(" "),n.each(e,function(n,e){e===v.inward?i=v.inward:e===v.outward&&(i=v.outward)})),i?i:!1},duration:function(n){return n=n||f.duration,n===!1&&(n=A.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(n){return n=n!==t?n:!0,f.displayType?f.displayType:(n&&A.data(b.displayType)===t&&C.can.transition(!0),A.data(b.displayType))},userStyle:function(n){return n=n||A.attr("style")||"",n.replace(/display.*?;/,"")},transitionExists:function(e){return n.fn.transition.exists[e]},animationStartEvent:function(){var n,e=i.createElement("div"),a={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in a)if(e.style[n]!==t)return a[n];return!1},animationEndEvent:function(){var n,e=i.createElement("div"),a={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in a)if(e.style[n]!==t)return a[n];return!1}},can:{transition:function(e){var i,a,o,r,s,l,u=f.animation,d=C.get.transitionExists(u),c=C.get.displayType(!1);if(d===t||e){if(C.verbose("Determining whether animation exists"),i=A.attr("class"),a=A.prop("tagName"),o=n("<"+a+" />").addClass(i).insertAfter(A),r=o.addClass(u).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"),s=o.addClass(v.inward).css("animationName"),c||(c=o.attr("class",i).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"),C.verbose("Determining final display state",c),C.save.displayType(c)),o.remove(),r!=s)C.debug("Direction exists for animation",u),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",u);C.debug("Static animation found",u,c),l=!1}C.save.transitionExists(u,l)}return d!==t?d:l},animate:function(){return C.can.transition()!==t}},is:{animating:function(){return A.hasClass(v.animating)},inward:function(){return A.hasClass(v.inward)},outward:function(){return A.hasClass(v.outward)},looping:function(){return A.hasClass(v.looping)},occurring:function(n){return n=n||f.animation,n="."+n.replace(" ","."),A.filter(n).length>0},visible:function(){return A.is(":visible")},hidden:function(){return"hidden"===A.css("visibility")},supported:function(){return y!==!1}},hide:function(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),S.blur(),C.remove.display(),C.remove.visible(),C.set.hidden(),C.force.hidden(),f.onHide.call(S),f.onComplete.call(S)},show:function(n){C.verbose("Showing element",n),C.remove.hidden(),C.set.visible(),C.force.visible(),f.onShow.call(S),f.onComplete.call(S)},toggle:function(){C.is.visible()?C.hide():C.show()},stop:function(){C.debug("Stopping current animation"),A.triggerHandler(y)},stopAll:function(){C.debug("Stopping all animation"),C.remove.queueCallback(),A.triggerHandler(y)},clear:{queue:function(){C.debug("Clearing animation queue"),C.remove.queueCallback()}},enable:function(){C.verbose("Starting animation"),A.removeClass(v.disabled)},disable:function(){C.debug("Stopping animation"),A.addClass(v.disabled)},setting:function(e,i){if(C.debug("Changing setting",e,i),n.isPlainObject(e))n.extend(!0,f,e);else{if(i===t)return f[e];n.isPlainObject(f[e])?n.extend(!0,f[e],i):f[e]=i}},internal:function(e,i){if(n.isPlainObject(e))n.extend(!0,C,e);else{if(i===t)return C[e];C[e]=i}},debug:function(){!f.silent&&f.debug&&(f.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,f.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),C.verbose.apply(console,arguments)))},error:function(){f.silent||(C.error=Function.prototype.bind.call(console.error,console,f.name+":"),C.error.apply(console,arguments))},performance:{log:function(n){var e,i,t;f.performance&&(e=(new Date).getTime(),t=s||e,i=e-t,s=e,l.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:S,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var e=f.name+":",i=0;s=!1,clearTimeout(C.performance.timer),n.each(l,function(n,e){i+=e["Execution Time"]}),e+=" "+i+"ms",r&&(e+=" '"+r+"'"),o.length>1&&(e+=" ("+o.length+")"),(console.group!==t||console.table!==t)&&l.length>0&&(console.groupCollapsed(e),console.table?console.table(l):n.each(l,function(n,e){console.log(e.Name+": "+e["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(e,i,o){var r,s,l,u=p;return i=i||c,o=S||o,"string"==typeof e&&u!==t&&(e=e.split(/[\. ]/),r=e.length-1,n.each(e,function(i,a){var o=i!=r?a+e[i+1].charAt(0).toUpperCase()+e[i+1].slice(1):e;if(n.isPlainObject(u[o])&&i!=r)u=u[o];else{if(u[o]!==t)return s=u[o],!1;if(!n.isPlainObject(u[a])||i==r)return u[a]!==t?(s=u[a],!1):!1;u=u[a]}})),n.isFunction(s)?l=s.apply(o,i):s!==t&&(l=s),n.isArray(a)?a.push(l):a!==t?a=[a,l]:l!==t&&(a=l),s!==t?s:!1}},C.initialize()}),a!==t?a:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);
;/*!
 * # Semantic UI 2.2.10 - Dimmer
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,i,n,t){"use strict";i="undefined"!=typeof i&&i.Math==Math?i:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dimmer=function(i){var o,a=e(this),r=(new Date).getTime(),s=[],m=arguments[0],d="string"==typeof m,c=[].slice.call(arguments,1);return a.each(function(){var u,l,f,g=e.isPlainObject(i)?e.extend(!0,{},e.fn.dimmer.settings,i):e.extend({},e.fn.dimmer.settings),p=g.selector,h=g.namespace,b=g.className,v=g.error,y="."+h,C="module-"+h,w=a.selector||"",S="ontouchstart"in n.documentElement?"touchstart":"click",D=e(this),T=this,N=D.data(C);f={preinitialize:function(){f.is.dimmer()?(l=D.parent(),u=D):(l=D,u=f.has.dimmer()?g.dimmerName?l.find(p.dimmer).filter("."+g.dimmerName):l.find(p.dimmer):f.create(),f.set.variation())},initialize:function(){f.debug("Initializing dimmer",g),f.bind.events(),f.set.dimmable(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),N=f,D.data(C,N)},destroy:function(){f.verbose("Destroying previous module",u),f.unbind.events(),f.remove.variation(),l.off(y)},bind:{events:function(){"hover"==g.on?l.on("mouseenter"+y,f.show).on("mouseleave"+y,f.hide):"click"==g.on&&l.on(S+y,f.toggle),f.is.page()&&(f.debug("Setting as a page dimmer",l),f.set.pageDimmer()),f.is.closable()&&(f.verbose("Adding dimmer close event",u),l.on(S+y,p.dimmer,f.event.click))}},unbind:{events:function(){D.removeData(C),l.off(y)}},event:{click:function(i){f.verbose("Determining if event occured on dimmer",i),(0===u.find(i.target).length||e(i.target).is(p.content))&&(f.hide(),i.stopImmediatePropagation())}},addContent:function(i){var n=e(i);f.debug("Add content to dimmer",n),n.parent()[0]!==u[0]&&n.detach().appendTo(u)},create:function(){var i=e(g.template.dimmer());return g.dimmerName&&(f.debug("Creating named dimmer",g.dimmerName),i.addClass(g.dimmerName)),i.appendTo(l),i},show:function(i){i=e.isFunction(i)?i:function(){},f.debug("Showing dimmer",u,g),f.is.dimmed()&&!f.is.animating()||!f.is.enabled()?f.debug("Dimmer is already shown or disabled"):(f.animate.show(i),g.onShow.call(T),g.onChange.call(T))},hide:function(i){i=e.isFunction(i)?i:function(){},f.is.dimmed()||f.is.animating()?(f.debug("Hiding dimmer",u),f.animate.hide(i),g.onHide.call(T),g.onChange.call(T)):f.debug("Dimmer is not visible")},toggle:function(){f.verbose("Toggling dimmer visibility",u),f.is.dimmed()?f.hide():f.show()},animate:{show:function(i){i=e.isFunction(i)?i:function(){},g.useCSS&&e.fn.transition!==t&&u.transition("is supported")?("auto"!==g.opacity&&f.set.opacity(),u.transition({animation:g.transition+" in",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.set.dimmed()},onComplete:function(){f.set.active(),i()}})):(f.verbose("Showing dimmer animation with javascript"),f.set.dimmed(),"auto"==g.opacity&&(g.opacity=.8),u.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(f.get.duration(),g.opacity,function(){u.removeAttr("style"),f.set.active(),i()}))},hide:function(i){i=e.isFunction(i)?i:function(){},g.useCSS&&e.fn.transition!==t&&u.transition("is supported")?(f.verbose("Hiding dimmer with css"),u.transition({animation:g.transition+" out",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.remove.dimmed()},onComplete:function(){f.remove.active(),i()}})):(f.verbose("Hiding dimmer with javascript"),f.remove.dimmed(),u.stop().fadeOut(f.get.duration(),function(){f.remove.active(),u.removeAttr("style"),i()}))}},get:{dimmer:function(){return u},duration:function(){return"object"==typeof g.duration?f.is.active()?g.duration.hide:g.duration.show:g.duration}},has:{dimmer:function(){return g.dimmerName?D.find(p.dimmer).filter("."+g.dimmerName).length>0:D.find(p.dimmer).length>0}},is:{active:function(){return u.hasClass(b.active)},animating:function(){return u.is(":animated")||u.hasClass(b.animating)},closable:function(){return"auto"==g.closable?"hover"!=g.on:g.closable},dimmer:function(){return D.hasClass(b.dimmer)},dimmable:function(){return D.hasClass(b.dimmable)},dimmed:function(){return l.hasClass(b.dimmed)},disabled:function(){return l.hasClass(b.disabled)},enabled:function(){return!f.is.disabled()},page:function(){return l.is("body")},pageDimmer:function(){return u.hasClass(b.pageDimmer)}},can:{show:function(){return!u.hasClass(b.disabled)}},set:{opacity:function(e){var i=u.css("background-color"),n=i.split(","),t=n&&3==n.length,o=n&&4==n.length;e=0===g.opacity?0:g.opacity||e,t||o?(n[3]=e+")",i=n.join(",")):i="rgba(0, 0, 0, "+e+")",f.debug("Setting opacity to",e),u.css("background-color",i)},active:function(){u.addClass(b.active)},dimmable:function(){l.addClass(b.dimmable)},dimmed:function(){l.addClass(b.dimmed)},pageDimmer:function(){u.addClass(b.pageDimmer)},disabled:function(){u.addClass(b.disabled)},variation:function(e){e=e||g.variation,e&&u.addClass(e)}},remove:{active:function(){u.removeClass(b.active)},dimmed:function(){l.removeClass(b.dimmed)},disabled:function(){u.removeClass(b.disabled)},variation:function(e){e=e||g.variation,e&&u.removeClass(e)}},setting:function(i,n){if(f.debug("Changing setting",i,n),e.isPlainObject(i))e.extend(!0,g,i);else{if(n===t)return g[i];e.isPlainObject(g[i])?e.extend(!0,g[i],n):g[i]=n}},internal:function(i,n){if(e.isPlainObject(i))e.extend(!0,f,i);else{if(n===t)return f[i];f[i]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,g.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),f.verbose.apply(console,arguments)))},error:function(){g.silent||(f.error=Function.prototype.bind.call(console.error,console,g.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var i,n,t;g.performance&&(i=(new Date).getTime(),t=r||i,n=i-t,r=i,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:T,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var i=g.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,i){n+=i["Execution Time"]}),i+=" "+n+"ms",w&&(i+=" '"+w+"'"),a.length>1&&(i+=" ("+a.length+")"),(console.group!==t||console.table!==t)&&s.length>0&&(console.groupCollapsed(i),console.table?console.table(s):e.each(s,function(e,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(i,n,a){var r,s,m,d=N;return n=n||c,a=T||a,"string"==typeof i&&d!==t&&(i=i.split(/[\. ]/),r=i.length-1,e.each(i,function(n,o){var a=n!=r?o+i[n+1].charAt(0).toUpperCase()+i[n+1].slice(1):i;if(e.isPlainObject(d[a])&&n!=r)d=d[a];else{if(d[a]!==t)return s=d[a],!1;if(!e.isPlainObject(d[o])||n==r)return d[o]!==t?(s=d[o],!1):(f.error(v.method,i),!1);d=d[o]}})),e.isFunction(s)?m=s.apply(a,n):s!==t&&(m=s),e.isArray(o)?o.push(m):o!==t?o=[o,m]:m!==t&&(o=m),s}},f.preinitialize(),d?(N===t&&f.initialize(),f.invoke(m)):(N!==t&&N.invoke("destroy"),f.initialize())}),o!==t?o:this},e.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",pageDimmer:"page",show:"show"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(){return e("<div />").attr("class","ui dimmer")}}}}(jQuery,window,document);
;/*!
 * # Semantic UI 2.2.10 - Modal
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,n,i,t){"use strict";n="undefined"!=typeof n&&n.Math==Math?n:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.modal=function(o){var a,r=e(this),s=e(n),c=e(i),l=e("body"),d=r.selector||"",u=(new Date).getTime(),m=[],f=arguments[0],g="string"==typeof f,h=[].slice.call(arguments,1),v=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,b,p,y,k,w,M,S,C,F=e.isPlainObject(o)?e.extend(!0,{},e.fn.modal.settings,o):e.extend({},e.fn.modal.settings),A=F.selector,D=F.className,H=F.namespace,T=F.error,x="."+H,z="module-"+H,O=e(this),q=e(F.context),E=O.find(A.close),j=this,P=O.data(z),R=!1;C={initialize:function(){C.verbose("Initializing dimmer",q),C.create.id(),C.create.dimmer(),C.refreshModals(),C.bind.events(),F.observeChanges&&C.observeChanges(),C.instantiate()},instantiate:function(){C.verbose("Storing instance of modal"),P=C,O.data(z,P)},create:{dimmer:function(){var n={debug:F.debug,dimmerName:"modals",duration:{show:F.duration,hide:F.duration}},i=e.extend(!0,n,F.dimmerSettings);return F.inverted&&(i.variation=i.variation!==t?i.variation+" inverted":"inverted"),e.fn.dimmer===t?void C.error(T.dimmer):(C.debug("Creating dimmer with settings",i),y=q.dimmer(i),F.detachable?(C.verbose("Modal is detachable, moving content into dimmer"),y.dimmer("add content",O)):C.set.undetached(),F.blurring&&y.addClass(D.blurring),void(k=y.dimmer("get dimmer")))},id:function(){M=(Math.random().toString(16)+"000000000").substr(2,8),w="."+M,C.verbose("Creating unique id for element",M)}},destroy:function(){C.verbose("Destroying previous modal"),O.removeData(z).off(x),s.off(w),k.off(w),E.off(x),q.dimmer("destroy")},observeChanges:function(){"MutationObserver"in n&&(S=new MutationObserver(function(e){C.debug("DOM tree modified, refreshing"),C.refresh()}),S.observe(j,{childList:!0,subtree:!0}),C.debug("Setting up mutation observer",S))},refresh:function(){C.remove.scrolling(),C.cacheSizes(),C.set.screenHeight(),C.set.type(),C.set.position()},refreshModals:function(){b=O.siblings(A.modal),r=b.add(O)},attachEvents:function(n,i){var t=e(n);i=e.isFunction(C[i])?C[i]:C.toggle,t.length>0?(C.debug("Attaching modal events to element",n,i),t.off(x).on("click"+x,i)):C.error(T.notFound,n)},bind:{events:function(){C.verbose("Attaching events"),O.on("click"+x,A.close,C.event.close).on("click"+x,A.approve,C.event.approve).on("click"+x,A.deny,C.event.deny),s.on("resize"+w,C.event.resize)}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){return R||F.onApprove.call(j,e(this))===!1?void C.verbose("Approve callback returned false cancelling hide"):(R=!0,void C.hide(function(){R=!1}))},deny:function(){return R||F.onDeny.call(j,e(this))===!1?void C.verbose("Deny callback returned false cancelling hide"):(R=!0,void C.hide(function(){R=!1}))},close:function(){C.hide()},click:function(n){var t=e(n.target),o=t.closest(A.modal).length>0,a=e.contains(i.documentElement,n.target);!o&&a&&(C.debug("Dimmer clicked, hiding all modals"),C.is.active()&&(C.remove.clickaway(),F.allowMultiple?C.hide():C.hideAll()))},debounce:function(e,n){clearTimeout(C.timer),C.timer=setTimeout(e,n)},keyboard:function(e){var n=e.which,i=27;n==i&&(F.closable?(C.debug("Escape key pressed hiding modal"),C.hide()):C.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){y.dimmer("is active")&&v(C.refresh)}},toggle:function(){C.is.active()||C.is.animating()?C.hide():C.show()},show:function(n){n=e.isFunction(n)?n:function(){},C.refreshModals(),C.showModal(n)},hide:function(n){n=e.isFunction(n)?n:function(){},C.refreshModals(),C.hideModal(n)},showModal:function(n){n=e.isFunction(n)?n:function(){},C.is.animating()||!C.is.active()?(C.showDimmer(),C.cacheSizes(),C.set.position(),C.set.screenHeight(),C.set.type(),C.set.clickaway(),!F.allowMultiple&&C.others.active()?C.hideOthers(C.showModal):(F.onShow.call(j),F.transition&&e.fn.transition!==t&&O.transition("is supported")?(C.debug("Showing modal with css animations"),O.transition({debug:F.debug,animation:F.transition+" in",queue:F.queue,duration:F.duration,useFailSafe:!0,onComplete:function(){F.onVisible.apply(j),F.keyboardShortcuts&&C.add.keyboardShortcuts(),C.save.focus(),C.set.active(),F.autofocus&&C.set.autofocus(),n()}})):C.error(T.noTransition))):C.debug("Modal is already visible")},hideModal:function(n,i){return n=e.isFunction(n)?n:function(){},C.debug("Hiding modal"),F.onHide.call(j,e(this))===!1?void C.verbose("Hide callback returned false cancelling hide"):void((C.is.animating()||C.is.active())&&(F.transition&&e.fn.transition!==t&&O.transition("is supported")?(C.remove.active(),O.transition({debug:F.debug,animation:F.transition+" out",queue:F.queue,duration:F.duration,useFailSafe:!0,onStart:function(){C.others.active()||i||C.hideDimmer(),F.keyboardShortcuts&&C.remove.keyboardShortcuts()},onComplete:function(){F.onHidden.call(j),C.restore.focus(),n()}})):C.error(T.noTransition)))},showDimmer:function(){y.dimmer("is animating")||!y.dimmer("is active")?(C.debug("Showing dimmer"),y.dimmer("show")):C.debug("Dimmer already visible")},hideDimmer:function(){return y.dimmer("is animating")||y.dimmer("is active")?void y.dimmer("hide",function(){C.remove.clickaway(),C.remove.screenHeight()}):void C.debug("Dimmer is not visible cannot hide")},hideAll:function(n){var i=r.filter("."+D.active+", ."+D.animating);n=e.isFunction(n)?n:function(){},i.length>0&&(C.debug("Hiding all visible modals"),C.hideDimmer(),i.modal("hide modal",n))},hideOthers:function(n){var i=b.filter("."+D.active+", ."+D.animating);n=e.isFunction(n)?n:function(){},i.length>0&&(C.debug("Hiding other modals",b),i.modal("hide modal",n,!0))},others:{active:function(){return b.filter("."+D.active).length>0},animating:function(){return b.filter("."+D.animating).length>0}},add:{keyboardShortcuts:function(){C.verbose("Adding keyboard shortcuts"),c.on("keyup"+x,C.event.keyboard)}},save:{focus:function(){p=e(i.activeElement).blur()}},restore:{focus:function(){p&&p.length>0&&p.focus()}},remove:{active:function(){O.removeClass(D.active)},clickaway:function(){F.closable&&k.off("click"+w)},bodyStyle:function(){""===l.attr("style")&&(C.verbose("Removing style attribute"),l.removeAttr("style"))},screenHeight:function(){C.debug("Removing page height"),l.css("height","")},keyboardShortcuts:function(){C.verbose("Removing keyboard shortcuts"),c.off("keyup"+x)},scrolling:function(){y.removeClass(D.scrolling),O.removeClass(D.scrolling)}},cacheSizes:function(){var o=O.outerHeight();C.cache!==t&&0===o||(C.cache={pageHeight:e(i).outerHeight(),height:o+F.offset,contextHeight:"body"==F.context?e(n).height():y.height()}),C.debug("Caching modal and container sizes",C.cache)},can:{fit:function(){return C.cache.height+2*F.padding<C.cache.contextHeight}},is:{active:function(){return O.hasClass(D.active)},animating:function(){return O.transition("is supported")?O.transition("is animating"):O.is(":visible")},scrolling:function(){return y.hasClass(D.scrolling)},modernBrowser:function(){return!(n.ActiveXObject||"ActiveXObject"in n)}},set:{autofocus:function(){var e=O.find("[tabindex], :input").filter(":visible"),n=e.filter("[autofocus]"),i=n.length>0?n.first():e.first();i.length>0&&i.focus()},clickaway:function(){F.closable&&k.on("click"+w,C.event.click)},screenHeight:function(){C.can.fit()?l.css("height",""):(C.debug("Modal is taller than page content, resizing page height"),l.css("height",C.cache.height+2*F.padding))},active:function(){O.addClass(D.active)},scrolling:function(){y.addClass(D.scrolling),O.addClass(D.scrolling)},type:function(){C.can.fit()?(C.verbose("Modal fits on screen"),C.others.active()||C.others.animating()||C.remove.scrolling()):(C.verbose("Modal cannot fit on screen setting to scrolling"),C.set.scrolling())},position:function(){C.verbose("Centering modal on page",C.cache),C.can.fit()?O.css({top:"",marginTop:-(C.cache.height/2)}):O.css({marginTop:"",top:c.scrollTop()})},undetached:function(){y.addClass(D.undetached)}},setting:function(n,i){if(C.debug("Changing setting",n,i),e.isPlainObject(n))e.extend(!0,F,n);else{if(i===t)return F[n];e.isPlainObject(F[n])?e.extend(!0,F[n],i):F[n]=i}},internal:function(n,i){if(e.isPlainObject(n))e.extend(!0,C,n);else{if(i===t)return C[n];C[n]=i}},debug:function(){!F.silent&&F.debug&&(F.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,F.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!F.silent&&F.verbose&&F.debug&&(F.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,F.name+":"),C.verbose.apply(console,arguments)))},error:function(){F.silent||(C.error=Function.prototype.bind.call(console.error,console,F.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var n,i,t;F.performance&&(n=(new Date).getTime(),t=u||n,i=n-t,u=n,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:j,"Execution Time":i})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var n=F.name+":",i=0;u=!1,clearTimeout(C.performance.timer),e.each(m,function(e,n){i+=n["Execution Time"]}),n+=" "+i+"ms",d&&(n+=" '"+d+"'"),(console.group!==t||console.table!==t)&&m.length>0&&(console.groupCollapsed(n),console.table?console.table(m):e.each(m,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(n,i,o){var r,s,c,l=P;return i=i||h,o=j||o,"string"==typeof n&&l!==t&&(n=n.split(/[\. ]/),r=n.length-1,e.each(n,function(i,o){var a=i!=r?o+n[i+1].charAt(0).toUpperCase()+n[i+1].slice(1):n;if(e.isPlainObject(l[a])&&i!=r)l=l[a];else{if(l[a]!==t)return s=l[a],!1;if(!e.isPlainObject(l[o])||i==r)return l[o]!==t?(s=l[o],!1):!1;l=l[o]}})),e.isFunction(s)?c=s.apply(o,i):s!==t&&(c=s),e.isArray(a)?a.push(c):a!==t?a=[a,c]:c!==t&&(a=c),s}},g?(P===t&&C.initialize(),C.invoke(f)):(P!==t&&P.invoke("destroy"),C.initialize())}),a!==t?a:this},e.fn.modal.settings={name:"Modal",namespace:"modal",silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,offset:0,transition:"scale",padding:50,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",scrolling:"scrolling",undetached:"undetached"}}}(jQuery,window,document);
;var conceptModal;
(function () {
  $.fn.treePicker = function (options) {
    var actionButtons, config, count, initialize, initializeNodeList, initializeNodes, loadNodes, modal, nodeClicked, nodeIsPicked, nodes, pickNode, picked, recursiveNodeSearch, renderList, renderTree, showPicked, showSearch, showTree, tabs, unpickNode, updatePickedIds, updatePickedNodes, widget;
    widget = $(this);
    picked = [];
    nodes = [];
    tabs = {};
    options.noDataMessage = options.noDataMessage ? options.noDataMessage : 'no results';
    $("#" + options.nodeName).length == 0 ? '' : $("#" + options.nodeName).remove();

    /*Modal HTML Starts*/
    modalTemplate = "<div class=\"sb-modal transition hidden\"><div id=\""+options.nodeName+"\" class=\"ui large modal visible active sb-treePicker\"><!--Header--><i class=\"close icon js-close-modal\"></i><div class=\"sb-modal-header\">"+options.name+"</div> <!--/Header--><!--Content--><div class=\"sb-modal-content max-height p-0\"><div class=\"sb-treePicker-body\"><!--Selection Section--><div class=\"sb-treePicker-selectionSection\"><!--Search Box--><div class=\"sb-search-box no-btn\"><div class=\"input-div relative\"><i class=\"search icon sb-search-icon\"></i><input class=\"sb-search-input\" type=\"text\" placeholder=\""+options.searchText+"\" /><i class=\"close icon js-clear d-none\"></i></div></div><!--/Search Box--><div class=\"tree-tab\"><div></div></div><div class=\"search-tab\"></div></div><!--/Selection Section--><!--Selected Section--><div class=\"sb-treePicker-selectedSection\"><div class=\"d-flex flex-ai-center\">"+options.selectedText +' '+ options.name +"<span class=\"sb-treePicker-selected-count ml-5\"></span><button class=\"unpick-picked ml-auto sb-btn sb-btn-outline-error sb-btn-xs sb-left-icon-btn\"><i class=\"trash icon\"></i>"+options.removeAllText+"</button></div><div class=\"picked-tab py-15\"></div></div><!--/Selected Section--></div></div><!--/Content--><!--Actions--><div class=\"sb-modal-actions\"><a class=\"pick-search d-none\"><i class=\"checkmark icon\"></i>"+options.chooseAllText+"</a><a class=\"unpick-search d-none\"><i class=\"remove icon\"></i>"+options.removeAllText+"</a><button class=\"sb-btn sb-btn-normal sb-btn-primary accept\">"+options.submitButtonText+"</button><button class=\"sb-btn sb-btn-normal sb-btn-outline-primary close js-close-modal\">"+options.cancelButtonText+"</button></div><!--/Actions--></div></div>";
    /*Modal HTML Ends*/

    modal = $(modalTemplate).modal({
      duration: 200,
      allowMultiple: true
    });
    conceptModal = modal;
    count = $('.sb-treePicker-selected-count', modal);
    tabs = {
      tree: $('.tree-tab', modal),
      search: $('.search-tab', modal),
      picked: $('.picked-tab', modal)
    };
    actionButtons = {
      pickSearch: $('.sb-treePicker .pick-search', modal),
      unpickSearch: $('.sb-treePicker .unpick-search', modal),
      unpickPicked: $('.sb-treePicker .unpick-picked', modal)
    };
    config = {
      childrenKey: 'nodes',
      singlePick: false,
      minSearchQueryLength: 3,
      hidden: function (node) {
        return false;
      },
      disabled: function (node) {
        return false;
      },
      displayFormat: function (picked) {
        return options.name + " (Выбрано " + picked.length + ")";
      }
    };
    $.extend(config, options);
    initialize = function () {
      if (config.data) {
        nodes = config.data;
      }
      if (config.picked) {
        config.picked = config.picked;
      } else if (widget.attr("data-picked-ids")) {
        widget.attr("data-picked-ids").split(",");
      }
      if (config.picked) {
        if (nodes.length) {
          updatePickedNodes();
          widget.html(config.displayFormat(picked));
          showPicked();
        } else {
          widget.html(config.displayFormat(config.picked));
        }
      } else {
        widget.html(config.displayFormat([]));
      }
      widget.unbind("click");
      widget.on('click', function (e) {
        modal.modal('show');
        if (!nodes.length) {
          if (config.url) {
            return loadNodes(config.url, {}, function (nodes) {
              $('.ui.active.dimmer', modal).removeClass('active');
              return initializeNodes(nodes);
            });
          } else {
              setTimeout(function() {
                  $('.ui.active.dimmer', modal).removeClass('active');
                  $(".ui.tree-picker.normal.modal .field").addClass("disabled");
                  $(".ui.tree-picker.modal .ui.warning.message").removeClass("hidden");
              }, config.apiResponseTimeout);
          }
        } else {
          $('.ui.active.dimmer', modal).removeClass('active');
          return initializeNodes(nodes);
        }
      });
      /* On click of Done button*/
      $('.sb-modal-actions .accept', modal).on('click', function (e) {
        modal.modal('hide');
        if (config.onSubmit) {
          config.onSubmit(picked);
        }
        return widget.html(config.displayFormat(picked));
      });
      /* On click of Close button*/
      $('.sb-treePicker .js-close-modal', modal).on('click', function (e) {
        modal.modal('hide');
        if (config.onClose) {
          config.onClose();
        }
      });
      /* Clear Search field */
      $('.sb-treePicker .js-clear').on('click', function (e) {
        clearSearch();
      });
      actionButtons.pickSearch.on('click', function (e) {
        return $('.search-tab .node:not(.picked) .name').trigger('click');
      });
      actionButtons.unpickSearch.on('click', function (e) {
        return $('.search-tab .node.picked .name').trigger('click');
      });
      actionButtons.unpickPicked.on('click', function (e) {
        return $('.picked-tab .node.picked .name').trigger('click');
      });
      return $('.sb-search-input', modal).on('keyup', function (e) {
        return showSearch($(this).val());
      });
    };
    loadNodes = function (url, params, success) {
      if (params == null) {
        params = {};
      }
      return $.get(url, params, function (response) {
        if (response.constructor === String) {
          nodes = $.parseJSON(response);
        } else {
          nodes = response;
        }
        return success(nodes);
      });
    };
    initializeNodes = function (nodes) {
      var tree;
      updatePickedNodes();
      tree = renderTree(nodes, {
      });
      tabs.tree.html(tree);
      return initializeNodeList(tree);
    };
    updatePickedNodes = function () {
      var i, id, len, ref, results1, searchResult;
      if (config.picked) {
        picked = [];
        ref = config.picked;
        results1 = [];
        for (i = 0, len = ref.length; i < len; i++) {
          id = ref[i];
          searchResult = recursiveNodeSearch(nodes, function (node) {
            return ("" + node.id) === ("" + id);
          });
          if (searchResult.length) {
            results1.push(picked.push(searchResult[0]));
          } else {
            results1.push(void 0);
          }
        }
        return results1;
      }
    };
    showTree = function () {
      tabs.tree.show();
      return modal.attr('data-mode', 'tree');
    };
    showSearch = function (query) {
      var foundNodes, list;
      var formatedNodes = [];
      if (query !== null && query.length >= config.minSearchQueryLength) {
        foundNodes = recursiveNodeSearch(nodes, function (node) {
          return node.name && node.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
        foundNodes.forEach(function (value) {
          if (value.selectable === 'selectable') {
            formatedNodes.push(value);
          }
        });
        foundNodes = formatedNodes;
        list = renderList(foundNodes, {
        });
        tabs.search.show().html(list);
        tabs.tree.hide();
        modal.attr('data-mode', 'search');
        $('.sb-treePicker .js-clear').removeClass('d-none');
        initializeNodeList(list);
        return $('.name', list).each(function () {
          var name, regex;
          name = $(this).text();
          regex = RegExp('(' + query + ')', 'gi');
          name = name.replace(regex, "<strong class='sb-treePicker-searchedQuery'>$1</strong>");
          return $(this).html(name);
        });
      } else {
        $('.sb-treePicker .js-clear').addClass('d-none');
        tabs.search.hide();
        return showTree();
      }
    };
    clearSearch = function(){
      $('.sb-treePicker .sb-search-input').val('');
      $('.sb-treePicker .js-clear').addClass('d-none');
      tabs.search.hide();
      return showTree();
    };
    showPicked = function () {
      var list;
      list = renderList(picked, {
      });
      tabs.picked.show().html(list);
      modal.attr('data-mode', 'picked');
      return initializeNodeListForSelected(list);
    };
    renderTree = function (nodes, css) {
      var i, len, node, nodeElement, tree;
      if (css == null) {
        css = {};
      }
      tree = $('<div class="ui tree-picker tree"></div>').css(css);
      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        if (config.hidden(node)) {
          continue;
        }
        nodeElementHtml = "<div class=\"node\" data-id=\""+node.id+"\" data-name=\""+node.name+"\"><div class=\"head "+node.selectable+"\"><i class=\"add icon\"></i><i class=\"minus icon\"></i><i class=\"square outline icon\"></i><i class=\"checkmark icon\"></i><span class=\"name\">"+node.name+"</span></div><div class=\"content\"></div></div>";
        nodeElement = $(nodeElementHtml).appendTo(tree);
        if (config.disabled(node)) {
          nodeElement.addClass('disabled');
        }
        if (node[config.childrenKey] && node[config.childrenKey].length) {
          $('.content', nodeElement).append(renderTree(node[config.childrenKey]));
        } else {
          nodeElement.addClass("childless");
        }
      }
      return tree;
    };
    renderList = function (nodes, css) {
      var i, len, list, node, nodeElement;
      if (css == null) {
        css = {};
      }
      list = $('<div class="ui tree-picker list"></div>').css(css);
      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        if (config.hidden(node)) {
          continue;
        }
        nodeElementhtml = "<div class=\"node childless\" data-id=\""+node.id+"\" data-name=\""+node.name+"\"><div class=\"head "+node.selectable+"\"><i class=\"square outline icon\"></i><i class=\"checkmark icon\"></i><a class=\"name\">"+node.name+"</a></div> <div class=\"content\"></div></div>";
        nodeElement = $(nodeElementhtml).appendTo(list);
        if (config.disabled(node)) {
          nodeElement.addClass('disabled');
        }
      };
      /*No search result found*/
      /*if (nodes.length === 0) {
        emptyMessage = '<div class="empty">No results were found.</div>';
        nodeElement = $(emptyMessage).appendTo(list);
      }*/
      return list;
    };
    initializeNodeList = function (tree) {
      return $('.node', tree).each(function () {
        var content, head, node;
        node = $(this);
        clickHead = $('>.head.selectable', node);
        head = $('>.head', node);
        content = $('>.content', node);
        $('>.name', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });
        $('>.icon', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });
        if (nodeIsPicked(node)) {
          node.addClass('picked');
        }
        if (!node.hasClass('childless')) {
          if (!head.hasClass('selectable')) {
            $(head).on('click', function (e) {
              node.toggleClass('opened');
              return content.slideToggle();
            });
          } else {
            $('>.icon', head).on('click', function (e) {
              node.toggleClass('opened');
              return content.slideToggle();
            });
          }
        }
        return updatePickedIds();
      });
    };
    initializeNodeListForSelected = function (tree) {
      return $('.node', tree).each(function () {
        var content, head, node;
        node = $(this);
        clickHead = $('>.head', node);
        head = $('>.head', node);
        content = $('>.content', node);
        $('>.name', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });
        $('>.icon', clickHead).on('click', function (e) {
          return nodeClicked(node);
        });
        if (nodeIsPicked(node)) {
          node.addClass('picked');
        }
        if (!node.hasClass('childless')) {
          $('>.icon', head).on('click', function (e) {
            node.toggleClass('opened');
            return content.slideToggle();
          });
        }
        return updatePickedIds();
      });
    };
    nodeClicked = function (node) {
      if (!node.hasClass('disabled')) {
        if (config.singlePick) {
          $('.node.picked', modal).removeClass('picked');
          picked = [];
        }
        node.toggleClass('picked');
        if (node.hasClass('picked')) {
          return pickNode(node);
        } else {
          return unpickNode(node);
        }
      }
    };
    pickNode = function (node) {
      var id;
      config.picked = null;
      id = node.attr('data-id');
      picked.push({
        id: id,
        name: node.attr('data-name')
      });
      updatePickedIds();
      showPicked();
      $(".node[data-id=" + id + "] .square.outline", modal).addClass('d-none');
      return $(".node[data-id=" + id + "]", modal).addClass('picked');
    };
    unpickNode = function (node) {
      var id;
      config.picked = null;
      id = node.attr('data-id');
      picked = picked.filter(function (n) {
        return ("" + n.id) !== ("" + id);
      });
      updatePickedIds();
      $(".node[data-id=" + id + "] .square.outline", modal).removeClass('d-none');
      return $(".node[data-id=" + id + "]", modal).removeClass('picked');
    };
    nodeIsPicked = function (node) {
      return picked.filter(function (n) {
        return ("" + n.id) === node.attr('data-id');
      }).length;
    };
    updatePickedIds = function () {
      widget.attr('data-picked-ids', picked.map(function (n) {
        return n.id;
      }));
      if (picked.length) {
        count.closest('.item').addClass('highlighted');
        return count.html("(" + picked.length + ")");
      } else {
        count.closest('.item').removeClass('highlighted');
        return count.html("");
      }
    };
    recursiveNodeSearch = function (nodes, comparator) {
      var i, len, node, results;
      results = [];
      for (i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        if (comparator(node)) {
          results.push({
            id: node.id,
            name: node.name,
            selectable: node.selectable
          });
        }
        if (node[config.childrenKey] && node[config.childrenKey].length) {
          results = results.concat(recursiveNodeSearch(node[config.childrenKey], comparator));
        }
      }
      return results;
    };
    return initialize();
  };
}).call(this);

;
//# sourceMappingURL=semanticTreePicker.js.map