(this["webpackJsonpreplay-analysis-tool"]=this["webpackJsonpreplay-analysis-tool"]||[]).push([[0],{16:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),l=a(17),i=a.n(l),r=(a(53),a(16),a(54),a.p+"static/media/twitch-icon.ead2a3ae.svg"),o=a.p+"static/media/discord-icon.0c4e6f78.svg",j=a.p+"static/media/feed-icon.5154b6d1.jpg",d=a.p+"static/media/steam-icon.4669c988.svg",b=a.p+"static/media/tiktok-icon.52fc113b.svg",h=a(88),u=a(85);a(30);var x=function(){return Object(n.jsxs)(h.a,{sticky:"top",className:"Nav-bar",children:[Object(n.jsx)(h.a.Brand,{href:"/replay-analysis-tool/",children:Object(n.jsx)(u.a,{className:"Home-link",src:j})}),Object(n.jsx)(h.a.Text,{className:"Home-title",children:"Feed's Replay Analysis Tool"}),Object(n.jsx)(h.a.Toggle,{}),Object(n.jsxs)(h.a.Collapse,{className:"justify-content-end",children:[Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:r,onClick:function(e){e.preventDefault(),window.open("https://twitch.tv/feedrl","_blank")},rounded:!0})}),Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:o,onClick:function(e){e.preventDefault(),window.open("https://discord.gg/fKK2YJZZVH","_blank")},rounded:!0})}),Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:b,onClick:function(e){e.preventDefault(),window.open("https://www.tiktok.com/@feedrl?lang=en","_blank")},rounded:!0})}),Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:d,onClick:function(e){e.preventDefault(),window.open("https://steamcommunity.com/profiles/76561198262193029/","_blank")},rounded:!0})})]})]})},p=a(86);a(57);var O=function(){return Object(n.jsx)(h.a,{className:"Footer",fixed:"bottom",children:Object(n.jsx)(p.a,{className:"Footer-container",children:Object(n.jsx)(h.a.Text,{className:"Footer-text",children:"Created and maintained by FeedRL"})})})};var m=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{className:"Header-hr"}),Object(n.jsx)("h1",{className:"title",children:"About"})]})},f=a(43),y=a(44),g=a(19),v=a(47),k=a(46),N=(a(58),a(29)),w=a(20),C=a.n(w);var D=function(e){var t,a,c="https://api.yannismate.de/rank/steam/",l=Object(s.useState)(null),i=Object(N.a)(l,2),r=i[0],o=i[1],j=Object(s.useState)(null),d=Object(N.a)(j,2),b=d[0],h=d[1];if(console.log(e),null!=e.data){t=e.data.blue.players[0].name;var u=e.data.blue.players[0].id.id;C.a.get(c+u,{}).then((function(e){var t=e.data,a=t.indexOf("("),n=t.indexOf(")"),s=t.substring(a+1,n);o(s)})).catch((function(e){console.log(e)})).then((function(){}))}if(null!=e.data){a=e.data.orange.players[0].name;var x=e.data.orange.players[0].id.id;C.a.get(c+x,{}).then((function(e){var t=e.data,a=t.indexOf("("),n=t.indexOf(")"),s=t.substring(a+1,n);h(s)})).catch((function(e){console.log(e)})).then((function(){}))}return null!=e.data?Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{className:"title",children:[" ",t,"'s Rank: ",r," "]}),Object(n.jsxs)("h1",{className:"title",children:[" ",a,"'s Rank: ",b," "]})]}):null},T=a(89),B=a(91);function H(e){if(null!=e.data){var t=e.data.title.toString();return Object(n.jsxs)("h1",{className:"title",children:[" Replay title: ",t," "]})}return null}var R=function(e){Object(v.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({key:e.target.value})},n.fetchReplayData=function(){var e=n.state.key;""!==e?C.a.get("https://ballchasing.com/api/replays/"+e,{headers:{Authorization:"".concat("YYnAMB7jvHL6t5DnY7VkWrj7wuriCnff5UBTbUeK")}}).then(function(e){this.setState({message:"Data fetch successful.",replayData:e.data})}.bind(Object(g.a)(n))).catch(function(e){console.log(e),this.setState({message:"Please enter a valid replay ID."})}.bind(Object(g.a)(n))).then((function(){})):n.setState({message:"Replay ID field cannot be empty."})},n.state={key:"",message:"",replayData:null},n}return Object(y.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{className:"Header-hr"}),Object(n.jsx)("h1",{className:"title",children:" Enter your replay ID: "}),Object(n.jsx)(T.a.Group,{className:"Replay-form",children:Object(n.jsx)(T.a.Control,{type:"textarea",placeholder:"Replay ID",onChange:this.handleChange})}),Object(n.jsx)("div",{}),Object(n.jsx)(B.a,{className:"Menu-button",onClick:this.fetchReplayData,children:" Analyze "}),Object(n.jsx)("hr",{className:"Header-hr"}),Object(n.jsxs)("h1",{className:"title",children:[" ",this.state.message," "]}),Object(n.jsx)(H,{data:this.state.replayData}),Object(n.jsx)(D,{data:this.state.replayData})]})}}]),a}(c.a.Component),S=a(21),F=a(6),I=a.p+"static/media/rl-image-1.77e19ab4.jpg",A=a.p+"static/media/rl-image-2.eb6b192d.jpg",L=a.p+"static/media/rl-image-3.192ced9d.jpg",z=a(87),M=a(90);var Y=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{className:"Header-hr"}),Object(n.jsx)("h1",{className:"title",children:"Home"}),Object(n.jsxs)(z.a,{className:"Card-deck",children:[Object(n.jsxs)(M.a,{className:"Card",children:[Object(n.jsx)(M.a.Img,{variant:"top",src:A}),Object(n.jsxs)(M.a.Body,{children:[Object(n.jsx)(M.a.Title,{children:"Get Started"}),Object(n.jsx)(M.a.Text,{children:"Send in a solo duel replay to be analyzed."}),Object(n.jsx)(S.b,{className:"Home-link-style",to:"/replay-analysis-tool/analyze",children:Object(n.jsx)(B.a,{className:"Menu-button",children:" Begin "})})]})]}),Object(n.jsxs)(M.a,{className:"Card",children:[Object(n.jsx)(M.a.Img,{variant:"top",src:I}),Object(n.jsxs)(M.a.Body,{children:[Object(n.jsx)(M.a.Title,{children:"Welcome!"}),Object(n.jsx)(M.a.Text,{children:"Here you will be able to analyze your solo duel replays and generate a report with useful feedback that can help you improve your Rocket League skills."})]})]}),Object(n.jsxs)(M.a,{className:"Card",children:[Object(n.jsx)(M.a.Img,{variant:"top",src:L}),Object(n.jsxs)(M.a.Body,{children:[Object(n.jsx)(M.a.Title,{children:"Learn More"}),Object(n.jsx)(M.a.Text,{children:"Learn about the creator of this tool and how it works."}),Object(n.jsx)(S.b,{className:"Home-link-style",to:"/replay-analysis-tool/about",children:Object(n.jsx)(B.a,{className:"Menu-button",children:" About "})})]})]})]}),Object(n.jsx)("hr",{className:"Footer-hr"})]})},_=function(){return Object(n.jsx)(S.a,{children:Object(n.jsxs)("div",{className:"App-page",children:[Object(n.jsx)(x,{}),Object(n.jsxs)(F.c,{children:[Object(n.jsx)(F.a,{path:"/replay-analysis-tool/",exact:!0,component:Y}),Object(n.jsx)(F.a,{path:"/replay-analysis-tool/about",component:m}),Object(n.jsx)(F.a,{path:"/replay-analysis-tool/analyze",component:R})]}),Object(n.jsx)(O,{})]})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),c(e),l(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),J()}},[[83,1,2]]]);
//# sourceMappingURL=main.2fdb412f.chunk.js.map