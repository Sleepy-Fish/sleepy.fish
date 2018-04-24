module.exports = function set(cb) {
    window.k={c:[38,38,40,40,37,39,37,39,66,65],p:0,cb:cb}
  document.onkeydown=function(e){e=e||window.event;if(e.keyCode===k.c[k.p]){k.p++;if(k.p===k.c.length){k.p=0;k.cb();}}else if(k.p>0){k.p=0;}}
}