import wordleImage from './img/wordle.webp';


export function Projects() {


    const projectList = [
        {
            id: 1,
            img: wordleImage ,
            text: "Wordle es un juego simple, donde los jugadores intentan adivinar una palabra de cinco letras en seis intentos.",
            languages: [<HTML />, <CSS />, <JavaScript/>, <React/>],
            title: "Wordle"
        },
        {
            id: 2,
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, alias velit. Consequuntur blanditiis id ea hic vel? Expedita officiis quamLorem ipsum ",
            languages: [<HTML />, <CSS />, <JavaScript/>],
            title: "Sistema de gestion 'Pañol'"
        }
    ]


    return (
        <section className="projects-container">
            <h3> Projects </h3>

            {projectList.map(project => (
                <article className="project">
                    <img src= {project.img} alt="pedritooo" />


                    <article>
                        <h1>{project.title}</h1>
                        {project.text ? project.text : null}
                        <div className="dis-flex">
                            {project.languages ? project.languages : null}
                        </div>
                    </article>
                </article>

            ))}
        </section>
    )
}

export function HTML() {
    return (
        <div className="language-container">
            HTML
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="" />
            </div>
        </div>
    )

}

export function CSS() {
    return (
        <div className="language-container">
            CSS
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="" />
            </div>
        </div>
    )
}

export function JavaScript() {

    return (
        <div className="language-container">
            JavaScript
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
            </div>
        </div>
    )

}

export function React(){
    return (
        <div className="language-container">
            React
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="" />
            </div>
        </div>
    )
}