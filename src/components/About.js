import React from 'react'


const Home = () => (


  <section className="page">
    <section className="about">
      <div className="tile is-ancestor aboutbody about">
        <div className="tile is-vertical is-8">
          <div className="tile titlemetext">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box oragne">
                <p className="title abouttext ">I founded a vegan cafe</p>
                <div className="content abouttext ">
                  <p>I created an abundantly green, garden-like setting in our pop-up cafe on Brick Lane, London. It was all about nuts and plant-based milks. We squeezeed them daily on site from 15 varieties of nuts & grains to base our lattes, smoothies and all our healthy food on them.</p>
                </div>
                <figure className="image tileimghor">
                  <img src="../assets/cafe.jpg" />
                </figure>
              </article>


            </div>
            <div className="tile is-parent">
              <article className="tile is-child box green">
                <p className="title abouttext ">I ran a construction company</p>
                <div className="content abouttext ">
                  <p>I set up a company that delivered windows and doors to big consutruction sites in London. Including things like 300m2 aluminium curtain walling! That was a challenge.</p>
                </div>
                <figure className="image tileimgver">
                  <img src="../assets/construction.jpeg" />
                </figure>
              </article>
            </div>
          </div>


          <div className="tile is-parent">
            <article className="tile is-child notification lightorange columns">

              <div className="column">
                <p className="title abouttext ">I love to learn</p>
                <div className="content abouttext ">
                  <p>My first degree was in Philosophy. I graduated with MSc in Asian Poltics from SOAS and MSc in Management, Organisations and Governance from LSE.</p>
                </div>

              </div>
              <div className="column">
                <figure className="image tileimghor">
                  <img src="../assets/lse.jpg" />
                </figure>
              </div>
            </article>
          </div>

        </div>


        <div className="tile is-parent">
          <article className="tile is-child box lightblue">
            <div className="content">
              <p className="title abouttext">I&apos;m a board member</p>
              <div className="content abouttext">
                <p>I review reports and financial statements for ZPUE on a monthly basis. ZPUE is a power engineering company. It is listed on the Warsaw Stock Exchange, employs 2,800 people and generates £130mn+ of annual revenue.</p>
                <figure className="image tileimgver">
                  <img src="../assets/office.jpg" />
                </figure>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor aboutbody2">
        <div className="tile is-parent">
          <article className="tile is-child box lightblue columns">
            <div className="column">
              <figure className="image tileimghor">
                <img src="../assets/travel.jpg" />
              </figure>
            </div>
            <div className="column">
              <p className="title abouttext">I travelled the world</p>
              <div className="content abouttext">
                <p > I&apos;m curious about various cultures & ideas. Focused on exploring South Asia, open for getting to know other parts of the world. I speak Polish and Spanish, learn Hindi and Japanese.</p>
                <p>
            My camera and I visted almost 40 countries. Have a look at my <a href="https://www.flickr.com/photos/183755392@N05/albums">photo gallery</a> or go directly to albums from a map below!</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>


  </section>
)



export default Home
