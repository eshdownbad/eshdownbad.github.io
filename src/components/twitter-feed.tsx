import { Component } from 'preact';

//TODO add twitter feed to app
export class TwitterFeed extends Component {
  shouldComponentUpdate(): boolean {
    return false;
  }
  render() {
    return (
      <>
        <a
          class='twitter-timeline'
          data-theme='dark'
          href='https://twitter.com/foxgrilsimp?ref_src=twsrc%5Etfw'>
          Tweets by foxgrilsimp
        </a>
        <script async src='https://platform.twitter.com/widgets.js'></script>
      </>
    );
  }
}
