import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-primary text-white text-center flex justify-center items-center">
      <div>
        <h1 className="text-4xl">
          Welcome to <span className="font-black">NexaThread</span>
        </h1>
        <h3>
          You can start by editing <code>app/page.js</code>
        </h3>
      </div>
    </main>
  );
}
