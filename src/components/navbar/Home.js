import {Component} from "react";
import TweetsContainer from "../../containers/TweetsContainer";
import { fetchTweets } from "../actions/tweetAction";
import { connect } from 'react-redux';

class Home extends Component {

    componentDidMount() {
        console.log(this.props.done)
        if (!this.props.done) {
            this.props.fetchTweets();
        }
    }


  render() {
    return (
        <TweetsContainer />
        );
  }
}


const mapStateToProps = (state) => {
    return {done: state.done}
}

export default connect(mapStateToProps, {fetchTweets})(Home);
