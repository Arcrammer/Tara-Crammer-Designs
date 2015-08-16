tinymce.PluginManager.add("template",function(a){function b(b){return function(){var c=a.settings.templates;"string"==typeof c?tinymce.util.XHR.send({url:c,success:function(a){b(tinymce.util.JSON.parse(a))}}):b(c)}}function c(b){function c(b){function c(b){if(-1==b.indexOf("<html>")){var c="";tinymce.each(a.contentCSS,function(b){c+='<link type="text/css" rel="stylesheet" href="'+a.documentBaseURI.toAbsolute(b)+'">'}),b="<!DOCTYPE html><html><head>"+c+"</head><body>"+b+"</body></html>"}b=f(b,"template_preview_replace_values");var e=d.find("iframe")[0].getEl().contentWindow.document;e.open(),e.write(b),e.close()}var g=b.control.value();g.url?tinymce.util.XHR.send({url:g.url,success:function(a){e=a,c(e)}}):(e=g.content,c(e)),d.find("#description")[0].text(b.control.value().description)}var d,e,h=[];return b&&0!==b.length?(tinymce.each(b,function(a){h.push({selected:!h.length,text:a.title,value:{url:a.url,content:a.content,description:a.description}})}),d=a.windowManager.open({title:"Insert template",layout:"flex",direction:"column",align:"stretch",padding:15,spacing:10,items:[{type:"form",flex:0,padding:0,items:[{type:"container",label:"Templates",items:{type:"listbox",label:"Templates",name:"template",values:h,onselect:c}}]},{type:"label",name:"description",label:"Description",text:"\xa0"},{type:"iframe",flex:1,border:1}],onsubmit:function(){g(!1,e)},width:a.getParam("template_popup_width",600),height:a.getParam("template_popup_height",500)}),void d.find("listbox")[0].fire("select")):void a.windowManager.alert("No templates defined")}function d(b,c){function d(a,b){if(a=""+a,a.length<b)for(var c=0;c<b-a.length;c++)a="0"+a;return a}var e="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),f="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),g="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),h="January February March April May June July August September October November December".split(" ");return c=c||new Date,b=b.replace("%D","%m/%d/%Y"),b=b.replace("%r","%I:%M:%S %p"),b=b.replace("%Y",""+c.getFullYear()),b=b.replace("%y",""+c.getYear()),b=b.replace("%m",d(c.getMonth()+1,2)),b=b.replace("%d",d(c.getDate(),2)),b=b.replace("%H",""+d(c.getHours(),2)),b=b.replace("%M",""+d(c.getMinutes(),2)),b=b.replace("%S",""+d(c.getSeconds(),2)),b=b.replace("%I",""+((c.getHours()+11)%12+1)),b=b.replace("%p",""+(c.getHours()<12?"AM":"PM")),b=b.replace("%B",""+a.translate(h[c.getMonth()])),b=b.replace("%b",""+a.translate(g[c.getMonth()])),b=b.replace("%A",""+a.translate(f[c.getDay()])),b=b.replace("%a",""+a.translate(e[c.getDay()])),b=b.replace("%%","%")}function e(b){var c=a.dom,d=a.getParam("template_replace_values");h(c.select("*",b),function(a){h(d,function(b,e){c.hasClass(a,e)&&"function"==typeof d[e]&&d[e](a)})})}function f(b,c){return h(a.getParam(c),function(a,c){"function"!=typeof a&&(b=b.replace(new RegExp("\\{\\$"+c+"\\}","g"),a))}),b}function g(b,c){function g(a,b){return new RegExp("\\b"+b+"\\b","g").test(a.className)}var i,j,k=a.dom,l=a.selection.getContent();c=f(c,"template_replace_values"),i=k.create("div",null,c),j=k.select(".mceTmpl",i),j&&j.length>0&&(i=k.create("div",null),i.appendChild(j[0].cloneNode(!0))),h(k.select("*",i),function(b){g(b,a.getParam("template_cdate_classes","cdate").replace(/\s+/g,"|"))&&(b.innerHTML=d(a.getParam("template_cdate_format",a.getLang("template.cdate_format")))),g(b,a.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(b.innerHTML=d(a.getParam("template_mdate_format",a.getLang("template.mdate_format")))),g(b,a.getParam("template_selected_content_classes","selcontent").replace(/\s+/g,"|"))&&(b.innerHTML=l)}),e(i),a.execCommand("mceInsertContent",!1,i.innerHTML),a.addVisual()}var h=tinymce.each;a.addCommand("mceInsertTemplate",g),a.addButton("template",{title:"Insert template",onclick:b(c)}),a.addMenuItem("template",{text:"Insert template",onclick:b(c),context:"insert"}),a.on("PreProcess",function(b){var c=a.dom;h(c.select("div",b.node),function(b){c.hasClass(b,"mceTmpl")&&(h(c.select("*",b),function(b){c.hasClass(b,a.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(b.innerHTML=d(a.getParam("template_mdate_format",a.getLang("template.mdate_format"))))}),e(b))})})});
