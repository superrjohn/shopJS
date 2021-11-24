/*hot_sell輪播圖*/
window.addEventListener('load',function(){
	let hotImg_ul=document.querySelector('.hotSell_img')
	let tab_item=document.querySelector('.tab_item')
	let hotImg_li=hotImg_ul.querySelectorAll('li')
	let hotImgWidth=hotImg_li[0].offsetWidth;
	let index=0;
	let flag=true;
	/*根據圖片有幾張,盒子就有多大*/
	hotImg_ul.style.width=hotImgWidth * hotImg_li.length+'px';
	let arrow_l=document.querySelector('.arrow-l')
	let arrow_r=document.querySelector('.arrow-r')
	/*滑鼠移進輪播圖左右箭頭才顯示*/
	tab_item.addEventListener('mouseenter',function(){
		/*去除點擊跟輪播圖重疊*/
		clearInterval(timer);
			arrow_l.style.display='block';
			arrow_r.style.display='block';})
		
		tab_item.addEventListener('mouseleave',function(){
				/*重新啟動輪播圖*/
				timer=setInterval(function(){
					arrow_r.click();
					},2000)
			arrow_l.style.display='none';
			arrow_r.style.display='none';})
		
	/*自動生成小圓圈*/
	let circle=document.querySelector('.circle')
	
		for(let i=0;i<hotImg_li.length;i++){
			let circle_li=document.createElement('li');
			circle.appendChild(circle_li);
	/*為每個小圓圈增加點擊事件*/
			circle.children[i].addEventListener('click',function(){
				let moveX=-hotImgWidth * i;
				hotImg_ul.style.transition='all .4s';
				hotImg_ul.style.transform='translateX('+moveX+'px)';
					/*當前選中的小圓圈*/	
					for(let i=0;i<circle.children.length;i++){
					circle.children[i].className='';}
					circle.children[i].className='current';
				index=i;
			})
			
		}	
	/*當前選中的小圓圈*/
	circle.children[0].className='current';
	
	/*按右箭頭移動圖片*/
	  //let hotSell_li=document.createElement('li');
	  //hotSell_li.innerHTML='<a href="JavaScript:;"><img src="img/hotSell_1.jpg"></a>';
	  //hotImg_ul.appendChild(hotSell_li);
	
	//function abc(obj,cir){
	//	if(flag){
	//		 flag=false;
	//		index++;
	//    	let moveX=-hotImgWidth * index;
    //    	if(index>=4){index=0;
    //    		obj.style.transition='none';
    //    		obj.style.transform='translateX(0px)';
    //    		flag=true;}
    //    	else{
    //    		obj.style.transition='all .4s';
	//    	 obj.style.transform='translateX('+moveX+'px)';}
	//     }
	//    	
	//    	/*右箭頭當前選中的小圓圈*/
	//    	for(let i=0;i<cir.children.length;i++){
	//    	cir.children[i].className='';}
	//		cir.children[index].className='current';
	//}
	
	//arrow_r.addEventListener('click',function(){
	//	abc(hotImg_ul,circle)
	//})
	
	arrow_r.addEventListener('click',function(){
	 /*節流法*/
	if(flag){
		 flag=false;
		index++;
		let moveX=-hotImgWidth * index;
		if(index>=4){index=0;
			hotImg_ul.style.transition='none';
			hotImg_ul.style.transform='translateX(0px)';
			flag=true;}
		else{
			hotImg_ul.style.transition='all .4s';
		hotImg_ul.style.transform='translateX('+moveX+'px)';}
	 }
		
		/*右箭頭當前選中的小圓圈*/
		for(let i=0;i<circle.children.length;i++){
		circle.children[i].className='';}
		circle.children[index].className='current';
	})
	 /*節流法*/
	hotImg_ul.addEventListener('transitionend',function(){	
	flag=true;
	}) 
	
	/*按左箭頭移動圖片*/
	arrow_l.addEventListener('click',function(){
	/*節流法*/	 
	 if(flag){
		 flag=false;
		index--;
		let moveX=-hotImgWidth * index;
		if(index<0){index=3;
			hotImg_ul.style.transition='none';
			hotImg_ul.style.transform='translateX(-2100px)';
			flag=true;}
		else{
			hotImg_ul.style.transition='all .4s';
			hotImg_ul.style.transform='translateX('+moveX+'px)';}
	   }
		/*左箭頭當前選中的小圓圈*/
		for(let i=0;i<circle.children.length;i++){
		circle.children[i].className='';}
		circle.children[index].className='current';
	})
	/*節流法*/
	hotImg_ul.addEventListener('transitionend',function(){	
	flag=true;
	})
	
	/*輪播圖*/
	let timer=setInterval(function(){
		arrow_r.click();
	},2000)
/*內容*/

let tab=document.querySelector('.tab')
	let tab_list=tab.querySelectorAll('.tab_list');
	let nn=document.querySelectorAll('.n');
	
	for(let i=0;i<tab_list.length;i++){
		
		tab_list[i].addEventListener('click',function(){
			flag=true;
			for(let i=0;i<tab_list.length;i++){
			nn[i].style.display='none';}
			nn[i].style.display='block';
			
			console.log(flag)
			})
		}  
	
})