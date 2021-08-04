import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="./image/logo.png" alt="" />
      </div>
      <h1>Instagram Clone App</h1>
      <Post />
    </div>
  );
}

export default App;
