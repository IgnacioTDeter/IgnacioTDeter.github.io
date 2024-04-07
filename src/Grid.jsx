

export function Grid() {


  const gridItems = [
    {
      id: "span-row-3",
      component: 'Item 1'
    },
    {
      id: "span-col-3 span-row-3",
      styles: "name-card",
      component:  <PicturProfile/> 
    },
    {
      id: "span-row-3 ",
      styles: "contact-card",
      component: <ContactLinks/>
    },
    {
      id: "span-row-3 span-col-2",
      styles: "about-me-card",
      component: <AboutMe/>
    },
    { id: "span-row-5 ", text: 'Item 5' },
    { id: "span-row-2 span-col-3", text: 'Item 6' },
  ];

  return (

    <section className='grid-container'>
      {gridItems.map(item => (
        <article className={`grid-item ${item.styles} ${item.id}`}>
          {item.component ? item.component : null}
        </article>
      ))}
    </section>

  );
}

export function PicturProfile() {
  return (
    <div>
      <h1> Hi, I'm Ignacio Deter </h1>
      <h2> Junior Developer </h2>
    </div>

  )
}

export function AboutMe(){
   return(
      <h1>
        About Me
      </h1>
   )
}

export function ContactLinks() {
  return (
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
  );
}