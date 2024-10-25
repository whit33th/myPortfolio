import Project from '../components/Project/Project'

import projects from '../helpers/projectList'


function Projects() {
    return (

        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {
                        projects.map((project, index) =>   
                        <Project key={index} 
                        title={project.title} 
                        img={project.img[0]}
                        index={index} />)
                    }
                </ul>
            </div>
        </main>

    )
}

export default Projects