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
            /* Makes vertical alignment easier */
            span.spacer {
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
            span.spaced {
                display: inline-block;
                vertical-align: middle;
            }
            /* Prevent scrollbars created by the parallaxes */
            div#page-container {
                overflow: hidden;
            }
            /* Nav bar */
            nav div.nav-link {
                box-sizing: border-box;
                position: fixed;
                z-index: -1;
                width: 100%;
                height: 24px;
                opacity: 0;
                background: white;
                cursor: pointer;
                border-bottom: 1px solid #777;
                transition: opacity 0.3s,
                    z-index 0.3s;

            }

            /* Page sections */
            section {
                position: relative;
                padding-bottom: 200px;
                overflow: visible;
            }
            section div.tri {
                position: absolute;
                left: -10px;
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
                    z-index 0.3s,
                    top 0.1s;
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
            section#page-top, div#nav-top {
                background-color: #FFF;
                background-image: URL("/image/cats.png");
                background-size: cover;
            }
            section#page-desc, div#nav-desc {
                background-color: #FDD;
                background-image: URL("/image/upfeathers.png");
            }
            section#page-game, div#nav-game{
                background-color: #DFD;
                background-image: URL("/image/swirl_pattern.png");
            }
            section#page-site, div#nav-site {
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
                <div class="nav-link" id="nav-top"><span class="spacer"></span><span class="spaced">Cameron Eldridge</span></div>
                <div class="nav-link" id="nav-desc"><span class="spacer"></span><span class="spaced">About me</span></div>
                <div class="nav-link" id="nav-game"><span class="spacer"></span><span class="spaced">Games</span></div>
                <div class="nav-link" id="nav-site"><span class="spacer"></span><span class="spaced">Sites</span></div>
            </nav>
            <section id="page-top">
                <div class="content">
                    <h1>Cameron Eldridge</h1>
                    <h2>Student - Programmer - Maker of websites and games</h2>
                    <h3>HTML5 | CSS | JavaScript | PHP | MySQL | C++ | Ruby | GameMaker</h3>
                </div>
            </section><!-- End header section -->
            <section id="page-desc">
                <div class="tri">
                    <svg> <!-- Triangle -->
                    <defs>
                    <pattern id="patt-desc" patternTransform="translate(10,200)" patternUnits="userSpaceOnUse" width="208" height="208"><image xlink:href="/image/upfeathers.png" x="0" y="0" width="208" height="208" /></pattern>
                    <!-- The pattern for all the borders is set here only -->
                    <pattern id="patt-border" patternTransform="" patternUnits="userSpaceOnUse" width="1920" height="200" preserveAspectRatio="none"><image xlink:href="/image/border.png" x="0" y="0" width="1920" height="205" preserveAspectRatio="none" /></pattern>
                    </defs>
                    <polygon points="" style="fill:URL(#patt-desc);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" />
                    </svg>
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
            </section><!-- End about section -->
            <section id="page-game">
                <div class="tri">
                    <svg><!-- Triangle -->
                    <defs><pattern id="patt-game" patternTransform="translate(10,200)" patternUnits="userSpaceOnUse" width="300" height="300"><image xlink:href="/image/swirl_pattern.png" x="0" y="0" width="300" height="300" /></pattern></defs>
                    <polygon points="" style="fill:URL(#patt-game);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" />
                    </svg>
                </div>
                <div class="content">
                    <div class="split-vertical left" id="game-display">
                        <article data-game="The Catapult">
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
                                <h3>Space Invaders (2014)</h3>
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
                        <article data-game="White">
                            <header>
                                <h3>White (2014)</h3>
                            </header>
                            <p>
                                You live in a world where everything is white. You
                                are white, the walls are white - everything. But
                                one day you see a spark, and it's not. With your
                                new discovery, travel around and see what else
                                the world has to hold. Bring back all the colours!
                            </p>
                            <p>
                                <i>White</i> is a smooth, relaxing, somewhat puzzling platformer.
                                I thought of the idea for the game a long time
                                ago, and had worked out an early prototype. I lost
                                that file though, and I left it alone for a while.
                                I started it up again later, just by coincidence
                                at the same time as the <a href="http://gmc.yoyogames.com/index.php?showtopic=606848&page=3#entry4492169">GMC Jam #13</a>.
                                I submitted an early version to that and it placed
                                19th overall.
                            </p>
                            <p>
                                After the GMC Jam was over, I went on to complete
                                the game. Eventually I published it, first on
                                <a href="http://gamejolt.com/games/platformer/white/35169/">GameJolt</a>,
                                <a href="http://www.indiedb.com/games/white1">indieDB</a> and 
                                <a href="http://oinkiguana.itch.io/white">itch.io</a> as a downloadable 
                                game, and later as an HTML5 game on 
                                <a href="http://www.kongregate.com/games/OinkIguana/white">Kongregate</a> and 
                                <a href="http://www.newgrounds.com/portal/view/647031">Newgrounds</a>.
                                Unfortunately the HTML5 version does not run as
                                smoothly as the standalone executable, and so it
                                has lower ratings where it is published, but it was
                                more an experiment to try and publish it properly.
                                In the end it was 8 months of on and off work,
                                in which I created every part of the game - code,
                                graphics, music and sound. <i>White</i> is my
                                personal favourite of the games I've made.
                            </p>
                            <footer>
                                <a href="Games/White/index.html"></a><a href="Games/White.exe"></a>
                            </footer>
                        </article>
                        <article data-game="Forks">
                            <header>
                                <h3>Forks (2013)</h3>
                            </header>
                            <p>
                                Dave has won Employee of the Month, and a trip to
                                Brockville! Something is up with the train you're
                                taking though. See if you can figure out what's going
                                on.
                            </p>
                            <p>
                                <i>Forks</i> is a sidescrolling action game, mostly
                                story based. It was my entry to the <a href="http://gmc.yoyogames.com/index.php?showtopic=598547&p=4418833">GMC Jam #12</a>
                                where it placed 16th overall. It was made by a
                                group of friends, including myself. I did the code,
                                Pearl Qiu did the graphics, Avery Vine did the 
                                music, and Ben Hansson voiced the monsters.
                            </p>
                            <footer>
                                <a href="Games/Forks.exe"></a><a href="https://github.com/OinkIguana/Forks"></a>
                            </footer>
                        </article>
                        <article data-game="Abby and Elliot">
                            <header>
                                <h3>Abby and Elliot (2013)</h3>
                            </header>
                            <p>
                                Abby and Elliot's school is going on a field trip
                                to the forest. Abby gets bored though, and drags
                                Elliot off into the woods with her. Separated from
                                the group the must now find their way back safely.
                            </p>
                            <p>
                                <i>Abby and Elliot</i> is a sidescrolling game, 
                                mostly based on story. It was my entry to the <a href="http://gmc.yoyogames.com/index.php?showtopic=588681&p=4343215">GMC Jam #11</a>
                                where it placed 21st overall, and the first real
                                game that I released to the Internet. I made this
                                game with Pearl Qiu, who did the graphics. The 
                                music was composed by Jack Boldick.
                            </p>
                            <footer>
                                <a href="Games/Abby_and_Elliot.exe"></a>
                            </footer>
                        </article>
                        <article data-game="Lord of the Flies">
                            <header>
                                <h3>Lord of the Flies (2013)</h3>
                            </header>
                            <p>
                                This game is based off of William Golding's 
                                <i>Lord of the Flies</i> and created for a grade
                                10 English assignment. It's a collection of 
                                minigames that are meant to prove the theme of
                                evil being a part of every person, whether they
                                know it or not. The game is a bit buggy due to 
                                some updates to GameMaker. I took the graphics
                                and sound from the Internet, and the music is from 
                                Donkey Kong Country.
                            </p>
                            <footer>
                                <a href="Games/LordOfTheFlies.exe"></a>
                            </footer>
                        </article>
                        <article data-game="WWII">
                            <header>
                                <h3>WWII (2012)</h3>
                            </header>
                            <p>
                                It's World War II. As part of Canada's forces, you
                                must fight for the Allies and defeat the Axis.
                            </p>
                            <p>
                                I made this game for grade 10 History class. It
                                is a very simple platform shooter, with each level
                                based off of one of Canada's major conflicts. It
                                was coded in GameMaker, with graphics and sound
                                from the Internet.
                            </p>
                            <footer>
                                <a href="Games/WWII.exe"></a>
                            </footer>
                        </article>
                        <article data-game="Cam-I-Am">
                            <header>
                                <h3>Cam-I-Am (2012)</h3>
                            </header>
                            <p>
                                Learn a bit about the things I like in this 
                                autobiographical game.
                            </p>
                            <p>
                                <i>Cam-I-Am</i> is a collection of minigames about
                                me and the things I like to do. I made it for my
                                grade 9 English summative as part of the Book of
                                Life project. 
                            </p>
                            <footer>
                                <a href="Games/Cam-I-Am.exe"></a>
                            </footer>
                        </article>
                        <article data-game="Running Squared">
                            <header>
                                <h3>Running Squared (2011)</h3>
                            </header>
                            <p>
                                Collect the coins and lives, avoid the enemies.
                                Run around as fast as you can but don't get squared!
                            </p>
                            <p>
                                I made <i>Running Squared</i> to learn HTML5 games.
                                It is a very simple run around arcade game, with
                                not a lot to it. It only took a few days to make,
                                but in the end I put it on <a href="http://www.kongregate.com/games/TheGaym/running-squared">Kongregate</a>
                                just for fun.
                            </p>
                            <footer>
                                <a href="Games/Running Squared/index.html"></a><a href="https://github.com/OinkIguana/RunningSquared"></a>
                            </footer>
                        </article>
                        <article data-game="Taco Quest">
                            <header>
                                <h3>Taco Quest (2005)</h3>
                            </header>
                            <p>
                                Tom's hometown is in danger. He must go on a grand
                                adventure full of swords and bows and magic to 
                                get the Magic Taco so he can save his home!
                            </p>
                            <p>
                                <i>Taco Quest</i> was my first big project.
                                I made it mostly with the drag and drop features 
                                of GameMaker when I was very young, so it's not
                                particularly impressive compared to my current
                                games. There are a few bugs here and there, and 
                                the game isn't all that fun. I used the default
                                example graphics that came with GameMaker and some
                                music and sound I found online.
                            </p>
                            <footer>
                                <a href="Games/Adventure.zip" style="background-image:URL(/image/windows7.gif);"></a>
                            </footer>
                        </article>
                        <article data-game="The Ghost Game: Complete Edition">
                            <header>
                                <h3>The Ghost Game: Complete Edition (2005)</h3>
                            </header>
                            <p>
                                You're a ghost. Get the money.
                            </p>
                            <p>
                                <i>The Ghost Game</i> was the first game I ever
                                made. I started it at Virtual Ventures summer camp,
                                and finished it after. I then went on to make a 
                                <i>The Ghost Game 2</i>, which I combined with
                                the first to make the <i>Complete Edition</i>. It's
                                a very basic platformer which I made using GameMaker
                                and it's example graphics. 
                            </p>
                            <footer>
                                <a href="Games/TheGhostGameCompleteEdition.exe"></a>
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
            </section><!-- End games section -->
            <section id="page-site">
                <div class="tri">
                    <svg><!-- Triangle -->
                    <defs><pattern id="patt-site" patternTransform="translate(10,200)" patternUnits="userSpaceOnUse" width="90" height="90"><image xlink:href="/image/logo_x_pattern.png" x="0" y="0" width="90" height="90" /></pattern></defs>
                    <polygon points="" style="fill:URL(#patt-site);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" />
                    </svg>
                </div>
                <div class="content">
                    <div class="split-vertical left" id="site-display">
                        <article data-site="flyingpenguin.cyberbri.com">
                            <header>
                                <h3>FlyingPenguin</h3>
                                <h3><a href="http://flyingpenguin.cyberbri.com">flyingpenguin.cyberbri.com</a></h3>
                            </header>
                            <p>
                                In grade 7 one of my friends had a WordPress site
                                which my classmates and I would go on, kind of like
                                our own personal forum/group chat. Eventually he
                                stopped paying for it, so I decided to make a similar
                                version of it, but from scratch.
                            </p>
                            <p>
                                I copied many of his features at first, such as
                                achievements, the chat box, a forum, and profiles.
                                I then went on to add more things such as quizzes
                                and games
                            </p>
                            <p>
                                Later, when HTML5 came out, I decided to redo the
                                whole thing using the new features. That remake
                                is what is there now today. It's not as well used 
                                anymore, but I still keep an eye on it.
                            </p>
                        </article>
                        <article data-site="knightwatch.cyberbri.com">
                            <header>
                                <h3>NHS Knightwatch</h3>
                                <h3><a href="http://knightwatch.cyberbri.com">knightwatch.cyberbri.com</a></h3>
                            </header>
                            <p>
                                Although it is no longer used officially, this was
                                the website for the Nepean High School student
                                run newspaper <i>Knightwatch</i>. They have since
                                fallen back to using a Google site, but I keep the
                                original hosted on my own server.
                            </p>
                            <p>
                                All the issues and articles are imported from a
                                set of folders and text files organized and formatted
                                a specific way. This was to make uploading an article
                                require no knowledge of programming.
                            </p>
                        </article>
                        <article data-site="oinkiguana.tumblr.com">
                            <header>
                                <h3>\x43\x61\x74</h3>
                                <h3><a href="http://oinkiguana.tumblr.com">oinkiguana.tumblr.com</a></h3>
                            </header>
                            <p>
                                I made the theme to my own Tumblr account. Making
                                a theme was actually the reason I decided to get
                                an account. I wanted to make it stand out from the
                                rest, so I drew it custom graphics. I then decided
                                to make it respond to the current time, the weather,
                                and the seasons. It also has a few things that are
                                a placed little differently each time.
                            </p>
                        </article>
                        <article data-site="cameldridge.com">
                            <header>
                                <h3>Cameron Eldridg</h3>
                                <h3><a href="http://cameldridge.com">cameldridge.com</a></h3>
                            </header>
                            <p>
                                Yes, that is this site. I made this page to showcase
                                my projects. Feel free to look at the source code.
                                Everything is in this one file for your viewing
                                convenience (except the images
                                and the games of course). I've commented it too
                                if you're interested in what's going on.
                            </p>
                            <footer>
                                <a href="https://github.com/OinkIguana/cameldridge"></a>
                            </footer>
                        </article>
                    </div>
                    <div class="split-vertical right">
                        <h4>
                            Websites
                        </h4>
                        <ul>
                            <li class="site-list"><span class="spacer"></span><span class="spaced">flyingpenguin.cyberbri.com</span></li>
                            <li class="site-list"><span class="spacer"></span><span class="spaced">knightwatch.cyberbri.com</span></li>
                            <li class="site-list"><span class="spacer"></span><span class="spaced">oinkiguana.tumblr.com</span></li>
                            <li class="site-list"><span class="spacer"></span><span class="spaced">cameldridge.com</span></li>
                        </ul>
                    </div>
                </div>
            </section><!-- End sites section -->
            <section id="page-bot">
                <div class="tri">
                    <svg><!-- Triangle -->
                    <defs><pattern id="patt-bot" patternTransform="translate(10,200)" patternUnits="userSpaceOnUse" width="65" height="65"><image xlink:href="/image/subtle_white_mini_waves.png" x="0" y="0" width="65" height="65" /></pattern></defs>
                    <polygon points="" style="fill:URL(#patt-bot);stroke:URL(#patt-border);stroke-width:5px;" class="triangle" />
                    </svg>
                </div>
                <div class="content">
                    <h4>
                        Contact
                    </h4>
                </div>
            </section><!-- End bottom section -->
        </div><!-- End page container -->
        <script>
            var pageWidth = function() {
                //Get the width of the page for calculating other values from
                //Includes support for various browsers and their weird ways
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
                //Resize the triangles when the page is resized to make sure they
                //always cover the whole thing
                var pagewidth = pageWidth();
                var triangles = document.getElementsByClassName("triangle");
                //Make sure the border is scaled correctly to fill in the stroke
                document.getElementById("patt-border").setAttribute("width", pagewidth);
                document.getElementById("patt-border").childNodes[0].setAttribute("width", pagewidth);
                for (var i = 0; i < triangles.length; i++) {
                    //Change the points of the SVG polygon
                    triangles[i].setAttribute("points", "0,200,0,205," + pagewidth + ",205," + pagewidth + ",200," + (pagewidth / 2) + ",5");
                    //Update the width of the whole image
                    triangles[i].parentNode.style.width = pagewidth + "px";
                }
            };
            var positions = function() {
                //Reposition all the moving elements to the correct spots for
                //each scroll position

                //First the slight parallax on each section
                var sections = document.getElementsByTagName("section");
                var navlinks = document.getElementsByClassName("nav-link");
                var y = window.pageYOffset;
                for (var i = 0; i < sections.length; i++) {
                    sections[i].style.top = (y / (2 + i)) + "px";
                    //Make the lower ones longer to accomodate for the others moving over them.
                    sections[i].style.paddingBottom = (200 + 100 * i) + "px";
                    //Also make the navigation bar appear for each section that
                    //has gone off the top of the screen.
                    if (i !== 4) {
                        //z-index and opacity change to hide them gradually but
                        //also prevent clicking on them when they're invisible
                        if (sections[i].offsetTop + 300 <= y) {
                            navlinks[i].style.opacity = "1";
                            navlinks[i].style.zIndex = "100";
                        } else {
                            navlinks[i].style.opacity = "0";
                            navlinks[i].style.zIndex = "-1";
                        }
                    }
                }

                //Next get the articles on the games and sites to stay onscreen
                //as you scroll to the lower ones
                var articles = document.getElementsByTagName("article");
                for (var i = 0; i < articles.length; i++) {
                    //Between the top of the section (0) and the bottom of the section (the longer bits)
                    var yy = Math.max(0, Math.min(articles[i].parentNode.parentNode.offsetHeight - articles[i].offsetHeight - 200, y - articles[i].offsetParent.offsetTop));
                    articles[i].style.top = yy + "px";
                }
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
                        articles[i].style.zIndex = (data === site ? "30" : "-1");
                        list[i].className = "site-list" + (data === site ? " selected" : "");
                    }
                }
            };
            var init = function() {
                //Set up onclick events for various things

                //First the games tabs
                var list = document.getElementsByClassName("game-list");
                for (var i = 0; i < list.length; i++) {
                    list[i].onclick = function() {
                        if (!/selected/.test(this.className)) {
                            //Extract the visible text
                            show_game(this.getElementsByClassName("spaced")[0].innerHTML);
                        } else {
                            //If the tab is already open make it close if reclicked
                            show_game("");
                        }
                    };
                }
                //Next the sites, same as games
                list = document.getElementsByClassName("site-list");
                for (var i = 0; i < list.length; i++) {
                    list[i].onclick = function() {
                        if (!/selected/.test(this.className)) {
                            show_site(this.getElementsByClassName("spaced")[0].innerHTML);
                        } else {
                            show_site("");
                        }
                    };
                }
                //Then the navigation bars
                var navlinks = document.getElementsByClassName("nav-link");
                for (var i = 0; i < navlinks.length; i++) {
                    navlinks[i].onclick = function() {
                        //Clear first to ensure there aren't two calls cancelling
                        //each other out
                        window.clearInterval(scrollInterval);
                        //Have them scroll smoothly, rather than jumping
                        scrollInterval = window.setInterval(function(el) {
                            var y = window.pageYOffset;
                            if (Math.abs(y - el.offsetTop) > 4) {
                                //Keep moving closer by less until it's really close
                                y -= (y - el.offsetTop) / 4;
                            } else {
                                //Then stop once its close enough noone will notice a jump
                                y = el.offsetTop;
                                window.clearInterval(scrollInterval);
                            }
                            scroll(0, y);
                        }, 1000 / 30, document.getElementById("page-" + this.id.substr(4)));
                    };
                    //And position them correctly too while they're being dealt with
                    navlinks[i].style.top = (24 * i) + "px";
                }
            };

            //Run the things
            init();
            triangles();
            positions();
            window.addEventListener("resize", triangles);
            window.addEventListener("scroll", positions);
            var scrollInterval;
            window.addEventListener("wheel", function() {
                //Allow the automatic scrolling to be overriden by manual
                window.clearInterval(scrollInterval);
            });
        </script>
    </body>
</html>