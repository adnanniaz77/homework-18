<h1>Class Assignment # 18</h1>
<ul>
    <li>
        Create a GitHub repo for this assignment and clone it to your computer. Any name will do -- just make sure it's related to this project in some fashion.
    </li>
    <li>
        Run npm init. When that's finished, install and save these npm packages:
        <ul>
            <li>express</li>
            <li>express-handlebars</li>
            <li>mongoose</li>
            <li>cheerio</li>
            <li>axios</li>
        </ul>
    </li>
    <li>
        <strong>NOTE</strong>: If you want to earn complete credit for your work, you must use all five of these packages in your assignment.
    </li>
    <li>
        In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Follow these steps to get it running:
    </li>
    <li>
        Create a Heroku app in your project directory.
    </li>
    <li>
        Run this command in your Terminal/Bash window:
        <pre>heroku addons:create mongolab</pre>
        <pre>This command will add the free mLab provision to your project.</pre>
    </li>
    <li>
        When you go to connect your mongo database to mongoose, do so the following way:
        <ul>
            <li>
                <pre>
                    // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
                    var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
                    mongoose.connect(MONGODB_URI);
                </pre>
            </li>
            <li>
                This code should connect mongoose to your remote mongolab database if deployed, but otherwise will connect to the local mongoHeadlines database on your computer.
            </li>
            <li>
                Watch this demo of a possible submission. See the deployed demo application here.
            </li>
            <li>
                Your site doesn't need to match the demo's style, but feel free to attempt something similar if you'd like. Otherwise, just be creative!
            </li>
        </ul>
    </li>
</ul>

<h2>Instructions</h2>
<hr />

<ul>
    <li>
        Create an app that accomplishes the following:
        <ol>
            <li>
                Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:
            </li>
            <li>
                Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:
                <ul>
                    <li>Headline - the title of the article</li>
                    <li>Summary - a short summary of the article</li>
                    <li>URL - the url to the original article</li>
                    <li>Feel free to add more content to your database (photos, bylines, and so on).</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>
        Beyond these requirements, be creative and have fun with this!
    </li>
    <strong>Tips:</strong>
    <li>
        Go back to Saturday's activities if you need a refresher on how to partner one model with another.
    </li>
    <li>
        Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; Do not save any duplicate entries.
    </li>
    <li>
        Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.
        <ul>
            <li>If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.</li>
        </ul>
    </li>
</ul>
