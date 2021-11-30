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
        <div>
        {this.props.logged_in ? <div> {this.props.username} </div> : ''}
        <TweetsContainer />
        </div>);
  }
}


const mapStateToProps = (state) => {
    return {
        done: state.done,
        logged_in: state.logged_in,
        username: state.username
    }
}

export default connect(mapStateToProps, {fetchTweets})(Home);
