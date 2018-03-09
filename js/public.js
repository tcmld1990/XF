/**
 *  建立一个函数库 用来 公用
 *  20151120
 *  tcmld
 * */


/**
 * 对文本款得到焦点和失去焦点 做一个默认值判断
 * tclass 类名
 * str 默认值
 */

function setTextFocusBlurDefault(tclass,str)
{
	$("."+tclass).focus(function(){
		if($(this).val()==str)
	    {
			$(this).val("");
	    }
	}).blur(function(){
		if($(this).val()=="")
	    {
			$(this).val(str);
	    }
	});
};

/**
 * 弹出对话框
 * stitle 对话框标题
 * PromptContent 提示内容
 * iconName 图片展示
 */
function PromptDialog(sTitle,PromptContent,iconName){
		var dialog = art.dialog({
		    title: sTitle,
		    content:PromptContent,
		    icon:iconName,
		    ok: function(){
		        return true;
		    }
		});
};


/**
 * 写cookies
 * name 键
 * value 值
 */
function setCookie(name,value)
{
var Days = 7;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
};
/**
 * 取cookies
 * name 键
 */
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
};
/**
 * 删cookies
 * name 键
 */
function delCookie(name)
{
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval=getCookie(name);
if(cval!=null)
document.cookie= name + "="+cval+";expires="+exp.toGMTString();
};

/**
 *  随机函数 产生随机数
*/
function getRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}; 


/**
 *  判断是否为空 或者 为null
 */
function field_IsEmpty(field)
{
   if(field==null || $.trim(field)=="" || field=="null" || field=="NULL")
	   return true;
   else
	   return false;
}

/**
 *  判断是否为空 或者 为null
 */
function getfield_outEmpty(field,len)
{
   if(field==null || $.trim(field)=="")
	   return "";
   else{
	   if(len!=null){
		   if(field.length>len){
			   field=field.substr(0,len)+"...";
		   }
	   }
   }
   return field;
}

/**
 *  判断是否为空 或者 为null
 */
function getfield_iszero(field)
{
   if(field==null || $.trim(field)=="")
	   return 0;
   else
	   return field;
}


/**
 * 邮箱格式验证
 */
function getOkEmail(email){
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    return myreg.test(email);
}


/**
* 获取网页参数
*/
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    
    var fen=date.getMinutes();
    if (fen*1 >= 0 && fen*1 <= 9) {
    	fen = "0" + fen;
    }
    
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 +fen;
    return currentdate;
}

