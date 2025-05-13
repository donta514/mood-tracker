import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="container">Hello there</main>
    </>
  );
}
