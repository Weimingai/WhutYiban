
/*var sousuok=document.getElementById("sousuok");
sousuok.style.display = "none";
	
var statu=false;
var bt=document.getElementById("sousuo");
bt.onclick=function(){
	var sousuok=document.getElementById("sousuok");
	if(!statu)
	{
		sousuok.style.display = "block";
		statu=true;
	}
	else{
		sousuok.style.display = "none";
		statu=false;
	}
}
*/
/*
var zhuangtai=false;
		//显示搜索框
        function showsearch(){ 
		var dropBox1 = document.getElementById("sousuok");		
		dropBox1.style.display = "block";
		//$("#displays").animate({width:"+200px"}, 5000);
		zhuangtai=true;
        }
        //隐藏搜索框
        function hidesearch(){  
		var dropBox2 = document.getElementById("sousuok");
		dropBox2.style.display = "none";
		zhuangtai=false;
		}

function changesearch(){
			if(zhuangtai)
				hidesearch();
			else{
				showsearch();
				}
		}
		*/
		function changesearch() {
            var divDisp = document.getElementById("sousuok").style.display;
            if (divDisp == "block") {
                document.getElementById("sousuok").style.display = "none";
            } else {
                document.getElementById("sousuok").style.display = "block";
            }
        }
		function changexuanze() {
			var d=false;
			if(!d){
				var a=document.getElementById("context");
				a.classList.add("blur");
			}
			else{
				var a=document.getElementById("context");
				a.classList.remove("blur");
			}	
			
            var divDisp = document.getElementById("zhezhao").style.display;
            if (divDisp == "block") {
                document.getElementById("zhezhao").style.display = "none";
            } else {
                document.getElementById("zhezhao").style.display = "block";
            }
			
        }
	
		
		