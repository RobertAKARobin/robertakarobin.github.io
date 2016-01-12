<!DOCTYPE html>
<?php
  if($_SERVER["SERVER_NAME"] == "localhost"){
    $localhost = true;
    $contact = json_decode(file_get_contents("contact.json"), true);
  }
  $inap_url = "http://ineedaprompt.com/count";
  $inap_count = json_decode(file_get_contents($inap_url), true)["count"];
?>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base target="_blank" />
    <title>Robert (aka Robin) Thomas</title>
    <link id="css" href="css/business.css" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <!-- <script src="scripts.js"></script> -->
  </head>
  <body>

    <header>
      <h1>Robert <sup>(aka Robin)</sup> Thomas</h1>
      <p>Web Development and Customer Experience</p>
    </header>

    <section>
      <h2 class="il">RobertAKARobin on</h2>
      <ul class="il">
        <li><a href="https://github.com/robertakarobin">GitHub</a></li>
        <li><a href="http://www.linkedin.com/in/robertakarobin">LinkedIn</a></li>
        <li><a href="https://www.facebook.com/robertakarobin">Facebook</a></li>
        <li><a href="http://www.reddit.com/user/robertgfthomas">Reddit</a></li>
        <li><a href="https://twitter.com/robertakarobin">Twitter</a></li>
      </ul>
      <div>
        <address>
          <p><a href="mailto:hello@robertakarobin.com">contact@robertakarobin.com</a>
          <!-- Phone --><?php if($localhost) echo("<br/>" . $contact["phone"]); ?></p>
        </address>
        <aside>
          <address>
            <p><!-- Street --><?php if($localhost) echo($contact["street"] . "<br/>"); ?>
            Bethesda, MD 20815</p>
          </address>
        </aside>
      </div>
    </section>

    <main>
      <section>
        <header>
          <h2>Programming Portfolio Highlights</h2>
          <aside>github.com/</aside>
        </header>
        <ol>
          <li>
            <header>
              <h3><a href="http://garnet.wdidc.org">GArnet.wdidc.org</a></h3>
              <ul class="il">
                <li>Ruby</li>
                <li>Rails</li>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>PostgreSQL</li>
              </ul>
              <aside>ga-dc/<a href="http://github.com/ga-dc/garnet">garnet</a></aside>
            </header>
            <p>An open-source assignment and attendance tracking app for General Assembly.</p>
          </li>
          <li>
            <header>
              <h3><a href="http://www.magnetichtml.com">MagneticHTML.com</a></h3>
              <ul class="il">
                <li>Ruby</li>
                <li>Sinatra</li>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>PHP</li>
              </ul>
              <aside>
                <ul>
                  <li>robertakarobin/<a href="http://github.com/robertakarobin/mhtml-sinatra">mhtml-sinatra</a></li>
                  <li>robertakarobin/<a href="http://github.com/robertakarobin/magnetichtml">magnetichtml</a></li>
                </ul>
              </aside>
            </header>
            <p>Stick the Internet to your fridge! Design a webpage using magnetic tiles.</p>
          </li>
          <li>
            <header>
              <h3>AnonBot</h3>
              <ul class="il">
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Websockets</li>
                <li>SQLite3</li>
              </ul>
              <aside>wdidc/<a href="http://github.com/wdidc/wdi_bot">wdi_bot</a></aside>
            </header>
            <p>A <a href="http://slack.com">Slack</a> service that allows students to post anonymous questions during class.</p>
          </li>
          <li>
            <header>
              <h3><a href="http://ineedaprompt.com">INeedAPrompt.com</a></h3>
              <ul class="il">
                <li>Javascript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
              <aside>robertakarobin/<a href="http://github.com/robertakarobin/inap-node">inap-node</a></aside>
            </header>
            <p><?php echo number_format($inap_count); ?> prompts generated so far!</p>
          </li>
        </ol>
      </section>

      <section>
        <header><h2>Recent Work History</h2></header>
        <ol>
          <li>
            <header>
              <h3><a href="https://generalassemb.ly/instructors/robin-thomas/3803">GeneralAssemb.ly</a></h3>
              <p>Instructor, Web Development Immersive</p>
              <aside>
                <time datetime="2015-02-01">February 2015 &mdash; Present</time>
                <p>Washington, DC</p>
              </aside>
            </header>
            <p>Also taught web design at <a href="http://knowledgecommonsdc.org/classes/anatomy-website3/">KCDC</a>, <a href="http://techshop.ws/take_classes.html?storeId=12&amp;categoryId=26">TechShop</a>, <a href="http://wework.com">WeWork</a>, &amp; <a href="http://uberoffices.com">UberOffices</a>.</p>
          </li>
          <li>
            <header>
              <h3><a href="http://www.ashoka.org">Ashoka: Innovators for the Public</a></h3>
              <p>Salesforce Developer</p>
              <aside>
                <time datetime="2014-11-01">November 2014 &mdash; March 2015</time>
                <p>Washington, DC</p>
              </aside>
            </header>
            <p>Built record-searching tool using Visualforce, Apex, SOSL, SOQL, and Javascript.</p>
          </li>
          <li>
            <header>
              <h3><a href="http://www.coinbase.com">Coinbase.com</a></h3>
              <p>Supervisor, API &amp; Customer Support</p>
              <aside>
                <time datetime="2014-01-01">January 2014 &mdash; September 2014</time>
                <p>San Francisco, CA (Remote)</p>
              </aside>
            </header>
            <p>Technical lead for corporations starting to accept Bitcoin, including Dish Network, 1-800-Flowers, Expedia</p>
          </li>
          <li>
            <header>
              <h3><a href="http://www.thenoteboard.com">TheNoteboard.com</a></h3>
              <p>Owner &amp; Inventor</p>
              <aside>
                <time datetime="2013-04-01">April 2012 &mdash; January 2014</time>
                <p>Washington, DC</p>
              </aside>
            </header>
            <p>Turned a budget of $4000 into a revenue of over $100K in 12 months; registered trademark &amp; filed patent</p>
          </li>
        </ol>
      </section>

      <section>
        <header><h2>Education</h2></header>
        <ul>
          <li>
            <header>
              <h3>Stanford University</h3>
              <p>B.A. Urban Studies</p>
            </header>
            <p>Completed 137 credits with a 3.732 GPA. Left to found TheNoteboard.com</p>
          </li>
        </ul>
      </section>
    </main>

    <footer>
      <p>This r&eacute;sum&eacute; was coded from scratch in HTML5/CSS3.</p>
    </footer>

  </body>
</html>
