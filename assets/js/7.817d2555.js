(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{128:function(t,i,e){},298:function(t,i,e){t.exports=e.p+"assets/img/resize.bb7032f2.svg"},299:function(t,i,e){t.exports=e.p+"assets/img/resize-vertical.9a1da8e4.svg"},300:function(t,i,e){t.exports=e.p+"assets/img/resize-horizontal.6d265a49.svg"},301:function(t,i,e){t.exports=e.p+"assets/img/resize-reduce.2e549067.svg"},302:function(t,i,e){t.exports=e.p+"assets/img/resize-maximize.78f85782.svg"},303:function(t,i,e){t.exports=e.p+"assets/img/center.8613e46f.svg"},304:function(t,i,e){"use strict";var s=e(128);e.n(s).a},322:function(t,i,e){"use strict";e.r(i);var s={components:{Cropper:e(11).b},data:function(){return{image:"https://images.unsplash.com/photo-1532182657011-d3d31357b5d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=696&q=80",size:{width:null,height:null}}},methods:{updateSize:function(t){var i=t.coordinates;this.size.width=Math.round(i.width),this.size.height=Math.round(i.height)},resize:function(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$refs.cropper.setCoordinates([function(s,n){return t=s,{width:s.width*i,height:s.height*e}},function(i,e){return{left:t.left+(t.width-i.width)/2,top:t.top+(t.height-i.height)/2}}])},center:function(){this.$refs.cropper.setCoordinates(function(t,i){return{left:i.width/2-t.width/2,top:i.height/2-t.height/2}})},maximize:function(){this.$refs.cropper.setCoordinates(function(t,i){return{width:i.width,height:i.height}})}}},n=(e(304),e(1)),r=Object(n.a)(s,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"set-coordinates-example"},[s("Cropper",{ref:"cropper",attrs:{classname:"coodinates-cropper","stencil-props":{minAspectRatio:.5},src:t.image},on:{change:t.updateSize}}),t._v(" "),s("div",{staticClass:"buttons"},[s("div",{staticClass:"button",attrs:{title:"Resize (x2)"},on:{click:function(i){return t.resize(2,2)}}},[s("img",{attrs:{src:e(298)}})]),t._v(" "),s("div",{staticClass:"button",attrs:{title:"Resize height (x2)"},on:{click:function(i){return t.resize(1,2)}}},[s("img",{attrs:{src:e(299)}})]),t._v(" "),s("div",{staticClass:"button",attrs:{title:"Resize width (x2)"},on:{click:function(i){return t.resize(2,1)}}},[s("img",{attrs:{src:e(300)}})]),t._v(" "),s("div",{staticClass:"button",attrs:{title:"Resize (x1/2)"},on:{click:function(i){return t.resize(.5,.5)}}},[s("img",{attrs:{src:e(301)}})]),t._v(" "),s("div",{staticClass:"button",attrs:{title:"Maximize"},on:{click:function(i){return t.maximize()}}},[s("img",{attrs:{src:e(302)}})]),t._v(" "),s("div",{staticClass:"button",attrs:{title:"Center"},on:{click:function(i){return t.center()}}},[s("img",{attrs:{src:e(303)}})])]),t._v(" "),t.size.width&&t.size.height?s("div",{staticClass:"size-info"},[s("div",[t._v("Width: "+t._s(t.size.width)+"px")]),t._v(" "),s("div",[t._v("Height: "+t._s(t.size.height)+"px")])]):t._e()],1)},[],!1,null,null,null);i.default=r.exports}}]);