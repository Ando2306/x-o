'use strict'

let d = document.querySelectorAll('.wrapper > .container > .d');
let p1 = document.querySelector('.p1');
let btn1 = document.querySelector('.btn1');
let t = true;

for(let i=0; i<d.length; i++){
	d[i].addEventListener('click', f1)
}




function f1(){
	if(t){
		this.innerHTML='x';
		this.removeEventListener('click', f1);
		t = false;
	}
	else{
		this.innerHTML='o';
		this.removeEventListener('click', f1);
		t = true;
	}

	if(d[0].innerHTML == 'x' && d[1].innerHTML == 'x' && d[2].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}

	else if(d[3].innerHTML == 'x' && d[4].innerHTML == 'x' && d[5].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[6].innerHTML == 'x' && d[7].innerHTML == 'x' && d[8].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[0].innerHTML == 'x' && d[3].innerHTML == 'x' && d[6].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[1].innerHTML == 'x' && d[4].innerHTML == 'x' && d[7].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[2].innerHTML == 'x' && d[5].innerHTML == 'x' && d[8].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[0].innerHTML == 'x' && d[4].innerHTML == 'x' && d[8].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[2].innerHTML == 'x' && d[4].innerHTML == 'x' && d[6].innerHTML == 'x'){
		p1.innerHTML = 'Haxtec X-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}







	else if(d[0].innerHTML == 'o' && d[1].innerHTML == 'o' && d[2].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}

	else if(d[3].innerHTML == 'o' && d[4].innerHTML == 'o' && d[5].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}

	else if(d[6].innerHTML == 'o' && d[7].innerHTML == 'o' && d[8].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}

	else if(d[0].innerHTML == 'o' && d[3].innerHTML == 'o' && d[6].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[1].innerHTML == 'o' && d[4].innerHTML == 'o' && d[7].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[2].innerHTML == 'o' && d[5].innerHTML == 'o' && d[8].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[0].innerHTML == 'o' && d[4].innerHTML == 'o' && d[8].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	}
	else if(d[2].innerHTML == 'o' && d[4].innerHTML == 'o' && d[6].innerHTML == 'o'){
		p1.innerHTML = 'Haxtec o-y';
		for(let i=0; i<d.length; i++){
			d[i].removeEventListener('click', f1)
		}
	 }
			
}
	



let cont=document.querySelector('.container')
console.log(cont)
cont.style.display = 'none';

btn1.onclick=function(){
p1.innerHTML=''
	for(let i=0; i < d.length; i++){
		d[i].addEventListener('click', f1);
		d[i].innerHTML = '';
	}

	cont.style.display='flex'
}

