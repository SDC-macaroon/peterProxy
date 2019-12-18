/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReviewModal from './components/ReviewModal.jsx';
import ReviewSummary from './components/ReviewSummary.jsx';
import Features from './components/Features.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.sortReviews = this.sortReviews.bind(this);
  }

  componentDidMount() {
    this.loadReviews();
  }

  async loadReviews() {
    const productId = window.location.pathname.split('/')[2];
    const response = await fetch(`/api/reviews/${productId}`);
    const myJson = await response.json();
    this.setState({ reviews: _.orderBy(myJson, ['reviewDate'], ['desc']) });
  }

  reviewPercentages(reviews) {
    const ratingCount = Array(5).fill(0);
    reviews.forEach(review => {
      ratingCount[5 - review.rating]++;
    });
    return ratingCount.map(rating => (rating / reviews.length) * 100);
  }

  sortReviews(e) {
    const { reviews } = this.state;
    const sort = _.orderBy(reviews, [e.target.attributes[1].value], [e.target.attributes[2].value]);
    e.stopPropagation();
    this.setState({ reviews: sort });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="reviewsContainer">
        <div className="features">
          <Features />
        </div>
        <div className="reviewsChartContainer">
          <ReviewSummary percentages={this.reviewPercentages(reviews)} />
          <ReviewModal
            className="readAllReviews"
            reviews={reviews}
            sortReviews={this.sortReviews}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('jav'));
