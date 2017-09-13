var img = ['img/ok1.png', 'img/ok2.png', 'img/ok1.png', 'img/ok2.png']
//function changeImg(){} changeImg()
//实现轮播效果
var index = 0;
$.fn.changeImg = function() {
	++index;
	if(index > img.length - 1) {
		index = 0;
	}
	$('header').css({
		'background': 'url(' + img[index] + ')no-repeat',
		'background-size': 'cover'
	});
	//实现小雨滴效果
	$('.rain>button').css('background-color', 'white');
	$('.rain>button').eq(index).css('background-color', '#999');
}
//jquery函数的调用方式
var stv = setInterval($.fn.changeImg, 2000);
//暂停自动轮播
$('header').mouseover(function() {
	clearInterval(stv);
})
$('header').mouseleave(function() {
	stv = setInterval($.fn.changeImg, 2000);
})
//$.fn.changeImg();
//小雨滴单击操作
$('.rain>button').click(function() {
	index = $(this).index();
	$('header').css({
		'background': 'url(' + img[index] + ')no-repeat',
		'background-size': 'cover'
	});
})
//////jquery复制页面中的元素，同时生成一个jquery的新对象
var gdimg = ['images/gg2.jpg', 'images/gg3.jpg', 'images/gg4.jpg', 'images/gg5.jpg', 'images/gg6.jpg', 'images/gg7.jpg', 'images/gg8.jpg', 'images/gg9.jpg', 'images/gg10.jpg'];
var titleinfo = ['1000元大酬宾,泰国5日游', '2088元大酬宾,美国4日游', '1088元大酬宾,新加坡3日游', '1099元大酬宾,马国2日游', '2018元大酬宾,巴国7日游', '2068元大酬宾,国内3日游', '888元大酬宾,法国3日游', '908元大酬宾,德国6日游', '3098元大酬宾,西班牙7日游'];
$.each(gdimg, function(t) {
	var gd = $('.goods-all>.goods').eq(0).clone();
	gd.find('.left>img').attr('src', gdimg[t]);
	gd.find('.right>p').text(titleinfo[t]);
	$('.goods-all').append(gd);
});
$('.goods-all>.goods').last().css('border-bottom', 'none');

//////实现动态加载当前页面内容的效果//////
$('footer>a').click(function() {
	var t = $(this).index();
	var v = $('.mm-gg');
	v.eq(t).show().siblings('.mm-gg').hide();
	//	if(t==0){
	//		$('.home').show();
	//		$('.goods-disp').hide();
	//		$('.more').hide();
	//	}else if(t==1){
	//		$('.goods-disp').show();
	//		$('.home').hide();
	//		$('.more').hide();
	//	}else if (t==2){
	//		$('.more').show();
	//		$('.goods-disp').hide();
	//		$('.home').hide();
	//	}
})
/////实现登录窗口上下居中///////
var h = window.innerHeight; //获取浏览器窗口的高度
//找登录面板
var userLogin = $(".user-login");
var userH = userLogin.height(); //获取元素高度
var userTop = (h - userH) / 2;
//给登录面板设置样式
userLogin.css("top", userTop);
//console.log(userH);

////打开登录窗口/////////
$("#login_one").click(function() {
	userLogin.show();
})
$('.login-btn-reset').click(function() {
	$('.user-inp').val('');
	$('.pass-inp').val('');
})
//关闭登录窗口
$('.btn-close').click(function() {
	userLogin.hide();
})
//////实现登录与注册////////
var btnReg = $('.login-btn-reg');
var btnLogin = $('.login-btn-lg');
//此处为注册
btnReg.click(function() {
	var userInp = $('.user-inp').val().trim();
	var passInp = $('.pass-inp').val().trim();
	if(userInp == '' && passInp == '') {
		$('.user-info').text('亲，用户名或密码为空');
	} else {
		$.post('reg.php', {
			'user': userInp,
			'pass': passInp
		}, function(data) {
			$('.user-info').text(data);
		});
		$('.user-inp').val('');
		$('.pass-inp').val('');
	}
})
//此处为登录
btnLogin.click(function() {
	var userInp = $('.user-inp').val().trim();
	var passInp = $('.pass-inp').val().trim();
	if(userInp == '' && passInp == '') {
		$('.user-info').text('亲，用户名或密码为空');
	} else {
		$.post('log.php', {
			'user': userInp,
			'pass': passInp
		}, function(data) {
			if(data=='ok'){
				$('.carts-right>button').show();
				userLogin.hide();
			}else{
			$('.user-info').text(data);
			$('.user-inp').val('');
			$('.pass-inp').val('');}
		});
	}
})