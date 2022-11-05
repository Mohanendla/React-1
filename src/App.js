import "./App.css";
import Component1 from "./Component1";
import Component2 from "./Component2"
import Component3 from "./Component3";

function App() {
  return (
    <div className="App">
      <h1 className="page-title"> My First React App </h1>
      <Component1/>
     <Component3></Component3>
      <Component2/>
      <Component2/>
      <Component1/>
      <Component1/>
      <Component1/>
    </div>
  );
}

export default App;

/*
REACT
 -SPA (Single Page Application)
 - Uses Virtual DOM

  Delcaration Library
  - Tell react WHAT to do
  - Don't tell react HOW to do, react handles it

  JSX: JavaScript + XML

  Components - (WHICH RETURNS JSX)
  Two types:
  - Class Based components (JavaScript Classes)
  - Function Based components (JavaScript Functions)
  Properties:
    - Create parts of UI
    - Can be nested
    - Can be re-used
  */
