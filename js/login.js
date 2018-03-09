/**
 *tcmld
 *201710221525
 *登录页处理 
 */

$(function(){
	addTrim(); //支持IETRIM
	initData();
	initEvent();
});

//初始化 数据
function initData(){
	
	$("#loginID").val("");
	$("#password").val("");
	
	var username=getCookie("syxf_username");
	var pass=getCookie("syxf_pass");

	if(username!=null && username.trim().length>3){
		$("#loginID").val(username.trim());
	}
	
	if(pass!=null && pass.length==32){
		$("#password").val(pass.trim());
	}
	
}

//初始化事件
function initEvent(){
	setWinResize();
	$(window).resize(function () {
         //主页右（计算）
         setWinResize();
    });
     
	$("#loginID").bind('keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code == 13 && $("#loginID").val() != '') {
            $("#password").focus().select();
        }
    });

    $("#password").bind('keypress', function (e) {
        var code = e.keyCode || e.which;
        if (code == 13 && $("#password").val() != '') {
        	 $("#linkLogin").trigger("click");
        }
    });


    $("#linkLogin").click(function () {
         var username=$("#loginID").val().trim();
         var password=$("#password").val().trim();
         if(field_IsEmpty(username) || field_IsEmpty(password)){
        	 return;
         }
         if(password.length!=32){
        	 password=MYMD5(password).toLocaleUpperCase();
         }

         $.ajax({
 			type : "post",
 			url : "userLogin!public",
 			data : {
 				username : username,
 				password:password,
 			},
 			dataType : "json",
 			success : function(json) {
 				if(!field_IsEmpty(json)){
 					if(json.exec=="1"){
 						//保存cooke  //判断是否需要保存密码
 						if($('#i-remeber').is(':checked')) {
 							setCookie("syxf_username",username);
 							setCookie("syxf_pass",password);
 						}
 						else{
 							delCookie("syxf_username");
 							delCookie("syxf_pass");
 						}
 						
 						if(json.USERLEVEL+""=="5"){
 							window.location="admin/index.html";
 						} 
 						else{
 							window.location="admin/synew/mapindex.html";
 						}
 						
 					}
 					else{
 						//失败	
 						alert(json.msg);
 					}
 				}
 			}
 		});
         
    });

    $("#linkReset").click(function () {
    	$("#loginID").val("");
    	$("#password").val("");
    });

    $("#loginID").focus();


}

//重定义大小
function setWinResize(){
    $(".denlu").css("width", $(window).width() + "px");
    $(".denlu").css("height", $(window).height() + "px");
}