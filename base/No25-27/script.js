	var select=document.getElementById("select");
	var btn=document.getElementById("btn");
	var time=null;
	function yearselect(){
		var yearselect=document.getElementById("year-select");
		for(var i = 1901; i<=2100;i++){
	    	var option = document.createElement('option');
		    option.setAttribute('value',i);
		    option.innerHTML = i;
		    yearselect.appendChild(option);
		}
		return yearselect.value;
	}
	function monthselect(){
		var monthselect=document.getElementById("month-select");
		for(var i = 2; i<=12;i++){
	    	var option = document.createElement('option');
		    option.setAttribute('value',i);
		    option.innerHTML = i;
		    monthselect.appendChild(option);
		}
		return monthselect.value;
	}
	function dayselect(e){
		var dayselect=document.getElementById("day-select");
		if(Number(dayselect.length)<e)
		{
			for(var i = Number(dayselect.length); i<e;i++){
	    		var option = document.createElement('option');
		    	option.setAttribute('value',i+1);
		    	option.innerHTML = i+1;
		    	dayselect.appendChild(option);
			}
		}
		if(Number(dayselect.length)>e)
			for(var i = e; i<Number(dayselect.length);i++){
				dayselect.removeChild(dayselect.lastChild);
			}
		return dayselect.value;
	}
	function hourselect(){
		var hourselect=document.getElementById("hour-select");
		for(var i = 2; i<=24;i++){
	    	var option = document.createElement('option');
		    option.setAttribute('value',i);
		    option.innerHTML = i;
		    hourselect.appendChild(option);
		}
		return hourselect.value;
	}
	function miniteselect(){
		var miniteselect=document.getElementById("minite-select");
		for(var i = 2; i<=60;i++){
	    	var option = document.createElement('option');
		    option.setAttribute('value',i);
		    option.innerHTML = i;
		    miniteselect.appendChild(option);
		}
		return miniteselect.value;
	}
	function secondselect(){
		var secondselect=document.getElementById("second-select");
		for(var i = 2; i<=60;i++){
	    	var option = document.createElement('option');
		    option.setAttribute('value',i);
		    option.innerHTML = i;
		    secondselect.appendChild(option);
		}
		return secondselect.value;
	}
	select.onclick=function(){
		var year=document.querySelector("#year-select").value;
		var month=document.querySelector("#month-select").value;
		if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
			{
				if(month == 4 || month == 6 ||month == 9 ||month == 11)
				{
					dayselect(30);
				}
				if(month==2)
				{
					dayselect(29);
				}
				if(month == 1 || month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12)
				{
					dayselect(31);
				}
			}
		else 
		{
			if(month == 4 || month == 6 ||month == 9 ||month == 11)
			{
				dayselect(30);
			}
			if(month==2)
			{
				dayselect(28);
			}
			if(month == 1 || month == 3 ||month == 5 ||month == 7 ||month == 8 ||month == 10 ||month == 12)
			{
				dayselect(31);
			}
		}	
	}
	btn.onclick=function go(e){
		clearInterval(time);
		var doc=document.getElementById("result-wrapper");
		var v=yearselect()+"-"+monthselect()+"-"+dayselect(31)+" "+hourselect()+":"+miniteselect()+":"+secondselect();
		var date1=new Date();var date2=new Date(v);
		time =setInterval(function(){leftTimer(date2)}, 1000);
		
	}
	function leftTimer(e) {
      var leftTime = (new Date(e)) - new Date(); //计算剩余的毫秒数
      var leftTime1=Math.abs(leftTime);
      var days = parseInt(leftTime1 / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
      var hours = parseInt(leftTime1 / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
      var minutes = parseInt(leftTime1 / 1000 / 60 % 60, 10);//计算剩余的分钟
      var seconds = parseInt(leftTime1 / 1000 % 60, 10);//计算剩余的秒数
      days = checkTime(days);
      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
      if (days >= 0 || hours >= 0 || minutes >= 0 || seconds >= 0)
      {
      	if(leftTime>0)
      		document.getElementById("result-wrapper").innerHTML ="现在距离 "+yearselect()+"-"+monthselect()+"-"+dayselect(31)+" "+hourselect()+":"+miniteselect()+":"+secondselect()+" 还有"+ days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
      	if(leftTime<0)
      		document.getElementById("result-wrapper").innerHTML ="现在距离 "+yearselect()+"-"+monthselect()+"-"+dayselect(31)+" "+hourselect()+":"+miniteselect()+":"+secondselect()+" 已经过去" +days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
      }
      if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
      clearInterval(time);
      }
    }
    function checkTime(i) { //将0-9的数字前面加上0，例1变为01
      if (i < 10) {
      i = "0" + i;
      }
      return i;
     }
	yearselect();
	monthselect();
	dayselect(31);
	hourselect();
	miniteselect();
	secondselect();