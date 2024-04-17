import React, { useState } from 'react';
import { AboutMePopup } from './AboutMePopup';
import pictureProfile from './img/profile-picture.png'

export function Grid() {



  const [isClicked, setIsClicked] = useState(false);

  const gridItems = [
    {
      id: "span-row-3",
      styles: "profile",
      component: <ProfilePicture />
    },
    {
      id: "span-col-3 span-row-3",
      styles: "name-card",
      component: <NameCard />
    },
    {
      id: "span-row-3 ",
      styles: "contact-card",
      component: <ContactLinks />
    },
    {
      id: "span-row-3 span-col-2",
      styles: "about-me-card",
      component: <AboutMe setIsClicked={setIsClicked} /> 
    },
    {
      id: "span-row-5 ",
      styles: "curriculum",
      component: <Curriculum /> // Cambiado para que coincida con la condición
    },
    { id: "span-row-2 span-col-3", styles: 'my-skills-card', component: <MySkills /> },

  ];


  return (
    <section className='grid-container'>
      {gridItems.map(item => (
        item.styles === "curriculum" ? (
          <Curriculum />
        ) : (
          item.component // renderiza el elemento JSX directamente
        )
      ))}

      {isClicked ? <AboutMePopup setIsClicked={setIsClicked}/> : null}
    </section>
  );

}


export function popUp(){

}

export function ProfilePicture() {
  return (
    <article className={`grid-item span-row-3 profile-picture`}>
      <img src= {pictureProfile} alt="" />
    </article>
  )

}

export function NameCard() {
  return (
    <article className={`grid-item name-card span-col-3 span-row-3`} >
      <div>
        <h1> Hi, I'm Ignacio Deter </h1>
        <h2> Junior Developer </h2>
      </div>
    </article>


  )
}

export function AboutMe({setIsClicked}) {

  const popUp = () =>{
    setIsClicked(prevState => !prevState);
  }

  return (
    <article className={`grid-item about-me-card span-row-3 span-col-2`} onClick={popUp} >
      <h1>
        About Me
      </h1>
    </article>
  )
}

export function AboutMeActivated() {
  return (

    <p>Soy un apasionado desarrollador web con experiencia en la creación de experiencias interactivas utilizando diversas tecnologías. Mi enfoque se centra en combinar mis habilidades de desarrollo de software con mi creatividad en diseño para crear soluciones innovadoras y atractivas para los usuarios. Además de mi experiencia técnica, he demostrado habilidades de liderazgo y gestión de proyectos como representante y líder en el desarrollo de páginas web. Allí, aprendí a gestionar equipos de manera efectiva y a entregar resultados de alta calidad en entornos colaborativos. Estoy constantemente buscando nuevos desafíos y oportunidades para seguir creciendo como profesional en el campo del desarrollo web.
    </p>
  )
}

export function ContactLinks() {
  return (
    <article className={`grid-item contact-card span-row-3 `}>
      <article>
        <div>
          <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Wb7G67EcR44qT3KQLlLzI1Fna_L2lPXfTI1sx8_z2w&s" alt="Linkedin" />
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw8f0e4ZeGFhsEY8Ry2WFAwJIPEm0nf87gwKxe-ZkDA&s" alt="GitHub" />
        </div>
        <div>
          <img src="https://play-lh.googleusercontent.com/knRmgMgfpqdOPijUx_py74Z5anu-ry0O0bTYqdklFVbUqcPkGtYd_lCZJiE1AXRXMA" alt="GitHub" />
        </div>
      </article>
    </article>

  );
}

export function MySkills() {
  return (
    <article className={`grid-item my-skills-card span-row-2 span-col-3 `}>
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <img src="https://skillicons.dev/icons?i=git,github,html,css,js,react,mysql,vscode&perline=14" alt="" />
      </div>
    </article>

  );
}


export function Curriculum() {

  return (
    <a href="./archivos/Curriculum-ignacio-deter.pdf" download="Curriculum-ignacio-deter" className={`grid-item curriculum span-row-5`}>
      <article>
        <div>
          <h1>Descargar CV</h1>
        </div>
      </article>
    </a>
  );

}

