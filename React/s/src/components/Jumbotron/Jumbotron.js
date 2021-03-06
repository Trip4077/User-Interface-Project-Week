import React from 'react';

const jumbotron = props => {

  const jumboHeaders = {
    home: {
      title: <h1>Integrity, <br /> Excellence, <br /> Progress.</h1>,
      class: "home__jumbotron"
    },

    services: {
      title: <h1>Services</h1>,
      class: "services"
    },

    contact: {
      title: <h1>Contact Us</h1>,
      class: "contact"
    },

    about: {
      title: <h1>About Us</h1>,
      class: "about"
    },

    projects: {
      title: <h1>Projects</h1>,
      class: "projectsPage"
    }
  }

  let head;
  let classCurr;

  if(props.page === 'home') {
    head = jumboHeaders.home.title
    classCurr = jumboHeaders.home.class
  } else if (props.page === 'services') {
    head = jumboHeaders.services.title
    classCurr = jumboHeaders.services.class
  } else if (props.page === 'contact') {
    head = jumboHeaders.contact.title
    classCurr = jumboHeaders.contact.class
  } else if (props.page === 'about us'){
    head = jumboHeaders.about.title
    classCurr = jumboHeaders.about.class
  } else {
    head = jumboHeaders.projects.title
    classCurr = jumboHeaders.projects.class
  }


  return (
    <header>
			<div className={ classCurr }>
        {head}
			</div>
		</header>
  );
};

export default jumbotron;
