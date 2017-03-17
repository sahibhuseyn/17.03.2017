var newsArr=["press on read more to open",'march 12th, 2013','images/01.jpeg','2 Different Styles to continue reading this. The Full page Style and In-Widget Style. This is the full page view. Check examples for the In-widget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutp [...]'];
var news_heading = document.querySelector('.news_widget_heading');
var news_date = document.querySelector('.news_widget_date');
var news_img = document.querySelector('.myimg');
var news_txt = document.querySelector('.news_widget_txt');

function widget_timer(callback,time){
	var timer = setTimeout(function(){
		callback()
		window.setTimeout(news_widget,time)
	}, time)
}
function news_widget(){
	for (var i = 0; i < newsArr.length; i++) {
		news_heading.innerHTML=newsArr[0];
		news_date.innerHTML=newsArr[1];
		news_img.setAttribute('src',newsArr[2]);
		news_txt.innerHTML=newsArr[3];
	}
}
widget_timer(news_widget,2000)