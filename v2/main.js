(function() {
    'use strict';

    var badBrowser = (
        //Disable some of the fancier stuff for older browsers
        /MSIE 9/i.test(navigator.userAgent) ||
        /MSIE 10/i.test(navigator.userAgent) ||
        /rv:11.0/i.test(navigator.userAgent) ||
        //Though Safari is just as bad this time
        (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
    );

    var pageWidth = function() {
        //Get the width of the page for calculating other values from
        if (document.body && document.body.clientWidth) {
            return document.body.clientWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        } else if (typeof window.innerWidth === 'number') {
            return window.innerWidth;
        }
        return 0;
    };

    var parallaxPositions = function() {
        var sections = document.getElementsByTagName("section");
        if (!badBrowser) {
            //Align the parallaxes on the sections
            var y = window.pageYOffset;
            var offset = [];
            for (var i = 0; i < sections.length; i++) {
                offset[i] = Math.round(y / (2 + i));
                if (sections[i].style.transform !== "translateY(" + offset[i] + "px)") {
                    sections[i].style.transform = "translateY(" + offset[i] + "px)";
                    sections[i].style.webkitTransform = sections[i].style.transform;
                    //Make the lower ones longer to accomodate for the others moving over them.
                    sections[i].style.paddingBottom = (200 + 50 * i) + "px";
                }
            }
        } else {
            for(var i = 0; i < sections.length; i++) {
                sections[i].style.paddingBottom = 0;
            }
        }
    };

    var navbarPositions = function() {
        //Make the navigation bar appear for each section that
        //has gone off the top of the screen.
        var sections = document.getElementsByTagName("section");
        var navlinks = document.getElementsByClassName("nav-link");
        var y = window.pageYOffset;
        for (var i = 0; i < navlinks.length; i++) {
            //z-index and opacity change to hide them gradually but
            //also prevent clicking on them when they're invisible
            if (sections[i].offsetTop + Math.round(y / (2 + i) - (200 + 100 * i)) <= y) {
                if (navlinks[i].style.left !== (i * 200) + "px") {
                    navlinks[i].style.left = (i * 200) + "px";
                }
            } else {
                if (navlinks[i].style.left !== window.innerWidth - (4 - i) * 200) {
                    navlinks[i].style.left = window.innerWidth - (4 - i) * 200 + "px";
                }
            }
        }
    };

    var articlePositions = function() {
        //Get the articles about the games and sites to stay onscreen
        //as you scroll to the lower ones
        var sections = document.getElementsByTagName("section");
        var articles = document.getElementsByTagName("article");
        var y = window.pageYOffset;
        for (var i = 0; i < articles.length; i++) {
            //Between the top of the section (0) and the bottom of the section (the longer bits)
            var site = (articles[i].getAttribute("data-game") === null);
            var offset = 0;
            if (!badBrowser) {
                offset = Math.round(y / (4 + site));
            }
            var yy = Math.max(0, Math.min(sections[2 + site].offsetHeight - articles[i].offsetHeight - 500 - (site * 100), y - (sections[2 + site].offsetTop + offset)));
            if (articles[i].style.transform !== "translateY(" + yy + "px)") {
                articles[i].style.transform = "translateY(" + yy + "px)";
                articles[i].style.webkitTransform = articles[i].style.transform;
            }
        }
    };
    var positions = function() {
        //Do all the positions
        parallaxPositions();
        navbarPositions();
        articlePositions();
    };

    var show_game = function(game) {
        //Change the game that is being shown when its tab is clicked.
        var articles = document.getElementById("game-display").getElementsByTagName("article");
        var list = document.getElementsByClassName("game-list");
        for (var i = 0; i < articles.length; i++) {
            var data = articles[i].getAttribute("data-game");
            if (data !== "") {
                //The one that is clicked is visible and on top, the others
                //remain hidden
                articles[i].style.opacity = (data === game ? "1" : "0");
                articles[i].style.filter = "alpha(opacity=" + (data === game ? "100" : "0") + ")";
                articles[i].style.zIndex = (data === game ? "30" : "-1");
                //Extend the tab by changing the class
                list[i].className = "game-list" + (data === game ? " selected" : "");
            }
        }
    };
    var show_site = function(site) {
        //Same as show_game but for the sites
        var articles = document.getElementById("site-display").getElementsByTagName("article");
        var list = document.getElementsByClassName("site-list");
        for (var i = 0; i < articles.length; i++) {
            var data = articles[i].getAttribute("data-site");
            if (data !== "") {
                articles[i].style.opacity = (data === site ? "1" : "0");
                articles[i].style.filter = "alpha(opacity=" + (data === site ? "100" : "0") + ")";
                articles[i].style.zIndex = (data === site ? "30" : "-1");
                list[i].className = "site-list" + (data === site ? " selected" : "");
            }
        }
    };
    var overContainer = false; //Don't close it if just the image was clicked
    var popup_close = function() {
        //Remove the popup element when it's clicked
        document.body.removeChild(document.getElementsByClassName("popup-background")[0]);
    };
    var popup_image = function(img) {
        //Put given image into a popup

        //Create each part of the popup with the proper values
        var background = document.createElement("div");
        //Background
        background.className = "popup-background";
        background.onclick = function() {
            if (!overContainer) {
                popup_close();
            }
        };
        //Vertical alignment stuff
        var spacer = document.createElement("span");
        spacer.className = "spacer";
        var spaced = document.createElement("span");
        spaced.className = "spaced";
        //Inner container
        var container = document.createElement("div");
        container.className = "popup-container";
        container.onmouseover = function() {
            overContainer = true;
        };
        container.onmouseout = function() {
            overContainer = false;
        };
        //Image
        var image = document.createElement("img");
        image.className = "popup-image";
        image.src = img;
        //Attach them all correctly
        document.body.appendChild(background);
        background.appendChild(spacer);
        background.appendChild(spaced);
        spaced.appendChild(container);
        container.appendChild(image);
    };
    var init = function() {
        //Set up onclick events for various things
        var i;
        //First the games tabs
        var list = document.getElementsByClassName("game-list");
        var _show_game = function() {
            if (!/selected/.test(this.className)) {
                //Extract the visible text
                show_game(this.getElementsByClassName("spaced")[0].innerHTML);
            } else {
                //If the tab is already open make it close if reclicked
                show_game("");
            }
        };
        for (i = 0; i < list.length; i++) {
            list[i].onclick = _show_game;
        }
        //Next the sites, same as games
        var _show_site = function() {
            if (!/selected/.test(this.className)) {
                show_site(this.getElementsByClassName("spaced")[0].innerHTML);
            } else {
                show_site("");
            }
        };
        list = document.getElementsByClassName("site-list");
        for (i = 0; i < list.length; i++) {
            list[i].onclick = _show_site;
        }
        //Screenshots
        var screenshots = document.getElementsByClassName("screenshot");
        var _popup_image = function() {
            //Pass the URL to the popup
            popup_image(this.src);
        };
        for (i = 0; i < screenshots.length; i++) {
            screenshots[i].onclick = _popup_image;
        }

        //Then the navigation bars
        var navlinks = document.getElementsByClassName("nav-link");
        window.setTimeout(function() {
            //Don't do transitions for the initial position of the nav links
            var navlinks = document.getElementsByClassName("nav-link");
            for (var i = 0; i < navlinks.length; i++) {
                navlinks[i].style.transitionDuration = "0.8s";
                navlinks[i].style.WebkitTransitionDuration = "0.8s";
            }
        }, 1);
        var _nav_click = function() {
            //Clear first to ensure there aren't two calls cancelling
            //each other out
            window.clearInterval(scrollInterval);
            //Have them scroll smoothly, rather than jumping
            scrollInterval = window.setInterval(function(el) {
                var y = window.pageYOffset;
                var offset = 0;
                if (!badBrowser) {
                    offset = Math.round(y / (2 + i));
                }
                if (Math.abs(y - el.offsetTop - offset) > 4) {
                    //Keep moving closer by less until it's really close
                    y -= (y - el.offsetTop - offset) / 4;
                } else {
                    //Then stop once its close enough noone will notice a jump
                    y -= (y - el.offsetTop - offset) / 4;
                    window.clearInterval(scrollInterval);
                }
                scroll(0, y);
            }, 1000 / 30, document.getElementById("page-" + this.id.substr(4)));
        };
        for (i = 0; i < navlinks.length; i++) {
            navlinks[i].style.left = window.innerWidth - (4 - i) * 200 + "px";
            navlinks[i].onclick = _nav_click;
        }
    };

    //Run the things
    init();
    var positions_runner;
    positions();
    positions_runner = window.setInterval(function() {
        if (window.requestAnimationFrame === undefined) {
            //Just do it if the function doesn't exist
            positions();
        } else {
            window.requestAnimationFrame(positions);
        }
    }, 10);
    var scrollInterval;
    window.addEventListener("wheel", function() {
        //Allow the automatic scrolling to be overriden by a manual scroll
        window.clearInterval(scrollInterval);
    });
})();
