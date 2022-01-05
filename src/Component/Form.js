import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allentry, setAllEntry] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allentry, newEntry]);
    console.log(allentry);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="items-center p-8 m-10 mx-auto max-w-lg  bg-slate-300 rounded-2xl shadow-lg shadow-black/70 hover:shadow-cyan-400/70">
        <form onSubmit={submit}>
          <div className="ml-14  text-xl">
            <label className="ml-9 hover:text-blue-700 font-bold underline decoration-cyan-600">
              Email:{" "}
            </label>
            <input
              className="ml-2"
              type="text"
              placeholder="email..."
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="text-xl mt-4 ml-14">
            <label className="hover:text-blue-700 font-bold underline decoration-pink-400">
              Password:{" "}
            </label>
            <input
              className="ml-2"
              type="password"
              placeholder="password..."
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <div className="mt-8 ml-48 ">
            <button
              className="p-1 text-xl bg-gradient-to-r from-cyan-400 via-orange-500 to-pink-500 font-bold hover:text-indigo-500
            shadow-lg shadow-cyan-500 hover:shadow-pink-500 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <div className="mt-20">
        {allentry.map((curElem, index) => {
          return (
            <div
              className="ml-80 text-xl hover:underline decoration-pink-500 font-bold hover:text-blue-600"
              key={curElem}
            >
              <p>{curElem.email} </p>
              <p> {curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
