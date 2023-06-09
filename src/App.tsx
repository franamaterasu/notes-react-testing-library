import { Skills } from "./components/RTL-query-multiple-elements/skills";
import { Form } from "./components/RTL-query-individual-element/form";

const skillsList = ["HTML", "CSS", "Javascript", "React", "Jest", "RTL"];

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <Skills skills={skillsList} />
    </div>
  );
}

export default App;
