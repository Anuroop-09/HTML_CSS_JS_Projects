const appResources = [
    {
       img: "codepen.png",
       title: "Codepen editor",
       content: "CodePen is a bit unique in that it's all about writing and showing front end code, including JavaScript",
       link: "https://codepen.io/" 
    },
    {
       img: "cssbtngenerator.png",
       title: "css btn generator",
       content: "Css btn generator is a free online tool that allows you to create cross-browser CSS button styles in seconds",
       link: "https://css3buttongenerator.com/" 
    },
    {
       img: "cropcircle.png",
       title: "Crop circle",
       content: "Free tool to crop a circle in the image online, Simple tool, drop your image and adjust the circle cropper to fit the desired location in the image",
       link: "https://crop-circle.imageonline.co/" 
    },
    {
       img: "giphy.png",
       title: "giphy",
       content: "GIPHY is how you search, share, and discover GIFs.",
       link: "https://giphy.com/" 
    },
    {
       img: "noimage.jpg",
       title: "css font stack",
       content: "A font stack is a list of fonts in the CSS font-family declaration",
       link: "https://www.cssfontstack.com/" 
    },
    {
       img: "googlefonts.png",
       title: "google fonts",
       content: "Making the web more beautiful, fast, and open through great typography",
       link: "https://fonts.google.com/" 
    },
    {
       img: "noimage.jpg",
       title: "JS/CSS Minify",
       content: "This JS and CSS minifier removes whitespace, strips comments, combines files, and optimizes/shortens a few common programming patterns",
       link: "https://www.minifier.org/" 
    },
    {
       img: "gitbranching.png",
       title: "Learn Git branching",
       content: "Learn Git Branching is the most visual and interactive way to learn Git on the web",
       link: "https://learngitbranching.js.org/" 
    },
    {
       img: "github.png",
       title: "Quake js",
       content: "QuakeJS is a port of ioquake3 to JavaScript with the help of Emscripten",
       link: "https://github.com/inolen/quakejs" 
    },
    {
       img: "github.png",
       title: "Awesome beignners",
       content: "Awesome First PR Opportunities",
       link: "https://github.com/MunGell/awesome-for-beginners" 
    },
    {
       img: "github.png",
       title: "Awesome selfhosted",
       content: "Self-hosting is the practice of hosting and managing applications on your own server(s) instead of consuming from SaaSS providers",
       link: "https://github.com/awesome-selfhosted/awesome-selfhosted" 
    },
    {
       img: "github.png",
       title: "Word Mastermind",
       content: "This game is a clone of Wordle. It's like the MasterMind game, but instead of colors you have to guess words",
       link: "https://github.com/clupasq/word-mastermind" 
    },
    {
       img: "diffchecker.jpg",
       title: "Diff Checker",
       content: "Find the difference between two text files",
       link: "https://www.diffchecker.com/" 
    },
    {
        img: "submarine.png",
        title: "Sub Marine Cable Map",
        content: "The Submarine Cable Map is a free and regularly updated resource from TeleGeography.",
        link: "https://www.submarinecablemap.com/" 
    },
    {
        img: "CSfieldguide.png",
        title: "RGB Colour Mixer",
        content: "RGB Colour Mixer - Used by Screens",
        link: "https://www.csfieldguide.org.nz/en/interactives/rgb-mixer/" 
    },
    {
        img: "noimage.jpg",
        title: "CSS Puns",
        content: "Detailed Expalination about CSS Properties",
        link: "https://saijogeorge.com/css-puns/usa-mexico-trump/" 
    },
    {
        img: "adobecolorwheel.png",
        title: "Adobe Color Wheel",
        content: "Color wheel can be used as color generator.",
        link: "https://color.adobe.com/create/color-wheel" 
    },
    {
        img: "dailyui.png",
        title: "Daily UI",
        content: "Become a Better Designer in 100 Days. Daily UI is a series of Design Challenges and Surprise Rewards sent out every day.",
        link: "https://www.dailyui.co/" 
    },
    {
        img: "collectui.png",
        title: "Collect UI",
        content: "Daily inspiration collected from daily ui archive and beyond. Based on Dribbble shots, hand picked, updating daily.",
        link: "https://collectui.com/" 
    },
    {
        img: "canva.png",
        title: "Canva",
        content: "Canva makes it easy to create and share professional designs.",
        link: "https://www.canva.com/en_in/" 
    },
    {
        img: "noimage.jpg",
        title: "Karel Ide",
        content: "Welcome to the Stanford Karel IDE. * This is a free space for you to. * write any Karel program you want.",
        link: "https://stanford.edu/~cpiech/karel/ide.html" 
    },
    {
        img: "rapidapi.png",
        title: "Rapid Api",
        content: "Welcome to the Stanford Karel IDE. * This is a free space for you to. * write any Karel program you want.",
        link: "https://rapidapi.com/hub" 
    },
    {
        img: "noimage.jpg",
        title: "SQL Lite IDE",
        content: "SQL OnLine - Next gen SQL Editor: SQLite, MariaDB / MySQL, PostgreSQL, MS SQL Server.",
        link: "https://sqliteonline.com/" 
    },
    {
        img: "mycompiler.png",
        title: "My Compiler",
        content: "Run your favourite programming languages online with myCompiler. Simple and easy to use IDE",
        link: "https://www.mycompiler.io/view/08q0XDT7TFp" 
    },
    {
        img: "cipher.png",
        title: "Caesar-Cipher",
        content: "Method in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.",
        link: "https://cryptii.com/pipes/caesar-cipher" 
    },
    {
        img: "noimage.jpg",
        title: "Encode decode",
        content: "Encode and decode the texts",
        link: "https://encode-decode.com/aes256-encrypt-online/" 
    },
    {
        img: "noimage.jpg",
        title: "Email Address check",
        content: "Check if your email address is in a data breach",
        link: "https://haveibeenpwned.com/" 
    },
    {
        img: "noimage.jpg",
        title: "Password Checker",
        content: "Check for password strength",
        link: "http://password-checker.online-domain-tools.com/",
        deprecate: true
    },
    {
        img: "hackertyper.png",
        title: "Hacker Typer",
        content: "Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture.",
        link: "https://hackertyper.net/" 
    },
    {
        img: "babeljs.png",
        title: "Babel JS",
        content: "Babel is a JavaScript compiler. Use next generation JavaScript, today.",
        link: "https://babeljs.io/"
    },
    {
        img: "lorempicsum.png",
        title: "Lorem Picsum",
        content: "Easy to use, stylish placeholders",
        link: "https://picsum.photos/"
    },
    {
        img: "noimage.jpg",
        title: "Transparent Textures",
        content: "Standing on the shoulders of Subtle Patterns. Built and maintained by @mikehearn.",
        link: "https://www.transparenttextures.com/"
    },
]

export { appResources };