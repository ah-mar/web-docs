import { getSession, signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DocList from "../components/DocList";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Modal from "../components/Modal";
import SignIn from "../components/SignIn";

export default function Home() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  //const router = useRouter();

  console.log("Session is", session, !session);

  if (!session) return <SignIn />;

  return (
    <div className="">
      <Head>
        <title>G-docs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Gallery setShowModal={setShowModal} />

        {/* DocList */}
        <DocList setShowModal={setShowModal} />
        {showModal && <Modal setShowModal={setShowModal} />}
      </main>
    </div>
  );
}

// TODOS
// Can implement document search with fuse js
// upgrade from draft js to lexical
