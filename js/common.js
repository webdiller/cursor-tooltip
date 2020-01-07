(function(a,b){"object"==typeof exports?module.exports=b(a):"function"==typeof define&&define.amd?define([],b):a.LazyLoad=b(a)})("undefined"==typeof global?this.window||this.global:global,function(a){"use strict";function b(a,b){this.settings=d(c,b||{}),this.images=a||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}"function"==typeof define&&define.amd&&(a=window);const c={src:"data-src",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},d=function(){let a={},b=!1,c=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],c++);for(let f,g=function(c){for(let e in c)Object.prototype.hasOwnProperty.call(c,e)&&(a[e]=b&&"[object Object]"===Object.prototype.toString.call(c[e])?d(!0,a[e],c[e]):c[e])};c<e;c++)f=arguments[c],g(f);return a};if(b.prototype={init:function(){if(!a.IntersectionObserver)return void this.loadImages();let b=this,c={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(a){Array.prototype.forEach.call(a,function(a){if(a.isIntersecting){b.observer.unobserve(a.target);let c=a.target.getAttribute(b.settings.src),d=a.target.getAttribute(b.settings.srcset);"img"===a.target.tagName.toLowerCase()?(c&&(a.target.src=c),d&&(a.target.srcset=d)):a.target.style.backgroundImage="url("+c+")"}})},c),Array.prototype.forEach.call(this.images,function(a){b.observer.observe(a)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let a=this;Array.prototype.forEach.call(this.images,function(b){let c=b.getAttribute(a.settings.src),d=b.getAttribute(a.settings.srcset);"img"===b.tagName.toLowerCase()?(c&&(b.src=c),d&&(b.srcset=d)):b.style.backgroundImage="url('"+c+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},a.lazyload=function(a,c){return new b(a,c)},a.jQuery){const c=a.jQuery;c.fn.lazyload=function(a){return a=a||{},a.attribute=a.attribute||"data-src",new b(c.makeArray(this),a),this}}return b});

let doc = document,
    cursorTooltip = doc.getElementById('cursorTooltip'),
    cursorTooltipTitle = doc.getElementById('cursorTooltipTitle'),
    cursorTooltipText = doc.getElementById('cursorTooltipText'),
    images = doc.querySelectorAll('.images__wrapper .images__img-wrapper')

for (let item of images) {
    item.addEventListener('mousemove', function (e) {
        onMouseMoveFoo(e);
        cursorTooltipTitle.innerText = setInnerContent(this).title;
        cursorTooltipText.innerText = setInnerContent(this).descr;
    });
    item.addEventListener('mouseout', function (e) {
        onMouseOutFoo(e);
    });
}

function onMouseMoveFoo(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorTooltip.classList.add('active');
    cursorTooltip.style.left = `${x + 10}px`;
    cursorTooltip.style.top = `${y + 15}px`;
}

function onMouseOutFoo(e) {
    cursorTooltip.classList.remove('active');
}

function setInnerContent(target) {
    return data = {
        title: target.getAttribute('data-name'),
        descr: target.getAttribute('data-descr'),
    };
}

lazyload();