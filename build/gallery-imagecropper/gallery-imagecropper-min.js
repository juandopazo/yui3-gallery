YUI.add("gallery-imagecropper",function(b){var f=b.Lang,i=f.isNumber,d=b.ClassNameManager.getClassName,h="imagecropper",c="resize",g="mask",a="knob",e={cropMask:d(h,g),resizeKnob:d(h,c,a),resizeMask:d(h,c,g)},j=b.ImageCropper=b.Base.create("imagecropper",b.Widget,[],{CONTENT_TEMPLATE:"<img/>",_defCropMaskValueFn:function(){return b.Node.create(j.CROP_MASK_TEMPLATE);},_defResizeKnobValueFn:function(){return b.Node.create(j.RESIZE_KNOB_TEMPLATE);},_defResizeMaskValueFn:function(){return b.Node.create(j.RESIZE_MASK_TEMPLATE);},_renderCropMask:function(k){var l=this.get("cropMask");if(!l.inDoc()){k.append(l);}},_renderResizeKnob:function(k){var l=this.get("resizeKnob");if(!l.inDoc()){k.append(l);}},_renderResizeMask:function(){var k=this.get("resizeMask");if(!k.inDoc()){this.get("resizeKnob").append(k);}k.setStyle("backgroundImage","url("+this.get("src")+")");},_handleSrcChange:function(k){this.get("contentBox").set("src",k.newVal);this.get("cropResizeMask").setStyle("backgroundImage","url("+k.newVal+")");},_syncResizeKnob:function(){var k=this.get("initialXY");this.get("resizeKnob").setStyles({left:k[0],top:k[1],width:this.get("initWidth"),height:this.get("initHeight")});},_syncResizeMask:function(){var k=this.get("resizeKnob");this.get("resizeMask").setStyle("backgroundPosition",(-k.get("offsetLeft"))+"px "+(-k.get("offsetTop"))+"px");},_syncCropMask:function(k){this.get("cropMask").setStyles({width:k.get("width"),height:k.get("height")});},_syncResizeAttr:function(k){if(this._resize){this._resize.con.set(k.attrName,k.newVal);}},initializer:function(){this.set("initialXY",this.get("initialXY")||[10,10]);this.set("initWidth",this.get("initWidth"));this.set("initHeight",this.get("initHeight"));this.after("srcChange",this._handleSrcChange);this.after("minWidthChange",this._syncResizeAttr);this.after("minHeightChange",this._syncResizeAttr);this.after("preserveRatioChange",this._syncResizeAttr);},renderUI:function(){var k=this.get("boundingBox");this._renderCropMask(k);this._renderResizeKnob(k);this._renderResizeMask();},bindUI:function(){var l=this.get("contentBox"),k=this.get("resizeKnob"),n,o,m=b.bind(this._syncResizeMask,this);l.on("load",b.bind(this._syncCropMask,this,l));n=this._resize=new b.Resize({node:k,on:{"resize:resize":m}});n.plug(b.Plugin.ResizeConstrained,{constrain:l,minHeight:this.get("minHeight"),minWidth:this.get("minWidth"),preserveRatio:this.get("preserveRatio")});o=this._drag=new b.DD.Drag({node:k,handles:[this.get("resizeMask")],on:{"drag:drag":m}});o.plug(b.Plugin.DDConstrained,{constrain2node:l});},syncUI:function(){var k=this.get("contentBox").set("src",this.get("src"));this._syncCropMask(k);this._syncResizeKnob();this._syncResizeMask();},destructor:function(){this._resize.destroy();this._drag.destroy();this._drag=this._resize=null;}},{CROP_MASK_TEMPLATE:'<div class="'+e.cropMask+'"></div>',RESIZE_KNOB_TEMPLATE:'<div class="'+e.resizeKnob+'" tabindex="0"></div>',RESIZE_MASK_TEMPLATE:'<div class="'+e.resizeMask+'"></div>',HTML_PARSER:{src:function(k){return k.get("src");},cropMask:"."+e.cropMask,resizeKnob:"."+e.resizeKnob,resizeMask:"."+e.resizeMask},ATTRS:{src:{value:""},resizeMask:{setter:function(k){k=b.one(k);if(k){k.addClass(e.resizeMask);}return k;},valueFn:"_defResizeMaskValueFn"},resizeKnob:{setter:function(k){k=b.one(k);if(k){k.addClass(e.resizeKnob);}return k;},valueFn:"_defResizeKnobValueFn"},cropMask:{setter:function(k){k=b.one(k);if(k){k.addClass(e.cropMask);}return k;},valueFn:"_defCropMaskValueFn"},initialXY:{validator:f.isArray},keyTick:{value:1,validator:i},shiftKeyTick:{value:10,validator:i},useKeys:{value:true,validator:f.isBoolean},status:{value:true,validator:f.isBoolean},minHeight:{value:50,validator:i},minWidth:{value:50,validator:i},preserveRatio:{value:false,validator:f.isBoolean},initHeight:{value:0,validator:i,setter:function(l){var k=this.get("minHeight");return l<k?k:l;}},initWidth:{value:0,validator:i,setter:function(l){var k=this.get("minWidth");return l<k?k:l;}}}});},"@VERSION@",{requires:["widget","resize"]});