var showEmail = function() {
    naElements = document.getElementsByClassName( 'na-email' );

    for( var i = 0; i < naElements.length; i++ ) {
        var e       = naElements[i];
        var replace = ( e.getAttribute( 'data-email-dont-replace' ) == undefined) ? true : false;
        var email   = e.getAttribute( 'data-email-name' )   + '@'
                    + e.getAttribute( 'data-email-domain' ) + '.' 
                    + e.getAttribute( 'data-email-top-level' );

        if( replace ) { e.innerHTML = email; }
        if( e.getAttribute( 'href' ) ) { e.setAttribute( 'href', 'mailto:' + email ); }
    }
};

( window.addEventListener ) ? window.addEventListener( 'load', showEmail, false )
                            : window.attachEvent( 'onload', showEmail );

