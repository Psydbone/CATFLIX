import React from 'react';
import Home from './page/Home';
import Login from './page/Login';
import Player from './page/Player'
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const isLogged = localStorage.getItem('isLogged');
    this.state = {
      isLogged:true,
      isPlayer:false,
    };
  }

   data = {
    titleData: {
      title: 'House of Cats',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      notes:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    lists: ['Continua a guardare', 'Novità', 'Commedia'],
  };

  login = () => {
    console.log('Sono stato chiamato');
    this.setState({ isLogged: true });
  };

  logout = () => {
   localStorage.removeItem('isLogged');
   this.setState({isLogged:false});
  };

  videoClicked = (id) => {
    console.log('videoClick AppComponent ',+id);
    this.setState({isPlayer:true});
  }

  render() {
    return this.state.isLogged ? (
      this.state.isPlayer ? (
      <Player/>
    ) : (
      <Home data={this.data} logoutCallback={this.logout} videoClicked={this.videoClicked}/>
    )
    ) : (
      <Login loginCallback={this.login} />
    );
  }
}
