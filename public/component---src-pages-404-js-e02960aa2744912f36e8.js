(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Bl7J:function(e,a,n){"use strict";var t=n("JX7q"),l=n("dI71"),i=n("q1tI"),r=n.n(i),c=(n("wcMv"),n("Wbzz")),o=function(e){return r.a.createElement("header",{id:"header",className:"alt"},r.a.createElement(c.Link,{to:"/",className:"logo"},r.a.createElement("strong",null,"C")," ",r.a.createElement("span",null,"Software Engineer | Web Developer")),r.a.createElement("nav",null,r.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},s=function(e){return r.a.createElement("nav",{id:"menu"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"links"},r.a.createElement("li",null,r.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/landing"},"Experience")),r.a.createElement("li",null,r.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/landing2"},"Skills")),r.a.createElement("li",null,r.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/landing3"},"Projects")))),r.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},m=function(e){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/cavarrio.carter.development",target:"_blank",className:"icon alt fa-facebook"},r.a.createElement("span",{className:"label"},"Facebook"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},r.a.createElement("span",{className:"label"},"Instagram"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/cavarriocarter",target:"_blank",className:"icon alt fa-github"},r.a.createElement("span",{className:"label"},"GitHub"))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/cavarrio-carter/",target:"_blank",className:"icon alt fa-linkedin"},r.a.createElement("span",{className:"label"},"LinkedIn")))),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© Cavarrio Carter"),r.a.createElement("li",null,"Address: Dallas, TX 75150"))))},u=function(e){function a(a){var n;return(n=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},n.handleToggleMenu=n.handleToggleMenu.bind(Object(t.a)(n)),n}Object(l.a)(a,e);var n=a.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},n.render=function(){var e=this.props.children;return r.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},r.a.createElement("div",{id:"wrapper"},r.a.createElement(o,{onToggleMenu:this.handleToggleMenu}),e,r.a.createElement(m,null)),r.a.createElement(s,{onToggleMenu:this.handleToggleMenu}))},a}(r.a.Component);a.a=u},JX7q:function(e,a,n){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(a,"a",(function(){return t}))},w2l6:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),i=n("Bl7J");a.default=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},wcMv:function(e,a,n){}}]);
//# sourceMappingURL=component---src-pages-404-js-e02960aa2744912f36e8.js.map