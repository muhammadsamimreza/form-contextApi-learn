import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import FormTable from "./components/FormTable/FormTable";

function App() {
  const [user, setUser] = useState([]);

  const handelProduct = (newUser) =>{
    const updatedUser = [...user, newUser ];
    setUser(updatedUser)
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Log In Form</h1>
      <Form handelProduct={handelProduct}></Form>
      <FormTable user={user}></FormTable>
    </div>
  );
}

export default App;
