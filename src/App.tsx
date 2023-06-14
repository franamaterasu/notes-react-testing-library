import { Skills } from "./components/RTL-query-multiple-elements/skills";
import { Form } from "./components/RTL-query-individual-element/form";
import { Counter } from "./components/User-interactions/1.pointer-interactions/counter";
import { Users } from "./components/Mocking/2.mocking-http-requests/users";

const skillsList = ["HTML", "CSS", "Javascript", "React", "Jest", "RTL"];

function App() {
  return (
    <div className="App">
      <Form />
      <hr />
      <Skills skills={skillsList} />
      <hr />
      <Counter />
      <hr />
      <Users />
    </div>
  );
}

export default App;
