(this["webpackJsonpreplay-analysis-tool"]=this["webpackJsonpreplay-analysis-tool"]||[]).push([[0],{17:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},76:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),l=a(16),i=a.n(l),o=(a(52),a(17),a(53),a.p+"static/media/twitch-icon.ead2a3ae.svg"),r=a.p+"static/media/discord-icon.0c4e6f78.svg",j=a.p+"static/media/feed-icon.5154b6d1.jpg",d=a.p+"static/media/steam-icon.4669c988.svg",b=a.p+"static/media/tiktok-icon.52fc113b.svg",h=a(87),u=a(84);a(28);var p=function(){return Object(n.jsxs)(h.a,{sticky:"top",className:"Nav-bar",children:[Object(n.jsx)(h.a.Brand,{href:"/replay-analysis-tool/",children:Object(n.jsx)(u.a,{className:"Home-link",src:j})}),Object(n.jsx)(h.a.Text,{className:"Home-title",children:"Feed's Replay Analysis Tool"}),Object(n.jsx)(h.a.Toggle,{}),Object(n.jsxs)(h.a.Collapse,{className:"justify-content-end",children:[Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:o,onClick:function(e){e.preventDefault(),window.open("https://twitch.tv/feedrl","_blank")},rounded:!0})}),Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:r,onClick:function(e){e.preventDefault(),window.open("https://discord.gg/fKK2YJZZVH","_blank")},rounded:!0})}),Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:b,onClick:function(e){e.preventDefault(),window.open("https://www.tiktok.com/@feedrl?lang=en","_blank")},rounded:!0})}),Object(n.jsx)(h.a.Text,{children:Object(n.jsx)(u.a,{className:"Button-link",src:d,onClick:function(e){e.preventDefault(),window.open("https://steamcommunity.com/profiles/76561198262193029/","_blank")},rounded:!0})})]})]})};var x=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)("h1",{className:"title",children:"About"})]})},m=a(41),O=a(42),y=a(19),f=a(46),g=a(45),v=(a(56),a(88)),k=a(90),N=a(43),w=a.n(N);function C(e){if(null!=e.data){console.log(e);var t=e.data.title.toString();return Object(n.jsxs)("h1",{className:"title",children:[" Replay title: ",t," "]})}return null}var T=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({key:e.target.value})},n.fetchReplayData=function(){var e=n.state.key;""!==e?w.a.get("https://ballchasing.com/api/replays/"+e,{headers:{Authorization:"".concat("YYnAMB7jvHL6t5DnY7VkWrj7wuriCnff5UBTbUeK")}}).then(function(e){this.setState({message:"Data fetch successful.",replayData:e.data})}.bind(Object(y.a)(n))).catch(function(e){console.log(e),this.setState({message:"Please enter a valid replay ID."})}.bind(Object(y.a)(n))).then((function(){})):n.setState({message:"Replay ID field cannot be empty."})},n.state={key:"",message:"",replayData:null},n}return Object(O.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)("h1",{className:"title",children:" Enter your replay ID: "}),Object(n.jsx)(v.a.Group,{className:"Replay-form",children:Object(n.jsx)(v.a.Control,{type:"textarea",placeholder:"Replay ID",onChange:this.handleChange})}),Object(n.jsx)("div",{}),Object(n.jsx)(k.a,{className:"Menu-button",onClick:this.fetchReplayData,children:" Analyze "}),Object(n.jsx)("hr",{}),Object(n.jsxs)("h1",{className:"title",children:[" ",this.state.message," "]}),Object(n.jsx)(C,{data:this.state.replayData})]})}}]),a}(s.a.Component),D=a(85);a(76);var B=function(){return Object(n.jsx)(h.a,{className:"Footer",fixed:"bottom",children:Object(n.jsx)(D.a,{className:"Footer-container",children:Object(n.jsx)(h.a.Text,{className:"Footer-text",children:"Created and maintained by FeedRL"})})})},F=a(20),I=a(6),R=a.p+"static/media/rl-image-1.77e19ab4.jpg",S=a.p+"static/media/rl-image-2.eb6b192d.jpg",H=a.p+"static/media/rl-image-3.192ced9d.jpg",A=a(86),L=a(89);var z=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)("h1",{className:"title",children:"Home"}),Object(n.jsxs)(A.a,{className:"Card-deck",children:[Object(n.jsxs)(L.a,{className:"Card",children:[Object(n.jsx)(L.a.Img,{variant:"top",src:S}),Object(n.jsxs)(L.a.Body,{children:[Object(n.jsx)(L.a.Title,{children:"Get Started"}),Object(n.jsx)(L.a.Text,{children:"Send in a solo duel replay to be analyzed."}),Object(n.jsx)(F.b,{className:"Home-link-style",to:"/replay-analysis-tool/analyze",children:Object(n.jsx)(k.a,{className:"Menu-button",children:" Begin "})})]})]}),Object(n.jsxs)(L.a,{className:"Card",children:[Object(n.jsx)(L.a.Img,{variant:"top",src:R}),Object(n.jsxs)(L.a.Body,{children:[Object(n.jsx)(L.a.Title,{children:"Welcome!"}),Object(n.jsx)(L.a.Text,{children:"Here you will be able to analyze your solo duel replays and generate a report with useful feedback that can help you improve your Rocket League skills."})]})]}),Object(n.jsxs)(L.a,{className:"Card",children:[Object(n.jsx)(L.a.Img,{variant:"top",src:H}),Object(n.jsxs)(L.a.Body,{children:[Object(n.jsx)(L.a.Title,{children:"Learn More"}),Object(n.jsx)(L.a.Text,{children:"Learn about the creator of this tool and how it works."}),Object(n.jsx)(F.b,{className:"Home-link-style",to:"/replay-analysis-tool/about",children:Object(n.jsx)(k.a,{className:"Menu-button",children:" About "})})]})]})]})]})},M=function(){return Object(n.jsx)(F.a,{children:Object(n.jsxs)("div",{className:"App-page",children:[Object(n.jsx)(p,{}),Object(n.jsxs)(I.c,{children:[Object(n.jsx)(I.a,{path:"/replay-analysis-tool/",exact:!0,component:z}),Object(n.jsx)(I.a,{path:"/replay-analysis-tool/about",component:x}),Object(n.jsx)(I.a,{path:"/replay-analysis-tool/analyze",component:T})]}),Object(n.jsx)(B,{})]})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),Y()}},[[82,1,2]]]);
//# sourceMappingURL=main.f5f1b78c.chunk.js.map