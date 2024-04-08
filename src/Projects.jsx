
export function Projects() {


    const projectList = [
        {
            id: 1,
            text: "Wordle es un juego simple, donde los jugadores intentan adivinar una palabra de cinco letras en seis intentos.",
            languages: ["JavaScript", "HTML", "CSS"],
            title: "Wordle"
        },
        {
            id: 2,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, alias velit. Consequuntur blanditiis id ea hic vel? Expedita officiis quam",
            languages: ["JavaScript", "HTML", "CSS"],
            title: "Sistema de gestion 'Pañol'"
        }
    ]


    return (
        <section className="projects-container">
            <h3> Projects </h3>

            {projectList.map(project => (
                <article className="project">
                    <img src="https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg" alt="" />


                    <article>
                        <h1>{project.title}</h1>
                        {project.text ? project.text : null}
                        <div>
                            {project.languages ? project.languages : null}
                        </div>
                    </article>
                </article>

            ))}
        </section>
    )
}