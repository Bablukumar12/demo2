import React,{Component} from "react";
import SocialMediaPost from "./socialMediaPost";

class MainComponent extends Component {
    state = {
      posts: [
        {
          postId: 255,
          heading: "World Cup Semi-final",
          postedBy: "Vishal",
          numOfLikes: 45,
          numOfShares: 10,
          txt: "India lost to New Zealand in the world cup. Very Bad."
        },
        {
          postId: 377,
          heading: "What a final",
          postedBy: "Mohit",
          numOfLikes: 18,
          numOfShares: 4,
          txt: "Was anyone awake to see the final. England won by boundary count."
        },
        {
          postId: 391,
          heading: "Was it 5 runs on 6 six runs",
          postedBy: "Preeti",
          numOfLikes: 29,
          numOfShares: 7,
          txt: "I feel sorry for New Zealand. If the ball had not hit the bat and no overthrows, New Zealand would have won."
        },
        {
          postId: 417,
          heading: "Will Dhoni retire",
          postedBy: "Hemant",
          numOfLikes: 66,
          numOfShares: 24,
          txt: "Is this Dhoni's final match. Will be ever see Dhoni playing for India."
        }
      ]
    };
  
    render() {
      const { posts } = this.state;
  
      return (
        <div className="container">
          {posts.map(post => (
            <SocialMediaPost key={post.postId} post={post} />
          ))}
        </div>
      );
    }
  }

  export default MainComponent;