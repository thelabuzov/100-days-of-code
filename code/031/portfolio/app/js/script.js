// WinBox
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#content__about')
const contactContent = document.querySelector('#content__contact')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#B10B65')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#B10B65')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

// Typed
var typed = new Typed('#animate', {
  strings: [
    "Developer",
    "Writer"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

// Animates
$(document).ready(function(){
  var scrollDiv = $(".wrapper__outer");
  var target = $(".animated");
  var scrollDivHeight = $(".wrapper__outer").height();
    
  var targetTop = target.offset().top;
  var scrollDivTop = scrollDiv.offset().top
    
  var toScroll = targetTop - scrollDivTop - scrollDivHeight;
  var addToClass = target.attr('data-animation');
  var visibleClass = "visible";
    
  scrollDiv.scroll(function(){
    var scrolled = $(this).scrollTop();
    if(scrolled > toScroll){
      target.addClass(visibleClass).addClass(addToClass);
    } else{
      target.removeClass(visibleClass).removeClass(addToClass);
    }
  });

});
