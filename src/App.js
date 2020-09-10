import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


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
      </Router >
    );
  }
}


export default App;
