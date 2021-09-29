// === THREE ===
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;
let renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setSize(300, 300);
renderer.domElement.setAttribute('id',"model");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('images/src/model/scene.gltf', function(gltf) {
    obj = gltf;
    obj.scene.scale.set(6, 6, 6, 6);
    scene.add(obj.scene);
});

function animate(e) {
    requestAnimationFrame(animate);
    if(obj) {
        $(window).mousemove(function(e){
            obj.scene.rotation.y = -e.clientX / 300;
        })

        if(window.scrollY > 1) {
            $(window).scroll(function() {
                obj.scene.rotation.x = -window.scrollY / 1000 - 100;
            })
        } else {
            $(document).ready(function() {
                obj.scene.rotation.x =- 100;
            })
        }

        renderer.render(scene,camera);
    }
}

animate();
// === / THREE ===

// === WINBOX ===
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
// === / WINBOX ===

// === TYPED ===
var typed = new Typed('#animate', {
  strings: [
    "Developer",
    "Writer"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});
// === / TYPED ===

// === ANIMATE ===
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
// === / ANIMATE ===