(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(20)},18:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),c=t.n(s),l=(t(18),t(19),t(3));var o=()=>r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg bg-body-tertiary"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},"NEWS-HUB"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link active",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/sport"},"Sports")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/entertainment"},"Entertainment")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/health"},"Health")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/science"},"Science")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link",to:"/technology"},"technology"))),r.a.createElement("form",{className:"d-flex",role:"search"},r.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search"))))));var i=e=>{let{title:a,description:t,newsurl:n,ImageUrl:s,author:c,date:l}=e;return r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{src:s,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},t),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"}," By ",c||"Unknown"," on ",new Date(l).toGMTString())),r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"Read more.."))))},m=t(7),p=t.n(m);var g=()=>r.a.createElement("div",{className:"container my-3 text-center"},r.a.createElement("img",{src:p.a,alt:"loading"})),h=t(8);var E=e=>{const[a,t]=Object(n.useState)([]),[s,c]=Object(n.useState)(!0),[l,o]=Object(n.useState)(1),[m,p]=Object(n.useState)(0);Object(n.useEffect)(()=>{(async()=>{e.setProgress(0),c(!0);const a="https://newsapi.org/v2/top-headlines?country=in&category=".concat(e.category,"&apiKey=").concat(e.apikey,"&pageSize=9");e.setProgress(30);let n=await fetch(a);e.setProgress(50);let r=await n.json();e.setProgress(70),t(r.articles),c(!1),p(r.totalResults),e.setProgress(100)})()},[]);return r.a.createElement("div",{className:"container my-3"},r.a.createElement("h2",{className:"text-center ",style:{marginTop:"90px"}}," Latest Headlines of News-hub"),r.a.createElement(h.a,{dataLength:a.length,next:async()=>{const n="https://newsapi.org/v2/top-headlines?country=in&category=".concat(e.category,"&apiKey=").concat(e.apikey,"&page=").concat(l+1,"&pageSize=9");let r=await fetch(n),s=await r.json();c(!0),o(l+1),t(a.concat(s.articles)),c(!1)},hasMore:a.length!==m,loader:r.a.createElement(g,null)},r.a.createElement("div",{className:"row container"},a.map(e=>r.a.createElement("div",{className:"col-md-4",key:e.url},r.a.createElement(i,{title:e.title,description:e.description,ImageUrl:e.urlToImage,newsurl:e.url,author:e.author,date:e.publishedAt}))))))},d=t(1),y=t(9);class u extends n.Component{constructor(){super(...arguments),this.api_key="54ba028cba704322b8b743b1fa4c6f3d",this.state={progress:0},this.setProgress=(e=>{this.setState({progress:e})})}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(o,null),r.a.createElement(y.a,{color:"#f11977",progress:this.state.progress,height:3,onLoaderFinished:()=>this.setProgress(0)}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",element:[r.a.createElement(E,{setProgress:this.setProgress,apikey:this.api_key,key:"general",category:"general"})]}),r.a.createElement(d.a,{exact:!0,path:"/sport",element:r.a.createElement(E,{setProgress:this.setProgress,apikey:this.api_key,key:"sport",category:"sport"})}),r.a.createElement(d.a,{exact:!0,path:"/health",element:r.a.createElement(E,{setProgress:this.setProgress,apikey:this.api_key,key:"health",category:"health"})}),r.a.createElement(d.a,{exact:!0,path:"/entertainment",element:r.a.createElement(E,{setProgress:this.setProgress,apikey:this.api_key,key:"entertainment",category:"entertainment"})}),r.a.createElement(d.a,{exact:!0,path:"/science",element:r.a.createElement(E,{setProgress:this.setProgress,apikey:this.api_key,key:"science",category:"science"})}),r.a.createElement(d.a,{exact:!0,path:"/technology",element:r.a.createElement(E,{setProgress:this.setProgress,apikey:this.api_key,key:"technology",category:"technology"})})))))}}var b=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then(a=>{let{getCLS:t,getFID:n,getFCP:r,getLCP:s,getTTFB:c}=a;t(e),n(e),r(e),s(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),b()},7:function(e,a,t){e.exports=t.p+"static/media/spinner.5780b10b.gif"}},[[10,1,2]]]);
//# sourceMappingURL=main.b81080da.chunk.js.map