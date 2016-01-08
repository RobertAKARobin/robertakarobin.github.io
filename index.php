<!DOCTYPE html>
<!-- <?php
  if($_SERVER["SERVER_NAME"] == "localhost") $offline = true;
?> -->
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base target="_blank" />
    <title>Robert (aka Robin) Thomas</title>
    <link id="css" href="css/business.css" rel="stylesheet" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <script src="scripts.js"></script>
  </head>
  <body>

    <section>
      <header>
        <h1>Robert <sup>(aka Robin)</sup> Thomas</h1>
        <p>Web Development and Customer Experience</p>
      </header>
      <p>RobertAKARobin on
        <a href="https://github.com/robertakarobin">GitHub</a>
        <a href="http://www.linkedin.com/in/robertakarobin">LinkedIn</a>
        <a href="https://www.facebook.com/robertakarobin">Facebook</a>
        <a href="http://www.reddit.com/user/robertgfthomas">Reddit</a>
        <a href="https://twitter.com/robertakarobin">Twitter</a>
      </p>
      <address>
        4750 Chevy Chase Dr &num;107
        <br />Bethesda, MD 20815
      </address>
      <address>
        <a href="mailto:hello@robertakarobin.com">hello@robertakarobin.com</a>
        <br />(513)280-7988
      </address>
    </section>

    <main>
      <section>
        <h2>Programming Skill Highlights</h2>
<?php
include("classes/tablestring.php");
$table = new TableString(file_get_contents("views/tablestring.txt"));
$table->transpose();
echo $table->html;
?>
        <!-- MongoDB, Visualforce, SOSL, SOQL, Heroku -->
      </section>

      <section>
        <h2>Recent Work History</h2>
        <ol>
          <li>
            <header>
              <h3><a href="https://generalassemb.ly/instructors/robin-thomas/3803">GeneralAssemb.ly</a></h3>
              <p>Instructor, Web Development Immersive</p>
            </header>
            <aside>
              <time datetime="2015-02-01">February 2015 &mdash; Present</time>
              <p>Washington, DC</p>
            </aside>
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
        <h2>Education</h2>
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
