(function() {
    if (window.eruda) return;
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/eruda';
    script.onload = function() {
        eruda.init();
        console.log('ShipFlow: Eruda console loaded');
    };
    document.head.appendChild(script);
})();
