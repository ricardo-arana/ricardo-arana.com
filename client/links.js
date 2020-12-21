
  const urls = document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])');

  const page = document.querySelector('html');
  urls.forEach( elm => {
    elm.addEventListener('click', event => {

        console.log(elm)
       
        const lugar = location.pathname;
        if (lugar.replace(/^\//, '') == elm.pathname.replace(/^\//, '') && location.hostname == elm.hostname) {
        let target = urls;
        target = target.length ? target : document.querySelector('[name=' + elm.hash.slice(1) + ']');
        console.log(target)
        if (target.length) {
            
          setTimeout(() => {
            history.pushState("", document.title, window.location.pathname);
            page.scrollTop = page.scrollTop - 80;
            
          }, 500);
          
          return false;
        }
      }
    });
  })


  function removeHash () { 
    history.pushState("", document.title, window.location.pathname
                                                       + window.location.search);
}