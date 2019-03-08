/*
var zhuangtai=false;
		//显示搜索框
        function showsearch(){ 
		var dropBox1 = document.getElementById("displays");		
		dropBox1.style.display = "block";
		//$("#displays").animate({width:"+200px"}, 5000);
		zhuangtai=true;
        }
        //隐藏搜索框
        function hidesearch(){  
		var dropBox2 = document.getElementById("displays");
		dropBox2.style.display = "none";
		zhuangtai=false;
		}
		//显示放大镜
		function shoufangda(){  
		var dropBox3 = document.getElementById("search");
		dropBox3.style.display = "none"; 
		zhuangtai=false;
		}
		//隐藏放大镜
		function hidefangda(){  
		var dropBox4 = document.getElementById("search");
		dropBox4.style.display = "none"; 
		zhuangtai=false;
		}		
		//图片点击事件
		function changesearch(){
			if(zhuangtai)
				;
			else{
				showsearch();
				hidefangda();
				}
		}
*/

		//var zhuangtai=false;
		/*
		function showsearch(){ 
		var dropBox1 = document.getElementById("displays");		
		dropBox1.classList.add ("sud");
		//$("#displays").animate({width:"+200px"}, 5000);
		zhuangtai=true;
        }
        //隐藏搜索框
        function hidesearch(){  
		var dropBox2 = document.getElementById("displays");
		dropBox2.classList.remove("sud");
		zhuangtai=false;
		}*/
		function changesearch(){
		var dropBox2 = document.getElementById("displays");
		dropBox2.classList.add("sud");
		
		/*	if(!zhuangtai)
				;
			else{
				showsearch();
				//hidefangda();
				}
				*/
		}

	
		/*
		//点击其他地方收回搜索框
		 // 第一步：点击任何地方都触发事件
		document.onClick = function(){
			if(zhuangtai){
			hidesearch();
			shoufangda
			zhuangtai=false;
			}
		}
		// 第二步： 将某元素的位置设为不可点击；(此部分点击不会触发点击事件)
		document.getElementById("#displays").onClick = function(){
			event.stopPropagation();
		}
		*/