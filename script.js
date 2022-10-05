let textTag=document.querySelector('.section1 h1 ');
let text=textTag.textContent;
let splittedText=text.split('');

//zadaca

let buttonAnimatedText=document.querySelector('#gumb1');


buttonAnimatedText.addEventListener('click',()=>{

textTag.innerHTML='';
for(let i=0;i<splittedText.length;i++){
	if(splittedText[i]==" "){
		splittedText[i]="&nbsp";
	}
	textTag.innerHTML+=`<span>${splittedText[i]}</span>`;
}
	
	let k=0;
let interval=setInterval(()=>{
	let spans=textTag.querySelectorAll('span');
	let singleSpan=spans[k];

	singleSpan.className='fadeMove'
	k++;

	if(k===spans.length){
		clearInterval(interval);
	}
},50);
})



let border=document.querySelector('.border-line');
let animationWidth=50;
let smanji=document.querySelector('#gumb2');
let povecaj=document.querySelector('#gumb3');

smanji.addEventListener('click',()=>{
	animationWidth-=2;
	if(animationWidth<=0){
		animationWidth=0;
	}

	border.style.width=animationWidth + '%';
})

povecaj.addEventListener('click',()=>{
	animationWidth+=2;
	if(animationWidth>=100){
		animationWidth=100;
	}

	border.style.width=animationWidth + '%';
})

let lijevaSlika=document.querySelector('#gumb4');
let desnaSlika=document.querySelector('#gumb5');
let leftImage=document.querySelector('.slideFromLeft');
let rightImage=document.querySelector('.slideFromRight');
let images=document.querySelector('.section2 .images');

lijevaSlika.addEventListener('click',()=>{
leftImage.classList.add('animated');
})

desnaSlika.addEventListener('click',()=>{
	rightImage.classList.add('animated');
})

window.onscroll=()=>{

	/*if(this.oldScroll>this.scrollY){
		animationWidth-=2;
	}else{
		animationWidth+=2;
	}

	if(animationWidth>=100){
		animationWidth=100;
	}else if(animationWidth<=0){
		animationWidth=0;
	}

	border.style.width=animationWidth + '%';

	this.oldScroll=this.scrollY;
*/

	/*let leftImage=document.querySelector('.slideFromLeft');
	let rightImage=document.querySelector('.slideFromRight');
	let images=document.querySelector('.section2 .images');
	let sectionPosition=images.getBoundingClientRect().top;
	let screenPostion=window.innerHeight;

	console.log(sectionPosition);
	console.log(screenPostion);

	if(sectionPosition<screenPostion){

	leftImage.classList.add('animated');
	rightImage.classList.add('animated');
	}*/
}



