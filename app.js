function app() {
    const mydata = {
        "name": "EWETOYE Ibrahim",
        "head_img": "",
        "title": "Full Stack Developer",
        "tag_line": "Knowing is not enough, we must apply...",
        "projects": {
            "icon": "fas fa-project-diagram",
            "entries": [
                {
                    id: 3,
                    title: "fsfgshsj",
                    date: "buy milk",
                    about: "yuu",
                },
                {
                    id: 4,
                    title: "ertyujbhjkl",
                    date: "buy cake",
                    about: "fjkjjjjj",
                },
            ]
        },
        "skills": {
            "icon": "fas fa-wrench",
            "entries": [
                
            ]
        },
        "experience": {
            "icon": "fas fa-briefcase",
            "entries": [
                
            ]
        },
        "education": {
            "icon": "fas fa-graduation-cap",
            "entries": [
                
            ]
        },
        "links": [
            {
                "id": 1,
                "icon": "fab fa-github-alt fa-3x pr-3 text-dark",
                "url": "https://github.com/EwetoyeIbrahim",
            },
            {
                "id": 2,
                "icon": "far fa-envelope fa-3x text-danger",
                "url": "mailto:i.ewetoye@gmail.com",
            },
            {
                "id": 3,
                "icon": "fab fa-linkedin-in fa-3x text-primary",
                "url": "https://linkedin.com/Ewetoye",
            },
        ],

    }

    class Nav extends owl.Component {
        constructor() {
            super(...arguments);
            this.profile = mydata
        }
    }
    class Header extends owl.Component { }
    class EntryCard extends owl.Component {
        constructor() {
            super(...arguments);
            this.items = mydata.projects.entries
        }
    }

    class App extends owl.Component { }
    App.components = { Nav, EntryCard, Header };

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
