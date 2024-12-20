function menuActive(){ 

    const navMenu = document.getElementById('nav-menu');
    const links = navMenu.getElementsByTagName('a');
    
    for (let i = 0, length = links.length; i < length; i++) {
        if (links[i].href === window.location.href) {
            links[i].classList.add('active');
            break;
        }
    }
}

export default menuActive;