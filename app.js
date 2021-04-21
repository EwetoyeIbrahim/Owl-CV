function app() {
    const mydata = {
        name: "EWETOYE Ibrahim",
        title: "Full Stack Developer",
        tag_line: "Knowing is not enough, we must apply...",
        projects: {
            title: "Works, Projects and Publications",
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
                        font: "fab fa-google",
                        color: "#db3236"
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
                        color: "#00A4EF"
                    },
                    {
                        name: "Photoshop",
                        font: "fab fa-google fa-5x",
                        color: "#8BC3FC"
                    },

                ]
            }
        },
        experience: {
            icon: "fas fa-briefcase",
            entries: [

            ]
        },
        education: {
            icon: "fas fa-graduation-cap",
            entries: [

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

    class Nav extends owl.Component {
        constructor() {
            super(...arguments);
            this.profile = mydata
        }
    }
    class Header extends owl.Component {
        constructor() {
            super(...arguments);
            this.profile = mydata
        }
    }
    class PlainItemCard extends owl.Component {
        constructor() {
            super(...arguments);
            this.items = mydata.projects.entries
            this.sec_name = mydata.projects.title
        }
    }

    class App extends owl.Component { }
    App.components = { Nav, Header, PlainItemCard };

    // Application setup    
    owl.mount(App, { target: document.body });

}

/**
 * Initialization code
 * This code load templates, and make sure everything is properly connected.
 */
async function start() {
    let templates;
    try {
        templates = await owl.utils.loadFile('app.xml');
    } catch (e) {
        console.error(`This app requires a static server.  If you have python installed, try 'python app.py'`);
        return;
    }
    const env = { qweb: new owl.QWeb({ templates }) };
    owl.Component.env = env;
    await owl.utils.whenReady();
    app();
}

start();
