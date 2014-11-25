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

        <link href='http://fonts.googleapis.com/css?family=Abel|Lato' rel='stylesheet' type='text/css'>
        <script>
            var expand = function() {
                document.getElementById("expand-games").style.display = "none";
                document.getElementById("expand-websites").style.display = "none";
                document.getElementById("section-content").style.maxHeight = (Math.ceil(document.getElementsByClassName("game").length / 2) * 254 + 100).toString() + "px";
            };
            var collapse = function() {
                document.getElementById("expand-games").style.display = "block";
                document.getElementById("expand-websites").style.display = "block";
                document.getElementById("section-content").style.maxHeight = document.getElementById("section-content").style.minHeight;
            };
            var shift = function(sel) {
                collapse();
                document.getElementsByClassName("selected")[0].className = "";
                document.getElementById("header-" + sel).className = "selected";
                document.getElementById("section-" + sel).style.left = "0";
                if (sel === "games") {
                    document.getElementById("section-websites").style.left = "1004px";
                } else if (sel === "websites") {
                    document.getElementById("section-games").style.left = "-1004px";
                }
            };
            var init = function() {
                document.getElementById("section-websites").style.left = "1004px";
            };
            window.addEventListener("scroll", function() {
                var yy = -window.pageYOffset / 6;
                document.body.style.backgroundPosition = "0px " + yy.toString() + "px";
            });
        </script>
        <script>
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

        </script>
        <style type="text/css">
            * {
                padding: 0;
                margin: 0;
                font-family: "Lato",sans-serif;
                font-size: 12pt;
            }
            span.small-triangle {
                font-size: 12pt;
            }
            body {
                background-color: #823636;
                background-image: URL("Images/background.png");
                background-attachment: fixed;
                background-position: 0px 0px;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
            }
            #page-container {
                width: 1004px;
                margin: 16px auto;
                -webkit-border-radius: 16px;
                -moz-border-radius: 16px;
                border-radius: 16px;
                padding: 16px 64px;
                background-color: #f1ede6;
            }
            p {
                margin-top: 16px;
            }
            ul {
                margin-left: 3pc;
                list-style: circle;
            }
            section {
                width: 100%;
                margin-bottom: 16px;
            }
            section#section-content {
                position: relative;
                min-height: 862px;
                max-height: 862px;
                height: 10000px;
                overflow: hidden;
                -webkit-transition: max-height 0.5s;
                -moz-transition: max-height 0.5s;
                -o-transition: max-height 0.5s;
                transition: max-height 0.5s;
                background-color: #e7d1ac;
                -webkit-border-radius: 22px;
                -moz-border-radius: 22px;
                border-radius: 22px;
            }
            div.content {
                display: inline-block;
                overflow: hidden;
                position: absolute;
                left: 0;
                width: 100%;
                padding-top: 16px;

                -webkit-border-radius: 0 0 22px 22px;
                -moz-border-radius: 0 0 22px 22px;
                border-radius: 0 0 22px 22px;

                -webkit-transition: left 0.5s;
                -moz-transition: left 0.5s;
                -o-transition: left 0.5s;
                transition: left 0.5s;
            }
            div.item {
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                display: inline-block;
                overflow: hidden;

                position: relative;

                width: 500px;
                height: 250px;

                margin-bottom: 4px;

                -webkit-border-radius: 16px;
                -moz-border-radius: 16px;
                border-radius: 16px;

                vertical-align: top;
            }
            div.item:nth-of-type(odd) {
                margin-right: 4px;
            }
            div.item div.background {
                position: absolute;
                left: 0;
                top: 0;
            }
            div.item div.foreground {
                position: absolute;
                left: 0;
                top: 0;
                opacity: 0;
                filter: alpha(opacity=0);
                background-color: #FFF;
                background-color: RGBA(255, 255, 255, 0.8);
                margin: 16px;
                padding: 16px;
                -webkit-border-radius: 16px;
                -moz-border-radius: 16px;
                border-radius: 16px;
                -webkit-transition: opacity 0.4s;
                -moz-transition: opacity 0.4s;
                -o-transition: opacity 0.4s;
                transition: opacity 0.4s;
            }
            p#expand-games, p#shrink-games, p#expand-websites, p#shrink-websites {
                text-align: center;
                margin: 0;
                padding: 9px 0;
                font-size: 16pt;
                font-family: "Abel",sans-serif;
                cursor: pointer;

                border-top: 1px solid #888;
                background-color: #eee0c6;

                -webkit-transition: background-color 0.4s;
                -moz-transition: background-color 0.4s;
                -o-transition: background-color 0.4s;
                transition: background-color 0.4s;
            }
            p#expand-games:hover, p#shrink-games:hover, p#expand-websites:hover, p#shrink-websites:hover {
                background-color: #e7d1ac;
            }
            div.item:hover div.foreground {
                opacity: 1;
                filter: alpha(opacity=100);
            }
            h1 {
                font-size: 29pt;
                padding: 64px 0;
                border-bottom: 1px solid black;
            }
            h2 {
                font-size: 25pt;
            }
            h3, h3 a {
                font-size: 19pt;
            }
            h1, h2, h3 {
                text-align: center;
                font-family: "Abel",sans-serif;
            }
            nav {
                position: relative;
                margin-bottom: 44px;
            }
            div.nav-background {
                position: absolute;
                top: 0;
                height: 44px;
                width: 100%;
                background-color: #f1ede6;
            }
            nav h2 {
                position: absolute;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                display: inline-block;
                width: 45%;
                cursor: pointer;

                -webkit-border-radius: 22px 22px 0 0;
                -moz-border-radius: 22px 22px 0 0;
                border-radius: 22px 22px 0 0;

                border: 0px solid #888;
                border-bottom-width: 1px;

                background-color: #eee0c6;

                -webkit-transition: border-width 0.1s,
                    background-color 0.4s,
                    width 0.2s;
                -moz-transition: border-width 0.1s,
                    background-color 0.4s,
                    width 0.2s;
                -o-transition: border-width 0.1s,
                    background-color 0.4s,
                    width 0.2s;
                transition: border-width 0.1s,
                    background-color 0.4s,
                    width 0.2s;
            }
            nav h2:first-of-type {
                left: 0;
            }
            nav h2:last-of-type {
                right: 0;
            }
            nav h2.selected {
                border-bottom-width: 3px;

                background-color: #e7d1ac;

                width: 55%;
            }
            nav:hover h2 {
                border-bottom-width: 1px;

                background-color: #eee0c6;

                width: 45%;
            }
            nav h2:hover {
                width: 55%;

                border-bottom-width: 3px;

                background-color: #e7d1ac;
            }
            h1 a, h2 a, h3 a {
                font-family: "Abel",sans-serif;
            }
            a {
                text-decoration: none;
            }
            a:link {
                color: #6393aa;
            }
            a:visited {
                color: #3e6578;
            }
            a:hover, a:active {
                color: #20698d;
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div id="page-container">
            <h1>Cameron Eldridge</h1>
            <section>
                <p>
                    I am an aspiring programmer, looking to one day earn a living
                    making websites or games. I hope to be able to make the things
                    that people have always wanted, but don't know how to do on 
                    their own. I believe anything imaginable can be made; that all
                    you need is to write the right code.
                </p>
                <p>
                    I have learned a number of languages, and find that I am
                    often making websites using:
                </p>
                <ul>
                    <li>HTML5;</li>
                    <li>JavaScript + AJAX;</li>
                    <li>CSS;</li>
                    <li>PHP; and</li>
                    <li>MySQL;</li>
                </ul>
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
                    I also have learned more general purpose languages including:
                </p>
                <ul>
                    <li>C++; and</li>
                    <li>Java;</li>
                </ul>
                <p>
                    C++ was taught in high school, along with concepts such as 
                    recursion and basic dynamic programming. I have entered a number
                    of contests using C++, and done reasonably well. Java was touched on 
                    as well, though it was mainly left for the students who were 
                    ahead to learn it while the rest of the class caught up, so
                    it is mainly self taught.
                </p>
                <p>
                    I have a basic understanding of a few other languages as well,
                    including:
                </p>
                <ul>
                    <li>Ruby (and Rails);</li>
                    <li>Python;</li>
                    <li>Perl; and</li>
                    <li>Processing;</li>
                </ul>
                <p>
                    The source code to my more recent projects can be found on Github
                    under <a href="https://github.com/OinkIguana" target="_blank">OinkIguana</a>.
                </p>
                <p>
                    If you have a potential job, or would like to know more, or 
                    have questions, feel free to email me at
                    <a href="mailto:cam.eldridge@gmail.com">cam.eldridge@gmail.com</a>.
                </p>
            </section>
            <section id="section-content">
                <div class="nav-background"></div>
                <nav>                    
                    <h2 class="selected" id="header-games" onclick="shift('games')">Games</h2><h2 id="header-websites" onclick="shift('websites')">Websites</h2>
                </nav>
                <div id="section-games" class="content">
                    <div class="item game">
                        <div class="background">
                            <img src="Images/The Catapult.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/The Catapult.exe">The Catapult</a></h3>
                            <p>
                                A short RPG game, made in 48 hours for <a href="http://www.ludumdare.com/compo/ludum-dare-30/?action=preview&uid=38828" target="_blank">Ludum Dare #30</a>. I used my
                                RPG engine which I cretaed before the contest, but the rest of 
                                everything was made during the 2 days. Music and sound were generated
                                randomly, but I drew the graphics myself.
                            </p>
                            <p>
                                <a href="https://github.com/OinkIguana/The-Catapult" target="_blank">Source</a>
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/cat.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/cat.exe">cat</a></h3>
                            <p>
                                I made this game in GameMaker using an RPG engine I created for
                                myself. The idea was obtained from <a href="http://orteil.dashnet.org/gamegen" target="_blank">Orteil's game idea generator</a>
                                with sanity turned off using the seed "cat", hence the title. I took the graphics and 
                                music from the Internet.
                            </p>
                            <p>
                                <a href="https://github.com/OinkIguana/cat" target="_blank">Source</a>
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/Animal Farm.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/Animal Farm.exe">Animal Farm</a></h3>
                            <p>
                                Based off of George Orwell's <i>Animal Farm</i>, and inspired by
                                RTS games such as Starcraft or Age of Empires. This game was created
                                for a grade 11 English project. The game was coded in GameMaker,
                                with resources either taken from the Internet, drawn by me, or snipped 
                                from the 1955 animated movie.
                            </p>
                            <p>
                                <a href="https://github.com/OinkIguana/Animal-Farm" target="_blank">Source</a>
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/SpaceInvaders.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/SpaceInvaders.zip">Space Invaders</a></h3>
                            <p>
                                Coded using Java for my grade 11 Introduction to Computer
                                Science summative. I did this all at school over a couple of days.
                                The graphics were taken from someone else's clone of the classic
                                game. The difficulty balance is a bit off, but otherwise it's pretty
                                similar to the original.
                            </p>
                            <p>
                                <a href="https://github.com/OinkIguana/SpaceInvaders" target="_blank">Source</a>
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/White.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/White.exe">White</a></h3>
                            <p>
                                White is my personal favourite. 
                                It was originally created in 3 days for the 
                                <a href="http://gmc.yoyogames.com/index.php?showtopic=606848&page=3#entry4492169">GMC Jam #13</a>
                                where it placed 19th, downloadable <a href="Games/White-Pirate_Edition.exe">here</a>. 
                                I then went on to improve things and make a full game out of it,
                                with all my own resources - Everything in
                                it was created by me: code, graphics, and sound. 
                                It's a smooth, calm platformer game in which you travel 
                                around and restore colour to the world. It has been published
                                to <a href="http://gamejolt.com/games/platformer/white/35169/" target="_blank">Game Jolt</a>,
                                <a href="http://www.indiedb.com/games/white1" target="_blank">IndieDB</a>,
                                <a href="http://oinkiguana.itch.io/white" target="_blank">itch.io</a>,
                                <a href="http://www.kongregate.com/games/OinkIguana/white" target="_blank">Kongregate</a>, and
                                <a href="http://www.newgrounds.com/portal/view/647031" target="_blank">Newgrounds</a>.
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/Forks.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/Forks.exe">Forks</a></h3>
                            <p>
                                My second contest entry, and second team project. It was made in 
                                3 days for the <a href="http://gmc.yoyogames.com/index.php?showtopic=598547&p=4418833">GMC Jam #12</a>
                                receiving 16th place. It is a sidescrolling adventure 
                                game with a heavy story focus. The code is all written 
                                using GameMaker. The graphics, music, and voices are
                                by my friends Pearl, Avery and Ben, respectively.
                            </p>
                            <p>
                                <a href="https://github.com/OinkIguana/Forks" target="_blank">Source</a>
                            </p>
                        </div>
                    </div><p id="expand-games" onclick="expand()"><span class="small-triangle">&#9660;</span> See older games <span class="small-triangle">&#9660;</span></p><div class="item game">
                        <div class="background">
                            <img src="Images/Abby_and_Elliot.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/Abby_and_Elliot.exe">Abby and Elliot</a></h3>
                            <p>
                                My first game created with a team. Abby and Elliot was made in 3
                                days for the <a href="http://gmc.yoyogames.com/index.php?showtopic=588681&p=4343215">GMC Jam #11</a>.
                                It's a sidescrolling adventure game, with heavy focus on story.
                                Coded with GameMaker, graphics were drawn by my friend Pearl, 
                                and the music was written by Jack Boldick, some guy I found online.
                                It placed 21st in the contest.
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/LordOfTheFlies.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/LordOfTheFlies.exe">Lord of the Flies</a></h3>
                            <p>
                                Based off of William Golding's <i>Lord of the Flies</i>, this game
                                was created for a grade 10 English assignment. It tries to prove
                                the themes of the novel - that there is an inherent evil within
                                us all. The game itself is a little buggy due to a update in 
                                GameMaker. The graphics and sound were taken from the Internet. 
                            </p>
                            <p>
                                <a href="https://github.com/OinkIguana/Lord-Of-The-Flies" target="_blank">Source</a>
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/WWII.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/WWII.exe">WWII</a></h3>
                            <p>
                                A platform-shooter game documenting World War II. It was an assignment
                                for grade 10 Canadian History. Created using GameMaker, most graphics
                                and sound were taken from the Internet. Only the worst of them were
                                drawn by me.
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/Cam-I-Am.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/Cam-I-Am.exe">Cam-I-Am</a></h3>
                            <p>
                                A sort of autobiographical game, created for my grade 9
                                English class summative. Consists of a few minigames that are based
                                off some of my interests. The music and graphics were mostly from 
                                the Internet, though I drew a few of the foods and other simple things.
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/RunningSquared.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="http://flyingpenguin.cyberbri.com/games.php?game=4-Running_Squared&genre=Arcade" target="_blank">Running Squared</a></h3>
                            <p>
                                A game I created in a few days using JavaScript, mainly to help
                                introduce myself to the new features of HTML5. This is the first
                                game I published online, though it only earned around 30 cents 
                                from the ads on <a href="http://www.kongregate.com/games/TheGaym/running-squared" target="_blank">Kongregate</a>, so I haven't actually been able to
                                claim the profits.
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/Adventure.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/Adventure.zip">Taco Quest (Adventure)</a></h3>
                            <p>
                                My second project, made in GameMaker, using (mainly) drag and
                                drop. There are a few bugs and it's not particularly well balanced.
                                Music and most graphics were taken from the Internet or the example
                                resources.
                            </p>
                        </div>
                    </div><div class="item game">
                        <div class="background">
                            <img src="Images/GhostGame.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="Games/TheGhostGameCompleteEdition.exe">The Ghost Game: Complete Edition</a></h3>
                            <p>
                                The first game I made. Made in GameMaker, using the drag and drop
                                features, it's not particularly impressive but it's where I started.
                                All the graphics were taken from the default example images.
                            </p>
                        </div>
                    </div><p id="shrink-games" onclick="collapse()"><span class="small-triangle">&#9650;</span> Hide games <span class="small-triangle">&#9650;</span></p>
                </div>
                <div id="section-websites" class="content">
                    <div class="item website">
                        <div class="background">
                            <img src="Images/flyingpenguin.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="http://flyingpenguin.cyberbri.com">FlyingPenguin (http://flyingpenguin.cyberbri.com)</a></h3>
                            <p>
                                My first proper website. It started out small, with accounts, a
                                chat box, and some achievements. Over the years I added on more
                                and more and it's become a bit of a mess, but mostly still functional.
                            </p>
                        </div>
                    </div><div class="item website">
                        <div class="background">
                            <img src="Images/knightwatch.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="http://knightwatch.cyberbri.com/">Knightwatch (http://knightwatch.cyberbri.com/)</a></h3>
                            <p>
                                The Nepean High School newspaper Knightwatch website.
                                I wrote all of the code for it, with some style and article arrangement
                                suggestions from friends, and the articles written by other students. Articles are 
                                stored in text files and loaded dynamically. It used to be hosted
                                on their server and used as the official website. They now use a
                                Google site.
                            </p>
                        </div>
                    </div><div class="item website">
                        <div class="background">
                            <img src="Images/pomfystudio.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="http://website.cyberbri.com">Pomfy Studio (http://website.cyberbri.com)</a></h3>
                            <p>
                                Currently a work in progress, this website is planned to be where
                                I host and sell some of my games from in the near future. I'm experimenting
                                with the parallax in the background and the article displaying system, 
                                as well as a few other things.
                            </p>
                        </div>
                    </div><div class="item website">
                        <div class="background">
                            <img src="Images/tumblr.png" alt="" width="500" height="250" />
                        </div>
                        <div class="foreground">
                            <h3><a href="http://oinkiguana.tumblr.com">My Tumblr (http://oinkiguana.tumblr.com)</a></h3>
                            <p>
                                I didn't code all of Tumblr, obviously, but I created the theme 
                                for my blog - the code and the drawings. The background changes 
                                with the time of day, seasons, and (soon) weather, and everything's a 
                                little different every visit. Don't mind the content though, it's
                                mostly cute animals or nice art.
                            </p>
                        </div>
                    </div><p id="expand-websites" style="visibility:hidden" onclick="expand()"><span class="small-triangle">&#9660;</span> See older websites <span class="small-triangle">&#9660;</span></p>
                </div>
            </section>
        </div>
        <script>init();</script>
    </body>
</html>