/**
 *
 * @source: https://github.com/fightforthefuture/savesecurity.org
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) Fight for the Future
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */
function googlePlus(){var a=window.location.protocol+"//"+window.location.host;window.open("https://plus.google.com/share?url="+a,"share_gl","width=500, height=300, toolbar=no, status=no, menubar=no")}var $c=document.createElement.bind(document),$el=document.getElementById.bind(document);util={getReferrerTag:function(){var a=document.referrer;return a.indexOf("facebook.com")!==-1?"from-facebook":a.indexOf("twitter.com")!==-1||a.indexOf("t.co")!==-1?"from-twitter":a.indexOf("reddit.com")!==-1?"from-reddit":window.location.href.indexOf("_src=ga")!==-1?"from-google-adwords":a.indexOf("google.com")!==-1?"from-google":void 0}},window.components=window.components||{},window.components.forms=function(a,b){"use strict";function c(){r.className="focused"}function d(){var b=a.getElementById("form-zip_code");"US"!==p.value?b.setAttribute("placeholder","Post code"):b.setAttribute("placeholder","ZIP")}function e(){q.remove(),p.setAttribute("name","answer[country]"),p.classList.add("visible"),o.classList.add("hidden")}function f(){s.setAttribute("style","height: "+s.clientHeight+"px;"),b.setTimeout(function(){s.setAttribute("style","height: 0;")},20)}function g(c){var d=a.createElement("h2"),e=a.createElement("p");s.removeAttribute("disabled"),n.remove(),d.textContent="Something went wrong",c.type?e.textContent="There seems to be a problem somewhere in between your computer and our server. Might not be a bad idea to give it another try.":c.status?e.textContent='(the nerdy info is that the server returned a status of "'+c.status+'" and said "'+c.statusText+'".)':e.textContent="this seems to be a weird error. the nerds have been alerted.",b.modals.generateModal([d,e]),n.remove(),m.removeAttribute("disabled")}function h(){var c=a.createElement("div"),d=a.getElementsByClassName("share")[0];console.log("share:",d),d.classList.add("visible"),c.innerHTML='<h2>Thanks for signing</h2>\n<p>Now, share this page to spread the word.</p><ul class="share inline visible">\n'+d.innerHTML+'</ul><p><small>…or, <a href="https://donate.fightforthefuture.org/?amount=5&frequency=just-once">donate $5</a> to help us spread the message.</small></p>',b.modals.generateModal([c]),f(),document.querySelector(".modal-content button.facebook").addEventListener("click",FreeProgress.share.bind(FreeProgress)),document.querySelector(".modal-content button.google").addEventListener("click",googlePlus),document.querySelector(".modal-content button.twitter").addEventListener("click",FreeProgress.tweet.bind(FreeProgress))}function i(b){function c(){var b=JSON.parse(a.querySelector('[name="subscription[tag_list]"]').value);util.getReferrerTag()&&b.push(util.getReferrerTag());var c=new FormData;return c.append("guard",""),c.append("hp_enabled",!0),c.append("org","fftf"),c.append("tag",window.location.pathname),c.append("an_tags",JSON.stringify(b)),c.append("an_petition",s.action.replace("/signatures","")),c.append("member[email]",a.getElementById("form-email").value),c.append("member[postcode]",a.getElementById("form-zip_code").value),c.append("member[country]",p.value),a.getElementById("form-first_name")&&c.append("member[first_name]",a.getElementById("form-first_name").value),a.getElementById("form-comments")&&c.append("action_comment",a.getElementById("form-comments").value),c}function d(){e.status>=200&&e.status<400?h():g(e)}b.preventDefault();var e=new XMLHttpRequest;s.setAttribute("disabled",!0),n.classList.add("submitted"),m.setAttribute("disabled",!0),s.appendChild(n),e.open("POST","https://queue.fightforthefuture.org/action",!0),e.addEventListener("error",g),e.addEventListener("load",d),e.send(c()),"undefined"!=typeof ga&&"undefined"!=typeof window.VARIATION&&(console.log("event","form","convert",window.VARIATION),ga("send","event","form","convert",window.VARIATION))}function j(){o.addEventListener("click",e),p.addEventListener("change",d),s.addEventListener("submit",i),r.addEventListener("focus",c)}function k(){j()}var l=a.getElementsByTagName("body")[0],m=l.querySelector('[type="submit"]'),n=a.createElement("div"),o=a.querySelector('[for="select-country"]'),p=a.getElementById("select-country"),q=a.getElementById("hidden-country"),r=a.getElementById("form-comments"),s=a.forms[0];n.classList.add("submitted"),n.innerHTML='<div class="circle-spinner">&nbsp;</div>',k()},function(a,b){"use strict";function c(){var c=a.getElementsByClassName("modal-content")[0];a.getElementsByClassName("overlay")[0].remove(),c.removeAttribute("style"),c.classList.add("off-screen"),b.setTimeout(function(){c.remove()},420)}function d(d,e){var i,j=a.createElement("div"),k=a.createElement("div");for(void 0===d.length&&(d=[d]),"boolean"!=typeof e&&(e=!1),j.id=e?"no-click-for-you":"dismiss-me",j.classList.add("overlay"),k.classList.add("modal-content"),e||(i=a.createElement("button"),i.classList.add("close-modal"),i.innerHTML="&times;",k.appendChild(i),i.addEventListener("click",c),j.addEventListener("click",c)),f=0;f<d.length;f++)k.appendChild(d[f]);h.appendChild(j),h.appendChild(k),g.appendChild(h),b.setTimeout(function(){h.classList.remove("fade-in")},500)}function e(){c();var b=a.createElement("h2");b.innerHTML="Something went wrong.<br />Do you have a network connection?",d([b])}b.modals=b.modals||{};var f,g=a.getElementsByTagName("body")[0],h=a.createElement("div");h.classList.add("modal-parent","fade-in"),b.modals.dismissModal=c,b.modals.generateModal=d,b.modals.noConnectionModal=e}(document,window),function(a,b){"use strict";function c(){var c=a.getElementsByClassName("modal-parent")[0];c.setAttribute("style","opacity: 0"),b.setTimeout(function(){c.remove()},420)}function d(d,e){var i,j=a.createElement("div"),k=a.createElement("div");for(void 0===d.length&&(d=[d]),"boolean"!=typeof e&&(e=!1),j.id=e?"no-click-for-you":"dismiss-me",j.classList.add("overlay"),k.classList.add("modal-content","off-screen"),e||(i=a.createElement("button"),i.classList.add("close-modal"),i.innerHTML="&times;",k.appendChild(i),i.addEventListener("click",c),j.addEventListener("click",c)),f=0;f<d.length;f++)k.appendChild(d[f]);h.appendChild(j),h.appendChild(k),g.appendChild(h),b.setTimeout(function(){k.classList.remove("off-screen")},50)}function e(){c();var b=a.createElement("h2");b.innerHTML="Something went wrong.<br />Do you have a network connection?",d([b])}b.modals=b.modals||{};var f,g=a.getElementsByTagName("body")[0],h=a.createElement("div");h.classList.add("modal-parent"),b.modals.dismissModal=c,b.modals.generateModal=d,b.modals.noConnectionModal=e}(document,window),function(a,b){b.views=b.views||{},b.views.modals={}}(document,window);var $c=document.createElement.bind(document);!function(a,b){"use strict";function c(){b.components=b.components||{};var c=0,d=a.getElementsByTagName("body")[0].dataset.components;if(void 0!==d)for(d=d.split(" "),c=d.length;c--;)""!==d[c]&&void 0!==b.components[d[c]]&&b.components[d[c]](a,b)}function d(){this.date=new Date(Date.UTC(2017,0,20,5,0,0)).getTime(),this.interval=null,this.requestAnimationFrame=this.requestAnimationFrame.bind(this),this.targets={},this.tick=this.tick.bind(this),this.curTick=!1,this.start()}c();var e=!1,f=document.getElementById("obama-stop-the-nsa"),g=document.body.getBoundingClientRect(),h=f?f.getBoundingClientRect():null,i=h?h.top-g.top:null,j=function(){var b=(window.pageYOffset||a.scrollTop)-(a.clientTop||0)||0,c=1-b/i;c<0&&(c=0),document.body.style.backgroundColor="rgba(15,22,32,"+c+")",b>300&&0==e&&(e=!0,document.querySelector("ul.share").classList.add("visible"))};a.body.className.indexOf("content")===-1&&(j(),window.addEventListener("scroll",j)),a.querySelector('[href="#obama-stop-the-nsa"]')&&a.querySelector('[href="#obama-stop-the-nsa"]').addEventListener("click",function(c){c.preventDefault(),b.smoothScroll(a.getElementById("obama-stop-the-nsa"))});for(var k=document.querySelectorAll("button.google"),l=0;l<k.length;l++)k[l].addEventListener("click",function(a){a.preventDefault(),googlePlus()},!1);d.prototype.constants={day:864e5,hour:36e5,minute:6e4,second:1e3},d.prototype.padNumber=function(a){return a>9?a:"0"+a},d.prototype.requestAnimationFrame=function(){var a=window.requestAnimationFrame||setTimeout;a(this.tick)},d.prototype.start=function(){this.stop(),this.requestAnimationFrame(),this.interval=setInterval(this.requestAnimationFrame,1e3)},d.prototype.stop=function(){clearInterval(this.interval)},d.prototype.tick=function(){var a=Date.now(),b=this.date-a;this.updateDates(b),b<0&&(this.stop(),document.getElementById("remaining").textContent="00.00:00:00")},d.prototype.updateDates=function(a){this.curTick=!this.curTick;var b=(this.curTick,Math.floor(a/this.constants.day));a-=b*this.constants.day;var c=Math.floor(a/this.constants.hour);a-=c*this.constants.hour;var d=Math.floor(a/this.constants.minute);a-=d*this.constants.minute;var e=Math.floor(a/this.constants.second);a-=e*this.constants.second;var f=this.padNumber(b)+"."+this.padNumber(c)+":"+this.padNumber(d)+":"+this.padNumber(e);document.getElementById("remaining").textContent=f},new d}(document,window);
//# sourceMappingURL=core.js.map