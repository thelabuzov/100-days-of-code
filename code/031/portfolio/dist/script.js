"use strict";var about=document.querySelector("#about"),contact=document.querySelector("#contact"),aboutContent=document.querySelector("#content__about"),contactContent=document.querySelector("#content__contact");about.addEventListener("click",(function(){new WinBox({title:"About Me",width:"400px",height:"400px",mount:aboutContent,onfocus:function(){this.setBackground("#B10B65")},onblur:function(){this.setBackground("#777")}})})),contact.addEventListener("click",(function(){new WinBox({title:"Contact Me",width:"400px",height:"400px",mount:contactContent,onfocus:function(){this.setBackground("#B10B65")},onblur:function(){this.setBackground("#777")}})}));var typed=new Typed("#animate",{strings:["Developer","Writer"],typeSpeed:50,backSpeed:50,loop:!0});$(document).ready((function(){var t=$(".wrapper__outer"),e=$(".animated"),o=$(".wrapper__outer").height(),n=e.offset().top-t.offset().top-o,c=e.attr("data-animation"),a="visible";t.scroll((function(){$(this).scrollTop()>n?e.addClass(a).addClass(c):e.removeClass(a).removeClass(c)}))}));
//# sourceMappingURL=script.js.map