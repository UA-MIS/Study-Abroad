# UA MIS Study Abroad Website
(Please insert some business value here for having the website.)

## Contributing
In order to contribute and add your story to the site, we ask that you follow the steps of those before you, (AKA copy and paste what other people have done). After doing so, it will be up to you to parse throught the information and determine what should be changed to add your own pictures, text, and personal feel to your page.

A short checklist that you should keep in mind when looking for the contributions that you should be adding are:
* Adding your photos to assets
* Adding your own html page
* Adding a link to your html page in the home (index.html) page
* Updating your text on your own html page

## Tech
This site is mostly a static vanilla-js, html, and css site. This was originally a theme purchased off of theme forest. [Handlebars](https://handlebarsjs.com/), an html templating tool, is used throughout this project as well.

### Components
There is a semi-component pattern used within this project. You can find these by following `/js/components/`. This is where Handlebars is used within the project to help prevent duplication and code, mainly for the header and footer throughout the project.

#### Usage

##### Consuming Components
The ways these components are used, is that they are called as script tags within the html file you would like for them to be included within. Please note that you must include the script tag to retrieve the handlebars dependency before you execute these scripts. Otherwise, they will fail.

    <!-- Dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/handlebars/dist/handlebars.min.js"></script>

    <div>
        <h1>Some Title</h1>
        <script id="main-header" src="/js/components/header/header.js"></script>
    </div>

##### Component JS Logic
This works by executing the js file which contains the handle bars code. This file will fetch another html file from the server. In this case, the file located at `/js/components/header/header-template.html` will be retrieved, converted to text, and passed to handlebaras for compilation.

    const res = await fetch("/js/components/header/header-template.html")
    const textTemplate = await res.text() 

    const template = Handlebars.compile(textTemplate)

##### Components State
Some components will declare a context variable to be passed into the handlebars template. This allows for the dynamic nature of handlebars and opens of the door to greater composability of different components of html throughout the application.

    const context = {
        links: [{
            href: "/index.html",
            text: "Home"
        },{
            href: "/pages/about.html",
            text: "About"
        }]
    }

    const populatedTemplate = template(context)

##### Rendering Components
Once the template has been populated, it is then ready to be injected into the DOM. This is done by targeting the script tag which called it and setting its `outerHTML` attribute equal to the populated template. This will replace the script tag with the desired html. This is why it is necessary to call the script tag where you desire the element to be injected.