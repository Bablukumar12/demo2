import React, { Component } from 'react';

class SocialMediaPost extends Component {
  state = {
    numOfLikes: this.props.post.numOfLikes,
    numOfShares: this.props.post.numOfShares,
  };

  handleLike = () => {
    this.setState(prevState => ({ numOfLikes: prevState.numOfLikes + 1 }));
  };

  handleShare = () => {
    this.setState(prevState => ({ numOfShares: prevState.numOfShares + 1 }));
  };

  render() {
    const { heading, postedBy, txt } = this.props.post;
    const { numOfLikes, numOfShares } = this.state;

    return (
      <div>
        <h3>{heading}</h3>
        <p>Posted by {postedBy}</p>
        <p>{txt}</p>
        <div>
        Likes : {numOfLikes}<button className='btn btn-primary btn-sm m-1' onClick={this.handleLike}> Like</button>
        Shared : {numOfShares}  <button className='btn btn-primary btn-sm m-1' onClick={this.handleShare}> Shares</button>
        </div>
      </div>
    );
  }
}

export default SocialMediaPost;