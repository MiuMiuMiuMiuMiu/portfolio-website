function GroupProjects() {

    return (
        <div id="group-projects">
            <h1>Group projects</h1>
            <div className="group-projects-container">
                <div className="showcase">
                    <h2>ThankYou - Systemutveckling</h2>
                    <div className="iframe-container">
                        <iframe title="thankyou" width="400" height="300"
                            src="https://www.youtube.com/embed/WF1JvWv9khU">
                        </iframe>
                    </div>
                    <p>
                        ThankYou is a journaling tool for appreciating your everyday life by logging texts or images that best represent your thankfulness for the day. 
                    </p>
                    <p>
                        This was our first major project in our education where we applied SQL, Python, and JavaScript skills gained from previous courses. 
                        We used MariaDB with SQLAlchemy for the database and Flask, written in Python, as the web framework. Styling was done primarily with Bootstrap.
                        During this project, I was the main contributor and programmed the majority of the backend.
                    </p>   
                    <a href="https://github.com/jonfra165/Thankyou">Github link...</a> 
                </div>

                <div className="showcase">
                    <h2>TMap - Webbtjänster</h2>
                    <img src="projects/tmap.jpg" alt="Different kinds of api calls"></img>
                    <p>
                        TMap is a mashup API that combines Twitter and Google Maps- and translation APIs.
                        To showcase our API, we created a website that displayed a map with the top trending tweet for each country. 
                        Users could translate the tweet into any language via our API that used Google translation API.
                    </p>
                    <p>
                        For this project we utilized Python and Flask.
                    </p>   
                    <a href="https://github.com/cybertilla/Tmap">Github link...</a> 
                </div>

                <div className="showcase">
                    <h2>Health Literacy - Examensprojekt</h2>
                    <div className="iframe-container">
                        <iframe title="thankyou" width="400" height="300"
                            src="https://www.youtube.com/embed/DDhoSrFxquo">
                        </iframe>
                    </div>
                    <p>
                        The Health Literacy mobile app was designed to offer simplified and easy-to-understand medical information aimed at a younger demographic.
                    </p>
                    <p>
                        For this project we used JavaScript and React Native.
                    </p>   
                    <p>No github link!</p>
                </div>

            </div>
        </div>
    )
}

export default GroupProjects;