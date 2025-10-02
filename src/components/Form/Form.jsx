import React from "react";
import Container from "../Container/Container";

const Form = ({handelProduct}) => {
  const handleForm = (e) => {
    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;
    
    const newUser = {
        email,
        password
    }

    handelProduct(newUser)
  };
  return (
   <Container>
       <div className="w-[50%] mx-auto mt-10">
      <form
        onSubmit={handleForm}
        className="border-2 border-teal-500 rounded-xl p-5"
      >
        <input
          className="border-1  mt-5 border-gray-400 rounded-[5px] p-1"
          type="email"
          name="email"
          placeholder="your email"
        />
        <br />
        <input
          className="border-1  mt-5 border-gray-400 rounded-[5px] p-1"
          type="password"
          name="password"
          placeholder="your pasword"
        />
        <br />
        <button
          className="bg-green-500 px-3 py-1 rounded-xl mt-5 font-semibold text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
   </Container>
  );
};

export default Form;