//获取当天日期
function getNowDayDate(days){
	if(days==null) days=0;
	var date = new Date();
	date.setDate(date.getDate()+days);
	var seperator1 = "-";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//获取当天日期
function getNowDayDate2(days){
	if(days==null) days=0;
	var date = new Date();
	date.setDate(date.getDate()+days);
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = ""+date.getFullYear()+ month + strDate;
    return currentdate;
}

function getNowHHMMDate(){
	var d=new Date();
	var h=d.getHours(); 
	var min=d.getMinutes(); 
	return ""+getZeroFirst(h)+getZeroFirst(min);
}

var MYMD5 = function (string) { 
	 
	function RotateLeft(lValue, iShiftBits) { 
	 return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits)); 
	} 
	 
	function AddUnsigned(lX,lY) { 
	 var lX4,lY4,lX8,lY8,lResult; 
	 lX8 = (lX & 0x80000000); 
	 lY8 = (lY & 0x80000000); 
	 lX4 = (lX & 0x40000000); 
	 lY4 = (lY & 0x40000000); 
	 lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF); 
	 if (lX4 & lY4) { 
	 return (lResult ^ 0x80000000 ^ lX8 ^ lY8); 
	 } 
	 if (lX4 | lY4) { 
	 if (lResult & 0x40000000) { 
	  return (lResult ^ 0xC0000000 ^ lX8 ^ lY8); 
	 } else { 
	  return (lResult ^ 0x40000000 ^ lX8 ^ lY8); 
	 } 
	 } else { 
	 return (lResult ^ lX8 ^ lY8); 
	 } 
	} 
	 
	function F(x,y,z) { return (x & y) | ((~x) & z); } 
	function G(x,y,z) { return (x & z) | (y & (~z)); } 
	function H(x,y,z) { return (x ^ y ^ z); } 
	function I(x,y,z) { return (y ^ (x | (~z))); } 
	 
	function FF(a,b,c,d,x,s,ac) { 
	 a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac)); 
	 return AddUnsigned(RotateLeft(a, s), b); 
	}; 
	 
	function GG(a,b,c,d,x,s,ac) { 
	 a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac)); 
	 return AddUnsigned(RotateLeft(a, s), b); 
	}; 
	 
	function HH(a,b,c,d,x,s,ac) { 
	 a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac)); 
	 return AddUnsigned(RotateLeft(a, s), b); 
	}; 
	 
	function II(a,b,c,d,x,s,ac) { 
	 a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac)); 
	 return AddUnsigned(RotateLeft(a, s), b); 
	}; 
	 
	function ConvertToWordArray(string) { 
	 var lWordCount; 
	 var lMessageLength = string.length; 
	 var lNumberOfWords_temp1=lMessageLength + 8; 
	 var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64; 
	 var lNumberOfWords = (lNumberOfWords_temp2+1)*16; 
	 var lWordArray=Array(lNumberOfWords-1); 
	 var lBytePosition = 0; 
	 var lByteCount = 0; 
	 while ( lByteCount < lMessageLength ) { 
	 lWordCount = (lByteCount-(lByteCount % 4))/4; 
	 lBytePosition = (lByteCount % 4)*8; 
	 lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition)); 
	 lByteCount++; 
	 } 
	 lWordCount = (lByteCount-(lByteCount % 4))/4; 
	 lBytePosition = (lByteCount % 4)*8; 
	 lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition); 
	 lWordArray[lNumberOfWords-2] = lMessageLength<<3; 
	 lWordArray[lNumberOfWords-1] = lMessageLength>>>29; 
	 return lWordArray; 
	}; 
	 
	function WordToHex(lValue) { 
	 var WordToHexValue="",WordToHexValue_temp="",lByte,lCount; 
	 for (lCount = 0;lCount<=3;lCount++) { 
	 lByte = (lValue>>>(lCount*8)) & 255; 
	 WordToHexValue_temp = "0" + lByte.toString(16); 
	 WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2); 
	 } 
	 return WordToHexValue; 
	}; 
	 
	function Utf8Encode(string) { 
	 string = string.replace(/\r\n/g,"\n"); 
	 var utftext = ""; 
	 
	 for (var n = 0; n < string.length; n++) { 
	 
	 var c = string.charCodeAt(n); 
	 
	 if (c < 128) { 
	  utftext += String.fromCharCode(c); 
	 } 
	 else if((c > 127) && (c < 2048)) { 
	  utftext += String.fromCharCode((c >> 6) | 192); 
	  utftext += String.fromCharCode((c & 63) | 128); 
	 } 
	 else { 
	  utftext += String.fromCharCode((c >> 12) | 224); 
	  utftext += String.fromCharCode(((c >> 6) & 63) | 128); 
	  utftext += String.fromCharCode((c & 63) | 128); 
	 } 
	 
	 } 
	 
	 return utftext; 
	}; 
	 
	var x=Array(); 
	var k,AA,BB,CC,DD,a,b,c,d; 
	var S11=7, S12=12, S13=17, S14=22; 
	var S21=5, S22=9 , S23=14, S24=20; 
	var S31=4, S32=11, S33=16, S34=23; 
	var S41=6, S42=10, S43=15, S44=21; 
	 
	string = Utf8Encode(string); 
	 
	x = ConvertToWordArray(string); 
	 
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476; 
	 
	for (k=0;k<x.length;k+=16) { 
	 AA=a; BB=b; CC=c; DD=d; 
	 a=FF(a,b,c,d,x[k+0], S11,0xD76AA478); 
	 d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756); 
	 c=FF(c,d,a,b,x[k+2], S13,0x242070DB); 
	 b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE); 
	 a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF); 
	 d=FF(d,a,b,c,x[k+5], S12,0x4787C62A); 
	 c=FF(c,d,a,b,x[k+6], S13,0xA8304613); 
	 b=FF(b,c,d,a,x[k+7], S14,0xFD469501); 
	 a=FF(a,b,c,d,x[k+8], S11,0x698098D8); 
	 d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF); 
	 c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1); 
	 b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE); 
	 a=FF(a,b,c,d,x[k+12],S11,0x6B901122); 
	 d=FF(d,a,b,c,x[k+13],S12,0xFD987193); 
	 c=FF(c,d,a,b,x[k+14],S13,0xA679438E); 
	 b=FF(b,c,d,a,x[k+15],S14,0x49B40821); 
	 a=GG(a,b,c,d,x[k+1], S21,0xF61E2562); 
	 d=GG(d,a,b,c,x[k+6], S22,0xC040B340); 
	 c=GG(c,d,a,b,x[k+11],S23,0x265E5A51); 
	 b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA); 
	 a=GG(a,b,c,d,x[k+5], S21,0xD62F105D); 
	 d=GG(d,a,b,c,x[k+10],S22,0x2441453); 
	 c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681); 
	 b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8); 
	 a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6); 
	 d=GG(d,a,b,c,x[k+14],S22,0xC33707D6); 
	 c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87); 
	 b=GG(b,c,d,a,x[k+8], S24,0x455A14ED); 
	 a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905); 
	 d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8); 
	 c=GG(c,d,a,b,x[k+7], S23,0x676F02D9); 
	 b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A); 
	 a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942); 
	 d=HH(d,a,b,c,x[k+8], S32,0x8771F681); 
	 c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122); 
	 b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C); 
	 a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44); 
	 d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9); 
	 c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60); 
	 b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70); 
	 a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6); 
	 d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA); 
	 c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085); 
	 b=HH(b,c,d,a,x[k+6], S34,0x4881D05); 
	 a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039); 
	 d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5); 
	 c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8); 
	 b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665); 
	 a=II(a,b,c,d,x[k+0], S41,0xF4292244); 
	 d=II(d,a,b,c,x[k+7], S42,0x432AFF97); 
	 c=II(c,d,a,b,x[k+14],S43,0xAB9423A7); 
	 b=II(b,c,d,a,x[k+5], S44,0xFC93A039); 
	 a=II(a,b,c,d,x[k+12],S41,0x655B59C3); 
	 d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92); 
	 c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D); 
	 b=II(b,c,d,a,x[k+1], S44,0x85845DD1); 
	 a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F); 
	 d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0); 
	 c=II(c,d,a,b,x[k+6], S43,0xA3014314); 
	 b=II(b,c,d,a,x[k+13],S44,0x4E0811A1); 
	 a=II(a,b,c,d,x[k+4], S41,0xF7537E82); 
	 d=II(d,a,b,c,x[k+11],S42,0xBD3AF235); 
	 c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB); 
	 b=II(b,c,d,a,x[k+9], S44,0xEB86D391); 
	 a=AddUnsigned(a,AA); 
	 b=AddUnsigned(b,BB); 
	 c=AddUnsigned(c,CC); 
	 d=AddUnsigned(d,DD); 
	} 
	 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d); 
	 
	return temp.toLowerCase(); 
	};


	function changePass(){
		

		   $("#myModalLabel").text("修改密码");
		   $("#model-btn-confirm").text("修改");
		   $("#model-btn-up").css("display","none").unbind("click");
		   $("#model-btn-confirm").unbind( "click" ); 
		   
		   var modelhtml_body="";
		   modelhtml_body+=
		   "<form> "+
		      " <div class='row form-group'> "+
			  " <div class='col-md-4 col-xs-4 col-sm-4'>"+
			  "  <p class='text-center remove-margi'> "+
			  "   <small>原密码</small> "+
			  "  </p> "+
			  "  </div>"+
			  "  <div class='col-md-6 col-xs-6 col-sm-6'>"+
			  "  	<input id='model-event-oldp' type=text class='form-control'>"+
			  "  </div>"+
			  "</div>"+
			  
			  " <div class='row form-group'> "+
			  " <div class='col-md-4 col-xs-4 col-sm-4'>"+
			  "  <p class='text-center remove-margi'> "+
			  "   <small>新密码</small> "+
			  "  </p> "+
			  "  </div>"+
			  "  <div class='col-md-6 col-xs-6 col-sm-6'>"+
			  "  	<input id='model-event-newp' type=text class='form-control'>"+
			  "  </div>"+
			  "</div>"+
			  
			  " <div class='row form-group'> "+
			  " <div class='col-md-4 col-xs-4 col-sm-4'>"+
			  "  <p class='text-center remove-margi'> "+
			  "   <small>再次输入</small> "+
			  "  </p> "+
			  "  </div>"+
			  "  <div class='col-md-6 col-xs-6 col-sm-6'>"+
			  "  	<input id='model-event-newp2' type=text class='form-control'>"+
			  "  </div>"+
			  "</div>"+
			  
			"</form>";
		   
		   
		   $("#model-show-body").html(modelhtml_body);
		   
		   //注册行为
		   
		   $("#model-btn-confirm").click(function(){
			   
			   var oldpass=$("#model-event-oldp").val().trim();
			   var newpass=$("#model-event-newp").val().trim();
			   var newpass2=$("#model-event-newp2").val().trim();
			   
			   if(field_IsEmpty(oldpass)){
				   alert("原密码不能为空");
				   return;
			   } 
			   if(field_IsEmpty(newpass)){
				   alert("新密码不能为空");
				   return;
			   }
			   if(newpass!=newpass2){
				   alert("两次密码不一致");
				   return;
			   }
			   
			   
			   oldpass=MYMD5(oldpass);
			   newpass=MYMD5(newpass);
			   newpass2=MYMD5(newpass2);
			   
			   if(user_info.password!=oldpass){
				   alert("原密码错误");
				   return;
			   }
			   
			   $.ajax({
					type : "post",
					url : "changePassword!public",
					data : {
						user_id : user_info.user_id,
						newpass : newpass,
						newpass2:newpass2,
						oldpass : oldpass
						
					},
					dataType : "json",
					success : function(json) {
						if(!field_IsEmpty(json)){
							if(json.exec=="1"){
								alert("修改密码成功，请重新登陆");
								//登陆成功 跳转
								$("#login_out").click();
							}
							else{
								//失败
							}
						}
					}
				});
		   });
		   
		   
		   
		   $('#myModal').modal({
				keyboard: true
		   });
				
		   
	}

