(this.webpackJsonpwhom_shall_it_be=this.webpackJsonpwhom_shall_it_be||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(11),n(1)),c=n.n(s),l=n(4),m=n(5),u=(n(13),[{not_id:1337,name:"Ponas",temp:20,likes:"Unicorns",gender:!0},{not_id:42,name:"Jemps",temp:15,likes:"Cats",gender:!0},{not_id:42,name:"Amam",temp:18,likes:"Doggos",gender:!1},{not_id:420,name:"Jemmer",temp:20,likes:"Beer",gender:!1},{not_id:666,name:"Philler",temp:15,likes:"Linux",gender:!1},{not_id:34,name:"Holzer",temp:25,likes:"golang",gender:!0}]);var h=function(e){return r.a.createElement("p",{className:"result-text glitch","data-text":e.name},e.name)};var p=function(e){return new Promise((function(t){return setTimeout(t,e)}))},d=function(){var e=Object(a.useState)(void 0),t=Object(m.a)(e,2),n=t[0],o=t[1],i=void 0;fetch("https://fcc-weather-api.glitch.me/api/current?lat=48.796043&lon=9.009571").then((function(e){return e.json()})).then((function(e){i=e.main.temp}));var s=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,s,l,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],n=0;n<u.length;n++)t.push(1),i?(t[n]*=(i+.1-u[n].temp)%4.321,t[n]+=10):(t[n]*=u[n].temp%4.321,t[n]+=10),a=new XMLHttpRequest,r="https://pokeapi.co/api/v2/pokemon/"+u[n].not_id%806,a.open("GET",r,!1),a.send(null),s=JSON.parse(a.responseText),t[n]*=s.weight/s.base_experience*((new Date).getTime()%u[n].not_id)%s.stats[Math.floor(Math.random()*s.stats.length)].base_stat,t[n]%=100,t[n]=Math.floor(t[n]);case 2:if(l=Math.floor(Math.random()*u.length),m=Math.floor(100*Math.random()),o(u[l]),console.log({randNum:m,factor:t[l],randPers:l,pers:u[l]}),!(t[l]<m+1&&t[l]>m-1)){e.next=9;break}return e.abrupt("break",13);case 9:return e.next=11,p(10);case 11:e.next=2;break;case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"main-wrapper"},n?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"And the victim is:"),r.a.createElement(h,n),r.a.createElement("div",{className:"button resetButton",onClick:function(){o(void 0)}},"Reset")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Whom shall it be?"),r.a.createElement("div",{className:"button",onClick:s},"Get a totaly not random victi... eeeh victor!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.025c3c1a.chunk.js.map