
export function Projects() {


    const projectList = [
        {
            id: 1,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, alias velit. Consequuntur blanditiis id ea hic vel? Expedita officiis quam, consequuntur molestias doloribus, ad nam labore impedit, debitis dolores cum?",
            languages: ["JavaScript", "HTML", "CSS"]
        },
        {
            id: 2,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, alias velit. Consequuntur blanditiis id ea hic vel? Expedita officiis quam, consequuntur molestias doloribus, ad nam labore impedit, debitis dolores cum?",
            languages: ["JavaScript", "HTML", "CSS"]
        }
    ]


    return (
        <section className="projects-container">
            <h3> Projects </h3>

            {projectList.map(project => (
                <article className="project">
                    <img src="" alt="" />

                    {project.text ? project.text : null}
                    <article>
                        {project.languages ? project.languages : null}
                    </article>
                </article>

            ))}
        </section>
    )
}