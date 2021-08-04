import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="./image/logo.png" alt="" />
      </div>
      <h1>Instagram Clone App</h1>

      <Post
        username="Akif"
        caption="Woow ıt's wonderful"
        imageUrl="https://lh3.googleusercontent.com/proxy/PM-7P55C0i56JIfw1MDzCRpBxQNPWvgq4A_pURsjGE2QXyjPhSXWI7_8ZGuwgLBzDG2rEPS5MJrxLuTOqRnWfon00TD50-h_54-OLjyQnhnu0-Bn0w"
      />
      <Post
        username="Cono Akif"
        caption="Woow ıt's perfect photo"
        imageUrl="https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz"
      />
      <Post
        username="Crazy Mete"
        caption="Nice view"
        imageUrl="https://haydimaldivlere.com/uploads/contents/thumb/layer%20name.png"
      />
    </div>
  );
}

export default App;
