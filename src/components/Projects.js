import React from 'react'


const Projects = () => (
  <section className="background aboutbody">
    <div className="tile is-ancestor margins">

      <div className="tile is-parent is-5">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Powerengineering Hub</p>
            <button>Python</button>
            <button>PostgreSQL</button>
            <button>Flask</button>
            <button>Insomnia</button>
            <button>React</button>
            <button>Axios</button>
            <button>Webpack</button>
            <button>HTML5</button>     <button>CSS</button>
            <button>Bulma</button>
            <button>Heroku</button>

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
              <button>   <a href="https://powerengineering.herokuapp.com" target="_blank" rel="noopener noreferrer" className="navbar-item">See this website in action</a> </button>
              <br />
              <br />
              <button>  <a href="https://github.com/kasiaaguti/SEI-project-4" target="_blank" rel="noopener noreferrer" className="navbar-item">Check out details in my readme</a> </button>
            </div>
          </div>
        </article>
      </div>

      <div className="tile is-parent is-5">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Just fur Them</p>
            <button>MongoDB</button>
            <button>Mongoose</button>
            <button>Express</button>
            <button>NodeJS</button>
            <button>Axios</button>
            <button>Insomnia</button>
            <button>React</button>
            <button>Webpack</button>
            <button>HTML5</button>
            <button>CSS</button>
            <button>Bulma</button>
            <button>Mocha</button>
            <button>Chai</button>
            <button>Heroku</button>


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
              <button>   <a href="https://just-fur-them.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="navbar-item">See this website in action</a> </button>
              <br />
              <br />
              <button>  <a href="https://github.com/kasiaaguti/SEI-41-PROJECT-3" target="_blank" rel="noopener noreferrer" className="navbar-item">Check out details in my readme</a> </button>
            </div>
          </div>
        </article>
      </div>

    </div>


    <div className="tile is-ancestor margins">

      <div className="tile is-parent is-5">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Digital Nomad Hub</p>
            <button>React</button>
            <button>Insomnia</button>
            <button>React</button>
            <button>Express</button>
            <button>NodeJS</button>
            <button>Axios</button>
            <button>Webpack</button>
            <button>HTML5</button>
           <button>CSS</button>
            <button>Bulma</button>
            <button>Heroku</button>

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
              <button>   <a href="http://digital-nomad-ga.herokuapp.com/ ​" target="_blank" rel="noopener noreferrer" className="navbar-item">See this website in action</a> </button>
              <br />
              <br />
              <button>  <a href="https://github.com/kasiaaguti/SEI-project2-" target="_blank" rel="noopener noreferrer" className="navbar-item">Check out details in my readme</a> </button>
            </div>
          </div>
        </article>
      </div>

      <div className="tile is-parent is-5">
        <article className="tile is-child notification lightblue">
          <div className="content">
            <p className="title">Tetris</p>
            <button>JavaScript</button>
            <button>HTML5</button>
            <button>CSS</button>



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


              <button>   <a href=" https://kasiaaguti.github.io/sei-project-1/" target="_blank" rel="noopener noreferrer" className="navbar-item">See this website in action</a> </button>
              <br />
              <br />
              <button>  <a href="https://github.com/kasiaaguti/sei-project-1" target="_blank" rel="noopener noreferrer" className="navbar-item">Check out details in my readme</a> </button>
            </div>
          </div>
        </article>
      </div>











    </div>
  </section>
)





export default Projects
