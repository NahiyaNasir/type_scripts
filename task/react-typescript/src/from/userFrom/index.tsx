import { useState } from "react";
import Component1 from "../userProfile";

type User = {
  name: string;
  email: string;
  id?: number;
};
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const fromDate = new FormData(e.target as HTMLFormElement);
  //   console.log(fromDate);
  const text1: string = fromDate.get("name") as string;
  const text2: string = fromDate.get("email") as string;
  // const text3:number=fromDate.get(5) as number
  const user: User = { name: text1, email: text2 };
  console.log(user);
};
const Component = (): JSX.Element => {
   const [user,setUser]=useState([])
  return (
    <div className=" bg-teal-300 w-1/2  m-auto p-12">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="p-2 m-2 border rounded"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="p-2 m-2 border rounded"
        />
        <input
          type="number"
          name="id"
          placeholder="Enter your Id"
          className="p-2 m-2 border rounded"
        />
        <button type="submit" className="btn bg-red-500 text-white p-2 m-2">
          Submit
        </button>
      </form>
     <Component1 ></Component1>
    </div>
  );
};

export default Component;
