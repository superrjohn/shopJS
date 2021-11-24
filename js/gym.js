/*gym輪播圖*/
window.addEventListener('load',function(){
	let gymImg_ul=document.querySelector('.gym_img')
	let gym_item=document.querySelector('.gym_item')
	let gymImg_li=gymImg_ul.querySelectorAll('li')
	let gymImgWidth=gymImg_li[0].offsetWidth;
	let index=0;
	let flag=true;
	/*根據圖片有幾張,盒子就有多大*/
	gymImg_ul.style.width=gymImgWidth * gymImg_li.length+'px';
	let arrow_l=gym_item.querySelector('.arrow-l')
	let arrow_r=gym_item.querySelector('.arrow-r')
	/*滑鼠移進輪播圖左右箭頭才顯示*/
	gym_item.addEventListener('mouseenter',function(){
		/*去除點擊跟輪播圖重疊*/
		clearInterval(timer);
			arrow_l.style.display='block';
			arrow_r.style.display='block';})
		
		gym_item.addEventListener('mouseleave',function(){
				/*重新啟動輪播圖*/
				timer=setInterval(function(){
					arrow_r.click();
					},2000)
			arrow_l.style.display='none';
			arrow_r.style.display='none';})
		
	/*自動生成小圓圈*/
	let circle4=document.querySelector('.circle4')
	
		for(let i=0;i<gymImg_li.length;i++){
			let circle_li=document.createElement('li');
			circle4.appendChild(circle_li);
	/*為每個小圓圈增加點擊事件*/
			circle4.children[i].addEventListener('click',function(){
				let moveX=-gymImgWidth * i;
				gymImg_ul.style.transition='all .4s';
				gymImg_ul.style.transform='translateX('+moveX+'px)';
					/*當前選中的小圓圈*/	
					for(let i=0;i<circle4.children.length;i++){
					circle4.children[i].className='';}
					circle4.children[i].className='current';
				index=i;
			})
			
		}	
	/*當前選中的小圓圈*/
	circle4.children[0].className='current';
	
	/*按右箭頭移動圖片*/
	  //let hotSell_li=document.createElement('li');
	  //hotSell_li.innerHTML='<a href="JavaScript:;"><img src="img/hotSell_1.jpg"></a>';
	  //hotImg_ul.appendChild(hotSell_li);
	  
	arrow_r.addEventListener('click',function(){
	/*節流法*/
	if(flag){
		 flag=false;
		index++;
		let moveX=-gymImgWidth * index;
		if(index>=4){index=0;
			gymImg_ul.style.transition='none';
			gymImg_ul.style.transform='translateX(0px)';
			flag=true;}
		else{
			gymImg_ul.style.transition='all .4s';
		gymImg_ul.style.transform='translateX('+moveX+'px)';}
	 }
		
		/*右箭頭當前選中的小圓圈*/
		for(let i=0;i<circle4.children.length;i++){
		circle4.children[i].className='';}
		circle4.children[index].className='current';
	})
	/*節流法*/
	gymImg_ul.addEventListener('transitionend',function(){	
	flag=true;
	})
	/*按左箭頭移動圖片*/
	arrow_l.addEventListener('click',function(){
	/*節流法*/	 
	 if(flag){
		 flag=false;
		index--;
		let moveX=-gymImgWidth * index;
		if(index<0){index=3;
			gymImg_ul.style.transition='none';
			gymImg_ul.style.transform='translateX(-2100px)';
			flag=true;}
		else{
			gymImg_ul.style.transition='all .4s';
			gymImg_ul.style.transform='translateX('+moveX+'px)';}
	   }
		/*左箭頭當前選中的小圓圈*/
		for(let i=0;i<circle4.children.length;i++){
		circle4.children[i].className='';}
		circle4.children[index].className='current';
	})
	/*節流法*/
	gymImg_ul.addEventListener('transitionend',function(){	
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
			nn[i].style.display='none';}
	
	nn[0].style.display='block';
	
	
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