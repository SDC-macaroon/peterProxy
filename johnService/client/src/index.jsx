/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Carousel from './components/Carousel.jsx';

const pathArray = window.location.pathname.split('/');
const productId = pathArray[2];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      baseIndex: 0,
      styles: [],
    };
    this.nextThree = this.nextThree.bind(this);
    this.previousThree = this.previousThree.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: `api/morestyles/${productId}`,
      success: (result) => {
        console.log(result);
        this.setState({
          styles: result,
        });
      },
    });
  }

  nextThree() {
    if (this.state.baseIndex < (this.state.styles.length - 6)) {
      this.setState({ baseIndex: this.state.baseIndex + 3 });
    } else {
      this.setState({ baseIndex: this.state.styles.length - 4 });
    }
  }

  previousThree() {
    if (this.state.baseIndex > 3) {
      this.setState({ baseIndex: this.state.baseIndex - 3 });
    } else {
      this.setState({ baseIndex: 0 });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const styleSlider = {
      transform: `translateX(${this.state.baseIndex * -25}%)`,
      transition: '.55s',
    };
    return <div>
      <Carousel
      slider={styleSlider}
      baseIndex={this.state.baseIndex}
      styles={this.state.styles}
      nextThree={this.nextThree}
      previousThree={this.previousThree}
      />;
      {/* <button id="backButton" type="button" onClick={this.previousThree} >Back</button>
      <button id="nextButton" type="button" onClick={this.nextThree} >Next</button> */}
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('john'));
