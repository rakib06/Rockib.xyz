import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route


} from "react-router-dom"

import AboutPage from './pages/AboutPage';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Rakibul Hasan",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }

    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Footer />
        <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
      </Router>
    );
  }
}


export default App;
