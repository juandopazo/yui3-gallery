YUI.add("gallery-bottle",function(c){var f="btInit",k="btReady",b="btNative",l="btSyncScreen",i=c.all("html, body"),g=c.one("body"),a=c.one(".btRoot")||g.appendChild(c.Node.create('<div class="btRoot"></div>')),o=g.hasClass(f),d=false,h=true,n={hidden:{overflow:"hidden"},scroll:{overflow:"auto",overflowX:"hidden"}},e=function(p){if(d&&!p){window.scrollTo(0,1);}if(h){return;}g.setStyles({width:c.Bottle.Device.getBrowserWidth(),height:c.Bottle.Device.getBrowserHeight()});},j=function(q,p){c.all(q).each(function(s){var r=new p({srcNode:s,render:true});});},m=function(r){var q=c.one("[data-role=page]"),p;d=r;if(o){return;}if(q){i.setStyles(n.hidden);}g.addClass(f);o=true;j("[data-role=photogrid]",c.Bottle.PhotoGrid);j("[data-role=carousel]",c.Bottle.Carousel);j("[data-role=slidetab]",c.Bottle.SlideTab);j("[data-role=loader]",c.Bottle.Loader);if(q){e();p=new c.Bottle.Page({srcNode:q,render:true});p.resize();if(p.get("nativeScroll")){i.setStyles(n.scroll);g.addClass(b);p.item(0).get("scrollView").disable();c.publish(b,{fireOnce:true});c.fire(b);c.publish(l);a.on("gesturemove",function(s){s.preventDefault();},{standAlone:true,root:a});}else{h=false;e();}}c.all("[data-role=shortcut]").each(function(t){var s=new c.Bottle.ShortCut({srcNode:t,visible:false,disabled:true,render:a});});c.all("[data-role=overlay]").each(function(t){var s=new c.Bottle.Overlay({srcNode:t,visible:false,disabled:true,render:a});});window.addEventListener((c.UA.mobile=="Apple")?"orientationchange":"resize",function(){var u=c.Bottle.ShortCut.getCurrent(),s=c.Bottle.Overlay.getCurrent(),t=c.Bottle.Page.getCurrent();if(t){e(true);t.resize();}else{c.fire(l);}if(u){u.scResize();}if(s){s.olResize();}},false);g.addClass(k);c.publish(k,{fireOnce:true});c.fire(k);};c.namespace("Bottle").init=m;},"gallery-2012.10.03-20-02",{skinnable:true,requires:["gallery-bt-shortcut","gallery-bt-overlay","gallery-bt-photogrid","gallery-bt-slidetab","gallery-bt-carousel","gallery-bt-loader"]});