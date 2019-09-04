import React from 'react'


const Projects = () => (
  <section className="page">
    <div className="tile is-ancestor projectsbody">

      <div className="tile is-parent is-6">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Powerengineering Hub</p>
            <button className="skills">Python</button>
            <button className="skills">PostgreSQL</button>
            <button className="skills">Flask</button>
            <button className="skills">Insomnia</button>
            <button className="skills">React</button>
            <button className="skills">Axios</button>
            <button className="skills">Webpack</button>
            <button className="skills">HTML5</button>
            <button className="skills">CSS</button>
            <button className="skills">Bulma</button>
            <button className="skills">Heroku</button>

            <figure className="image tileimg">
              <img src="../assets/power.png" />
            </figure>

            <div className="content">

              <p className="title is-4">Idea</p>

              <p>It is a hub for Engineering Industry in Poland. It has features similar to LinkedIn where logged users can create profiles to connect with each other and with companies, publish posts on their profiles, comment post of other users and make comments on companies pages. </p>

              <p>  Thanks to newsapi.org public API this website can provide newest sector related information.
              </p>

              <p className="title is-4">Key learnings</p>
              <p> Building a functioning full-stack app with PostgreSQL, Python and FLask where requests can successfully display information on the front end (read) and data can be created/updated/deleted on the back end </p>
            <div className="buttons">
              <button className="projectbutton">  <a className="projectlink" href="https://powerengineering.herokuapp.com" target="_blank" rel="noopener noreferrer">Website in action</a> </button>

              <button className="projectbutton">  <a className="projectlink" href="https://github.com/kasiaaguti/SEI-project-4" target="_blank" rel="noopener noreferrer">ReadMore in ReadMe </a> </button>
          </div>
            </div>
          </div>
        </article>
      </div>

      <div className="tile is-parent is-6">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Just fur Them</p>
            <button className="skills">MongoDB</button>
            <button className="skills">Mongoose</button>
            <button className="skills">Express</button>
            <button className="skills">NodeJS</button>
            <button className="skills">Axios</button>
            <button className="skills">Insomnia</button>
            <button className="skills">React</button>
            <button className="skills">Webpack</button>
            <button className="skills">HTML5</button>
            <button className="skills">CSS</button>
            <button className="skills">Bulma</button>
            <button className="skills">Mocha</button>
            <button className="skills">Chai</button>
            <button className="skills">Heroku</button>


            <figure className="image tileimg">
              <img src="../assets/justfur.png" />
            </figure>

            <div className="content">

              <p className="title is-4">Idea</p>

              <p>It is social a hub for people who have pets. It has features similar to Meetup where login users can create profiles to connect with each other to meet with other pet owners in their area.</p>

<p>A big part of the project is listing and showing on a map pet friendly pubs, restaurants and cafes in London. Logged in users can add and review venues. Not logged in users can see the map and read reviews, but can't add any of those.
</p>

              <p className="title is-4">Key learnings</p>
              <p> Building a functioning full-stack app with MongoDB, Mongoose and NodeJS where requests can successfully display information on the front end (read) and data can be created/updated/deleted on the back end.</p>

  <p> Working with Github on a group project.</p>
<div className="buttons">
<button className="projectbutton">   <a className="projectlink" href="https://just-fur-them.herokuapp.com/" target="_blank" rel="noopener noreferrer">Website in action</a> </button>
              <button className="projectbutton">  <a className="projectlink" href="https://github.com/kasiaaguti/SEI-41-PROJECT-3" target="_blank" rel="noopener noreferrer">ReadMore in ReadMe </a> </button>
          </div>
            </div>
          </div>
        </article>
      </div>

    </div>


    <div className="tile is-ancestor projectsbody">

      <div className="tile is-parent is-6">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Digital Nomad Hub</p>
          <button className="skills">React</button>
            <button className="skills">Insomnia</button>
            <button className="skills">React</button>
            <button className="skills">Express</button>
            <button className="skills">NodeJS</button>
            <button className="skills">Axios</button>
            <button className="skills">Webpack</button>
            <button className="skills">HTML5</button>
            <button className="skills">CSS</button>
            <button className="skills">Bulma</button>
            <button className="skills">Heroku</button>

            <figure className="image tileimg">
              <img src="../assets/dn.png" />
            </figure>

            <div className="content">

              <p className="title is-4">Idea</p>

              <p>The core idea was to use Webcamstravel API and render it on a map (Mapbox). Webcam API gave us access to public cameras from all over the world. We used geographic coordinates to show markers of the camera's locations on the map. After an user clicks a marker in desired location a popup appears showing more details. User can click on the camera image to see a live view from this particular camera in a new window. </p>


              <figure className="image tileimg">
                <img src="../assets/mapdn.png" />
              </figure>
              <p className="title is-4">Key learnings</p>
              <p> Building a React application that consumes a public API with
several components (classical and functional). Using router. Pair programming. </p>
<div className="buttons">
              <button className="projectbutton">   <a className="projectlink" href="http://digital-nomad-ga.herokuapp.com/ ​" target="_blank" rel="noopener noreferrer">Website in action</a> </button>

              <button className="projectbutton">  <a className="projectlink" href="https://github.com/kasiaaguti/SEI-project2-" target="_blank" rel="noopener noreferrer">ReadMore in ReadMe </a> </button>
          </div>
            </div>
          </div>
        </article>
      </div>

      <div className="tile is-parent is-6">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Tetris</p>
            <button className="skills">JavaScript</button>
            <button className="skills">HTML5</button>
            <button className="skills">CSS</button>



            <figure className="image tileimg">
              <img src="../assets/tetris.png" />
            </figure>

            <div className="content">

              <p className="title is-4">Idea</p>


<p>​Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.
</p>

              <p className="title is-4">Key learnings</p>
              <p> Built a fully functional game after. Practicied how to think like a developer based on what we learned in week 1-3 of the General Assembly course.</p>
                <p> The larges challenge was the rotation of the Tetriminos. Each one rotates around a specific point on its axis.</p>
<div className="buttons">

              <button className="projectbutton">   <a className="projectlink" href=" https://kasiaaguti.github.io/sei-project-1/" target="_blank" rel="noopener noreferrer">Play Tetris</a> </button>
              <br />
              <br />
            <button className="projectbutton">  <a className="projectlink" href="https://github.com/kasiaaguti/sei-project-1" target="_blank" rel="noopener noreferrer">ReadMore in ReadMe </a> </button>
        </div>
            </div>
          </div>
        </article>
      </div>











    </div>
  </section>
)





export default Projects
