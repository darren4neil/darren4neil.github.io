(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7877469c"],{"61d3":function(t,n,e){},"83eb":function(t,n,e){"use strict";e("61d3")},"8cdb":function(t,n,e){"use strict";e.r(n);var i={beforeRouteLeave:function(t,n,e){clearInterval(this.inter),e()},data:function(){return{inter:null,countdown:5}},mounted:function(){var t=this;this.inter=setInterval((function(){t.countdown--,0==t.countdown&&(clearInterval(t.inter),t.goBack())}),1e3)},methods:{goBack:function(){this.$router.push("/")}}},s=(e("83eb"),e("2877")),c=Object(s.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"notfound"},[n("svg-icon",{attrs:{name:"404"}}),n("div",{staticClass:"content"},[n("h1",[this._v("404")]),n("div",{staticClass:"desc"},[this._v("抱歉，你访问的页面不存在")]),n("el-button",{attrs:{type:"primary"},on:{click:this.goBack}},[this._v(this._s(this.countdown)+"秒后，返回首页")])],1)],1)}),[],!1,null,"92499cb2",null);n.default=c.exports}}]);