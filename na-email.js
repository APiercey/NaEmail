var showEmail = function() {
    naElements = document.getElementsByClassName('na-email');

    for(var i = 0; i < naElements.length; i++) {
        var e = naElements[i];

        e.innerText = e.getAttribute('data-email-name')   + '@'
                    + e.getAttribute('data-email-domain') + '.' 
                    + e.getAttribute('data-email-top-level');
    }
};

(window.addEventListener) ? window.addEventListener('load', showEmail, false) : window.attachEvent('onload', showEmail);

