import Image from "next/image";
import NavBar from "./components/NavBar";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();
  return (
    <>
      <NavBar />
      <main className="container">Hello there</main>
    </>
  );
}
