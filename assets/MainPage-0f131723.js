import{G as Ui,s as V,r as wt,j as P,C as si}from"./index-f69e0c91.js";import{F as Yr}from"./Footer-7f7403a7.js";function xt(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function Yi(u,t){u.prototype=Object.create(t.prototype),u.prototype.constructor=u,u.__proto__=t}/*!
 * GSAP 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var st={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qt={duration:.5,overwrite:!1,delay:0},ai,$,I,lt=1e8,D=1/lt,We=Math.PI*2,Wr=We/4,Xr=0,Wi=Math.sqrt,qr=Math.cos,Gr=Math.sin,X=function(t){return typeof t=="string"},L=function(t){return typeof t=="function"},vt=function(t){return typeof t=="number"},oi=function(t){return typeof t>"u"},mt=function(t){return typeof t=="object"},Q=function(t){return t!==!1},ui=function(){return typeof window<"u"},be=function(t){return L(t)||X(t)},Xi=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},H=Array.isArray,Xe=/(?:-?\.?\d|\.)+/gi,qi=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fe=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gi=/[+-]=-?[.\d]+/,$i=/[^,'"\[\]\s]+/gi,$r=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,E,ut,qe,li,at={},ke={},Hi,Ki=function(t){return(ke=Ut(t,at))&&et},fi=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ce=function(t,e){return!e&&console.warn(t)},Qi=function(t,e){return t&&(at[t]=e)&&ke&&(ke[t]=e)||at},_e=function(){return 0},Hr={suppressEvents:!0,isStart:!0,kill:!1},we={suppressEvents:!0,kill:!1},Kr={suppressEvents:!0},hi={},Pt=[],Ge={},Zi,it={},Ie={},Si=30,Te=[],ci="",_i=function(t){var e=t[0],i,r;if(mt(e)||L(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=Te.length;r--&&!Te[r].targetTest(e););i=Te[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new wr(t[r],i)))||t.splice(r,1);return t},Lt=function(t){return t._gsap||_i(ft(t))[0]._gsap},Ji=function(t,e,i){return(i=t[e])&&L(i)?t[e]():oi(i)&&t.getAttribute&&t.getAttribute(e)||i},Z=function(t,e){return(t=t.split(",")).forEach(e)||t},N=function(t){return Math.round(t*1e5)/1e5||0},W=function(t){return Math.round(t*1e7)/1e7||0},$t=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},Qr=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Pe=function(){var t=Pt.length,e=Pt.slice(0),i,r;for(Ge={},Pt.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tr=function(t,e,i,r){Pt.length&&!$&&Pe(),t.render(e,i,r||$&&e<0&&(t._initted||t._startAt)),Pt.length&&!$&&Pe()},er=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match($i).length<2?e:X(t)?t.trim():t},ir=function(t){return t},ht=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Zr=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Ut=function(t,e){for(var i in e)t[i]=e[i];return t},ki=function u(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=mt(e[i])?u(t[i]||(t[i]={}),e[i]):e[i]);return t},Oe=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},le=function(t){var e=t.parent||E,i=t.keyframes?Zr(H(t.keyframes)):ht;if(Q(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Jr=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},rr=function(t,e,i,r,n){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t[r],a;if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=s,e.parent=e._dp=t,e},ze=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=e._prev,s=e._next;n?n._next=s:t[i]===e&&(t[i]=s),s?s._prev=n:t[r]===e&&(t[r]=n),e._next=e._prev=e.parent=null},Ct=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Nt=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},tn=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},$e=function(t,e,i,r){return t._startAt&&($?t._startAt.revert(we):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},en=function u(t){return!t||t._ts&&u(t.parent)},Pi=function(t){return t._repeat?Zt(t._tTime,t=t.duration()+t._rDelay)*t:0},Zt=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Ce=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Re=function(t){return t._end=W(t._start+(t._tDur/Math.abs(t._ts||t._rts||D)||0))},Ee=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=W(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Re(t),i._dirty||Nt(i,t)),t},nr=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Ce(t.rawTime(),e),(!e._dur||ye(0,e.totalDuration(),i)-e._tTime>D)&&e.render(i,!0)),Nt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-D}},_t=function(t,e,i,r){return e.parent&&Ct(e),e._start=W((vt(i)?i:i||t!==E?ot(t,i,e):t._time)+e._delay),e._end=W(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rr(t,e,"_first","_last",t._sort?"_start":0),He(e)||(t._recent=e),r||nr(t,e),t._ts<0&&Ee(t,t._tTime),t},sr=function(t,e){return(at.ScrollTrigger||fi("scrollTrigger",e))&&at.ScrollTrigger.create(e,t)},ar=function(t,e,i,r,n){if(pi(t,e,n),!t._initted)return 1;if(!i&&t._pt&&!$&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Zi!==rt.frame)return Pt.push(t),t._lazy=[n,r],1},rn=function u(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||u(e))},He=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},nn=function(t,e,i,r){var n=t.ratio,s=e<0||!e&&(!t._start&&rn(t)&&!(!t._initted&&He(t))||(t._ts<0||t._dp._ts<0)&&!He(t))?0:1,a=t._rDelay,o=0,l,f,c;if(a&&t._repeat&&(o=ye(0,t._tDur,e),f=Zt(o,a),t._yoyo&&f&1&&(s=1-s),f!==Zt(t._tTime,a)&&(n=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==n||$||r||t._zTime===D||!e&&t._zTime){if(!t._initted&&ar(t,e,r,i,o))return;for(c=t._zTime,t._zTime=e||(i?D:0),i||(i=e&&!c),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=o,l=t._pt;l;)l.r(s,l.d),l=l._next;e<0&&$e(t,e,i,!0),t._onUpdate&&!i&&nt(t,"onUpdate"),o&&t._repeat&&!i&&t.parent&&nt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&Ct(t,1),!i&&!$&&(nt(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},sn=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Jt=function(t,e,i,r){var n=t._repeat,s=W(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=n?n<0?1e10:W(s*(n+1)+t._rDelay*n):s,a>0&&!r&&Ee(t,t._tTime=t._tDur*a),t.parent&&Re(t),i||Nt(t.parent,t),t},Oi=function(t){return t instanceof K?Nt(t):Jt(t,t._dur)},an={_start:0,endTime:_e,totalDuration:_e},ot=function u(t,e,i){var r=t.labels,n=t._recent||an,s=t.duration()>=lt?n.endTime(!1):t._dur,a,o,l;return X(e)&&(isNaN(e)||e in r)?(o=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),o==="<"||o===">"?(a>=0&&(e=e.replace(/=/,"")),(o==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?n:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=s),r[e]):(o=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&i&&(o=o/100*(H(i)?i[0]:i).totalDuration()),a>1?u(t,e.substr(0,a-1),i)+o:s+o)):e==null?s:+e},fe=function(t,e,i){var r=vt(e[1]),n=(r?2:1)+(t<2?0:1),s=e[n],a,o;if(r&&(s.duration=e[1]),s.parent=i,t){for(a=s,o=i;o&&!("immediateRender"in a);)a=o.vars.defaults||{},o=Q(o.vars.inherit)&&o.parent;s.immediateRender=Q(a.immediateRender),t<2?s.runBackwards=1:s.startAt=e[n-1]}return new j(e[0],s,e[n+1])},Dt=function(t,e){return t||t===0?e(t):e},ye=function(t,e,i){return i<t?t:i>e?e:i},G=function(t,e){return!X(t)||!(e=$r.exec(t))?"":e[1]},on=function(t,e,i){return Dt(i,function(r){return ye(t,e,r)})},Ke=[].slice,or=function(t,e){return t&&mt(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mt(t[0]))&&!t.nodeType&&t!==ut},un=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var n;return X(r)&&!e||or(r,1)?(n=i).push.apply(n,ft(r)):i.push(r)})||i},ft=function(t,e,i){return I&&!e&&I.selector?I.selector(t):X(t)&&!i&&(qe||!te())?Ke.call((e||li).querySelectorAll(t),0):H(t)?un(t,i):or(t)?Ke.call(t,0):t?[t]:[]},Qe=function(t){return t=ft(t)[0]||ce("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return ft(e,i.querySelectorAll?i:i===t?ce("Invalid scope")||li.createElement("div"):t)}},ur=function(t){return t.sort(function(){return .5-Math.random()})},lr=function(t){if(L(t))return t;var e=mt(t)?t:{each:t},i=Bt(e.ease),r=e.from||0,n=parseFloat(e.base)||0,s={},a=r>0&&r<1,o=isNaN(r)||a,l=e.axis,f=r,c=r;return X(r)?f=c={center:.5,edges:.5,end:1}[r]||0:!a&&o&&(f=r[0],c=r[1]),function(_,d,p){var h=(p||e).length,m=s[h],x,y,b,v,g,T,S,k,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,lt])[1],!w){for(S=-lt;S<(S=p[w++].getBoundingClientRect().left)&&w<h;);w<h&&w--}for(m=s[h]=[],x=o?Math.min(w,h)*f-.5:r%w,y=w===lt?0:o?h*c/w-.5:r/w|0,S=0,k=lt,T=0;T<h;T++)b=T%w-x,v=y-(T/w|0),m[T]=g=l?Math.abs(l==="y"?v:b):Wi(b*b+v*v),g>S&&(S=g),g<k&&(k=g);r==="random"&&ur(m),m.max=S-k,m.min=k,m.v=h=(parseFloat(e.amount)||parseFloat(e.each)*(w>h?h-1:l?l==="y"?h/w:w:Math.max(w,h/w))||0)*(r==="edges"?-1:1),m.b=h<0?n-h:n,m.u=G(e.amount||e.each)||0,i=i&&h<0?yr(i):i}return h=(m[_]-m.min)/m.max||0,W(m.b+(i?i(h):h)*m.v)+m.u}},Ze=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=W(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(vt(i)?0:G(i))}},fr=function(t,e){var i=H(t),r,n;return!i&&mt(t)&&(r=i=t.radius||lt,t.values?(t=ft(t.values),(n=!vt(t[0]))&&(r*=r)):t=Ze(t.increment)),Dt(e,i?L(t)?function(s){return n=t(s),Math.abs(n-s)<=r?n:s}:function(s){for(var a=parseFloat(n?s.x:s),o=parseFloat(n?s.y:0),l=lt,f=0,c=t.length,_,d;c--;)n?(_=t[c].x-a,d=t[c].y-o,_=_*_+d*d):_=Math.abs(t[c]-a),_<l&&(l=_,f=c);return f=!r||l<=r?t[f]:s,n||f===s||vt(s)?f:f+G(s)}:Ze(t))},hr=function(t,e,i,r){return Dt(H(t)?!e:i===!0?!!(i=0):!r,function(){return H(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},ln=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(n,s){return s(n)},r)}},fn=function(t,e){return function(i){return t(parseFloat(i))+(e||G(i))}},hn=function(t,e,i){return _r(t,e,0,1,i)},cr=function(t,e,i){return Dt(i,function(r){return t[~~e(r)]})},cn=function u(t,e,i){var r=e-t;return H(t)?cr(t,u(0,t.length),e):Dt(i,function(n){return(r+(n-t)%r)%r+t})},_n=function u(t,e,i){var r=e-t,n=r*2;return H(t)?cr(t,u(0,t.length-1),e):Dt(i,function(s){return s=(n+(s-t)%n)%n||0,t+(s>r?n-s:s)})},de=function(t){for(var e=0,i="",r,n,s,a;~(r=t.indexOf("random(",e));)s=t.indexOf(")",r),a=t.charAt(r+7)==="[",n=t.substr(r+7,s-r-7).match(a?$i:Xe),i+=t.substr(e,r-e)+hr(a?n:+n[0],a?0:+n[1],+n[2]||1e-5),e=s+1;return i+t.substr(e,t.length-e)},_r=function(t,e,i,r,n){var s=e-t,a=r-i;return Dt(n,function(o){return i+((o-t)/s*a||0)})},dn=function u(t,e,i,r){var n=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!n){var s=X(t),a={},o,l,f,c,_;if(i===!0&&(r=1)&&(i=null),s)t={p:t},e={p:e};else if(H(t)&&!H(e)){for(f=[],c=t.length,_=c-2,l=1;l<c;l++)f.push(u(t[l-1],t[l]));c--,n=function(p){p*=c;var h=Math.min(_,~~p);return f[h](p-h)},i=e}else r||(t=Ut(H(t)?[]:{},t));if(!f){for(o in e)di.call(a,t,o,"get",e[o]);n=function(p){return xi(p,a)||(s?t.p:t)}}}return Dt(i,n)},Ci=function(t,e,i){var r=t.labels,n=lt,s,a,o;for(s in r)a=r[s]-e,a<0==!!i&&a&&n>(a=Math.abs(a))&&(o=s,n=a);return o},nt=function(t,e,i){var r=t.vars,n=r[e],s=I,a=t._ctx,o,l,f;if(n)return o=r[e+"Params"],l=r.callbackScope||t,i&&Pt.length&&Pe(),a&&(I=a),f=o?n.apply(l,o):n.call(l),I=s,f},oe=function(t){return Ct(t),t.scrollTrigger&&t.scrollTrigger.kill(!!$),t.progress()<1&&nt(t,"onInterrupt"),t},Gt,dr=[],pr=function(t){if(ui()&&t){t=!t.name&&t.default||t;var e=t.name,i=L(t),r=e&&!i&&t.init?function(){this._props=[]}:t,n={init:_e,render:xi,add:di,kill:Dn,modifier:Mn,rawVars:0},s={targetTest:0,get:0,getSetter:gi,aliases:{},register:0};if(te(),t!==r){if(it[e])return;ht(r,ht(Oe(t,n),s)),Ut(r.prototype,Ut(n,Oe(t,s))),it[r.prop=e]=r,t.targetTest&&(Te.push(r),hi[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qi(e,r),t.register&&t.register(et,r,J)}else t&&dr.push(t)},M=255,ue={aqua:[0,M,M],lime:[0,M,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,M],navy:[0,0,128],white:[M,M,M],olive:[128,128,0],yellow:[M,M,0],orange:[M,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[M,0,0],pink:[M,192,203],cyan:[0,M,M],transparent:[M,M,M,0]},Le=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*M+.5|0},mr=function(t,e,i){var r=t?vt(t)?[t>>16,t>>8&M,t&M]:0:ue.black,n,s,a,o,l,f,c,_,d,p;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ue[t])r=ue[t];else if(t.charAt(0)==="#"){if(t.length<6&&(n=t.charAt(1),s=t.charAt(2),a=t.charAt(3),t="#"+n+n+s+s+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&M,r&M,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&M,t&M]}else if(t.substr(0,3)==="hsl"){if(r=p=t.match(Xe),!e)o=+r[0]%360/360,l=+r[1]/100,f=+r[2]/100,s=f<=.5?f*(l+1):f+l-f*l,n=f*2-s,r.length>3&&(r[3]*=1),r[0]=Le(o+1/3,n,s),r[1]=Le(o,n,s),r[2]=Le(o-1/3,n,s);else if(~t.indexOf("="))return r=t.match(qi),i&&r.length<4&&(r[3]=1),r}else r=t.match(Xe)||ue.transparent;r=r.map(Number)}return e&&!p&&(n=r[0]/M,s=r[1]/M,a=r[2]/M,c=Math.max(n,s,a),_=Math.min(n,s,a),f=(c+_)/2,c===_?o=l=0:(d=c-_,l=f>.5?d/(2-c-_):d/(c+_),o=c===n?(s-a)/d+(s<a?6:0):c===s?(a-n)/d+2:(n-s)/d+4,o*=60),r[0]=~~(o+.5),r[1]=~~(l*100+.5),r[2]=~~(f*100+.5)),i&&r.length<4&&(r[3]=1),r},gr=function(t){var e=[],i=[],r=-1;return t.split(Ot).forEach(function(n){var s=n.match(qt)||[];e.push.apply(e,s),i.push(r+=s.length+1)}),e.c=i,e},Mi=function(t,e,i){var r="",n=(t+r).match(Ot),s=e?"hsla(":"rgba(",a=0,o,l,f,c;if(!n)return t;if(n=n.map(function(_){return(_=mr(_,e,1))&&s+(e?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(f=gr(t),o=i.c,o.join(r)!==f.c.join(r)))for(l=t.replace(Ot,"1").split(qt),c=l.length-1;a<c;a++)r+=l[a]+(~o.indexOf(a)?n.shift()||s+"0,0,0,0)":(f.length?f:n.length?n:i).shift());if(!l)for(l=t.split(Ot),c=l.length-1;a<c;a++)r+=l[a]+n[a];return r+l[c]},Ot=function(){var u="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ue)u+="|"+t+"\\b";return new RegExp(u+")","gi")}(),pn=/hsl[a]?\(/,xr=function(t){var e=t.join(" "),i;if(Ot.lastIndex=0,Ot.test(e))return i=pn.test(e),t[1]=Mi(t[1],i),t[0]=Mi(t[0],i,gr(t[1])),!0},pe,rt=function(){var u=Date.now,t=500,e=33,i=u(),r=i,n=1e3/240,s=n,a=[],o,l,f,c,_,d,p=function h(m){var x=u()-r,y=m===!0,b,v,g,T;if(x>t&&(i+=x-e),r+=x,g=r-i,b=g-s,(b>0||y)&&(T=++c.frame,_=g-c.time*1e3,c.time=g=g/1e3,s+=b+(b>=n?4:n-b),v=1),y||(o=l(h)),v)for(d=0;d<a.length;d++)a[d](g,_,T,m)};return c={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return _/(1e3/(m||60))},wake:function(){Hi&&(!qe&&ui()&&(ut=qe=window,li=ut.document||{},at.gsap=et,(ut.gsapVersions||(ut.gsapVersions=[])).push(et.version),Ki(ke||ut.GreenSockGlobals||!ut.gsap&&ut||{}),f=ut.requestAnimationFrame,dr.forEach(pr)),o&&c.sleep(),l=f||function(m){return setTimeout(m,s-c.time*1e3+1|0)},pe=1,p(2))},sleep:function(){(f?ut.cancelAnimationFrame:clearTimeout)(o),pe=0,l=_e},lagSmoothing:function(m,x){t=m||1/0,e=Math.min(x||33,t)},fps:function(m){n=1e3/(m||240),s=c.time*1e3+n},add:function(m,x,y){var b=x?function(v,g,T,S){m(v,g,T,S),c.remove(b)}:m;return c.remove(m),a[y?"unshift":"push"](b),te(),b},remove:function(m,x){~(x=a.indexOf(m))&&a.splice(x,1)&&d>=x&&d--},_listeners:a},c}(),te=function(){return!pe&&rt.wake()},O={},mn=/^[\d.\-M][\d.\-,\s]/,gn=/["']/g,xn=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],n=1,s=i.length,a,o,l;n<s;n++)o=i[n],a=n!==s-1?o.lastIndexOf(","):o.length,l=o.substr(0,a),e[r]=isNaN(l)?l.replace(gn,"").trim():+l,r=o.substr(a+1).trim();return e},yn=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},vn=function(t){var e=(t+"").split("("),i=O[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[xn(e[1])]:yn(t).split(",").map(er)):O._CE&&mn.test(t)?O._CE("",t):i},yr=function(t){return function(e){return 1-t(1-e)}},vr=function u(t,e){for(var i=t._first,r;i;)i instanceof K?u(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?u(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Bt=function(t,e){return t&&(L(t)?t:O[t]||vn(t))||e},Wt=function(t,e,i,r){i===void 0&&(i=function(o){return 1-e(1-o)}),r===void 0&&(r=function(o){return o<.5?e(o*2)/2:1-e((1-o)*2)/2});var n={easeIn:e,easeOut:i,easeInOut:r},s;return Z(t,function(a){O[a]=at[a]=n,O[s=a.toLowerCase()]=i;for(var o in n)O[s+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=O[a+"."+o]=n[o]}),n},br=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ne=function u(t,e,i){var r=e>=1?e:1,n=(i||(t?.3:.45))/(e<1?e:1),s=n/We*(Math.asin(1/r)||0),a=function(f){return f===1?1:r*Math.pow(2,-10*f)*Gr((f-s)*n)+1},o=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:br(a);return n=We/n,o.config=function(l,f){return u(t,l,f)},o},Be=function u(t,e){e===void 0&&(e=1.70158);var i=function(s){return s?--s*s*((e+1)*s+e)+1:0},r=t==="out"?i:t==="in"?function(n){return 1-i(1-n)}:br(i);return r.config=function(n){return u(t,n)},r};Z("Linear,Quad,Cubic,Quart,Quint,Strong",function(u,t){var e=t<5?t+1:t;Wt(u+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});O.Linear.easeNone=O.none=O.Linear.easeIn;Wt("Elastic",Ne("in"),Ne("out"),Ne());(function(u,t){var e=1/t,i=2*e,r=2.5*e,n=function(a){return a<e?u*a*a:a<i?u*Math.pow(a-1.5/t,2)+.75:a<r?u*(a-=2.25/t)*a+.9375:u*Math.pow(a-2.625/t,2)+.984375};Wt("Bounce",function(s){return 1-n(1-s)},n)})(7.5625,2.75);Wt("Expo",function(u){return u?Math.pow(2,10*(u-1)):0});Wt("Circ",function(u){return-(Wi(1-u*u)-1)});Wt("Sine",function(u){return u===1?1:-qr(u*Wr)+1});Wt("Back",Be("in"),Be("out"),Be());O.SteppedEase=O.steps=at.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),n=e?1:0,s=1-D;return function(a){return((r*ye(0,s,a)|0)+n)*i}}};Qt.ease=O["quad.out"];Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(u){return ci+=u+","+u+"Params,"});var wr=function(t,e){this.id=Xr++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ji,this.set=e?e.getSetter:gi},me=function(){function u(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Jt(this,+e.duration,1,1),this.data=e.data,I&&(this._ctx=I,I.data.push(this)),pe||rt.wake()}var t=u.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Jt(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(te(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ee(this,i),!n._dp||n.parent||nr(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_t(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===D||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),tr(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Pi(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Pi(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Zt(this._tTime,n)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-D?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Ce(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-D?0:this._rts,this.totalTime(ye(-Math.abs(this._delay),this._tDur,n),r!==!1),Re(this),tn(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(te(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==D&&(this._tTime-=D)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&_t(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Q(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ce(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Kr);var r=$;return $=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),$=r,this},t.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Oi(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Oi(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(ot(this,i),Q(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Q(r))},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-D:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-D,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-D)},t.eventCallback=function(i,r,n){var s=this.vars;return arguments.length>1?(r?(s[i]=r,n&&(s[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]},t.then=function(i){var r=this;return new Promise(function(n){var s=L(i)?i:ir,a=function(){var l=r.then;r.then=null,L(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=l),n(s),r.then=l};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){oe(this)},u}();ht(me.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-D,_prom:0,_ps:!1,_rts:1});var K=function(u){Yi(t,u);function t(i,r){var n;return i===void 0&&(i={}),n=u.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=Q(i.sortChildren),E&&_t(i.parent||E,xt(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&sr(xt(n),i.scrollTrigger),n}var e=t.prototype;return e.to=function(r,n,s){return fe(0,arguments,this),this},e.from=function(r,n,s){return fe(1,arguments,this),this},e.fromTo=function(r,n,s,a){return fe(2,arguments,this),this},e.set=function(r,n,s){return n.duration=0,n.parent=this,le(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new j(r,n,ot(this,s),1),this},e.call=function(r,n,s){return _t(this,j.delayedCall(0,r,n),s)},e.staggerTo=function(r,n,s,a,o,l,f){return s.duration=n,s.stagger=s.stagger||a,s.onComplete=l,s.onCompleteParams=f,s.parent=this,new j(r,s,ot(this,o)),this},e.staggerFrom=function(r,n,s,a,o,l,f){return s.runBackwards=1,le(s).immediateRender=Q(s.immediateRender),this.staggerTo(r,n,s,a,o,l,f)},e.staggerFromTo=function(r,n,s,a,o,l,f,c){return a.startAt=s,le(a).immediateRender=Q(a.immediateRender),this.staggerTo(r,n,a,o,l,f,c)},e.render=function(r,n,s){var a=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,f=r<=0?0:W(r),c=this._zTime<0!=r<0&&(this._initted||!l),_,d,p,h,m,x,y,b,v,g,T,S;if(this!==E&&f>o&&r>=0&&(f=o),f!==this._tTime||s||c){if(a!==this._time&&l&&(f+=this._time-a,r+=this._time-a),_=f,v=this._start,b=this._ts,x=!b,c&&(l||(a=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,n,s);if(_=W(f%m),f===o?(h=this._repeat,_=l):(h=~~(f/m),h&&h===f/m&&(_=l,h--),_>l&&(_=l)),g=Zt(this._tTime,m),!a&&this._tTime&&g!==h&&this._tTime-g*m-this._dur<=0&&(g=h),T&&h&1&&(_=l-_,S=1),h!==g&&!this._lock){var k=T&&g&1,w=k===(T&&h&1);if(h<g&&(k=!k),a=k?0:f%l?l:f,this._lock=1,this.render(a||(S?0:W(h*m)),n,!l)._lock=0,this._tTime=f,!n&&this.parent&&nt(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,w&&(this._lock=2,a=k?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;vr(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=sn(this,W(a),W(_)),y&&(f-=_-(_=y._start))),this._tTime=f,this._time=_,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&_&&!n&&!h&&(nt(this,"onStart"),this._tTime!==f))return this;if(_>=a&&r>=0)for(d=this._first;d;){if(p=d._next,(d._act||_>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,n,s);if(d.render(d._ts>0?(_-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(_-d._start)*d._ts,n,s),_!==this._time||!this._ts&&!x){y=0,p&&(f+=this._zTime=-D);break}}d=p}else{d=this._last;for(var C=r<0?r:_;d;){if(p=d._prev,(d._act||C<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,n,s);if(d.render(d._ts>0?(C-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(C-d._start)*d._ts,n,s||$&&(d._initted||d._startAt)),_!==this._time||!this._ts&&!x){y=0,p&&(f+=this._zTime=C?-D:D);break}}d=p}}if(y&&!n&&(this.pause(),y.render(_>=a?0:-D)._zTime=_>=a?1:-1,this._ts))return this._start=v,Re(this),this.render(r,n,s);this._onUpdate&&!n&&nt(this,"onUpdate",!0),(f===o&&this._tTime>=this.totalDuration()||!f&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(f===o&&this._ts>0||!f&&this._ts<0)&&Ct(this,1),!n&&!(r<0&&!a)&&(f||a||!o)&&(nt(this,f===o&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<o&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,n){var s=this;if(vt(n)||(n=ot(this,n,r)),!(r instanceof me)){if(H(r))return r.forEach(function(a){return s.add(a,n)}),this;if(X(r))return this.addLabel(r,n);if(L(r))r=j.delayedCall(0,r);else return this}return this!==r?_t(this,r,n):this},e.getChildren=function(r,n,s,a){r===void 0&&(r=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=-lt);for(var o=[],l=this._first;l;)l._start>=a&&(l instanceof j?n&&o.push(l):(s&&o.push(l),r&&o.push.apply(o,l.getChildren(!0,n,s)))),l=l._next;return o},e.getById=function(r){for(var n=this.getChildren(1,1,1),s=n.length;s--;)if(n[s].vars.id===r)return n[s]},e.remove=function(r){return X(r)?this.removeLabel(r):L(r)?this.killTweensOf(r):(ze(this,r),r===this._recent&&(this._recent=this._last),Nt(this))},e.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=W(rt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),u.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},e.addLabel=function(r,n){return this.labels[r]=ot(this,n),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,n,s){var a=j.delayedCall(0,n||_e,s);return a.data="isPause",this._hasPause=1,_t(this,a,ot(this,r))},e.removePause=function(r){var n=this._first;for(r=ot(this,r);n;)n._start===r&&n.data==="isPause"&&Ct(n),n=n._next},e.killTweensOf=function(r,n,s){for(var a=this.getTweensOf(r,s),o=a.length;o--;)Tt!==a[o]&&a[o].kill(r,n);return this},e.getTweensOf=function(r,n){for(var s=[],a=ft(r),o=this._first,l=vt(n),f;o;)o instanceof j?Qr(o._targets,a)&&(l?(!Tt||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&s.push(o):(f=o.getTweensOf(a,n)).length&&s.push.apply(s,f),o=o._next;return s},e.tweenTo=function(r,n){n=n||{};var s=this,a=ot(s,r),o=n,l=o.startAt,f=o.onStart,c=o.onStartParams,_=o.immediateRender,d,p=j.to(s,ht({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(l&&"time"in l?l.time:s._time))/s.timeScale())||D,onStart:function(){if(s.pause(),!d){var m=n.duration||Math.abs((a-(l&&"time"in l?l.time:s._time))/s.timeScale());p._dur!==m&&Jt(p,m,0,1).render(p._time,!0,!0),d=1}f&&f.apply(p,c||[])}},n));return _?p.render(0):p},e.tweenFromTo=function(r,n,s){return this.tweenTo(n,ht({startAt:{time:ot(this,r)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Ci(this,ot(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Ci(this,ot(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+D)},e.shiftChildren=function(r,n,s){s===void 0&&(s=0);for(var a=this._first,o=this.labels,l;a;)a._start>=s&&(a._start+=r,a._end+=r),a=a._next;if(n)for(l in o)o[l]>=s&&(o[l]+=r);return Nt(this)},e.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return u.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,s;n;)s=n._next,this.remove(n),n=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Nt(this)},e.totalDuration=function(r){var n=0,s=this,a=s._last,o=lt,l,f,c;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(c=s.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>o&&s._sort&&a._ts&&!s._lock?(s._lock=1,_t(s,a,f-a._delay,1)._lock=0):o=f,f<0&&a._ts&&(n-=f,(!c&&!s._dp||c&&c.smoothChildTiming)&&(s._start+=f/s._ts,s._time-=f,s._tTime-=f),s.shiftChildren(-f,!1,-1/0),o=0),a._end>n&&a._ts&&(n=a._end),a=l;Jt(s,s===E&&s._time>n?s._time:n,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(r){if(E._ts&&(tr(E,Ce(r,E)),Zi=rt.frame),rt.frame>=Si){Si+=st.autoSleep||120;var n=E._first;if((!n||!n._ts)&&st.autoSleep&&rt._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||rt.sleep()}}},t}(me);ht(K.prototype,{_lock:0,_hasPause:0,_forcing:0});var bn=function(t,e,i,r,n,s,a){var o=new J(this._pt,t,e,0,1,Cr,null,n),l=0,f=0,c,_,d,p,h,m,x,y;for(o.b=i,o.e=r,i+="",r+="",(x=~r.indexOf("random("))&&(r=de(r)),s&&(y=[i,r],s(y,t,e),i=y[0],r=y[1]),_=i.match(Fe)||[];c=Fe.exec(r);)p=c[0],h=r.substring(l,c.index),d?d=(d+1)%5:h.substr(-5)==="rgba("&&(d=1),p!==_[f++]&&(m=parseFloat(_[f-1])||0,o._pt={_next:o._pt,p:h||f===1?h:",",s:m,c:p.charAt(1)==="="?$t(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},l=Fe.lastIndex);return o.c=l<r.length?r.substring(l,r.length):"",o.fp=a,(Gi.test(r)||x)&&(o.e=0),this._pt=o,o},di=function(t,e,i,r,n,s,a,o,l,f){L(r)&&(r=r(n||0,t,s));var c=t[e],_=i!=="get"?i:L(c)?l?t[e.indexOf("set")||!L(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,d=L(c)?l?Pn:Pr:mi,p;if(X(r)&&(~r.indexOf("random(")&&(r=de(r)),r.charAt(1)==="="&&(p=$t(_,r)+(G(_)||0),(p||p===0)&&(r=p))),!f||_!==r||Je)return!isNaN(_*r)&&r!==""?(p=new J(this._pt,t,e,+_||0,r-(_||0),typeof c=="boolean"?Cn:Or,0,d),l&&(p.fp=l),a&&p.modifier(a,this,t),this._pt=p):(!c&&!(e in t)&&fi(e,r),bn.call(this,t,e,_,r,d,o||st.stringFilter,l))},wn=function(t,e,i,r,n){if(L(t)&&(t=he(t,n,e,i,r)),!mt(t)||t.style&&t.nodeType||H(t)||Xi(t))return X(t)?he(t,n,e,i,r):t;var s={},a;for(a in t)s[a]=he(t[a],n,e,i,r);return s},Tr=function(t,e,i,r,n,s){var a,o,l,f;if(it[t]&&(a=new it[t]).init(n,a.rawVars?e[t]:wn(e[t],r,n,s,i),i,r,s)!==!1&&(i._pt=o=new J(i._pt,n,t,0,1,a.render,a,0,a.priority),i!==Gt))for(l=i._ptLookup[i._targets.indexOf(n)],f=a._props.length;f--;)l[a._props[f]]=o;return a},Tt,Je,pi=function u(t,e,i){var r=t.vars,n=r.ease,s=r.startAt,a=r.immediateRender,o=r.lazy,l=r.onUpdate,f=r.runBackwards,c=r.yoyoEase,_=r.keyframes,d=r.autoRevert,p=t._dur,h=t._startAt,m=t._targets,x=t.parent,y=x&&x.data==="nested"?x.vars.targets:m,b=t._overwrite==="auto"&&!ai,v=t.timeline,g,T,S,k,w,C,R,A,z,q,U,B,Y;if(v&&(!_||!n)&&(n="none"),t._ease=Bt(n,Qt.ease),t._yEase=c?yr(Bt(c===!0?n:c,Qt.ease)):0,c&&t._yoyo&&!t._repeat&&(c=t._yEase,t._yEase=t._ease,t._ease=c),t._from=!v&&!!r.runBackwards,!v||_&&!r.stagger){if(A=m[0]?Lt(m[0]).harness:0,B=A&&r[A.prop],g=Oe(r,hi),h&&(h._zTime<0&&h.progress(1),e<0&&f&&a&&!d?h.render(-1,!0):h.revert(f&&p?we:Hr),h._lazy=0),s){if(Ct(t._startAt=j.set(m,ht({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!h&&Q(o),startAt:null,delay:0,onUpdate:l&&function(){return nt(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&($||!a&&!d)&&t._startAt.revert(we),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&p&&!h){if(e&&(a=!1),S=ht({overwrite:!1,data:"isFromStart",lazy:a&&!h&&Q(o),immediateRender:a,stagger:0,parent:x},g),B&&(S[A.prop]=B),Ct(t._startAt=j.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&($?t._startAt.revert(we):t._startAt.render(-1,!0)),t._zTime=e,!a)u(t._startAt,D,D);else if(!e)return}for(t._pt=t._ptCache=0,o=p&&Q(o)||o&&!p,T=0;T<m.length;T++){if(w=m[T],R=w._gsap||_i(m)[T]._gsap,t._ptLookup[T]=q={},Ge[R.id]&&Pt.length&&Pe(),U=y===m?T:y.indexOf(w),A&&(z=new A).init(w,B||g,t,U,y)!==!1&&(t._pt=k=new J(t._pt,w,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(ct){q[ct]=k}),z.priority&&(C=1)),!A||B)for(S in g)it[S]&&(z=Tr(S,g,t,U,w,y))?z.priority&&(C=1):q[S]=k=di.call(t,w,S,"get",g[S],U,y,0,r.stringFilter);t._op&&t._op[T]&&t.kill(w,t._op[T]),b&&t._pt&&(Tt=t,E.killTweensOf(w,q,t.globalTime(e)),Y=!t.parent,Tt=0),t._pt&&o&&(Ge[R.id]=1)}C&&Mr(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!Y,_&&e<=0&&v.render(lt,!0,!0)},Tn=function(t,e,i,r,n,s,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],f,c,_,d;if(!l)for(l=t._ptCache[e]=[],_=t._ptLookup,d=t._targets.length;d--;){if(f=_[d][e],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==e&&f.fp!==e;)f=f._next;if(!f)return Je=1,t.vars[e]="+=0",pi(t,a),Je=0,o?ce(e+" not eligible for reset"):1;l.push(f)}for(d=l.length;d--;)c=l[d],f=c._pt||c,f.s=(r||r===0)&&!n?r:f.s+(r||0)+s*f.c,f.c=i-f.s,c.e&&(c.e=N(i)+G(c.e)),c.b&&(c.b=f.s+G(c.b))},Sn=function(t,e){var i=t[0]?Lt(t[0]).harness:0,r=i&&i.aliases,n,s,a,o;if(!r)return e;n=Ut({},e);for(s in r)if(s in n)for(o=r[s].split(","),a=o.length;a--;)n[o[a]]=n[s];return n},kn=function(t,e,i,r){var n=e.ease||r||"power1.inOut",s,a;if(H(e))a=i[t]||(i[t]=[]),e.forEach(function(o,l){return a.push({t:l/(e.length-1)*100,v:o,e:n})});else for(s in e)a=i[s]||(i[s]=[]),s==="ease"||a.push({t:parseFloat(t),v:e[s],e:n})},he=function(t,e,i,r,n){return L(t)?t.call(e,i,r,n):X(t)&&~t.indexOf("random(")?de(t):t},Sr=ci+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",kr={};Z(Sr+",id,stagger,delay,duration,paused,scrollTrigger",function(u){return kr[u]=1});var j=function(u){Yi(t,u);function t(i,r,n,s){var a;typeof r=="number"&&(n.duration=r,r=n,n=null),a=u.call(this,s?r:le(r))||this;var o=a.vars,l=o.duration,f=o.delay,c=o.immediateRender,_=o.stagger,d=o.overwrite,p=o.keyframes,h=o.defaults,m=o.scrollTrigger,x=o.yoyoEase,y=r.parent||E,b=(H(i)||Xi(i)?vt(i[0]):"length"in r)?[i]:ft(i),v,g,T,S,k,w,C,R;if(a._targets=b.length?_i(b):ce("GSAP target "+i+" not found. https://gsap.com",!st.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||_||be(l)||be(f)){if(r=a.vars,v=a.timeline=new K({data:"nested",defaults:h||{},targets:y&&y.data==="nested"?y.vars.targets:b}),v.kill(),v.parent=v._dp=xt(a),v._start=0,_||be(l)||be(f)){if(S=b.length,C=_&&lr(_),mt(_))for(k in _)~Sr.indexOf(k)&&(R||(R={}),R[k]=_[k]);for(g=0;g<S;g++)T=Oe(r,kr),T.stagger=0,x&&(T.yoyoEase=x),R&&Ut(T,R),w=b[g],T.duration=+he(l,xt(a),g,w,b),T.delay=(+he(f,xt(a),g,w,b)||0)-a._delay,!_&&S===1&&T.delay&&(a._delay=f=T.delay,a._start+=f,T.delay=0),v.to(w,T,C?C(g,w,b):0),v._ease=O.none;v.duration()?l=f=0:a.timeline=0}else if(p){le(ht(v.vars.defaults,{ease:"none"})),v._ease=Bt(p.ease||r.ease||"none");var A=0,z,q,U;if(H(p))p.forEach(function(B){return v.to(b,B,">")}),v.duration();else{T={};for(k in p)k==="ease"||k==="easeEach"||kn(k,p[k],T,p.easeEach);for(k in T)for(z=T[k].sort(function(B,Y){return B.t-Y.t}),A=0,g=0;g<z.length;g++)q=z[g],U={ease:q.e,duration:(q.t-(g?z[g-1].t:0))/100*l},U[k]=q.v,v.to(b,U,A),A+=U.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||a.duration(l=v.duration())}else a.timeline=0;return d===!0&&!ai&&(Tt=xt(a),E.killTweensOf(b),Tt=0),_t(y,xt(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(c||!l&&!p&&a._start===W(y._time)&&Q(c)&&en(xt(a))&&y.data!=="nested")&&(a._tTime=-D,a.render(Math.max(0,-f)||0)),m&&sr(xt(a),m),a}var e=t.prototype;return e.render=function(r,n,s){var a=this._time,o=this._tDur,l=this._dur,f=r<0,c=r>o-D&&!f?o:r<D?0:r,_,d,p,h,m,x,y,b,v;if(!l)nn(this,r,n,s);else if(c!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(_=c,b=this.timeline,this._repeat){if(h=l+this._rDelay,this._repeat<-1&&f)return this.totalTime(h*100+r,n,s);if(_=W(c%h),c===o?(p=this._repeat,_=l):(p=~~(c/h),p&&p===W(c/h)&&(_=l,p--),_>l&&(_=l)),x=this._yoyo&&p&1,x&&(v=this._yEase,_=l-_),m=Zt(this._tTime,h),_===a&&!s&&this._initted&&p===m)return this._tTime=c,this;p!==m&&(b&&this._yEase&&vr(b,x),this.vars.repeatRefresh&&!x&&!this._lock&&this._time!==l&&this._initted&&(this._lock=s=1,this.render(W(h*p),!0).invalidate()._lock=0))}if(!this._initted){if(ar(this,f?r:_,s,n,c))return this._tTime=0,this;if(a!==this._time&&!(s&&this.vars.repeatRefresh&&p!==m))return this;if(l!==this._dur)return this.render(r,n,s)}if(this._tTime=c,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(_/l),this._from&&(this.ratio=y=1-y),_&&!a&&!n&&!p&&(nt(this,"onStart"),this._tTime!==c))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;b&&b.render(r<0?r:!_&&x?-D:b._dur*b._ease(_/this._dur),n,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(f&&$e(this,r,n,s),nt(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!n&&this.parent&&nt(this,"onRepeat"),(c===this._tDur||!c)&&this._tTime===c&&(f&&!this._onUpdate&&$e(this,r,!0,!0),(r||!l)&&(c===this._tDur&&this._ts>0||!c&&this._ts<0)&&Ct(this,1),!n&&!(f&&!a)&&(c||a||x)&&(nt(this,c===o?"onComplete":"onReverseComplete",!0),this._prom&&!(c<o&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),u.prototype.invalidate.call(this,r)},e.resetTo=function(r,n,s,a,o){pe||rt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||pi(this,l),f=this._ease(l/this._dur),Tn(this,r,n,s,a,f,l,o)?this.resetTo(r,n,s,a,1):(Ee(this,0),this.parent||rr(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?oe(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,Tt&&Tt.vars.overwrite!==!0)._first||oe(this),this.parent&&s!==this.timeline.totalDuration()&&Jt(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,o=r?ft(r):a,l=this._ptLookup,f=this._pt,c,_,d,p,h,m,x;if((!n||n==="all")&&Jr(a,o))return n==="all"&&(this._pt=0),oe(this);for(c=this._op=this._op||[],n!=="all"&&(X(n)&&(h={},Z(n,function(y){return h[y]=1}),n=h),n=Sn(a,n)),x=a.length;x--;)if(~o.indexOf(a[x])){_=l[x],n==="all"?(c[x]=n,p=_,d={}):(d=c[x]=c[x]||{},p=n);for(h in p)m=_&&_[h],m&&((!("kill"in m.d)||m.d.kill(h)===!0)&&ze(this,m,"_pt"),delete _[h]),d!=="all"&&(d[h]=1)}return this._initted&&!this._pt&&f&&oe(this),this},t.to=function(r,n){return new t(r,n,arguments[2])},t.from=function(r,n){return fe(1,arguments)},t.delayedCall=function(r,n,s,a){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},t.fromTo=function(r,n,s){return fe(2,arguments)},t.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(r,n)},t.killTweensOf=function(r,n,s){return E.killTweensOf(r,n,s)},t}(me);ht(j.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Z("staggerTo,staggerFrom,staggerFromTo",function(u){j[u]=function(){var t=new K,e=Ke.call(arguments,0);return e.splice(u==="staggerFromTo"?5:4,0,0),t[u].apply(t,e)}});var mi=function(t,e,i){return t[e]=i},Pr=function(t,e,i){return t[e](i)},Pn=function(t,e,i,r){return t[e](r.fp,i)},On=function(t,e,i){return t.setAttribute(e,i)},gi=function(t,e){return L(t[e])?Pr:oi(t[e])&&t.setAttribute?On:mi},Or=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Cn=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Cr=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},xi=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Mn=function(t,e,i,r){for(var n=this._pt,s;n;)s=n._next,n.p===r&&n.modifier(t,e,i),n=s},Dn=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ze(this,e,"_pt"):e.dep||(i=1),e=r;return!i},An=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},Mr=function(t){for(var e=t._pt,i,r,n,s;e;){for(i=e._next,r=n;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:s)?e._prev._next=e:n=e,(e._next=r)?r._prev=e:s=e,e=i}t._pt=n},J=function(){function u(e,i,r,n,s,a,o,l,f){this.t=i,this.s=n,this.c=s,this.p=r,this.r=a||Or,this.d=o||this,this.set=l||mi,this.pr=f||0,this._next=e,e&&(e._prev=this)}var t=u.prototype;return t.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=An,this.m=i,this.mt=n,this.tween=r},u}();Z(ci+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(u){return hi[u]=1});at.TweenMax=at.TweenLite=j;at.TimelineLite=at.TimelineMax=K;E=new K({sortChildren:!1,defaults:Qt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});st.stringFilter=xr;var jt=[],Se={},zn=[],Di=0,Rn=0,je=function(t){return(Se[t]||zn).map(function(e){return e()})},ti=function(){var t=Date.now(),e=[];t-Di>2&&(je("matchMediaInit"),jt.forEach(function(i){var r=i.queries,n=i.conditions,s,a,o,l;for(a in r)s=ut.matchMedia(r[a]).matches,s&&(o=1),s!==n[a]&&(n[a]=s,l=1);l&&(i.revert(),o&&e.push(i))}),je("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Di=t,je("matchMedia"))},Dr=function(){function u(e,i){this.selector=i&&Qe(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Rn++,e&&this.add(e)}var t=u.prototype;return t.add=function(i,r,n){L(i)&&(n=r,r=i,i=L);var s=this,a=function(){var l=I,f=s.selector,c;return l&&l!==s&&l.data.push(s),n&&(s.selector=Qe(n)),I=s,c=r.apply(s,arguments),L(c)&&s._r.push(c),I=l,s.selector=f,s.isReverted=!1,c};return s.last=a,i===L?a(s,function(o){return s.add(null,o)}):i?s[i]=a:a},t.ignore=function(i){var r=I;I=null,i(this),I=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof u?i.push.apply(i,r.getTweens()):r instanceof j&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var n=this;if(i?function(){for(var a=n.getTweens(),o=n.data.length,l;o--;)l=n.data[o],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(f){return a.splice(a.indexOf(f),1)}));for(a.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,c){return c.g-f.g||-1/0}).forEach(function(f){return f.t.revert(i)}),o=n.data.length;o--;)l=n.data[o],l instanceof K?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof j)&&l.revert&&l.revert(i);n._r.forEach(function(f){return f(i,n)}),n.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var s=jt.length;s--;)jt[s].id===this.id&&jt.splice(s,1)},t.revert=function(i){this.kill(i||{})},u}(),En=function(){function u(e){this.contexts=[],this.scope=e}var t=u.prototype;return t.add=function(i,r,n){mt(i)||(i={matches:i});var s=new Dr(0,n||this.scope),a=s.conditions={},o,l,f;I&&!s.selector&&(s.selector=I.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;for(l in i)l==="all"?f=1:(o=ut.matchMedia(i[l]),o&&(jt.indexOf(s)<0&&jt.push(s),(a[l]=o.matches)&&(f=1),o.addListener?o.addListener(ti):o.addEventListener("change",ti)));return f&&r(s,function(c){return s.add(null,c)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},u}(),Me={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return pr(r)})},timeline:function(t){return new K(t)},getTweensOf:function(t,e){return E.getTweensOf(t,e)},getProperty:function(t,e,i,r){X(t)&&(t=ft(t)[0]);var n=Lt(t||{}).get,s=i?ir:er;return i==="native"&&(i=""),t&&(e?s((it[e]&&it[e].get||n)(t,e,i,r)):function(a,o,l){return s((it[a]&&it[a].get||n)(t,a,o,l))})},quickSetter:function(t,e,i){if(t=ft(t),t.length>1){var r=t.map(function(f){return et.quickSetter(f,e,i)}),n=r.length;return function(f){for(var c=n;c--;)r[c](f)}}t=t[0]||{};var s=it[e],a=Lt(t),o=a.harness&&(a.harness.aliases||{})[e]||e,l=s?function(f){var c=new s;Gt._pt=0,c.init(t,i?f+i:f,Gt,0,[t]),c.render(1,c),Gt._pt&&xi(1,Gt)}:a.set(t,o);return s?l:function(f){return l(t,o,i?f+i:f,a,1)}},quickTo:function(t,e,i){var r,n=et.to(t,Ut((r={},r[e]="+=0.1",r.paused=!0,r),i||{})),s=function(o,l,f){return n.resetTo(e,o,l,f)};return s.tween=n,s},isTweening:function(t){return E.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Bt(t.ease,Qt.ease)),ki(Qt,t||{})},config:function(t){return ki(st,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,n=t.defaults,s=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!it[a]&&!at[a]&&ce(e+" effect requires "+a+" plugin.")}),Ie[e]=function(a,o,l){return i(ft(a),ht(o||{},n),l)},s&&(K.prototype[e]=function(a,o,l){return this.add(Ie[e](a,mt(o)?o:(l=o)&&{},this),l)})},registerEase:function(t,e){O[t]=Bt(e)},parseEase:function(t,e){return arguments.length?Bt(t,e):O},getById:function(t){return E.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new K(t),r,n;for(i.smoothChildTiming=Q(t.smoothChildTiming),E.remove(i),i._dp=0,i._time=i._tTime=E._time,r=E._first;r;)n=r._next,(e||!(!r._dur&&r instanceof j&&r.vars.onComplete===r._targets[0]))&&_t(i,r,r._start-r._delay),r=n;return _t(E,i,0),i},context:function(t,e){return t?new Dr(t,e):I},matchMedia:function(t){return new En(t)},matchMediaRefresh:function(){return jt.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||ti()},addEventListener:function(t,e){var i=Se[t]||(Se[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Se[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:cn,wrapYoyo:_n,distribute:lr,random:hr,snap:fr,normalize:hn,getUnit:G,clamp:on,splitColor:mr,toArray:ft,selector:Qe,mapRange:_r,pipe:ln,unitize:fn,interpolate:dn,shuffle:ur},install:Ki,effects:Ie,ticker:rt,updateRoot:K.updateRoot,plugins:it,globalTimeline:E,core:{PropTween:J,globals:Qi,Tween:j,Timeline:K,Animation:me,getCache:Lt,_removeLinkedListItem:ze,reverting:function(){return $},context:function(t){return t&&I&&(I.data.push(t),t._ctx=I),I},suppressOverwrites:function(t){return ai=t}}};Z("to,from,fromTo,delayedCall,set,killTweensOf",function(u){return Me[u]=j[u]});rt.add(K.updateRoot);Gt=Me.to({},{duration:0});var Fn=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},In=function(t,e){var i=t._targets,r,n,s;for(r in e)for(n=i.length;n--;)s=t._ptLookup[n][r],s&&(s=s.d)&&(s._pt&&(s=Fn(s,r)),s&&s.modifier&&s.modifier(e[r],t,i[n],r))},Ve=function(t,e){return{name:t,rawVars:1,init:function(r,n,s){s._onInit=function(a){var o,l;if(X(n)&&(o={},Z(n,function(f){return o[f]=1}),n=o),e){o={};for(l in n)o[l]=e(n[l]);n=o}In(a,n)}}}},et=Me.registerPlugin({name:"attr",init:function(t,e,i,r,n){var s,a,o;this.tween=i;for(s in e)o=t.getAttribute(s)||"",a=this.add(t,"setAttribute",(o||0)+"",e[s],r,n,0,0,s),a.op=s,a.b=o,this._props.push(s)},render:function(t,e){for(var i=e._pt;i;)$?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ve("roundProps",Ze),Ve("modifiers"),Ve("snap",fr))||Me;j.version=K.version=et.version="3.12.3";Hi=1;ui()&&te();O.Power0;O.Power1;O.Power2;O.Power3;O.Power4;O.Linear;O.Quad;O.Cubic;O.Quart;O.Quint;O.Strong;O.Elastic;O.Back;O.SteppedEase;O.Bounce;O.Sine;O.Expo;O.Circ;/*!
 * CSSPlugin 3.12.3
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ai,St,Ht,yi,It,zi,vi,Ln=function(){return typeof window<"u"},bt={},Ft=180/Math.PI,Kt=Math.PI/180,Xt=Math.atan2,Ri=1e8,bi=/([A-Z])/g,Nn=/(left|right|width|margin|padding|x)/i,Bn=/[\s,\(]\S/,dt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ei=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jn=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vn=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Un=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Ar=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zr=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Yn=function(t,e,i){return t.style[e]=i},Wn=function(t,e,i){return t.style.setProperty(e,i)},Xn=function(t,e,i){return t._gsap[e]=i},qn=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Gn=function(t,e,i,r,n){var s=t._gsap;s.scaleX=s.scaleY=i,s.renderTransform(n,s)},$n=function(t,e,i,r,n){var s=t._gsap;s[e]=i,s.renderTransform(n,s)},F="transform",tt=F+"Origin",Hn=function u(t,e){var i=this,r=this.target,n=r.style,s=r._gsap;if(t in bt&&n){if(this.tfm=this.tfm||{},t!=="transform")t=dt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=yt(r,a)}):this.tfm[t]=s.x?s[t]:yt(r,t),t===tt&&(this.tfm.zOrigin=s.zOrigin);else return dt.transform.split(",").forEach(function(a){return u.call(i,a,e)});if(this.props.indexOf(F)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(tt,e,"")),t=F}(n||e)&&this.props.push(t,e,n[t])},Rr=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Kn=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,n,s;for(n=0;n<t.length;n+=3)t[n+1]?e[t[n]]=t[n+2]:t[n+2]?i[t[n]]=t[n+2]:i.removeProperty(t[n].substr(0,2)==="--"?t[n]:t[n].replace(bi,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=vi(),(!n||!n.isStart)&&!i[F]&&(Rr(i),r.zOrigin&&i[tt]&&(i[tt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Er=function(t,e){var i={target:t,props:[],revert:Kn,save:Hn};return t._gsap||et.core.getCache(t),e&&e.split(",").forEach(function(r){return i.save(r)}),i},Fr,ii=function(t,e){var i=St.createElementNS?St.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):St.createElement(t);return i&&i.style?i:St.createElement(t)},pt=function u(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(bi,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&u(t,ee(e)||e,1)||""},Ei="O,Moz,ms,Ms,Webkit".split(","),ee=function(t,e,i){var r=e||It,n=r.style,s=5;if(t in n&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(Ei[s]+t in n););return s<0?null:(s===3?"ms":s>=0?Ei[s]:"")+t},ri=function(){Ln()&&window.document&&(Ai=window,St=Ai.document,Ht=St.documentElement,It=ii("div")||{style:{}},ii("div"),F=ee(F),tt=F+"Origin",It.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Fr=!!ee("perspective"),vi=et.core.reverting,yi=1)},Ue=function u(t){var e=ii("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,n=this.style.cssText,s;if(Ht.appendChild(e),e.appendChild(this),this.style.display="block",t)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=u}catch{}else this._gsapBBox&&(s=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ht.removeChild(e),this.style.cssText=n,s},Fi=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Ir=function(t){var e;try{e=t.getBBox()}catch{e=Ue.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ue||(e=Ue.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Fi(t,["x","cx","x1"])||0,y:+Fi(t,["y","cy","y1"])||0,width:0,height:0}:e},Lr=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ir(t))},Yt=function(t,e){if(e){var i=t.style,r;e in bt&&e!==tt&&(e=F),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(bi,"-$1").toLowerCase())):i.removeAttribute(e)}},kt=function(t,e,i,r,n,s){var a=new J(t._pt,e,i,0,1,s?zr:Ar);return t._pt=a,a.b=r,a.e=n,t._props.push(i),a},Ii={deg:1,rad:1,turn:1},Qn={grid:1,flex:1},Mt=function u(t,e,i,r){var n=parseFloat(i)||0,s=(i+"").trim().substr((n+"").length)||"px",a=It.style,o=Nn.test(e),l=t.tagName.toLowerCase()==="svg",f=(l?"client":"offset")+(o?"Width":"Height"),c=100,_=r==="px",d=r==="%",p,h,m,x;if(r===s||!n||Ii[r]||Ii[s])return n;if(s!=="px"&&!_&&(n=u(t,e,i,"px")),x=t.getCTM&&Lr(t),(d||s==="%")&&(bt[e]||~e.indexOf("adius")))return p=x?t.getBBox()[o?"width":"height"]:t[f],N(d?n/p*c:n/100*p);if(a[o?"width":"height"]=c+(_?s:r),h=~e.indexOf("adius")||r==="em"&&t.appendChild&&!l?t:t.parentNode,x&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===St||!h.appendChild)&&(h=St.body),m=h._gsap,m&&d&&m.width&&o&&m.time===rt.time&&!m.uncache)return N(n/m.width*c);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=c+r,p=t[f],y?t.style[e]=y:Yt(t,e)}else(d||s==="%")&&!Qn[pt(h,"display")]&&(a.position=pt(t,"position")),h===t&&(a.position="static"),h.appendChild(It),p=It[f],h.removeChild(It),a.position="absolute";return o&&d&&(m=Lt(h),m.time=rt.time,m.width=h[f]),N(_?p*n/c:p&&n?c/p*n:0)},yt=function(t,e,i,r){var n;return yi||ri(),e in dt&&e!=="transform"&&(e=dt[e],~e.indexOf(",")&&(e=e.split(",")[0])),bt[e]&&e!=="transform"?(n=xe(t,r),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Ae(pt(t,tt))+" "+n.zOrigin+"px"):(n=t.style[e],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=De[e]&&De[e](t,e,i)||pt(t,e)||Ji(t,e)||(e==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Mt(t,e,n,i)+i:n},Zn=function(t,e,i,r){if(!i||i==="none"){var n=ee(e,t,1),s=n&&pt(t,n,1);s&&s!==i?(e=n,i=s):e==="borderColor"&&(i=pt(t,"borderTopColor"))}var a=new J(this._pt,t.style,e,0,1,Cr),o=0,l=0,f,c,_,d,p,h,m,x,y,b,v,g;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(h=t.style[e],t.style[e]=r,r=pt(t,e)||r,h?t.style[e]=h:Yt(t,e)),f=[i,r],xr(f),i=f[0],r=f[1],_=i.match(qt)||[],g=r.match(qt)||[],g.length){for(;c=qt.exec(r);)m=c[0],y=r.substring(o,c.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(h=_[l++]||"")&&(d=parseFloat(h)||0,v=h.substr((d+"").length),m.charAt(1)==="="&&(m=$t(d,m)+v),x=parseFloat(m),b=m.substr((x+"").length),o=qt.lastIndex-b.length,b||(b=b||st.units[e]||v,o===r.length&&(r+=b,a.e+=b)),v!==b&&(d=Mt(t,e,h,b)||0),a._pt={_next:a._pt,p:y||l===1?y:",",s:d,c:x-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=o<r.length?r.substring(o,r.length):""}else a.r=e==="display"&&r==="none"?zr:Ar;return Gi.test(r)&&(a.e=0),this._pt=a,a},Li={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jn=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=Li[i]||i,e[1]=Li[r]||r,e.join(" ")},ts=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,n=e.u,s=i._gsap,a,o,l;if(n==="all"||n===!0)r.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)a=n[l],bt[a]&&(o=1,a=a==="transformOrigin"?tt:F),Yt(i,a);o&&(Yt(i,F),s&&(s.svg&&i.removeAttribute("transform"),xe(i,1),s.uncache=1,Rr(r)))}},De={clearProps:function(t,e,i,r,n){if(n.data!=="isFromStart"){var s=t._pt=new J(t._pt,e,i,0,0,ts);return s.u=r,s.pr=-10,s.tween=n,t._props.push(i),1}}},ge=[1,0,0,1,0,0],Nr={},Br=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ni=function(t){var e=pt(t,F);return Br(e)?ge:e.substr(7).match(qi).map(N)},wi=function(t,e){var i=t._gsap||Lt(t),r=t.style,n=Ni(t),s,a,o,l;return i.svg&&t.getAttribute("transform")?(o=t.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?ge:n):(n===ge&&!t.offsetParent&&t!==Ht&&!i.svg&&(o=r.display,r.display="block",s=t.parentNode,(!s||!t.offsetParent)&&(l=1,a=t.nextElementSibling,Ht.appendChild(t)),n=Ni(t),o?r.display=o:Yt(t,"display"),l&&(a?s.insertBefore(t,a):s?s.appendChild(t):Ht.removeChild(t))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},ni=function(t,e,i,r,n,s){var a=t._gsap,o=n||wi(t,!0),l=a.xOrigin||0,f=a.yOrigin||0,c=a.xOffset||0,_=a.yOffset||0,d=o[0],p=o[1],h=o[2],m=o[3],x=o[4],y=o[5],b=e.split(" "),v=parseFloat(b[0])||0,g=parseFloat(b[1])||0,T,S,k,w;i?o!==ge&&(S=d*m-p*h)&&(k=v*(m/S)+g*(-h/S)+(h*y-m*x)/S,w=v*(-p/S)+g*(d/S)-(d*y-p*x)/S,v=k,g=w):(T=Ir(t),v=T.x+(~b[0].indexOf("%")?v/100*T.width:v),g=T.y+(~(b[1]||b[0]).indexOf("%")?g/100*T.height:g),!("xOrigin"in a)&&(v||g)&&(v-=T.x,g-=T.y)),r||r!==!1&&a.smooth?(x=v-l,y=g-f,a.xOffset=c+(x*d+y*h)-x,a.yOffset=_+(x*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=g,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[tt]="0px 0px",s&&(kt(s,a,"xOrigin",l,v),kt(s,a,"yOrigin",f,g),kt(s,a,"xOffset",c,a.xOffset),kt(s,a,"yOffset",_,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+g)},xe=function(t,e){var i=t._gsap||new wr(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,n=i.scaleX<0,s="px",a="deg",o=getComputedStyle(t),l=pt(t,tt)||"0",f,c,_,d,p,h,m,x,y,b,v,g,T,S,k,w,C,R,A,z,q,U,B,Y,ct,ve,ie,re,At,Ti,gt,zt;return f=c=_=h=m=x=y=b=v=0,d=p=1,i.svg=!!(t.getCTM&&Lr(t)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(r[F]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[F]!=="none"?o[F]:"")),r.scale=r.rotate=r.translate="none"),S=wi(t,i.svg),i.svg&&(i.uncache?(ct=t.getBBox(),l=i.xOrigin-ct.x+"px "+(i.yOrigin-ct.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),ni(t,Y||l,!!Y||i.originIsAbsolute,i.smooth!==!1,S)),g=i.xOrigin||0,T=i.yOrigin||0,S!==ge&&(R=S[0],A=S[1],z=S[2],q=S[3],f=U=S[4],c=B=S[5],S.length===6?(d=Math.sqrt(R*R+A*A),p=Math.sqrt(q*q+z*z),h=R||A?Xt(A,R)*Ft:0,y=z||q?Xt(z,q)*Ft+h:0,y&&(p*=Math.abs(Math.cos(y*Kt))),i.svg&&(f-=g-(g*R+T*z),c-=T-(g*A+T*q))):(zt=S[6],Ti=S[7],ie=S[8],re=S[9],At=S[10],gt=S[11],f=S[12],c=S[13],_=S[14],k=Xt(zt,At),m=k*Ft,k&&(w=Math.cos(-k),C=Math.sin(-k),Y=U*w+ie*C,ct=B*w+re*C,ve=zt*w+At*C,ie=U*-C+ie*w,re=B*-C+re*w,At=zt*-C+At*w,gt=Ti*-C+gt*w,U=Y,B=ct,zt=ve),k=Xt(-z,At),x=k*Ft,k&&(w=Math.cos(-k),C=Math.sin(-k),Y=R*w-ie*C,ct=A*w-re*C,ve=z*w-At*C,gt=q*C+gt*w,R=Y,A=ct,z=ve),k=Xt(A,R),h=k*Ft,k&&(w=Math.cos(k),C=Math.sin(k),Y=R*w+A*C,ct=U*w+B*C,A=A*w-R*C,B=B*w-U*C,R=Y,U=ct),m&&Math.abs(m)+Math.abs(h)>359.9&&(m=h=0,x=180-x),d=N(Math.sqrt(R*R+A*A+z*z)),p=N(Math.sqrt(B*B+zt*zt)),k=Xt(U,B),y=Math.abs(k)>2e-4?k*Ft:0,v=gt?1/(gt<0?-gt:gt):0),i.svg&&(Y=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Br(pt(t,F)),Y&&t.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(n?(d*=-1,y+=h<=0?180:-180,h+=h<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=f-((i.xPercent=f&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-f)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+s,i.y=c-((i.yPercent=c&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-c)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+s,i.z=_+s,i.scaleX=N(d),i.scaleY=N(p),i.rotation=N(h)+a,i.rotationX=N(m)+a,i.rotationY=N(x)+a,i.skewX=y+a,i.skewY=b+a,i.transformPerspective=v+s,(i.zOrigin=parseFloat(l.split(" ")[2])||!e&&i.zOrigin||0)&&(r[tt]=Ae(l)),i.svg||(i.xOffset=i.yOffset=0),i.force3D=st.force3D,i.renderTransform=i.svg?is:Fr?jr:es,i.uncache=0,i},Ae=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ye=function(t,e,i){var r=G(e);return N(parseFloat(e)+parseFloat(Mt(t,"x",i+"px",r)))+r},es=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,jr(t,e)},Rt="0deg",ne="0px",Et=") ",jr=function(t,e){var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,a=i.y,o=i.z,l=i.rotation,f=i.rotationY,c=i.rotationX,_=i.skewX,d=i.skewY,p=i.scaleX,h=i.scaleY,m=i.transformPerspective,x=i.force3D,y=i.target,b=i.zOrigin,v="",g=x==="auto"&&t&&t!==1||x===!0;if(b&&(c!==Rt||f!==Rt)){var T=parseFloat(f)*Kt,S=Math.sin(T),k=Math.cos(T),w;T=parseFloat(c)*Kt,w=Math.cos(T),s=Ye(y,s,S*w*-b),a=Ye(y,a,-Math.sin(T)*-b),o=Ye(y,o,k*w*-b+b)}m!==ne&&(v+="perspective("+m+Et),(r||n)&&(v+="translate("+r+"%, "+n+"%) "),(g||s!==ne||a!==ne||o!==ne)&&(v+=o!==ne||g?"translate3d("+s+", "+a+", "+o+") ":"translate("+s+", "+a+Et),l!==Rt&&(v+="rotate("+l+Et),f!==Rt&&(v+="rotateY("+f+Et),c!==Rt&&(v+="rotateX("+c+Et),(_!==Rt||d!==Rt)&&(v+="skew("+_+", "+d+Et),(p!==1||h!==1)&&(v+="scale("+p+", "+h+Et),y.style[F]=v||"translate(0, 0)"},is=function(t,e){var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,a=i.y,o=i.rotation,l=i.skewX,f=i.skewY,c=i.scaleX,_=i.scaleY,d=i.target,p=i.xOrigin,h=i.yOrigin,m=i.xOffset,x=i.yOffset,y=i.forceCSS,b=parseFloat(s),v=parseFloat(a),g,T,S,k,w;o=parseFloat(o),l=parseFloat(l),f=parseFloat(f),f&&(f=parseFloat(f),l+=f,o+=f),o||l?(o*=Kt,l*=Kt,g=Math.cos(o)*c,T=Math.sin(o)*c,S=Math.sin(o-l)*-_,k=Math.cos(o-l)*_,l&&(f*=Kt,w=Math.tan(l-f),w=Math.sqrt(1+w*w),S*=w,k*=w,f&&(w=Math.tan(f),w=Math.sqrt(1+w*w),g*=w,T*=w)),g=N(g),T=N(T),S=N(S),k=N(k)):(g=c,k=_,T=S=0),(b&&!~(s+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=Mt(d,"x",s,"px"),v=Mt(d,"y",a,"px")),(p||h||m||x)&&(b=N(b+p-(p*g+h*S)+m),v=N(v+h-(p*T+h*k)+x)),(r||n)&&(w=d.getBBox(),b=N(b+r/100*w.width),v=N(v+n/100*w.height)),w="matrix("+g+","+T+","+S+","+k+","+b+","+v+")",d.setAttribute("transform",w),y&&(d.style[F]=w)},rs=function(t,e,i,r,n){var s=360,a=X(n),o=parseFloat(n)*(a&&~n.indexOf("rad")?Ft:1),l=o-r,f=r+l+"deg",c,_;return a&&(c=n.split("_")[1],c==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),c==="cw"&&l<0?l=(l+s*Ri)%s-~~(l/s)*s:c==="ccw"&&l>0&&(l=(l-s*Ri)%s-~~(l/s)*s)),t._pt=_=new J(t._pt,e,i,r,l,jn),_.e=f,_.u="deg",t._props.push(i),_},Bi=function(t,e){for(var i in e)t[i]=e[i];return t},ns=function(t,e,i){var r=Bi({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=i.style,a,o,l,f,c,_,d,p;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),s[F]=e,a=xe(i,1),Yt(i,F),i.setAttribute("transform",l)):(l=getComputedStyle(i)[F],s[F]=e,a=xe(i,1),s[F]=l);for(o in bt)l=r[o],f=a[o],l!==f&&n.indexOf(o)<0&&(d=G(l),p=G(f),c=d!==p?Mt(i,o,l,p):parseFloat(l),_=parseFloat(f),t._pt=new J(t._pt,a,o,c,_-c,ei),t._pt.u=p||0,t._props.push(o));Bi(a,r)};Z("padding,margin,Width,Radius",function(u,t){var e="Top",i="Right",r="Bottom",n="Left",s=(t<3?[e,i,r,n]:[e+n,e+i,r+i,r+n]).map(function(a){return t<2?u+a:"border"+a+u});De[t>1?"border"+u:u]=function(a,o,l,f,c){var _,d;if(arguments.length<4)return _=s.map(function(p){return yt(a,p,l)}),d=_.join(" "),d.split(_[0]).length===5?_[0]:d;_=(f+"").split(" "),d={},s.forEach(function(p,h){return d[p]=_[h]=_[h]||_[(h-1)/2|0]}),a.init(o,d,c)}});var Vr={name:"css",register:ri,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,n){var s=this._props,a=t.style,o=i.vars.startAt,l,f,c,_,d,p,h,m,x,y,b,v,g,T,S,k;yi||ri(),this.styles=this.styles||Er(t),k=this.styles.props,this.tween=i;for(h in e)if(h!=="autoRound"&&(f=e[h],!(it[h]&&Tr(h,e,i,r,t,n)))){if(d=typeof f,p=De[h],d==="function"&&(f=f.call(i,r,t,n),d=typeof f),d==="string"&&~f.indexOf("random(")&&(f=de(f)),p)p(this,t,h,f,i)&&(S=1);else if(h.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(h)+"").trim(),f+="",Ot.lastIndex=0,Ot.test(l)||(m=G(l),x=G(f)),x?m!==x&&(l=Mt(t,h,l,x)+x):m&&(f+=m),this.add(a,"setProperty",l,f,r,n,0,0,h),s.push(h),k.push(h,0,a[h]);else if(d!=="undefined"){if(o&&h in o?(l=typeof o[h]=="function"?o[h].call(i,r,t,n):o[h],X(l)&&~l.indexOf("random(")&&(l=de(l)),G(l+"")||l==="auto"||(l+=st.units[h]||G(yt(t,h))||""),(l+"").charAt(1)==="="&&(l=yt(t,h))):l=yt(t,h),_=parseFloat(l),y=d==="string"&&f.charAt(1)==="="&&f.substr(0,2),y&&(f=f.substr(2)),c=parseFloat(f),h in dt&&(h==="autoAlpha"&&(_===1&&yt(t,"visibility")==="hidden"&&c&&(_=0),k.push("visibility",0,a.visibility),kt(this,a,"visibility",_?"inherit":"hidden",c?"inherit":"hidden",!c)),h!=="scale"&&h!=="transform"&&(h=dt[h],~h.indexOf(",")&&(h=h.split(",")[0]))),b=h in bt,b){if(this.styles.save(h),v||(g=t._gsap,g.renderTransform&&!e.parseTransform||xe(t,e.parseTransform),T=e.smoothOrigin!==!1&&g.smooth,v=this._pt=new J(this._pt,a,F,0,1,g.renderTransform,g,0,-1),v.dep=1),h==="scale")this._pt=new J(this._pt,g,"scaleY",g.scaleY,(y?$t(g.scaleY,y+c):c)-g.scaleY||0,ei),this._pt.u=0,s.push("scaleY",h),h+="X";else if(h==="transformOrigin"){k.push(tt,0,a[tt]),f=Jn(f),g.svg?ni(t,f,0,T,0,this):(x=parseFloat(f.split(" ")[2])||0,x!==g.zOrigin&&kt(this,g,"zOrigin",g.zOrigin,x),kt(this,a,h,Ae(l),Ae(f)));continue}else if(h==="svgOrigin"){ni(t,f,1,T,0,this);continue}else if(h in Nr){rs(this,g,h,_,y?$t(_,y+f):f);continue}else if(h==="smoothOrigin"){kt(this,g,"smooth",g.smooth,f);continue}else if(h==="force3D"){g[h]=f;continue}else if(h==="transform"){ns(this,f,t);continue}}else h in a||(h=ee(h)||h);if(b||(c||c===0)&&(_||_===0)&&!Bn.test(f)&&h in a)m=(l+"").substr((_+"").length),c||(c=0),x=G(f)||(h in st.units?st.units[h]:m),m!==x&&(_=Mt(t,h,l,x)),this._pt=new J(this._pt,b?g:a,h,_,(y?$t(_,y+c):c)-_,!b&&(x==="px"||h==="zIndex")&&e.autoRound!==!1?Un:ei),this._pt.u=x||0,m!==x&&x!=="%"&&(this._pt.b=l,this._pt.r=Vn);else if(h in a)Zn.call(this,t,h,l,y?y+f:f);else if(h in t)this.add(t,h,l||t[h],y?y+f:f,r,n);else if(h!=="parseTransform"){fi(h,f);continue}b||(h in a?k.push(h,0,a[h]):k.push(h,1,l||t[h])),s.push(h)}}S&&Mr(this)},render:function(t,e){if(e.tween._time||!vi())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:yt,aliases:dt,getSetter:function(t,e,i){var r=dt[e];return r&&r.indexOf(",")<0&&(e=r),e in bt&&e!==tt&&(t._gsap.x||yt(t,"x"))?i&&zi===i?e==="scale"?qn:Xn:(zi=i||{})&&(e==="scale"?Gn:$n):t.style&&!oi(t.style[e])?Yn:~e.indexOf("-")?Wn:gi(t,e)},core:{_removeProperty:Yt,_getMatrix:wi}};et.utils.checkPrefix=ee;et.core.getStyleSaver=Er;(function(u,t,e,i){var r=Z(u+","+t+","+e,function(n){bt[n]=1});Z(t,function(n){st.units[n]="deg",Nr[n]=1}),dt[r[13]]=u+","+t,Z(i,function(n){var s=n.split(":");dt[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(u){st.units[u]="px"});et.registerPlugin(Vr);var Vt=et.registerPlugin(Vr)||et;Vt.core.Tween;function ss(u){return Ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"}}]})(u)}function as(u){return Ui({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"}}]})(u)}const os=V.section`
padding: 40px 20px;
padding-bottom: 60px;
background: linear-gradient(
    -125deg,
    rgb(134, 135, 145) 47%,
    rgb(164, 164, 166) 98%,
    rgb(199, 199, 200) 130%
  );
    
  
`,se=V.li`
  position: relative;
  width: 115px;
  height: 115px; 
  background:  rgb(120, 122, 131) ;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;
  overflow: hidden;
  position: relative;

    &:hover,
    &:focus {
        transform: scale(1.13);
        box-shadow: 1px 1px 8px rgba(241, 240, 240, 0.872); 
        transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--white);
    }

    .information {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 18px;
  border-radius: 10px;
  display: flex; 
  z-index: 2;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ece7e7;
  color: var(--dropdawn);

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 15px;
  } 
  @media (min-width: 1440px) {
    font-size: 18px;
  } 
}

.information  .infoText {
  margin-top: -12px;
}
#serviceInfo {
  border-top: 10px solid var(--blue);
}

@media (min-width: 768px) {
   width: 95px;
   height: 95px;
  } 

  @media (min-width: 1440px) {
    width: 110px;
    height: 110px;
  } 
`,us=V.ul`
display: flex;
/* flex-direction: column; */
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;

@media (min-width: 768px) {
  flex-direction: row;
  gap: 30px;
  } 

  @media (min-width: 1440px) {
    gap: 40px;
  }
`,ae=V.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: block;
  margin: 0 auto;
  padding: 0;
  width: 70px;
  transform: translate(-50% -50%);

  @media (min-width: 768px) {
    display: block;
    width: 63px;
  }
  @media (min-width: 1440px) {
    display: block;
    width: 70px;
  }
`,Ur=V.h2`
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: #cfd6e7;
    color: #ece9e9;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;

    @media (min-width: 768px) {
      text-align: start;
  }
`,ls=V.section`
    padding: 30px 20px;
    padding-bottom: 35px;
    background:  rgba(205, 205, 205, 0.923) 37%;
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
    background: linear-gradient(
    -125deg,
    rgb(158, 159, 170) 47%,
    rgb(207, 207, 208) 98%,
    rgb(218, 218, 220) 130%
  );
     
    
`,fs=V.div`
 /* position: relative;  */
  width: 320px;
  height: 255px;
  /* height: 752px; */
  overflow: hidden;
   /* margin: 0 auto;  */
  z-index: 5;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 10px;

  @media (min-width: 768px) {
    width: 300px;
  height: 200px;
  }
  @media (min-width: 1440px) {
    width: 600px;
  height: 400px;
    
  }
`,hs=V.img`

  width: 100%; 
  height: 100%;
`,cs=V.h2`
  display: inline-block;
  position: absolute;
  top: -45px; 
  right: 8px;
  padding: 6px 10px;
  width: 200px;
  color: #ece9e9;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 100;
  border-radius: 10px;
  background-color: #eceaea94; 
  background-color: #f8414192; 
  /* margin-bottom: 35px; */
  text-align: center;

  @media (min-width: 768px) {
    padding: 4px 10px;
    right: 40px;
    font-weight: 600;
    font-size: 18px;
  } 

  @media (min-width: 1440px) {
    padding: 6px 10px;
    font-size: 20px;
    width: 200px;
    top: 30px; 
    right: 120px;
    
  }

`,_s=V.p`
  max-width: 300px;
  height: 100px;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);

   @media (min-width: 768px) {
    max-width: 300px;
    /* height: 125px; */
    font-size: 15px;
    
  } 
  @media (min-width: 1440px) {
    max-width: 450px;
    font-size: 20px;
  }

`,ds=V.div`
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; 
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    gap: 35px;
    
  }

`,ps=V.div`
  position: relative;
  display: flex;
  gap: 12px;
  bottom: 0px;
  left: 10px;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 10px;
    bottom: 0px;
  left: 410px;
  }
  @media (min-width: 1440px) {
   
    
  bottom: 0px;
  left: 935px;
  }

`,ms=V(Ur)`
  font-size: 20px;
  color: #ece9e9;
  margin-bottom: 65px;

   @media (min-width: 768px) {
  margin-bottom: 40px;
  font-size: 22px;
  } 

   @media (min-width: 1440px) {
    font-size: 25px;
  margin-bottom: 15px;
  } 
`,gs=({adverts:u})=>{const[t,e]=wt.useState(0),[i,r]=wt.useState(!0);wt.useEffect(()=>{Vt.timeline().fromTo(".car-tittle",{x:90,opacity:0},{duration:2,x:0,opacity:1}).fromTo(".description",{y:40,opacity:0},{duration:2,y:0,opacity:1},"-=1.3")},[]);const n=wt.useCallback(()=>{const f=t+1<u.length?t+1:0;a(t,f),e(f)},[t,u.length]),s=wt.useCallback(()=>{const f=t-1<0?u.length-1:t-1;a(t,f),e(f)},[t,u.length]),a=(f,c)=>{Vt.timeline().to(`.slide-${f}`,{opacity:0,duration:.5}).set(`.slide-${f}`,{display:"none"}).set(`.slide-${c}`,{display:"block"}).from(`.slide-${c}`,{opacity:0,duration:.5}).to(`.slide-${c}`,{opacity:1,duration:.5})};wt.useEffect(()=>{const f=setInterval(()=>{i&&n()},4e3);return()=>clearInterval(f)},[n,i]);const o=()=>{r(!1)},l=()=>{r(!0)};return P.jsx(ls,{children:P.jsxs(si,{children:[P.jsx(ms,{children:"Our Cars"}),P.jsxs(ds,{children:[u.map((f,c)=>c===t&&P.jsxs(P.Fragment,{children:[P.jsxs(cs,{className:"car-tittle",children:[f.make," ",f.model]}),P.jsx(_s,{className:"description",children:f.description})]})),P.jsx(fs,{onMouseEnter:o,onMouseLeave:l,children:u.map((f,c)=>P.jsx(hs,{src:f.img,alt:f.make,className:`slide-${c} ${c===t?"active":""}`},f.id))})]}),P.jsxs(ps,{children:[P.jsx(ss,{onClick:s,onMouseEnter:o,onMouseLeave:l}),P.jsx(as,{onClick:n,onMouseEnter:o,onMouseLeave:l})]})]})})},xs="/car-rental-service/assets/car-wheel-971b36df.png",ys="/car-rental-service/assets/towing-vehicle-a7db3985.png",vs="/car-rental-service/assets/icon-fuel-0655b89a.png",bs="/car-rental-service/assets/icon-driver-f8481cc2.png",ws="/car-rental-service/assets/icon-car-wash-4efe9c62.png",Ts=()=>(wt.useEffect(()=>{Vt.set(".information",{yPercent:100,opacity:0}),Vt.utils.toArray(".service-card").forEach(u=>{let t=u.querySelector(".information"),e=Vt.timeline({paused:!0});e.to(t,{yPercent:0,opacity:1}),u.addEventListener("mouseenter",()=>e.timeScale(1).play()),u.addEventListener("mouseleave",()=>e.timeScale(3).reverse())})},[]),P.jsx(os,{children:P.jsxs(si,{children:[P.jsx(Ur,{children:"Additional Services"}),P.jsxs(us,{children:[P.jsxs(se,{className:"service-card",children:[P.jsx(ae,{src:xs,alt:"Tire icon"}),P.jsx("div",{className:"information",id:"serviceInfo",children:P.jsx("p",{className:"infoText",children:"Wheel replacement"})})]}),P.jsxs(se,{className:"service-card",children:[P.jsx(ae,{src:bs,alt:"Driver icon"}),P.jsx("div",{className:"information",id:"serviceInfo",children:P.jsx("p",{className:"infoText",children:"A personal driver"})})]}),P.jsxs(se,{className:"service-card",children:[P.jsx(ae,{src:vs,alt:"Fuel icon"}),P.jsx("div",{className:"information",id:"serviceInfo",children:P.jsx("p",{className:"infoText",children:" Fuel delivery "})})]}),P.jsxs(se,{className:"service-card",children:[P.jsx(ae,{src:ys,alt:"Tow truk",width:150,height:80}),P.jsx("div",{className:"information",id:"serviceInfo",children:P.jsx("p",{className:"infoText",children:"Towing service"})})]}),P.jsxs(se,{className:"service-card",children:[P.jsx(ae,{src:ws,alt:"Tire"}),P.jsx("div",{className:"information",id:"serviceInfo",children:P.jsx("p",{className:"infoText",children:"  Car washing "})})]})]})]})})),ji="/car-rental-service/assets/BMW-7ee50d55.jpg",Ss=V.h1`
  
  font-weight: bold;
  font-size: 35px;
  line-height: 1.6;
  /* text-align: right; */
  text-shadow: 1px 1px 2px #5c5757;
  color: #e1e0e0;
  /* margin-left: auto; */
  margin-bottom: 15px;


  @media (min-width: 768px) {
    font-size: 53px;
    line-height: 1.4;
  }
  @media (min-width: 1440px) {
    font-size: 66px;
    line-height: 1.2;
    font-weight: 700;
  }
`,ks=V.p`
  color: var(--blue);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
   /* text-align: right;  */
  margin-bottom: 13px;
  

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.6;
  }
  @media (min-width: 1440px) {
    font-size: 36px;
    line-height: 1.6;
  }
`,Vi=V.p`
   color: #c3cee9;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 6px;
  /* width: 900px; */
  /* text-align: right; */
  /* margin-left: auto; */
  
  
  @media (min-width: 768px) {
    color: #b0bbd6;
    font-size: 18px;
    line-height: 1.6;
   
  }
  @media (min-width: 1440px) {
    font-size: 26px;
    line-height: 1.6;
    /* margin-left: auto; */

  }

`,Ps=V.a`
display: block;
padding: 12px 50px;
max-width: 90px;
text-align: center;
background-color: #980d0dd3;
color:  #eceaea;
border-color: transparent;
border-radius: 12px;
margin-top: 276px;
margin-left: auto;
/* margin-right: 20px; */
/* margin-bottom: 15px; */
transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);


&:hover,
&:focus {
  transform: scale(1.05);

  background-color: #8f0c0cd2;
}

@media (min-width: 768px) {
  margin-top: 36px;
  margin-bottom: 15px;
  max-width: 100px;
  }
@media (min-width: 1440px) {
  margin-top: 26px;
  margin-bottom: 15px;

  }

`,Os=V.div`
  padding: 25px 0px;
  display: flex;
  background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${ji});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  min-height: 450px;
  z-index: 100;
  margin: 0 auto;


  

  @media (min-width: 1440px) {
    padding: 35px 0px;
    /* background: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${ji});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 600px;
  } */}
`,Cs=V.div`
 text-align: center; 

   .textWrapper {
    display: block;
    margin-left: auto;
   } 
   @media (min-width: 768px) {
    text-align: end; 
  } 
  

  @media (min-width: 1440px) {
  }
    
`,As=({adverts:u})=>(wt.useEffect(()=>{Vt.fromTo(".textWrapper",{x:-200,opacity:0},{duration:2,x:0,opacity:1})},[]),P.jsxs(P.Fragment,{children:[P.jsx(Os,{className:"Hero",children:P.jsxs(si,{children:[P.jsxs(Cs,{className:"textWrapper",children:[P.jsx(Ss,{children:"Best Cars For The Best Journey"}),P.jsx(ks,{children:" Welcome to Car Rental Service!"}),P.jsxs(Vi,{children:["We Provide Best Cars With The Best Prices. ",P.jsx("br",{}),"We Make Your Drive Memorable. "]}),P.jsx(Vi,{children:" Enjoy Your Holiday With Us"})]}),P.jsx(Ps,{href:"tel:+380730000000",children:"Rental car"})]})}),P.jsx(Ts,{}),P.jsx(gs,{adverts:u}),P.jsx(Yr,{})]}));export{As as default};
