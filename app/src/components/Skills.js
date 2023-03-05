function Skills() {

    const skills = [
        {
            name: "React",
            image: "logo192.png",
            alt: "React logo"
        },
        {
            name: "Vue",
            image: "logo/vue-logo.png",
            alt: "Vue logo"
        },
        {
            name: "JavaScript",
            image: "logo/js-logo.png",
            alt: "JavaScript logo"
        },
        {
            name: "Python",
            image: "logo/python-logo.png",
            alt: "Python logo"
        },
        {
            name: "SQL",
            image: "logo/database-logo.png",
            alt: "Database logo"
        },
        {
            name: "HTML",
            image: "logo/html-logo.png",
            alt: "HTML logo"
        },
        {
            name: "CSS",
            image: "logo/css-logo.svg",
            alt: "CSS logo"
        }
    ];

    const content = skills.map((skill) =>
        <div className="card" key={skill.name}>
            <img src={skill.image} alt={skill.alt}></img>
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