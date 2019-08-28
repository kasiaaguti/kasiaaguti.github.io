import React from 'react'

import Places from './Places'
import Projects from './Projects'

const About = () => (

  <section className="background aboutbody">

<section className="home">
      <div className="content">
        <figure className="image myimg">
          <img src="../assets/kasia.jpg" />
        </figure>

  <div className="metext">
        <p className="title">Kasia Wypychewicz</p>
        <p className="subtitle">Junior software engineer with business background.

        Passionate about technology, including JavaScript, Python and SQL.

      Looking to join a group of like-minded individuals and work on impactful and exciting projects.</p>

        <div className="content">

        </div>

      </div>
      </div>
</section>

<h1 className="title is-1">My projects</h1>
<Projects  />

<h1 className="title is-1">About me</h1>
  <section>
    <div className="tile is-ancestor margins">

      <div className="tile is-parent">
        <article className="tile is-child notification construction">
          <div className="content">
            <p className="title">I run a construction company</p>
            <p className="subtitle">I set up a company that delivered windows and doors to big consutruction sites in London</p>
            <figure className="image tileimg">
              <img src="../assets/construction.jpeg" />
            </figure>
            <div className="content">

            </div>
          </div>
        </article>
      </div>

      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification cafe">
              <p className="title">I founded a vegan cafe</p>
              <p className="subtitle">Top tile</p>
              <figure className="image tileimg">
                <img src="../assets/cafe.jpg" / >
              </figure>
            </article>

            <article className="tile is-child notification learn">
              <p className="title">I love to learn </p>
              <p className="subtitle">My first degree was in Philosophy. I graduated with</p>
              <figure className="image tileimg">
                <img src="../assets/lse.jpg" />
              </figure>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification lightblue">
              <p className="title">I travelled the world</p>
              <p className="subtitle">My camera and I visted almost 40 countries. Have a look!</p>
              <figure className="image tileimg">
                <img src="../assets/travel.jpg" / >
              </figure>
            </article>
          </div>
        </div>

      </div>

    </div>

  </section>

<h1 className="title is-1">My travels</h1>
<Places />

  </section>
)



export default About
