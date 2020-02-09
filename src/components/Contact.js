import React from 'react'


const Contact = () => (
  <section className="mepage mepadding">

    <div className="tile is-ancestor">

      <div className="tile is-parent">

        <article className="tile is-child box lightblue columns me">
          <div className="column">
            <figure className="image myimg column">
              <img src="../assets/kasia.jpg" alt="Me in formal clothes. From a professional photoshoot" />
            </figure>
          </div>
          <div className="column is-8">
            <p className="title titlemetext">Kasia Wypychewicz</p>
            <p className="subtitle subtitlemetext">Driven and enthusiastic software engineer with business background. Experienced launching new cross-border ventures across industries. Passionate about technology, including JavaScript, Python and SQL.</p>
            <div className="contact"><img src="../assets/post.png"  id="email"/> <p  className="subtitle subtitlemetext">kasia.aguti@gmail.com</p></div>

          </div>
        </article>
      </div>

    </div>


  </section>

)





export default Contact
