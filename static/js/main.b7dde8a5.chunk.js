(this["webpackJsonpdsc-iiits"]=this["webpackJsonpdsc-iiits"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(17),s=n.n(r),a=(n(70),n(31)),o=(n(71),n(26)),l=n(107),d=n(109),j=n(111),u=n(118),b=n(121),f=n(120),h=n(112),p=n(113),x=n(60),O=n.p+"static/media/logo4.b027f976.png",m=n(4),g=[{label:"Home",link:"/home",index:0},{label:"Team",link:"/team",index:1},{label:"Events",link:"/events",index:2},{label:"Contact Us",link:"/contact",index:3}],v=Object(l.a)((function(){return{header:{backgroundColor:"transparent",paddingTop:"32px",paddingRight:"79px",paddingLeft:"118px","@media (max-width: 900px)":{paddingLeft:0}},logo:{fontFamily:"Work Sans, sans-serif",fontWeight:600,color:"#FFFEFE",textAlign:"left"},menuButton:{fontFamily:"Open Sans, sans-serif",fontWeight:700,size:"18px",marginLeft:"38px"},toolbar:{display:"flex",justifyContent:"space-between",color:"black"},drawerContainer:{padding:"20px 20px",justifyContent:"space-evenly"},menuItem:{padding:"50px",justifyContent:"center",fontFamily:"Poppins",fontWeight:"500",fontSize:"17px"}}}));function y(e){var t=e.slide,n=e.slideTo,i=v(),r=i.header,s=i.toolbar,l=i.drawerContainer,y=i.menuItem,w=Object(c.useState)({mobileView:!1,drawerOpen:!1}),F=Object(a.a)(w,2),C=F[0],k=F[1],S=C.mobileView,D=C.drawerOpen;Object(c.useEffect)((function(){var e=function(){return window.innerWidth<900?k((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobileView:!0})})):k((function(e){return Object(o.a)(Object(o.a)({},e),{},{mobileView:!1})}))};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var N=function(){return g.map((function(e){var t=e.label,n=e.link;return Object(m.jsx)(b.a,{to:n,color:"inherit",style:{textDecoration:"none"},key:t,children:Object(m.jsx)(f.a,{className:y,children:t})})}))},E=["#109D58","#FF4D4D","#4286F5","#FFD65F"],I=function(){return g.map((function(e){var c=e.label,i=e.index;return Object(m.jsx)(h.a,{onClick:function(){n(i)},key:c,color:i===t?E[i%E.length]:"inherit",style:{color:i===t?E[i%E.length]:"inherit"},children:c})}))};return Object(m.jsx)("header",{children:Object(m.jsx)(p.a,{className:r,elevation:0,children:S?Object(m.jsxs)(d.a,{children:[Object(m.jsx)(j.a,{onClick:function(){k((function(e){return Object(o.a)(Object(o.a)({},e),{},{drawerOpen:!0})}))},children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(u.a,{open:D,onClose:function(){k((function(e){return Object(o.a)(Object(o.a)({},e),{},{drawerOpen:!1})}))},children:Object(m.jsx)("div",{className:l,children:N()})}),Object(m.jsx)("img",{src:O,alt:"logo",style:{width:"100%"}})]}):Object(m.jsxs)(d.a,{className:s,children:[Object(m.jsx)("img",{src:O,alt:"logo",style:{width:"30%"}}),Object(m.jsx)("div",{style:{width:"55%",display:"flex",justifyContent:"space-around"},children:I()})]})})})}n(77);var w=n.p+"static/media/dsc-logo.4faf9cc2.png";function F(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{children:"Developer Students Club"}),Object(m.jsx)("h3",{children:"Powered by Google"}),Object(m.jsx)("p",{children:"Developer Student Clubs are university based community groups for students interested in Google Developer technologies"}),Object(m.jsx)(h.a,{size:"large",style:{backgroundColor:"#98BFFF",borderRadius:"32px",width:"30%"},children:"Join"})]}),Object(m.jsx)("div",{class:"bg",style:{backgroundColor:"#c8ffe4",borderRadius:"100%"},children:Object(m.jsx)("div",{className:"logo-dsc",style:{backgroundColor:"#f0f0f0"},children:Object(m.jsx)("img",{src:w,alt:"logo",style:{width:"100%"}})})})]})}var C=n(48),k=n.n(C),S=n(59);function D(e){return console.log(e.color),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsxs)("div",{className:"bg-card",children:[Object(m.jsx)("div",{className:"card-header",style:{backgroundColor:e.color}}),Object(m.jsxs)("div",{className:"card-content",style:{backgroundColor:"#c5c5c5"},children:[Object(m.jsx)("h2",{children:e.member.name}),Object(m.jsx)("p",{children:e.member.role})]})]}),Object(m.jsx)("div",{className:"img-circle",style:{backgroundColor:"#f0f0f0"}})]})}n(79);var N=n(49);N.a.initializeApp({apiKey:"AIzaSyAcPugZJcRNs86fENJhzGr7s2GYLffD1EA",authDomain:"dsciiitsonepat-e2196.firebaseapp.com",projectId:"dsciiitsonepat-e2196",storageBucket:"dsciiitsonepat-e2196.appspot.com",messagingSenderId:"504507754879",appId:"1:504507754879:web:c9d778174180711d3f524a",measurementId:"G-1L9XLXYE1C"});var E=N.a,I=["#FFD65F","#FF4D4D","#109D58","#4286F5"];function L(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.firestore(),e.next=3,t.collection("members").get();case 3:n=e.sent,c=n.docs.map((function(e){return e.data()})),i(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsxs)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(m.jsx)("h2",{children:"Team"}),Object(m.jsx)("div",{style:{width:"65%",display:"flex",justifyContent:"space-evenly",flexDirection:"row",height:"75%",alignItems:"center"},children:n.map((function(e,t){return Object(m.jsx)(D,{member:e,color:I[t%I.length]},t)}))})]})}function z(){return Object(m.jsx)(m.Fragment,{children:"Contacts"})}function T(){return Object(m.jsx)(m.Fragment,{children:"Events"})}var A=n(119),B=n(116),G=(n(84),n(117)),J=n(114),P=n(115);G.a.use([J.a,P.a]);var W=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),s=Object(a.a)(r,2),o=s[0],l=s[1];return Object(m.jsxs)("div",{className:"App",style:{backgroundColor:"#f7f7f7"},children:[Object(m.jsx)(y,{setSlide:i,slideTo:function(e){o.slideTo(e)},slide:n}),Object(m.jsxs)(A.a,{onSwiper:l,navigation:!0,pagination:!0,onSlideChange:function(e){i(e.realIndex)},style:{width:"100%",height:"100%"},children:[Object(m.jsx)(B.a,{children:Object(m.jsx)(F,{setSlide:i})}),Object(m.jsx)(B.a,{children:Object(m.jsx)(L,{setSlide:i})}),Object(m.jsx)(B.a,{children:Object(m.jsx)(T,{setSlide:i})}),Object(m.jsx)(B.a,{children:Object(m.jsx)(z,{setSlide:i})})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root")),R()}},[[85,1,2]]]);
//# sourceMappingURL=main.b7dde8a5.chunk.js.map