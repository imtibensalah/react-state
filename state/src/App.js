import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'SHarukh khan',
      bio: 'Shahrukh Khan, parfois orthographié Shah Rukh Khan et familièrement appelé SRK, est un acteur et producteur indien, occasionnellement showman et présentateur de jeu télévisé, né le 2 novembre 1965 à Delhi',
      imgSrc:'https://static.toiimg.com/thumb/msid-64722926,width-400,resizemode-4/64722926.jpg',
      profession: 'acteur',
    },
    shows: false,
    intervalId: null,
    timeSinceMount: 0
  };

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.updateTimeSinceMount, 1000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState(prevState => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
  };

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt="Person" />
            <p>{profession}</p>
          </div>
        )}
        <p>Time since mount: {this.state.timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
