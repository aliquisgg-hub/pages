// (()=>{
//     let css = document.createElement("link");
//     css.rel="stylesheet";
//     css.href="slide.css";
//     document.getElementsByTagName("head")[0].appendChild(css);
// })();

window.addEventListener("load", (e)=>{
    Array.from(document.getElementsByClassName("slide")).forEach((ul)=>{
        ul.lis = Array.from(ul.children);
        ul.length = ul.lis.length;
        ul.page = 0
        ul.style.width = Math.max(...ul.lis.map((li)=>li.clientWidth))+"px";
        ul.style.height = Math.max(...ul.lis.map((li)=>li.clientHeight))+"px";

        ul.go = goSlide;
        ul.first = firstSlide;
        ul.last = lastSlide;
        ul.next = nextSlide;
        ul.prev = prevSlide;
        ul.first(0);
    });
});

function goSlide(p) {
    this.lis[this.page].style.opacity = 0;
    this.lis[p].style.opacity = 1;
    this.page = p;
}

function firstSlide() {
    this.go(0);
}

function lastSlide() {
    this.go(this.length-1);
}

function nextSlide() {
    if (this.page < this.length-1) this.go(this.page + 1);
}

function prevSlide() {
    if (this.page > 0) this.go(this.page - 1);
}
