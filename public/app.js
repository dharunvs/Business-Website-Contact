function pageAnimate(page){
    const pages = document.getElementById('pages')
    if (page == 'contact'){
        pages.style.transform = "translateX(-100%)"
    } else if ( page == 'landing'){
        pages.style.transform = "translateX(0%)"
    }
}