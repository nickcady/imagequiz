(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),i=(a(26),a(7)),o=a(1),s=a(9),m=a(10),u=a(12),g=a(11),f=(a(27),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={username:"",flowers:{}},n}return Object(m.a)(a,[{key:"render",value:function(){var e="",t=this.props.location;return t&&t.state&&t.state.user?(e=t.state.user,l.a.createElement("div",null,l.a.createElement("div",{className:"loginButton"},e.length>0?e:l.a.createElement(i.b,{to:"/login"},"Login")),l.a.createElement("div",null,l.a.createElement("label",{class:"howdy"},"Howdy from the Homepage!")),l.a.createElement("div",{class:"column"},l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"cherryblossom.png"}),l.a.createElement("figcaption",null,"Cherry Blossom")),l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"daffodil.png"}),l.a.createElement("figcaption",null,"Daffodil")),l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"daisy.jpg"}),l.a.createElement("figcaption",null,"Daisy")),l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"lily.jpg"}),l.a.createElement("figcaption",null,"Lily"))),l.a.createElement("div",{class:"column"},l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"sunflower.png"}),l.a.createElement("figcaption",null,"Sunflower")),l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"rose.png"}),l.a.createElement("figcaption",null,"Rose")),l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"tulip.png"}),l.a.createElement("figcaption",null,"Tulip")),l.a.createElement("figure",{class:"flower"},l.a.createElement("img",{src:"waterlily.png"}),l.a.createElement("figcaption",null,"Waterlily"))))):l.a.createElement("div",null,l.a.createElement("div",{className:"loginButton"},e.length>0?e:l.a.createElement(i.b,{to:"/login"},"Login")),l.a.createElement("div",null,l.a.createElement("label",{class:"howdy"},"Howdy from the Homepage!")))}}]),a}(l.a.Component)),E=a(20),p=(a(33),function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.state.username.trim().length>0&&"nickcady"===n.state.username.trim()?n.setState({authenticated:!0}):n.state.username.setState(""),e.preventDefault()},n.onInputChange=function(e){var t=e.target.value,a=e.target.name;n.setState(Object(E.a)({},a,t))},n.state={username:"",authenticated:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e={pathname:"/",state:{user:this.state.username}};return this.state.authenticated?l.a.createElement(o.a,{to:e}):l.a.createElement("div",null,l.a.createElement("form",{class:"login",onSubmit:this.onSubmit},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.onInputChange}),l.a.createElement("button",{type:"submit"},"Login")))}}]),a}(l.a.Component));a(34);var h=function(){return l.a.createElement(i.a,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(f,e)}}),l.a.createElement(o.b,{path:"/login"},l.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5c5a1ef3.chunk.js.map