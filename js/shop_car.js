/*下拉*/
window.addEventListener('load',function(){
	let tab=document.querySelector('.tab');
	let drop=document.querySelector('.drop');
	let drop_box=document.querySelector('.drop_box');
	let tab_li=tab.querySelectorAll('li');
	let down=document.querySelector('.bi-caret-down-fill');
	let up=document.querySelector('.bi-caret-up-fill');
	
	
	
	drop.addEventListener('mouseenter',function(){
		
		down.classList.toggle('bi-caret-up-fill');
		drop_box.style.display='block';
	})
	
	drop.addEventListener('mouseleave',function(){
		
		down.classList.toggle('bi-caret-up-fill');
		drop_box.style.display='none';
	})
	
	
/*購物車*/
	let shopping_car=document.querySelector('.shopping_car');
	let shopCarCon=document.querySelector('.shopCarCon');
	let tbody=document.querySelector('tbody');
	
	let shopCarMun=shopping_car.querySelector('.shopCarMun')
	let Mun=0;
	
		/*good_item*/
		let good_item=document.querySelectorAll('.good_item');
		/*price*/
		let price=document.querySelectorAll('.price');
	
	let hot_call=document.querySelectorAll('.hot_call');
	let shopCar=document.querySelectorAll('.bi-cart-plus');
	
	
	let photo=document.querySelectorAll('.photo');
	let d=photo[1].src;
	//console.log(d);
	//shopCar_li.innerHTML='<img src='+d+'>';
	for(let index=0;index<shopCar.length;index++){
		shopCar[index].addEventListener('click',function(){
			
			let tr=document.createElement('tr');
			/*一定要放在tbody中*/
			tbody.appendChild(tr);
				/*購物車數量*/
				Mun++;
				shopCarMun.textContent=Mun;
			//let td=document.createElement('td');
			//td.innerHTML='<img src='+photo[i].src+'>';
			//tr.appendChild(td);
		for(let i=0;i<1;i++){
			let td=document.createElement('td');
			td.innerHTML='<img src='+photo[index].src+'>';
		tr.appendChild(td); }
		
		for(let i=0;i<1;i++){
			let td=document.createElement('td');
			td.innerHTML=good_item[index].innerText;
			tr.appendChild(td); }
		
		for(let i=0;i<1;i++){
			let td=document.createElement('td');
			td.innerHTML=price[index].innerText;
			tr.appendChild(td); }
			
		let td=document.createElement('td');
		td.innerHTML='<a href="JavaScript:;">刪除</a>';
		tr.appendChild(td).addEventListener('click',function(){
			tbody.removeChild(this.parentNode);
				/*購物車數量*/
				Mun--;
				shopCarMun.textContent=Mun;
				
				if(Mun==0){
				shopCarMun.style.display='none';}
				
		})
				if(Mun>0){
				shopCarMun.style.display='block';}
				
		})
		}
	
/*顯示購物車和其數量*/	
	shopCarCon.style.display='none';
	shopCarMun.style.display='none';
	
	shopping_car.addEventListener('mouseenter',function(){
		shopCarCon.style.display='block';
	})
	
	
	shopping_car.addEventListener('mouseleave',function(){
		shopCarCon.style.display='none';
	})
	
	
/*搜尋*/
	let search=document.querySelector('#form');
	let submitBtn=document.querySelector('.submitBtn');
	let search_input=document.querySelector('.search_input');
	//search.action='index.html'
	let clothing=['衣服','上衣','衣','褲子','襪子','衣褲','褲'];
	
	let girlClothes=['女生上衣','女生衣服','女褲','女鞋','女衣','女上衣','女襪','女內衣','女性衣服',
					'女','女性','女人','女人衣','女人褲','女生','女生衣服','女生衣','女衣服',];
	
	let manClothes=['男生上衣','男生衣服','男褲','男鞋','男衣','男上衣','男襪','男內衣','男性衣服',
					'男','男性','男人','男人衣','男人褲','男生','男生衣服','男生衣','男衣服'];
	
	let gymClothes=['健身','運動','運動服','運動褲','健身衣服','健身裝備','運動裝備'];
	
	search_input.addEventListener('input',function(e){
		search.addEventListener('submit',function(){
			for(let i=0;i<100;i++){
			if(e.target.value==clothing[i]){search.action='https://shopee.tw/mikekao36'; break;}
			else if(e.target.value==girlClothes[i]){search.action='https://shopee.tw/bicoz_tw'; break;}
			else if(e.target.value==manClothes[i]){search.action='https://shopee.tw/camdr?categoryId=100011&itemId=7344122263'; break;}
			else if(e.target.value==gymClothes[i]){search.action='https://shopee.tw/marium112?categoryId=100637&itemId=13813549075'; break;}
			else{search.action='https://shopee.tw/mall/search?keyword=%E7%94%B7'}}
		})
	})
})