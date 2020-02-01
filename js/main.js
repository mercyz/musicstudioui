

//Navigation Scroll
const navScroll = document.querySelector('.wg-navbar');

window.addEventListener('scroll', (event)=>{
	if(window.scrollY > 475){
		navScroll.classList.add('nav-fixed')
	}
})