$(function(){
	$.ajax({
		type:"post",
		url:"/user/upgrade/isTrialByJson",
		data:"",
		success:function(data){
			if(data=='1')
				$("#trial").attr("disabled",true);
		}
	})
	$("#trial").click(function(){
		if(confirm('确定免费试用?每个用户ID只有一次免费试用机会。')==true){
		} 
		else {
			return;
		}
		$("#trial").attr("disabled",true);
		$.ajax({
			type:"post",
			url:"/user/upgrade/trial",
			data:"",
			success:function(data){
				alert(data)
			}
		})
	})
	$("#price1").click(function(){
		$('#price').html('2800元');
	})
		$("#price2").click(function(){
		$('#price').html('5000元');
	})
})