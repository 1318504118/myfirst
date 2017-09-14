	var res = new RegExp(/^[A-Za-z0-9]+$/);
	var res1 = new RegExp(/^[A-Za-z0-9]{6,10}$/);
	$('#submit1').click(function(){
	if($('#username').val() ==''){
		$('.form-warning').html('不能为空');
		$('.form-warning').css('display','block');	
		return false ;
	}else if (!res.test($('#username').val())){
		$('.form-warning').html('请正确输入账号');
		$('.form-warning').css('display','block');
		return false;
	}else if(!res1.test($('#username').val())){
		$('.form-warning').html('请输入6到10位');
		$('.form-warning').css('display','block');
		return false;
	}else if($('#password').val() =''){
		$('.form-warning').html('密码不能为空');
		$('.form-warning').css('display','block');
		return false;
	}
});