import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Anderson",
      caption: "Woow ıt's wonderful",
      imageUrl:
        "https://lh3.googleusercontent.com/proxy/PM-7P55C0i56JIfw1MDzCRpBxQNPWvgq4A_pURsjGE2QXyjPhSXWI7_8ZGuwgLBzDG2rEPS5MJrxLuTOqRnWfon00TD50-h_54-OLjyQnhnu0-Bn0w",
    },
    {
      username: "Jennifer",
      caption: "Woow ıt's perfect photo",
      imageUrl:
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
    },
    {
      username: "John",
      caption: "Nice view",
      imageUrl:
        "https://haydimaldivlere.com/uploads/contents/thumb/layer%20name.png",
    },
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="./image/logo.png" alt="" />
      </div>
      <h1>Instagram Clone App</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
