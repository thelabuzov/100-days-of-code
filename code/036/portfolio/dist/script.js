"use strict";var about=document.querySelector("#about"),progress=document.querySelector("#progress"),aboutContent=document.querySelector("#about__content"),progressContent=document.querySelector("#progress__content");about.addEventListener("click",(function(){new WinBox({title:"About Me",width:"400px",height:"400px",mount:aboutContent,onfocus:function(){this.setBackground("var(--cherry)")},onblur:function(){this.setBackground("var(--light-gray)")}})})),progress.addEventListener("click",(function(){new WinBox({title:"My Progress",width:"400px",height:"670px",mount:progressContent,onfocus:function(){this.setBackground("var(--cherry)")},onblur:function(){this.setBackground("var(--light-gray)")}})}));var typed=new Typed("#animate",{strings:["Content Creator","Web Developer"],typeSpeed:50,backSpeed:50,loop:!0});$(document).ready((function(){var t=$(".wrapper"),e=$(".animated"),o=$(".wrapper").height(),n=e.offset().top-t.offset().top-o,r=e.attr("data-animation"),s="visible";t.scroll((function(){$(this).scrollTop()>n?e.addClass(s).addClass(r):e.removeClass(s).removeClass(r)}))}));
//# sourceMappingURL=script.js.map