function pageAnimate(page){
    const pages = document.getElementById('pages')
    var title = document.getElementById('title');
    if (page == 'contact'){
        pages.style.transform = "translateX(-100%)"
        title.innerText = 'VibrantDX - Contact'
    } else if ( page == 'landing'){
        pages.style.transform = "translateX(0%)"
        title.innerText = 'VibrantDX'
    }

}