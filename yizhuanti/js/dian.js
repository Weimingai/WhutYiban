var name1="dian";
var name2=3;
name=name1+name2;
var x=document.getElementById(name);
x.classList.add("nowdian");
var y=document.getElementById(name2);
y.classList.add("zhebi2");

//setInterval("dianchange()","3000");
	

function dianchange(){
	if(name2<5)
	{
		name=name1+name2;
		var x=document.getElementById(name);
		x.classList.remove("nowdian");
		name2++;
		name=name1+name2;
		var x=document.getElementById(name);
		x.classList.add("nowdian");
	}
	else
	{
		name=name1+name2;
		var x=document.getElementById(name);
		x.classList.remove("nowdian");
		name2=1;
		name=name1+name2;
		var x=document.getElementById(name);
		x.classList.add("nowdian");
	}
}
