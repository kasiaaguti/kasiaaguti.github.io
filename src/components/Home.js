import React from 'react'

import Places from './Places'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

import ScrollableAnchor from 'react-scrollable-anchor'

class Home extends React.Component {
  render() {
    return (

  <section className="background">

    <ScrollableAnchor id={'contact'}>
    <h1 className="title is-1 navytitle" id="contact"></h1>
     </ScrollableAnchor>
    <Contact />

<ScrollableAnchor id={'projects'}>
<h1 className="title is-1 navytitle" id="projects">My projects</h1>
 </ScrollableAnchor>
<Projects  />

<ScrollableAnchor id={'about'}>
<h1 className="title is-1 navytitle" id="about">About me</h1>
 </ScrollableAnchor>
<About />



 <ScrollableAnchor id={'places'}>
<h1 className="title is-1 navytitle" id="places">My travels</h1>
 </ScrollableAnchor>
<Places />



</section>



)
}
}




export default Home
