const frontEndResources = [
    {
        img: "dev-doc.jpg",
        title: "dev docs",
        content: "Dev Docs provides fully-managed technical services, including high-quality documentation, development, and design services",
        link: "https://devdocs.io/"
    },
    {
        img: "mdn-doc.png",
        title: "mdn docs",
        content: "MDN Web Docs is free-to-use resource on which we document the open web platform",
        link: "https://developer.mozilla.org/en-US/"
    },
    {
        img: "mdn-doc.png",
        title: "Media Queries",
        content: "Media queries allow you to apply CSS styles depending on a device's media type (such as print vs. screen)",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/named-color"
    },
    {
        img: "mdn-doc.png",
        title: "Named Colors",
        content: "The <named-color> CSS data type is the name of a color, such as red, blue, black, or lightseagreen.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries"
    },
    {
        img: "mdn-doc.png",
        title: "Add Event Listener",
        content: "The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    },
    {
        img: "mdn-doc.png",
        title: "Events",
        content: "Events are fired to notify code of \"interesting changes\" that may affect code execution",
        link: "https://developer.mozilla.org/en-US/docs/Web/Events"
    },
    {
        img: "mdn-doc.png",
        title: "Audio Element",
        content: "The HTMLAudioElement interface provides access to the properties of <audio> elements, as well as methods to manipulate them.",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement"
    },
    {
        img: "mdn-doc.png",
        title: "Triggering Events",
        content: "This article demonstrates how to create and dispatch DOM events. Such events are commonly called synthetic events, as opposed to the events fired by the browser itself",
        link: "https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events"
    },
    {
        img: "mdn-doc.png",
        title: "Keypress Events",
        content: "The keypress event is fired when a key that produces a character value is pressed down.",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event",
        deprecate: true
    },
    {
        img: "mdn-doc.png",
        title: "Description List",
        content: "The dl HTML element represents a description list. The element encloses a list of groups of terms",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"
    },
    {
        img: "mdn-doc.png",
        title: "Destructuring",
        content: "The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    },
    {
        img: "sean.svg",
        title: "Sean Halpin Resume",
        content: "Sean Halpin sample resume site for example for html and css practice",
        link: "https://web.archive.org/web/20180819202235js_/http://seanhalpin.io/"
    },
    {
        img: "appbrewery.png",
        title: "Outdated Content",
        content: "Angela Yu's outdated full stack webdevelopment course link from App Brewery organization",
        link: "https://appbrewery.com/p/legacy-complete-web-development-course/?utm_source=email-sendgrid&utm_medium=1565838&utm_campaign=2023-04-14&utm_term=31334738&utm_content=educational"
    },
    {
        img: "appbrewery.png",
        title: "Replit AppBrewery",
        content: "Learn to code through building real-world projects!",
        link: "https://replit.com/@appbrewery"
    },
    {
        img: "w3schools.png",
        title: "HTML DOM",
        content: "When an HTML document is loaded into a web browser, it becomes a document object",
        link: "https://www.w3schools.com/jsref/dom_obj_document.asp"
    },
    {
        img: "w3schools.png",
        title: "HTML DOM Style Object",
        content: "The Style object represents an individual style statement.",
        link: "https://www.w3schools.com/jsref/dom_obj_style.asp"
    },
    {
        img: "w3schools.png",
        title: "Window setTimeout()",
        content: "The setTimeout() method calls a function after a number of milliseconds.",
        link: "https://www.w3schools.com/jsref/met_win_settimeout.asp"
    },
    {
        img: "w3schools.png",
        title: "jQuery Effect Methods",
        content: "The following table lists all the jQuery methods for creating animation effects.",
        link: "https://www.w3schools.com/jquery/jquery_ref_effects.asp"
    },
    {
        img: "w3schools.png",
        title: "SQL Tutorial",
        content: "SQL is a standard language for storing, manipulating and retrieving data in databases.",
        link: "https://www.w3schools.com/sql/"
    },
    {
        img: "w3schools.png",
        title: "SQL Data Types",
        content: "Each column in a database table is required to have a name and a data type.",
        link: "https://www.w3schools.com/sql/sql_datatypes.asp"
    },
    {
        img: "w3schools.png",
        title: "SQL PRIMARY KEY",
        content: "The PRIMARY KEY constraint uniquely identifies each record in a table.",
        link: "https://www.w3schools.com/sql/sql_primarykey.asp"
    },
    {
        img: "w3schools.png",
        title: "SQL FOREIGN KEY",
        content: "The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.",
        link: "https://www.w3schools.com/sql/sql_foreignkey.asp"
    },
    {
        img: "w3schools.png",
        title: "SQL INNER JOIN",
        content: "The INNER JOIN keyword selects records that have matching values in both tables.",
        link: "https://www.w3schools.com/sql/sql_join_inner.asp"
    },
    {
        img: "w3schools.png",
        title: "HTML Global Attributes",
        content: "The global attributes are attributes that can be used with all HTML elements.",
        link: "https://www.w3schools.com/tags/ref_standardattributes.asp"
    },
    {
        img: "w3schools.png",
        title: "HTML Event Attributes",
        content: "HTML has the ability to let events trigger actions in a browser, like starting a JavaScript when a user clicks on an element.",
        link: "https://www.w3schools.com/tags/ref_eventattributes.asp"
    },
    {
        img: "w3schools.png",
        title: "CSS Reference",
        content: "All types of CSS Properties",
        link: "https://www.w3schools.com/cssref/index.php"
    },
    {
        img: "wikipedia.png",
        title: "Element Style",
        content: "The Elements of Style (also called Strunk & White) is a style guide for formal grammar used in American English writing",
        link: "https://en.wikipedia.org/wiki/The_Elements_of_Style"
    },
    {
        img: "wikipedia.png",
        title: "Common Passwords",
        content: "This is a list of the most common passwords, discovered in various data breaches.",
        link: "https://en.wikipedia.org/wiki/List_of_the_most_common_passwords"
    },
    {
        img: "wikipedia.png",
        title: "Single-responsibility principle",
        content: "The single-responsibility principle (SRP) is a computer programming principle",
        link: "https://en.wikipedia.org/wiki/Single-responsibility_principle"
    },
    {
        img: "github.png",
        title: "Javascript writings",
        content: "This is a living document and new ideas for improving the code around us are always welcome. Contribute: fork, clone, branch, commit, push, pull request.",
        link: "https://github.com/rwaldron/idiomatic.js"
    },
    {
        img: "github.png",
        title: "JSX Style Guide",
        content: "This style guide is mostly based on the standards that are currently prevalent in JavaScript, although some conventions (i.e async/await or static class fields)",
        link: "https://github.com/airbnb/javascript/tree/master/react"
    },
    {
        img: "google.png",
        title: "Google JQuery",
        content: "The Google Hosted Libraries is a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries",
        link: "https://developers.google.com/speed/libraries#jquery"
    },
    {
        img: "jquery.jpg",
        title: "JQuery",
        content: "jQuery is a fast, small, and feature-rich JavaScript library",
        link: "https://jquery.com/download/"
    },
    {
        img: "jquery.jpg",
        title: "Slide Down",
        content: "Display the matched elements with a sliding motion.",
        link: "https://api.jquery.com/slideDown/"
    },
    {
        img: "bootstrap.png",
        title: "BootStrap",
        content: "Powerful, extensible, and feature-packed frontend toolkit",
        link: "https://getbootstrap.com/"
    },
    {
        img: "learn-enough.png",
        title: "CMD Line Codes",
        content: "Learn Enough Command Line to Be Dangerous is available as an ebook, an offline video series, and as a structured, self-paced online course",
        link: "https://www.learnenough.com/command-line-tutorial"
    },
    {
        img: "express.png",
        title: "Express",
        content: "Fast, unopinionated, minimalist web framework for Node.js",
        link: "https://expressjs.com/"
    },
    {
        img: "npm.png",
        title: "NPM",
        content: "Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages",
        link: "https://www.npmjs.com/"
    },
    {
        img: "gitignore.png",
        title: "Git Ignore",
        content: "This is GitHub’s collection of .gitignore file templates. We use this list to populate the .gitignore template choosers available in the GitHub.com interface when creating new repositories and files",
        link: "https://github.com/github/gitignore"
    },
    {
        img: "axios.jpg",
        title: "Axios",
        content: "Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase)",
        link: "https://axios-http.com/docs/intro"
    },
    {
        img: "nodejs.png",
        title: "node js",
        content: "Node.js is a JavaScript runtime built on the V8 JavaScript engine.",
        link: "https://nodejs.org/docs/latest-v18.x/api/index.html"
    },
    {
        img: "passport.png",
        title: "Passport Strategies",
        content: "Passport is authentication middleware for Node.js.",
        link: "https://secrets-api.appbrewery.com/"
    },
    {
        img: "react.png",
        title: "Logical && Operator",
        content: "You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator.",
        link: "https://legacy.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator"
    },
    {
        img: "react.png",
        title: "useState()",
        content: "Returns a stateful value, and a function to update it.",
        link: "https://legacy.reactjs.org/docs/hooks-reference.html#usestate"
    },
    {
        img: "react.png",
        title: "Controlled Components",
        content: "In React, mutable state is typically kept in the state property of components, and only updated with setState().",
        link: "https://legacy.reactjs.org/docs/forms.html#controlled-components"
    },
    {
        img: "react.png",
        title: "State & Life Cycle",
        content: "This page introduces the concept of state and lifecycle in a React component.",
        link: "https://legacy.reactjs.org/docs/state-and-lifecycle.html"
    },
    {
        img: "react.png",
        title: "Hooks",
        content: "They let you use state and other React features without writing a class.",
        link: "https://legacy.reactjs.org/docs/hooks-intro.html"
    },
    {
        img: "react.png",
        title: "SyntheticEvent",
        content: "The SyntheticEvent wrapper that forms part of React’s Event System.",
        link: "https://legacy.reactjs.org/docs/events.html"
    },
    {
        img: "react.png",
        title: "Material Ui Icons",
        content: "Google has created over 2,100 official Material icons, each in five different \"themes\" (see below).",
        link: "https://mui.com/material-ui/icons/"
    },
    {
        img: "react.png",
        title: "Material Ui Buttons",
        content: "Buttons communicate actions that users can take. They are typically placed throughout your UI",
        link: "https://mui.com/material-ui/react-button/#floating-action-buttons"
    },
    {
        img: "react.png",
        title: "Material Zoom",
        content: "Zoom transition can be used for the floating variant of the Button component.",
        link: "https://mui.com/material-ui/api/zoom/"
    },
]


export { frontEndResources };
