function ecw_initialize(content, closebuttonhover, closebutton) {
    content = typeof content !== 'undefined' ? content : 'This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies.';
    closebutton = typeof closebutton !== 'undefined' ? closebutton : '&#x274c;';
    closebuttonhover = typeof closebuttonhover !== 'undefined' ? closebuttonhover : 'Click to close';
    if (ecw_getCookie('ecwclick') == "") {
        $('body').prepend('<div id="ecw_cookie_warning" style="display: none;">' + content + '<div id="ecw_close"><a id="ecw_close" title="' + closebuttonhover + '" href="#" onclick="ecw_close();return false;">' + closebutton + '</a></div></div>');
        $('div#ecw_cookie_warning').slideDown(1000);
    }
}

function ecw_close(e) {
    document.getElementById("ecw_cookie_warning").remove();
    document.cookie = "ecwclick=true;";
}

function ecw_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function ecw_clearcookie() {
    document.cookie = "ecwclick=;";
}