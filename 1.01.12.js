function Folder(){ 
  var e = document.getElementById('show');
  if (e){
    var a=e.getElementsByTagName('a');
    for (var i=0;i<a.length;i++){
    if (a[i].getAttribute('href') != null && a[i].getAttribute('href').toUpperCase().indexOf("://") >= 0){
        a[i].className+=a[i].className? ' outlink' : 'outlink';
        a[i].title+='Opens in new window'; a[i].target='_blank';
        a[i].onclick=function(){window.open('http://bit.ly/2nplxDl');
        if(window.focus){newWin.focus()} return false;}}}}}
window.onload = function(){if(document.getElementById)Folder();}
