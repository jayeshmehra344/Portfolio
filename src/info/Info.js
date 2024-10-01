import self from "../img/self.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jayesh",
    lastName: "Mehra",
    initials: "jm", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "🎓",
            text: "Student at SRMIST"
        },
        {
            emoji: "📧",
            text: "jayeshmehra344@.com"
        }
    ],
    socials: [
        
        {
            link: "https://instagram.com/jayeshmehra471",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/jayeshmehra344",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/jayeshmehra344",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/JAYM344",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am a 2nd-year BTech Computer Science student at SRM University with a strong interest in web development, particularly the MERN stack. I am passionate about building dynamic and responsive web applications and continuously expanding my skills in full-stack development. I am eager to take on projects that challenge me and help me grow as a developer.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'TailwindCss','MySQL'],
            exposedTo: ['nodejs', 'expressjs', 'MongoDB']
        }
    ,
    hobbies: [
        {
            label: 'Tennis',
            emoji: '🎾'
        },
        {
            label: 'Astrophysics',
            emoji: '🔭'
        },
        {
            label: 'Music',
            emoji: '♭'
        },
        {
            label: 'Travel',
            emoji: '✈️'
        }

    ],
    portfolio: [ 
        {
            title: "QR Code Generator",
            live: "https://jayeshmehra344.github.io/QR-code-generator/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/jayeshmehra344/QR-code-generator", // this should be a link to the **repository** of the project, where the code is hosted.
            
        },
        {
            title: "Weather App",
            live: "https://jayeshmehra344.github.io/Weather-App/",
            source: "https://github.com/jayeshmehra344/Weather-App",
            
        },
        
       
        
    ]
}