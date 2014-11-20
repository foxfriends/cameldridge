<!DOCTYPE HTML>
<html>
    <head>
        <title>Cameron Eldridge</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Student programmer, self taught. Makes games, websites, and maybe more">
        <meta name="keywords" content="programming,portfolio,profile,cameron,eldridge,game,games,website,websites">
        <meta name="author" content="Cameron Eldridge">
        <meta name="viewport" content="width=device-width" />

        <link rel="shortcut icon" href="Images/favicon.ico">
        <link rel="apple-touch-icon" sizes="57x57" href="Images/Favicon/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="114x114" href="Images/Favicon/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="72x72" href="Images/Favicon/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="144x144" href="Images/Favicon/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="60x60" href="Images/Favicon/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="120x120" href="Images/Favicon/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="76x76" href="Images/Favicon/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="152x152" href="Images/Favicon/apple-touch-icon-152x152.png">
        <link rel="icon" type="image/png" href="Images/Favicon/favicon-196x196.png" sizes="196x196">
        <link rel="icon" type="image/png" href="Images/Favicon/favicon-160x160.png" sizes="160x160">
        <link rel="icon" type="image/png" href="Images/Favicon/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="Images/Favicon/favicon-16x16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="Images/Favicon/favicon-32x32.png" sizes="32x32">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="Images/Favicon/mstile-144x144.png">
        <meta name="msapplication-config" content="Images/Favicon/browserconfig.xml">

        <!-- script>
            (function(i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function() {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-54974204-1', 'auto');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');

        </script -->
        <style type="text/css">
            /* Setup */
            * {
                padding: 0;
                margin: 0;
                overflow: visible;
                font-family: sans-serif;
                font-weight: lighter;
            }
            span.spacer {
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
            span.spaced {
                display: inline-block;
                vertical-align: middle;
            }
            div#page-container {
                overflow: hidden;
            }
            /* Nav bar */
            nav div {
                display: none;
                position: fixed;
                height: 32px;
                cursor: pointer;
            }

            /* Page sections */
            section {
                position: relative;
                padding-bottom: 200px;
                overflow: visible;
            }
            section div.tri {
                position: absolute;
                top: -200px;
                width: 100%;
                height: 200px;
            }
            section div.tri svg {
                display: block;
                width: 100%;
                height: 200px;
                overflow-y: hidden;
            }
            section div.content {
                padding: 100px;
                text-align: right;
            }
            section div.content div.split-vertical {
                display: inline-block;
            }
            section div.content div.split-vertical.left {
                text-align: left;
            }
            section div.content div.split-vertical.right {
                text-align: right;
            }

            /* Content */
            h1, h2, h3 {
                text-align: center;
            }
            h1 {
                font-size: 35pt;
                font-weight: bold;
            }
            h2 {
                font-size: 20pt;
            }
            h3 {
                font-size: 18pt;
            }
            h4 {
                font-size: 20pt;
            }
            h4, p, header, footer, li {
                text-align: justify;
                margin: 10px 0 10px auto;
                width: 500px;
            }
            ul {
                list-style: none;
            }
            li:before{
                content: "";
                overflow: visible;
                position: absolute;
                top: 0;
                left: -10px;
                border-top: 26px solid transparent;
                border-bottom: 26px solid transparent;
                border-right: solid white;
                border-right-width: 11px;
                transition: border-right-width 0.3s,
                    left 0.3s;
            }
            li:hover:before {
                left: -20px;
                border-right-width: 21px;
            }
            li.selected:before {
                left: -45px;
                border-right-width: 46px;
            }
            li {
                position: relative;
                width: 500px;
                height: 52px;
                overflow: visible;
                background-color: #FFF;
                cursor: pointer;
                transition: width 0.3s;
            }
            li.selected {
                width: 532px;
                transition: width 0.3s;
            }

            article {
                position: absolute;
                left: 0;
                top: 0;
                width: 500px;
                margin: 100px;
                padding: 50px;
                background-color: RGBA(0, 0, 0, 0.5);
                opacity: 0;
                z-index: -1;
                transition: opacity 0.3s,
                    z-index 0.3s;
            }

            /* Special Links */
            footer a {
                display: inline-block;
                width: 32px;
                height: 32px;
                background-size: cover;
            }
            footer a[href$=".html"] {
                background-image: URL("/image/html5.png");
            }
            footer a[href$=".exe"] {
                background-image: URL("/image/windows7.gif");
            }
            footer a[href*="github"] {
                background-image: URL("/image/github.png");
            }

            /* Specifics */
            section#page-top {
                background-color: #FFF;
                background-image: URL("/image/cats.png");
                background-size: cover;
            }
            section#page-desc {
                background-color: #FDD;
                background-image: URL("/image/upfeathers.png");
            }
            section#page-game {
                background-color: #DFD;
                background-image: URL("/image/swirl_pattern.png");
            }
            section#page-site {
                background-color: #DDF;
                background-image: URL("/image/logo_x_pattern.png");
            }
            section#page-bot {
                background-color: #DDD;
                background-image: URL("/image/subtle_white_mini_waves.png");
            }
        </style>
    </head>
    <body>
        <div id="page-container">
            <nav>
                <div id="nav-top">Cameron Eldridge</div>
                <div id="nav-desc">About me</div>
                <div id="nav-game">Games</div>
                <div id="nav-site">Sites</div>
            </nav>
            <section id="page-top">
                <div class="content">
                    <h1>Cameron Eldridge</h1>
                    <h2>Student - Programmer - Maker of websites and games</h2>
                    <h3>HTML5 | CSS | JavaScript | PHP | MySQL | C++ | Ruby | GameMaker</h3>
                </div>
            </section>
            <section id="page-desc">
                <div class="tri">
                    <svg>
                    <defs>
                    <pattern id="patt-desc" patternTransform="translate(0,200)" patternUnits="userSpaceOnUse" width="208" height="208"><image xlink:href="/image/upfeathers.png" x="0" y="0" width="208" height="208" /></pattern>
                    <pattern id="patt-border" patternTransform="" patternUnits="userSpaceOnUse" width="1920" height="200" preserveAspectRatio="none"><image xlink:href="/image/border.png" x="0" y="0" width="1920" height="205" preserveAspectRatio="none" /></pattern>
                    </defs>
                    <polygon points="" style="fill:URL(#patt-desc);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" /></svg>
                </div>
                <div class="content">
                    <h4>
                        About
                    </h4>
                    <p>
                        I am an aspiring programmer, looking to one day earn a living
                        making websites or games. I hope to be able to make the things
                        that people have always wanted, but don't know how to do on 
                        their own. I believe anything imaginable can be made; that all
                        you need is to write the right code.
                    </p>
                    <p>
                        8 years ago, I began making websites at the Virtual Ventures summer camp
                        at Carleton University, where I first became interested in 
                        programming. I then went on to learn a lot more on my own 
                        time while making websites for school or my friends.
                    </p>
                    <p>
                        In my free time I also often make games, mainly for Windows 
                        with GameMaker, but I have done a few HTML5 games with JavaScript.
                        In making games I learned about object oriented programming.
                        I try to participate in as many game making contests as I can,
                        including the GMC Jam and Ludum Dare compo. I have placed as
                        high as 16th in the GMC Jam.
                    </p>
                    <p>
                        I've taken a few courses in high school which taught C++, along with concepts such as 
                        recursion and basic dynamic programming. I have entered a number
                        of contests using C++, and done reasonably well. Java was touched on 
                        as well, though it was mainly left for the students who were 
                        ahead to learn it while the rest of the class caught up, so
                        that was mainly self taught.
                    </p>
                    <p>
                        The source code to my more recent projects can be found on Github
                        as <a href="https://github.com/OinkIguana" target="_blank">OinkIguana</a>.
                    </p>
                    <p>
                        If you have a potential job, or would like to know more, or 
                        have questions, feel free to email me at
                        <a href="mailto:cam.eldridge@gmail.com">cam.eldridge@gmail.com</a>.
                    </p>
                </div>
            </section>
            <section id="page-game">
                <div class="tri">
                    <svg>
                    <defs><pattern id="patt-game" patternTransform="translate(0,200)" patternUnits="userSpaceOnUse" width="300" height="300"><image xlink:href="/image/swirl_pattern.png" x="0" y="0" width="300" height="300" /></pattern></defs>
                    <polygon points="" style="fill:URL(#patt-game);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" /></svg>
                </div>
                <div class="content">
                    <div class="split-vertical left" id="game-display">
                        <article data-game="The Catapult" data-back="" data-tri="">
                            <header>
                                <h3>The Catapult (2014)</h3>
                            </header>
                            <p>
                                Having lived in a small village, poor and bored,
                                you are unsatisfied with the living conditions, 
                                and wish to go across the Chasm and get yourself
                                a better life in the Nobles' Land. Fix up the old
                                catapult and see where it takes you!
                            </p>
                            <p>
                                <i>The Catapult</i> is a short RPG, and was
                                Created in 48 hours for Ludum Dare <a href="http://www.ludumdare.com/compo/ludum-dare-30/?action=preview&uid=38828" target="_blank">Ludum Dare #30</a>.
                                It was made using GameMaker:Studio, and was based
                                off an RPG engine that I had created earlier. The 
                                graphics I drew myself, though music and sound were
                                created using a random generator, all within the
                                two days.
                            </p>
                            <footer>
                                <a href="Games/The Catapult/index.html"></a><a href="Games/The Catapult.exe"></a><a href="https://github.com/OinkIguana/The-Catapult" target="_blank"></a>
                            </footer>
                        </article>
                        <article data-game="cat">
                            <header>
                                <h3>cat (2014)</h3>
                            </header>
                            <p>
                                You (and your house) have been teleported into a
                                mysterious forest. Some guy tells you that the trees
                                are dying, and that you have to fix them by solving
                                the forest spirits. 
                            </p>
                            <p>
                                I made <i>cat</i> in a few days using an idea from 
                                <a href="http://orteil.dashnet.org/gamegen" target="_blank">Orteil's game idea generator</a>
                                with "cat" as the seed and sanity turned off.
                                It was made in GameMaker:Studio, using the same
                                RPG engine as <i>The Catapult</i>. I drew some of 
                                the graphics, but most were taken from the Internet,
                                along with the sound and music.
                            </p>
                            <footer>
                                <a href="Games/cat.exe"></a><a href="https://github.com/OinkIguana/cat" target="_blank"></a>
                            </footer>
                        </article>
                        <article data-game="Animal Farm">
                            <header>
                                <h3>Animal Farm (2014)</h3>
                            </header>
                            <p>
                                The time has come for the animals to take over 
                                the Manor Farm. Chase out Mr. Jones, harvest the
                                crops, build the windmill, and bring Animal Farm
                                to glory!
                            </p>
                            <p>
                                This was made as a grade 11 English project. The
                                story and much of the dialog is taken directly from
                                <i>Animal Farm</i> by George Orwell. It's an RTS,
                                inspired by <i>StarCraft</i> and <i>Age of Empires</i>.
                                I made a few of the graphics, but most were taken
                                from the Internet. The dialog sprites and menu music
                                are taken from the 1955 animated film.
                            </p>
                            <footer>
                                <a href="Games/Animal Farm.exe"></a><a href="https://github.com/OinkIguana/Animal-Farm" target="_blank"></a>
                            </footer>
                        </article>
                        <article data-game="Space Invaders">
                            <header>
                                <h3>Animal Farm (2014)</h3>
                            </header>
                            <p>
                                Shoot down the invaders from space in this remake
                                of the Atari classic.
                            </p>
                            <p>
                                When learning Java in class, I got bored of the
                                regular assignments, so I made this instead. It
                                ended up being my summative project for the year.
                                The entire game was coded from scratch, though
                                the resources were stolen from someone else's 
                                remake.
                            </p>
                            <footer>
                                <a href="Games/SpaceInvaders.zip" style="background-image:URL(/image/java.png);"></a><a href="https://github.com/OinkIguana/SpaceInvaders" target="_blank"></a>
                            </footer>
                        </article>
                    </div>
                    <div class="split-vertical right">
                        <h4>
                            Games
                        </h4>
                        <ul>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">The Catapult</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">cat</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Animal Farm</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Space Invaders</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">White</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Forks</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Abby and Elliot</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Lord of the Flies</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">WWII</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Cam-I-Am</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Running Squared</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">Taco Quest</span></li>
                            <li class="game-list"><span class="spacer"></span><span class="spaced">The Ghost Game: Complete Edition</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="page-site">
                <div class="tri">
                    <svg>
                    <defs><pattern id="patt-site" patternTransform="translate(0,200)" patternUnits="userSpaceOnUse" width="90" height="90"><image xlink:href="/image/logo_x_pattern.png" x="0" y="0" width="90" height="90" /></pattern></defs>
                    <polygon points="" style="fill:URL(#patt-site);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" /></svg>
                </div>
                <div class="content">
                    <h4>
                        Websites
                    </h4>
                </div>
            </section>
            <section id="page-bot">
                <div class="tri">
                    <svg>
                    <defs><pattern id="patt-bot" patternTransform="translate(0,200)" patternUnits="userSpaceOnUse" width="65" height="65"><image xlink:href="/image/subtle_white_mini_waves.png" x="0" y="0" width="65" height="65" /></pattern></defs>
                    <polygon points="" style="fill:URL(#patt-bot);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" /></svg>
                </div>
                <div class="content">
                    <h4>
                        Contact
                    </h4>
                </div>
            </section>
        </div>
        <script>
            var pageWidth = function() {
                if (typeof (window.innerWidth) === 'number') {
                    return window.innerWidth;
                } else if (document.documentElement && (document.documentElement.clientWidth)) {
                    return document.documentElement.clientWidth;
                } else if (document.body && (document.body.clientWidth)) {
                    return document.body.clientWidth;
                }
                return 0;
            };
            var triangles = function() {
                var pagewidth = pageWidth();
                var triangles = document.getElementsByClassName("triangle");
                document.getElementById("patt-border").setAttribute("width", pagewidth);
                document.getElementById("patt-border").childNodes[0].setAttribute("width", pagewidth);
                for (var i = 0; i < triangles.length; i++) {
                    triangles[i].setAttribute("points", "0,200,0,205," + pagewidth + ",205," + pagewidth + ",200," + (pagewidth / 2) + ",5");
                    triangles[i].parentNode.style.width = pagewidth + "px";
                }
            };
            var positions = function() {
                var sections = document.getElementsByTagName("section");
                var y = window.pageYOffset;
                for (var i = 0; i < sections.length; i++) {
                    sections[i].style.top = (y / (2 + (2 * i))) + "px";
                    sections[i].style.paddingBottom = (200 + 100 * i) + "px";
                }
            };
            var show_game = function(game) {
                var articles = document.getElementsByTagName("article");
                var list = document.getElementsByClassName("game-list");
                for (var i = 0; i < articles.length; i++) {
                    var data = articles[i].getAttribute("data-game");
                    if (data !== "") {
                        articles[i].style.opacity = (data === game ? "1" : "0");
                        articles[i].style.zIndex = (data === game ? "30" : "-1");
                        list[i].className = "game-list" + (data === game ? " selected" : "");
                    }
                }
            };
            var init = function() {
                var list = document.getElementsByClassName("game-list");
                for (var i = 0; i < list.length; i++) {
                    list[i].onclick = function() {
                        if (!/selected/.test(this.className)) {
                            show_game(this.getElementsByClassName("spaced")[0].innerHTML);
                        } else {
                            show_game("");
                        }
                    };
                }
            };




            init();
            triangles();
            positions();
            window.addEventListener("resize", triangles);
            window.addEventListener("scroll", positions);
        </script>
    </body>
</html>