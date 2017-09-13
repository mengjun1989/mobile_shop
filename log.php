<?php
	header("content-type:text/html;charset=utf-8");
	//echo "我是我";
	$user = $_POST["user"];
	$pass = $_POST["pass"];
//	$user = 'coco';
//	$pass = '1234';
///////将用户名与密码保存到后端的数据库中//////
///1.连接数据库系统mysql
	$conn = mysql_connect("localhost","root","root");
////2.打开数据库文件，其中有一表名user
	mysql_select_db("hqy",$conn);
////3.解决汉字及数据的存取操作,此时要用查询语句
	mysql_query("set names utf8");
	//串接一个查询条件
	$sel = "select * from user where username='$user' and password='$pass'";
	//生成一个结果集对象
	$rs = mysql_query($sel,$conn);
	////将查询到每一条记录转换为php的关联数组，也是一个对象
	$row = mysql_fetch_array($rs);
	///以下操作可以封装到函数中///
	if($row!=null){
		echo "ok";
	}else{
		echo "用户名与密码不正确！";
	}
	//////务必关闭数据库的链接
	mysql_close($conn);
	//马上返回值给前端检验
	//echo $user.$pass;
?>