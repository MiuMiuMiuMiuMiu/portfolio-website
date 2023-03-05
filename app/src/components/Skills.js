function Skills() {

    const skills = [
        {
            name: "React",
            url: "react-logo.png",
            alt: "React logo"
        },
        {
            name: "Vue",
            url: "vue-logo.png",
            alt: "Vue logo"
        },
        {
            name: "JavaScript",
            url: "js-logo.png",
            alt: "JavaScript logo"
        },
        {
            name: "Python",
            url: "python-logo.png",
            alt: "Python logo"
        },
        {
            name: "SQL",
            url: "database-logo.png",
            alt: "Database logo"
        },
        {
            name: "HTML",
            url: "html-logo.png",
            alt: "HTML logo"
        },
        {
            name: "CSS",
            url: "css-logo.svg",
            alt: "CSS logo"
        }
    ];

    const content = skills.map((skill) =>
        <div className="card" key={skill.name}>
            <img src={skill.url} alt={skill.alt}></img>
            <div className="container">
                <h3><b>{skill.name}</b></h3>
            </div>
        </div>
    );

    return (
        <div id="skills">
            <h1>Skills</h1>
            <div className="skills-container">
                {content}
            </div>
        </div>
    )
}

export default Skills;