import { Skills } from "./components/RTL-query-multiple-elements/skills";
import { Form } from "./components/RTL-query-individual-element/form";
import { Counter } from "./components/User-interactions/1.pointer-interactions/counter";

const skillsList = ["HTML", "CSS", "Javascript", "React", "Jest", "RTL"];

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <Skills skills={skillsList} />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
