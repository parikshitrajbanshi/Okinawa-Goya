// Listen HTML Document scrolling
// if scroll y-axis is greater than 0
// add class [bg-pale-cyan] to nav bar layout
// if not remove class [bg-pale-cyan] from nav bar layout
document.addEventListener('scroll', (e) => {
    let navBar = document.getElementById('nav-bar-id');
    if(window.scrollY > 0) {
        navBar.classList.add('bg-pale-cyan');
    }else{
        navBar.classList.remove('bg-pale-cyan');
    }
});