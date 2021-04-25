// Profile information
const profile_data = {
    name: "EWETOYE Ibrahim", // Full name
    title: "Full Stack Developer", // Job Role
    tag_line: "Knowing is not enough, we must apply...", // Optional favourite line
    projects: {
        id: "Projects",
        // Optional type key, defaults to `plaincard` when not specified
        type: "plaincard",
        header: "Works, Projects and Publications",
        icon: "fas fa-project-diagram",
        entries: [

            {
                title: "Databank",
                date: "2020",
                about: `Developed and deployed <a href="https://testbank.medsaf.com">testbank.medsaf.com</a>,
                        a proprietary role-based data analysis platform for Medsaf (a medical supply chain industry).`
            },
            {
                title: "Odoo Modules",
                date: "2020",
                about: `Developed <a href="https://apps.odoo.com/apps/modules/12.0/OdooSlack">OdooSlack</a> and 
                        <a href="https://apps.odoo.com/apps/modules/12.0/payment_paystack_acquirer">Paystack Payment Acquirer</a>. 
                        The former sends notifications to Slack channels based on specified triggers and actions whereas the latter
                        enables individuals and merchant process payment transactions through Paystack on Odoo ERP system`
            },
            {
                title: "Equimolar-Blog",
                date: "2020",
                about: `Developed <a href="https://github.com/EwetoyeIbrahim/Equimolar-Blog">Equimolar-Blog</a>, an open-source
                        blogging engine that injects blogging functionality into existing and new python web applications.
                        An example of its use case is <a href="https://www.equimolar.com">equimolar.com</a>, a data analysis blog.`
            },
            {
                title: "MathSend",
                date: "2019 - 2020",
                about: `Developed <a href="https://www.mathsend.com">Mathsend chatbot</a>, which handles both symbolic and
                        numerical mathematical expressions through chat messages. It is currently live on messenger
                        (<a href="https://m.me/mathsend.bot"> m.me/mathsend.bot</a>),
                        Telegram (<a href="https://t.me/mathsend_bot">t.me/mathsend_bot</a>)
                        and its website, <a href="https://www.mathsend.com"> mathsend.com`
            },
            {
                title: "Setting The Template For Naira Denomination Detection",
                date: "2018",
                about: `Developed and published a Nigerian Naira denomination detection algorithm. The
                        programme, which was written in MATLAB, was published in International Journal of
                        Research and Publications (<a href="http://ijrp.org/paper-detail/466">DOI: 100191122018465</a>`
            },
            {
                title: "Mini Control Lab",
                date: "2016",
                about: `Developed a MATLAB programme that simulates simple process dynamics and control problems. publicly 
                        available on <a href="http://mathworks.com/matlabcentral/fileexchange/58946-mini-control-lab">Matlab Central</a>.`
            },
        ]
    },
    skills: {
        id: "Skills",
        type: "fontcard",
        header: "Skills and Tools",
        icon: "fas fa-wrench",
        entries: {
            Backend: [
                {
                    name: "Linux",
                    font: "fab fa-linux fa-5x",
                    color: "#dd4814"
                },
                {
                    name: "PostgreSQL",
                    font: "fas fa-database fa-5x",
                    color: "#0064a5"
                },
                {
                    name: "Python",
                    font: "fab fa-python fa-5x",
                    color: "#4B8BBE"
                },
                {
                    name: "Google Cloud",
                    font: "fas fa-cloud fa-5x",
                    color: "#4885ed"
                },

            ],
            Frontend: [
                {
                    name: "Javascript",
                    font: "fab fa-js fa-5x",
                    color: "#f0db4f"
                },
                {
                    name: "HTML 5",
                    font: "fab fa-html5 fa-5x",
                    color: "#f06529"
                },
                {
                    name: "CSS 3",
                    font: "fab fa-css3 fa-5x",
                    color: "#264de4"
                },
            ],
            Others: [
                {
                    name: "Github",
                    font: "fab fa-github fa-5x",
                    color: ""
                },
                {
                    name: "Microsoft Suite",
                    font: "fab fa-microsoft fa-5x",
                    color: "#00A4EF"
                },
                {
                    name: "Google Suite",
                    font: "fab fa-google fa-5x",
                    color: "#db3236"
                },
                {
                    name: "Photoshop",
                    font: "fas fa-palette fa-5x",
                    color: "#8BC3FC"
                },

            ]
        }
    },
    education: {
        id: "Education",
        header: "Education and Trainings",
        icon: "fas fa-graduation-cap",
        entries: [
            {
                title: "B.Tech. Chemical Engineering",
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
    experience: {
        id: "Experience",
        header: "Experiences",
        icon: "fas fa-briefcase",
        entries: [
            {
                title: "IT Manager",
                sub_title: "Medsaf.com, Parkview, Lagos State.",
                date: "2019 - Date",
                about: `Deployed, troubleshoots and improves the organization's ERP platform;
                        Developed several scripts (Python and Google App Scripts) for automating some time
                        consuming processes based on historical data.</p>`,
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
