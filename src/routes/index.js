import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import ContactMe from '../views/ContactMe';
import Home from '../views/Home';
import LogIn from '../views/LogIn';
// import LogIn from '../views/LogIn';
// import ProjectForm from '../views/ProjectForm';
import Projects from '../views/Projects';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contactMe" component={ContactMe} />
        <Route exact path="/login" component={LogIn} />
        {/* <Route exact path="/" component={() => <Home />} /> */}
        {/* <Route exact path="/projects" component={() => <Projects />} /> */}
        {/* <Route exact path="/contactMe" component={() => <ContactMe />} /> */}
        {/* <Route exact path="/logIn" component={() => <LogIn />} /> */}
        {/* <Route exact path="/projectForm" component={() => <ProjectForm />} /> */}
      </Switch>
    </>
  );
}

// Routes.propTypes = {
//   uid: PropTypes.string.isRequired,
// };
