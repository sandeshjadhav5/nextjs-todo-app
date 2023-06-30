import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl text-center">Todo Application</h1>
      <div className="w-4/12 p-12 m-auto mt-8 border-t-neutral-950 border-solid border-1 bg-violet-300">
        <form>
          <label>Write Task Name</label>
          <input className="w-11/12 p-2" />
          <br />
          <br />
          <label>Select Task Priority</label>
          <br />
          <select className="w-11/12 p-2">
            <option>Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <input className="w-11/12 mt-8 p-2 bg-violet-400" type="submit" />
        </form>
      </div>
    </div>
  );
}
