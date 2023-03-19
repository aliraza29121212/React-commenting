import React from "react";
import "./App.css";
import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      <h3>App Home</h3>
      <Comments currentUserId="1" />
    </div>
  );
};

export default App;