//===================导出excel
	function export_excel(url,exportid,filename,page,pagenum,key,count,menuid,swhere){

		if(url==null || url.length==0){
			url='../LoadExcel';
		}
		if(menuid==null) menuid=exportid;
		if(swhere==null) swhere="";
		formpost(url, 
		{
			page : page,
			pagenum:pagenum,
			key : key,
			exportid:exportid,
			count:count,
			filename : filename,
			menuid:menuid,
			swhere:swhere
		});

		
	};

	function formpost(url, params) {      
	    var tempForm = document.createElement("form");      
	    tempForm.action = url;      
	    tempForm.method = "post";      
	    tempForm.style.display = "none";      
	    for (var x in params) {      
	        var opt = document.createElement("textarea");      
	        opt.name = x;      
	        opt.value = params[x];      
	        // alert(opt.name)      
	        tempForm.appendChild(opt);      
	    }      
	    document.body.appendChild(tempForm);      
	    tempForm.submit();      
	    return tempForm;      
	} 

	
	//前面没有就补0
	function getZeroFirst(str){
		if((str+"").length==1) return "0"+str;
		return str;
	}
	
	//判断字符串是否都为数字
	function checknumber(str){
		if(/^[0-9]+$/.test(str)){
			return true;
	　　　}
		return false;
	}
	
	function addTrim(){
		 String.prototype.trim = function () {
		 return this .replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
		  }
	}
	
	//全屏
	function fullScreen(){
		var docElm = document.documentElement;
		//W3C  
		if (docElm.requestFullscreen) {  
		    docElm.requestFullscreen();  
		}
		//FireFox  
		else if (docElm.mozRequestFullScreen) {  
		    docElm.mozRequestFullScreen();  
		}
		//Chrome等  
		else if (docElm.webkitRequestFullScreen) {  
		    docElm.webkitRequestFullScreen();  
		}
		//IE11
		else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		}
	}
	
	function exitFullScreen(){
		if (document.exitFullscreen) {  
		    document.exitFullscreen();  
		}  
		else if (document.mozCancelFullScreen) {  
		    document.mozCancelFullScreen();  
		}  
		else if (document.webkitCancelFullScreen) {  
		    document.webkitCancelFullScreen();  
		}
		else if (document.msExitFullscreen) {
		      document.msExitFullscreen();
		}
	}
	
	/**
     * [isFullscreen 判断浏览器是否全屏]
     * @return [全屏则返回当前调用全屏的元素,不全屏返回false]
     */
    function isFullscreen(){
        return document.fullscreenElement    ||
               document.msFullscreenElement  ||
               document.mozFullScreenElement ||
               document.webkitFullscreenElement || false;
    }