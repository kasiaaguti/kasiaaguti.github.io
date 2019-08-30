import React from 'react'

import Places from './Places'
import Projects from './Projects'

const About = () => (

  <section className="background">

    <section className="mepage">

      <div className="mecontainer">

          <figure className="image myimg">
            <img src="../assets/kasia.jpg" />
          </figure>

          <div className="metext">
            <p className="title titlemetext">Kasia Wypychewicz</p>
              <p className="subtitle subtitlemetext">Junior software engineer with business background. Passionate about technology, including JavaScript, Python and SQL. Looking to join a group of like-minded individuals and work on impactful and exciting projects.</p>

<div className="contact"><img src="../assets/post.png"  id="email"/> <p  className="subtitle subtitlemetext">kasia.aguti@gmail.com</p></div>






          </div>

      </div>

    </section>

<h1 className="title is-1 navytitle">My projects</h1>
<Projects  />

<h1 className="title is-1 navytitle">About me</h1>
  <section className="about">
    <div className="tile is-ancestor aboutbody">

      <div className="tile is-parent">
        <article className="tile is-child notification construction">

            <p className="title">I ran a construction company</p>
            <p className="subtitle">I set up a company that delivered windows and doors to big consutruction sites in London. Including things like 300m2 aluminium curtain walling! That was a challenge.</p>
            <figure className="image tileimg">
              <img src="../assets/construction.jpeg" />
            </figure>
            <div className="content">

            </div>

        </article>

      </div>



      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification cafe">
              <p className="title">I founded a vegan cafe</p>
              <p className="subtitle">
 We created abundantly green, garden-like setting in our pop-up cafe on Brick Lane, London. It was all about nuts and plant-based milks. We squeezeed them daily on site from 15 kinds of nuts & grains to base our lattes, smoothies and all our healthy food on them.
</p>
              <figure className="image tileimg">
                <img src="../assets/cafe.jpg" / >
              </figure>
            </article>

            <article className="tile is-child notification learn">
              <p className="title">I love to learn </p>
              <p className="subtitle">My first degree was in Philosophy. I graduated with MSc in Asian Poltics from SOAS and MSc in Management, Organisations and Governance from LSE. </p>
              <figure className="image tileimg">
                <img src="../assets/lse.jpg" />
              </figure>
            </article>
          </div>

          <div className="tile is-parent">
            <article className="tile is-child notification lightblue">
              <p className="title">I travelled the world</p>
              <p className="subtitle"> I'm curious about various cultures & ideas. Focused on exploring South Asia, open for getting to know other parts of the world. I speak Polish and Spanish, learn Hindi and Japanese.</p>
<p className="subtitle">
                My camera and I visted almost 40 countries. Have a look!</p>
              <figure className="image tileimg">
                <img src="../assets/travel.jpg" / >
              </figure>
            </article>
          </div>


        </div>

        <div className="tile is-parent">
                  <article className="tile is-child notification cafe">
                    <p className="title">I'm a board member</p>
                    <p className="subtitle">I evaluate reports and financial statements monthly for ZPUE. That is a power engineering company
– listed on the Warsaw Stock Exchange, employs 2,800 people, generates £130mn of annual revenue.
</p>
                    <div className="content">

                    </div>
                  </article>
                </div>
      </div>

    </div>

  </section>

<h1 className="title is-1 navytitle">My travels</h1>
<Places />

  </section>
)



export default About
