function Projects() {

    const projects = [
        {
            name: "Holiday",
            url: "https://miumiumiumiumiu.github.io/holiday/",
            image: "projects/holidays.jpg",
            alt: "Image of a calendar page",
            description: "Show current and upcoming holidays in different countries. Made with React, JavaScript, Axios, React Bootstrap and a Holiday API by Nager.Date.",
            github: "https://github.com/MiuMiuMiuMiuMiu/holiday"
        },
        {
            name: "A todo-list",
            url: "https://webshare.mah.se/ak6031/portfolio/todo/index.html",
            image: "projects/todo.jpg",
            alt: "Image of a todo list",
            description: "Made with HTML, CSS, JavaScript, JQuery and Local Storage.",
            github: "https://github.com/MiuMiuMiuMiuMiu/todo"
        },
    ];

    const content = projects.map((project) =>
        
            <div className="card" key={project.name}>
                <div className="image-container">
                    <a href={project.url}>
                        <img src={project.image} alt={project.alt}></img>
                    </a>
                    <p className="overlay">
                        Show project
                    </p>
                </div>
                
                <div className="container">
                    <h3><b>{project.name}</b></h3>
                    <p>{project.description}</p>
                    <a href={project.github}>Github...</a>
                </div>
            </div>       
    );

    return (
        <div id="projects">
            <h1>Personal projects</h1>
            <div className="projects-container">
                {content}
            </div>
        </div>
    )
}

export default Projects;