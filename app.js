const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { className: "title" }, "React IS SO RENDERED"),
    React.createElement(Person, { name: "Josh", occupation: "builder" }, null),
    React.createElement(
      Person,
      { name: "Ming", occupation: "Best developer on the planet" },
      null
    ),
    React.createElement(
      Person,
      { name: "Bosh", occupation: "another builder" },
      null
    ),
  ]);
};

ReactDOM.createRoot(document.getElementById("root")).render(App());
