import 'dart:html';

void main(){
  Element head = querySelector('header');
  var currScroll;
  var prevScroll;
  var headerImg = querySelector('#headerImg');
  prevScroll = 0;
  updateScrollInfo([_]) {
    currScroll = window.scrollY;


    //Interchange 50 with your choice of pixels

    if (currScroll > prevScroll && window.scrollY > 50) {
      head.style.height = '150px';
      prevScroll = currScroll;
      headerImg.classes.add('small');
    } else if (prevScroll > currScroll + 25 && window.scrollY < 300) {
      head.style.height = '300px';
      prevScroll = currScroll;
      headerImg.classes.remove('small');
    }
  }

  window.onScroll.listen((e) => updateScrollInfo());
  window.onResize.listen((e) => updateScrollInfo());


}