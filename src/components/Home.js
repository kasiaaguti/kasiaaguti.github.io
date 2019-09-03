import React from 'react'

import Places from './Places'
import Projects from './Projects'
import About from './About'

const Home = () => (

  <section className="background">
      <section className="mepage mepadding">

    <div className="tile is-ancestor">

    <div className="tile is-parent">

      <article className="tile is-child box lightblue columns me">
  <div className="column">
        <figure className="image myimg column">
          <img src="../assets/kasia.jpg" />
        </figure>
</div>
        <div className="column is-8">
        <p className="title titlemetext">Kasia Wypychewicz</p>
      <p className="subtitle subtitlemetext">Junior software engineer with business background. Passionate about technology, including JavaScript, Python and SQL. Looking to join a group of like-minded individuals and work on impactful and exciting projects.</p>
      <div className="contact"><img src="../assets/post.png"  id="email"/> <p  className="subtitle subtitlemetext">kasia.aguti@gmail.com</p></div>

        </div>
      </article>
    </div>

  </div>


    </section>

<h1 className="title is-1 navytitle">My projects</h1>
<Projects  />

<h1 className="title is-1 navytitle">About me</h1>
<About />


<h1 className="title is-1 navytitle" id="travel">My travels</h1>
<Places />

</section>



)



export default Home
