!function(a,b){"use strict";function c(a,b){for(var c,d=[],f=0;f<a.length;++f){if(c=g[a[f]]||e(a[f]),!c)throw"module definition dependecy not found: "+a[f];d.push(c)}b.apply(null,d)}function d(a,d,e){if("string"!=typeof a)throw"invalid module definition, module id must be defined and be a string";if(d===b)throw"invalid module definition, dependencies must be specified";if(e===b)throw"invalid module definition, definition function must be specified";c(d,function(){g[a]=e.apply(null,arguments)})}function e(b){for(var c=a,d=b.split(/[.\/]/),e=0;e<d.length;++e){if(!c[d[e]])return;c=c[d[e]]}return c}function f(c){for(var d=0;d<c.length;d++){for(var e=a,f=c[d],h=f.split(/[.\/]/),i=0;i<h.length-1;++i)e[h[i]]===b&&(e[h[i]]={}),e=e[h[i]];e[h[h.length-1]]=g[f]}}var g={};d("tinymce/spellcheckerplugin/DomTextMatcher",[],function(){return function(a,b){function c(a,b){if(!a[0])throw"findAndReplaceDOMText cannot handle zero-length matches";return{start:a.index,end:a.index+a[0].length,text:a[0],data:b}}function d(a){var b;if(3===a.nodeType)return a.data;if(x[a.nodeName]&&!w[a.nodeName])return"";if(b="",(w[a.nodeName]||y[a.nodeName])&&(b+="\n"),a=a.firstChild)do b+=d(a);while(a=a.nextSibling);return b}function e(a,b,c){var d,e,f,g,h,i=[],j=0,k=a,l=0;b=b.slice(0),b.sort(function(a,b){return a.start-b.start}),h=b.shift();a:for(;;){if((w[k.nodeName]||y[k.nodeName])&&j++,3===k.nodeType&&(!e&&k.length+j>=h.end?(e=k,g=h.end-j):d&&i.push(k),!d&&k.length+j>h.start&&(d=k,f=h.start-j),j+=k.length),d&&e){if(k=c({startNode:d,startNodeIndex:f,endNode:e,endNodeIndex:g,innerNodes:i,match:h.text,matchIndex:l}),j-=e.length-g,d=null,e=null,i=[],h=b.shift(),l++,!h)break}else{if((!x[k.nodeName]||w[k.nodeName])&&k.firstChild){k=k.firstChild;continue}if(k.nextSibling){k=k.nextSibling;continue}}for(;;){if(k.nextSibling){k=k.nextSibling;break}if(k.parentNode===a)break a;k=k.parentNode}}}function f(a){function b(b,c){var d=z[c];d.stencil||(d.stencil=a(d));var e=d.stencil.cloneNode(!1);return e.setAttribute("data-mce-index",c),b&&e.appendChild(A.doc.createTextNode(b)),e}return function(a){var c,d,e,f=a.startNode,g=a.endNode,h=a.matchIndex,i=A.doc;if(f===g){var j=f;e=j.parentNode,a.startNodeIndex>0&&(c=i.createTextNode(j.data.substring(0,a.startNodeIndex)),e.insertBefore(c,j));var k=b(a.match,h);return e.insertBefore(k,j),a.endNodeIndex<j.length&&(d=i.createTextNode(j.data.substring(a.endNodeIndex)),e.insertBefore(d,j)),j.parentNode.removeChild(j),k}c=i.createTextNode(f.data.substring(0,a.startNodeIndex)),d=i.createTextNode(g.data.substring(a.endNodeIndex));for(var l=b(f.data.substring(a.startNodeIndex),h),m=[],n=0,o=a.innerNodes.length;o>n;++n){var p=a.innerNodes[n],q=b(p.data,h);p.parentNode.replaceChild(q,p),m.push(q)}var r=b(g.data.substring(0,a.endNodeIndex),h);return e=f.parentNode,e.insertBefore(c,f),e.insertBefore(l,f),e.removeChild(f),e=g.parentNode,e.insertBefore(r,g),e.insertBefore(d,g),e.removeChild(g),r}}function g(a){var b=a.parentNode;b.insertBefore(a.firstChild,a),a.parentNode.removeChild(a)}function h(b){var c=a.getElementsByTagName("*"),d=[];b="number"==typeof b?""+b:null;for(var e=0;e<c.length;e++){var f=c[e],g=f.getAttribute("data-mce-index");null!==g&&g.length&&(g===b||null===b)&&d.push(f)}return d}function i(a){for(var b=z.length;b--;)if(z[b]===a)return b;return-1}function j(a){var b=[];return k(function(c,d){a(c,d)&&b.push(c)}),z=b,this}function k(a){for(var b=0,c=z.length;c>b&&a(z[b],b)!==!1;b++);return this}function l(b){return z.length&&e(a,z,f(b)),this}function m(a,b){if(v&&a.global)for(;u=a.exec(v);)z.push(c(u,b));return this}function n(a){var b,c=h(a?i(a):null);for(b=c.length;b--;)g(c[b]);return this}function o(a){return z[a.getAttribute("data-mce-index")]}function p(a){return h(i(a))[0]}function q(a,b,c){return z.push({start:a,end:a+b,text:v.substr(a,b),data:c}),this}function r(a){var c=h(i(a)),d=b.dom.createRng();return d.setStartBefore(c[0]),d.setEndAfter(c[c.length-1]),d}function s(a,c){var d=r(a);return d.deleteContents(),c.length>0&&d.insertNode(b.dom.doc.createTextNode(c)),d}function t(){return z.splice(0,z.length),n(),this}var u,v,w,x,y,z=[],A=b.dom;return w=b.schema.getBlockElements(),x=b.schema.getWhiteSpaceElements(),y=b.schema.getShortEndedElements(),v=d(a),{text:v,matches:z,each:k,filter:j,reset:t,matchFromElement:o,elementFromMatch:p,find:m,add:q,wrap:l,unwrap:n,replace:s,rangeFromMatch:r,indexOf:i}}}),d("tinymce/spellcheckerplugin/Plugin",["tinymce/spellcheckerplugin/DomTextMatcher","tinymce/PluginManager","tinymce/util/Tools","tinymce/ui/Menu","tinymce/dom/DOMUtils","tinymce/util/XHR","tinymce/util/URI","tinymce/util/JSON"],function(a,b,c,d,e,f,g,h){b.add("spellchecker",function(b,i){function j(){return E.textMatcher||(E.textMatcher=new a(b.getBody(),b)),E.textMatcher}function k(a,b){var d=[];return c.each(b,function(a){d.push({selectable:!0,text:a.name,data:a.value})}),d}function l(a){for(var b in a)return!1;return!0}function m(a,f){var g=[],h=A[a];c.each(h,function(a){g.push({text:a,onclick:function(){b.insertContent(b.dom.encode(a)),b.dom.remove(f),r()}})}),g.push({text:"-"}),D&&g.push({text:"Add to Dictionary",onclick:function(){s(a,f)}}),g.push.apply(g,[{text:"Ignore",onclick:function(){t(a,f)}},{text:"Ignore all",onclick:function(){t(a,f,!0)}}]),C=new d({items:g,context:"contextmenu",onautohide:function(a){-1!=a.target.className.indexOf("spellchecker")&&a.preventDefault()},onhide:function(){C.remove(),C=null}}),C.renderTo(document.body);var i=e.DOM.getPos(b.getContentAreaContainer()),j=b.dom.getPos(f[0]),k=b.dom.getRoot();"BODY"==k.nodeName?(j.x-=k.ownerDocument.documentElement.scrollLeft||k.scrollLeft,j.y-=k.ownerDocument.documentElement.scrollTop||k.scrollTop):(j.x-=k.scrollLeft,j.y-=k.scrollTop),i.x+=j.x,i.y+=j.y,C.moveTo(i.x,i.y+f[0].offsetHeight)}function n(){return b.getParam("spellchecker_wordchar_pattern")||new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e\xa0\u2002\u2003\u2009]+',"g")}function o(a,b,d,e){var j={method:a},k="";"spellcheck"==a&&(j.text=b,j.lang=F.spellchecker_language),"addToDictionary"==a&&(j.word=b),c.each(j,function(a,b){k&&(k+="&"),k+=b+"="+encodeURIComponent(a)}),f.send({url:new g(i).toAbsolute(F.spellchecker_rpc_url),type:"post",content_type:"application/x-www-form-urlencoded",data:k,success:function(a){a=h.parse(a),a?a.error?e(a.error):d(a):e("Sever response wasn't proper JSON.")},error:function(a,b){e("Spellchecker request error: "+b.status)}})}function p(a,b,c,d){var e=F.spellchecker_callback||o;e.call(E,a,b,c,d)}function q(){function a(a){b.windowManager.alert(a),b.setProgressState(!1),u()}return B?void u():(u(),b.setProgressState(!0),p("spellcheck",j().text,y,a),void b.focus())}function r(){b.dom.select("span.mce-spellchecker-word").length||u()}function s(a,c){b.setProgressState(!0),p("addToDictionary",a,function(){b.setProgressState(!1),b.dom.remove(c,!0),r()},function(a){b.windowManager.alert(a),b.setProgressState(!1)})}function t(a,d,e){b.selection.collapse(),e?c.each(b.dom.select("span.mce-spellchecker-word"),function(c){c.getAttribute("data-mce-word")==a&&b.dom.remove(c,!0)}):b.dom.remove(d,!0),r()}function u(){j().reset(),E.textMatcher=null,B&&(B=!1,b.fire("SpellcheckEnd"))}function v(a){var b=a.getAttribute("data-mce-index");return"number"==typeof b?""+b:b}function w(a){var d,e=[];if(d=c.toArray(b.getBody().getElementsByTagName("span")),d.length)for(var f=0;f<d.length;f++){var g=v(d[f]);null!==g&&g.length&&g===a.toString()&&e.push(d[f])}return e}function x(a){var b=F.spellchecker_language;a.control.items().each(function(a){a.active(a.settings.data===b)})}function y(a){var c;return a.words?(D=!!a.dictionary,c=a.words):c=a,b.setProgressState(!1),l(c)?(b.windowManager.alert("No misspellings found"),void(B=!1)):(A=c,j().find(n()).filter(function(a){return!!c[a.text]}).wrap(function(a){return b.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1,"data-mce-word":a.text})}),B=!0,void b.fire("SpellcheckStart"))}var z,A,B,C,D,E=this,F=b.settings,G=F.spellchecker_languages||"English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";z=k("Language",c.map(G.split(","),function(a){return a=a.split("="),{name:a[0],value:a[1]}})),b.on("click",function(a){var c=a.target;if("mce-spellchecker-word"==c.className){a.preventDefault();var d=w(v(c));if(d.length>0){var e=b.dom.createRng();e.setStartBefore(d[0]),e.setEndAfter(d[d.length-1]),b.selection.setRng(e),m(c.getAttribute("data-mce-word"),d)}}}),b.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:q,selectable:!0,onPostRender:function(){var a=this;a.active(B),b.on("SpellcheckStart SpellcheckEnd",function(){a.active(B)})}});var H={tooltip:"Spellcheck",onclick:q,onPostRender:function(){var a=this;b.on("SpellcheckStart SpellcheckEnd",function(){a.active(B)})}};z.length>1&&(H.type="splitbutton",H.menu=z,H.onshow=x,H.onselect=function(a){F.spellchecker_language=a.control.settings.data}),b.addButton("spellchecker",H),b.addCommand("mceSpellCheck",q),b.on("remove",function(){C&&(C.remove(),C=null)}),b.on("change",r),this.getTextMatcher=j,this.getWordCharPattern=n,this.markErrors=y,this.getLanguage=function(){return F.spellchecker_language},F.spellchecker_language=F.spellchecker_language||F.language||"en"})}),f(["tinymce/spellcheckerplugin/DomTextMatcher"])}(this);
