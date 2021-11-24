/*girl輪播圖*/
window.addEventListener('load',function(){
	let girlImg_ul=document.querySelector('.girlSell_img')
	let girl_item=document.querySelector('.girl_item')
	let girlImg_li=girlImg_ul.querySelectorAll('li')
	let girlImgWidth=girlImg_li[0].offsetWidth;
	let index=0;
	let flag=true;
	/*根據圖片有幾張,盒子就有多大*/
	girlImg_ul.style.width=girlImgWidth * girlImg_li.length+'px';
	let arrow_l=girl_item.querySelector('.arrow-l')
	let arrow_r=girl_item.querySelector('.arrow-r')
	/*滑鼠移進輪播圖左右箭頭才顯示*/
	girl_item.addEventListener('mouseenter',function(){
		/*去除點擊跟輪播圖重疊*/
		clearInterval(timer);
			arrow_l.style.display='block';
			arrow_r.style.display='block';})
		
		girl_item.addEventListener('mouseleave',function(){
				/*重新啟動輪播圖*/
				timer=setInterval(function(){
					arrow_r.click();
					},2000)
			arrow_l.style.display='none';
			arrow_r.style.display='none';})
		
	/*自動生成小圓圈*/
	let circle2=document.querySelector('.circle2')
	
		for(let i=0;i<girlImg_li.length;i++){
			let circle_li=document.createElement('li');
			circle2.appendChild(circle_li);
	/*為每個小圓圈增加點擊事件*/
			circle2.children[i].addEventListener('click',function(){
				let moveX=-girlImgWidth * i;
				girlImg_ul.style.transition='all .4s';
				girlImg_ul.style.transform='translateX('+moveX+'px)';
					/*當前選中的小圓圈*/	
					for(let i=0;i<circle2.children.length;i++){
					circle2.children[i].className='';}
					circle2.children[i].className='current';
				index=i;
			})
			
		}	
	/*當前選中的小圓圈*/
	circle2.children[0].className='current';
	
	/*按右箭頭移動圖片*/
	  //let hotSell_li=document.createElement('li');
	  //hotSell_li.innerHTML='<a href="JavaScript:;"><img src="img/hotSell_1.jpg"></a>';
	  //hotImg_ul.appendChild(hotSell_li);
	  
	arrow_r.addEventListener('click',function(){
	/*節流法*/
	if(flag){
		 flag=false;
		index++;
		let moveX=-girlImgWidth * index;
		if(index>=4){index=0;
			girlImg_ul.style.transition='none';
			girlImg_ul.style.transform='translateX(0px)';
			flag=true;}
		else{
			girlImg_ul.style.transition='all .4s';
		girlImg_ul.style.transform='translateX('+moveX+'px)';}
	 }
		
		/*右箭頭當前選中的小圓圈*/
		for(let i=0;i<circle2.children.length;i++){
		circle2.children[i].className='';}
		circle2.children[index].className='current';
	})
	/*節流法*/
	girlImg_ul.addEventListener('transitionend',function(){	
	flag=true;
	})
	/*按左箭頭移動圖片*/
	arrow_l.addEventListener('click',function(){
	/*節流法*/	 
	 if(flag){
		 flag=false;
		index--;
		let moveX=-girlImgWidth * index;
		if(index<0){index=3;
			girlImg_ul.style.transition='none';
			girlImg_ul.style.transform='translateX(-2100px)';
			flag=true;}
		else{
			girlImg_ul.style.transition='all .4s';
			girlImg_ul.style.transform='translateX('+moveX+'px)';}
	   }
		/*左箭頭當前選中的小圓圈*/
		for(let i=0;i<circle2.children.length;i++){
		circle2.children[i].className='';}
		circle2.children[index].className='current';
	})
	/*節流法*/
	girlImg_ul.addEventListener('transitionend',function(){	
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