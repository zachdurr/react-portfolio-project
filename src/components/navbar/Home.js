import {Component} from "react";
import TweetsContainer from "../../containers/TweetsContainer";
import { fetchTweets } from "../actions/tweetAction";

class Home extends Component {

    componentDidMount() {
        fetchTweets();
    }


  render() {
    return (
        <TweetsContainer />
        );
  }
}

export default Home;