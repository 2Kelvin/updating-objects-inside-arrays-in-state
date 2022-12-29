export default function App() {
  return React.createElement(
    "h1",
    null,
    "Lil Mama"
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));