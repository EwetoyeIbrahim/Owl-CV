// Profile information
const profile_data = {
    name: "EWETOYE Ibrahim", // Full name
    navigation_color: "black", // Color of the fixed top bar.
    title: "Full Stack Developer", // Job Role
    tag_line: "Knowing is not enough, we must apply...", // Optional favourite line
    
    // Next, you define sections of your CV and their entries as exemplified in the subsequent example.
    education: {
        id: "Education",
        color: "green",
        header: "Education and Trainings",
        icon: "fas fa-graduation-cap",
        entries: [
            {
                title: "Blockchain Specialization",
                sub_title: "University of Buffalo",
                date: "2022-Date",
                about: `Learning not only how to design and program smart contracts and decentralized application; but also how to think of innovative application models, leveraging the blockchain technology.`,
            },
            {
                title: "Elastic Google Cloud Infrastructure: Scaling and Automation",
                sub_title: "Google Cloud",
                date: "2021",
                about: `Explored and deployed solution elements, including securely interconnecting networks, load balancing, autoscaling, infrastructure automation and managed services. <a href="https://www.coursera.org/account/accomplishments/certificate/EK75DNVTL4A7"><i>View Certificate</i></a>`,
            },
            {   title: "B.Tech. Chemical Engineering",
                sub_title: "Ladoke Akintola University of Technology, Oyo State.",
                date: "2011-2018",
                about: `Badged Second Class Upper Honour, and was part of several research teams
                        in areas where computer applications were needed.`,
            },
            {
                title: "ICT Certification",
                sub_title: "Ladoke Akintola University of Technology, Oyo State.",
                date: "2012",
                about: `Badged Distinction`,
            },
        ]
    },
    projects: {
        id: "Projects", // Sections must possess an ID like this.
        /* Optional type key:
            Defaults to `plaincard` when not specified.
            It can be `plaincard` or `fontcard` as used in the Skills section
        */
        type: "plaincard", // Specifies what and how the entries will be arranged
        color: "green", // Colour of the section bar
        header: "Works, Projects and Publications", // Title of the section
        icon: "fas fa-project-diagram",  // Icon to represent the section, must be an fa icon
        entries: [ // All items to be placed under this section
            {
                title: "MathSend",
                date: "2019",
                about: `Developed <a href="http://mathsend.com/">Mathsend chatbot</a>, which handles both symbolic and
                        numerical mathematical expressions through chat messages. It is currently live on messenger
                        (<a href="https://m.me/mathsend.bot"> m.me/mathsend.bot</a>),
                        Telegram (<a href="https://t.me/mathsend_bot">t.me/mathsend_bot</a>)
                        and its website, <a href="http://mathsend.com/"> mathsend.com`
            },
            {
                title: "Setting The Template For Naira Denomination Detection",
                date: "2018",
                about: `Developed and published a Nigerian Naira denomination detection algorithm. The
                        programme, which was written in MATLAB, was published in International Journal of
                        Research and Publications (<a href="http://ijrp.org/paper-detail/466">DOI: 100191122018465</a>`
            } 
        ]
    },
    skills: {
        id: "Skills",
        type: "fontcard", // Using the `fontcard` type here, to show its use.
        color: "green",
        header: "Skills and Tools",
        icon: "fas fa-wrench",
        entries: {
            // For `fontcard` type, the title is the key of a list of dict, as shown.
            // See how this looks in the browers so as to be able customized it.
            "Frameworks and Libraries": [
                {
                    name: "Flask",
                    font: "fab fa-python",
                    color: "#000000"
                },
                {
                    name: "ReactJS",
                    font: "fab fa-js",
                    color: "#61dbfb"
                },
                {
                    name: "Django",
                    font: "fab fa-python",
                    color: "#1c7a5a"
                },
                {
                    name: "JQuery",
                    font: "fab fa-js",
                    color: "#0868ac"
                },
            ],
            Backend: [
                {
                    name: "Linux",
                    font: "fab fa-linux",
                    color: "#dd4814"
                },
                {
                    name: "PostgreSQL",
                    font: "fas fa-database",
                    color: "#0064a5"
                },
                {
                    name: "Python",
                    font: "fab fa-python",
                    color: "#4B8BBE"
                },
                {
                    name: "Google Cloud",
                    font: "fas fa-cloud",
                    color: "#4885ed"
                },
            ],
            Frontend: [
                {
                    name: "CSS 3",
                    font: "fab fa-css3",
                    color: "#264de4"
                },
                {
                    name: "HTML 5",
                    font: "fab fa-html5",
                    color: "#f06529"
                },
                {
                    name: "Javascript",
                    font: "fab fa-js",
                    color: "#f0db4f"
                },
                {
                    name: "Bootstrap",
                    font: "fas fa-file-code",
                    color: "#563d7c"
                },
                {
                    name: "Tailwind CSS",
                    font: "fas fa-file-code",
                    color: "#05B7D3"
                },
                
            ],
            Others: [
                {
                    name: "Github",
                    font: "fab fa-github",
                    color: ""
                },
                {
                    name: "Microsoft Suite",
                    font: "fab fa-microsoft",
                    color: "#00A4EF"
                },
                {
                    name: "Google Suite",
                    font: "fab fa-google",
                    color: "#db3236"
                },
                {
                    name: "Photoshop",
                    font: "fas fa-palette",
                    color: "#8BC3FC"
                },
            ]
        }
    },

    experience: {
        id: "Experience",
        color: "green",
        header: "Experiences",
        icon: "fas fa-briefcase",
        entries: [
            {
                title: "IT Manager",
                sub_title: "Mathsend.com, Ikorodu, Lagos State.",
                date: "2018 - Date",
                about: `Maintained IT infrastructures of the business`,
            },
            {
                title: "Full Stack Developer",
                sub_title: "Medsaf.com, Parkview, Lagos State.",
                date: "2019 - 2021",
                about: `Deployed and maintains the organization's ERP platform;
                In charge of developing new businesssolutions`,
            },
            {
                title: "Presiding Officer",
                sub_title: "INEC, Gidan Kwano, Kebbi State.",
                date: "2019",
                about: `Presided over a 1600 Voters' polling unit with two additional voting points during
                        Nigeria's 2019 general election.`,
            },
            {
                title: "Head of Mathematics Department",
                sub_title: "Government Science College, Ngaski, Kebbi State.",
                date: "2018 - 2019",
                about: `Prepared senior students of the school for WAEC, NECO, and UTME Mathematics examinations.`,
            },
            {
                title: "Farm Manager",
                sub_title: "Lamdanatu Farms, Idere, Oyo State.",
                date: "2017 - 2018",
                about: `Managed the start-up from day one of its establishment by laying down the operational protocols
                        and assigning people to strategic places, to get the work done on time.`,
            },
            {
                title: "Operations Manager",
                sub_title: "Science Prodigy Laboratory Chemical, Ikorodu, Lagos State.",
                date: "2017",
                about: `Founded a daily-needs chemical production factory which failed within a year but learnt how not to fail again.`,
            },
            {
                title: "Assistant Plant Operator",
                sub_title: "Lagos State Wastewater Management Office, Alausa, Lagos State.",
                date: "2016",
                about: `Participated in the daily operations of the Lagos state wastewater treatment plant by organizing the staffs
                        and enforcing due processes, in order to achieve a high-quality effluent.`,
            },
            {
                title: "Software Tutor",
                sub_title: "Science Prodigy Laboratory, Ogbomosho, Oyo State.",
                date: "2012 - 2016",
                about: `Published YouTube tutorial videos and hosted on-campus software workshops (ASPEN HYSYS | MATLAB | PHOTOSHOP)
                        for undergraduate and postgraduate students.`,
            },

        ]
    },
    links: [
        {
            icon: "fab fa-github-alt fa-3x pr-3 text-dark",
            url: "https://github.com/EwetoyeIbrahim",
        },
        {
            icon: "far fa-envelope fa-3x text-danger",
            url: "mailto:i.ewetoye@gmail.com",
        },
        {
            icon: "fab fa-linkedin-in fa-3x text-primary",
            url: "https://linkedin.com/Ewetoye",
        },
    ],

}


// Application Entry
function app() {

    // Head section variables
    class Head extends owl.Component {
        setup() {
            this.profile = profile_data;
        }
    }

    // Customize the top fixed navigation
    class Nav extends owl.Component {
        setup() {
            this.profile = profile_data
        }
    }

    // Add Head photo, role, links, and statement
    class Header extends owl.Component {
        setup() {
            this.profile = profile_data
        }
    }

    // Available cards for entries
    class FontItemCard extends owl.Component { }
    class PlainItemCard extends owl.Component { }

    // The full body
    class Body extends owl.Component {
        setup() {
            this.profile = profile_data;
        }
    }

    Body.components = { Nav, Header, PlainItemCard, FontItemCard };

    // Application setup    
    owl.mount(Head, { target: document.head });
    owl.mount(Body, { target: document.body });

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
async function start() {
    let templates;
    try {
        templates = await owl.utils.loadFile('static/app.xml');
    } catch (e) {
        console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
        return;
    }
    const env = { qweb: new owl.QWeb({ templates }) };
    owl.Component.env = env;
    await owl.utils.whenReady();
    app(profile_data);
}

start();
