// 页面头部
var header = document.querySelector('header');
// 页面导航
var nav = document.querySelector('nav');
// 页面内容
var section = document.querySelector('section');
// 页面内容右边文件夹显示部分
var content_show = document.querySelector('.content_show');
// 页面内容右边导航部分
var content_nav = document.querySelector('.content_nav');

	function resize(){
		// 视口的高度
		var clientH =  document.documentElement.clientHeight;
		// 设置section高度		
		section.style.height = clientH - header.offsetHeight - nav.offsetHeight + 'px';
		// 设置右边内容显示高度
		content_show.style.height = section.offsetHeight - content_nav.offsetHeight + 'px';
	}
	// 初始化设置自适应高度
	resize()
	// 浏览器自适应
    window.onresize = resize;
