import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import Head from "next/head";
import { Header } from "~/components/AdminHeader";
import { AdminContent } from "~/components/AdminContent";
import React from "react";

export default async function AdminHome() {
  const session = await getServerAuthSession();

  return (
    <HydrateClient>
      <Head>
        <title>NoteTaker</title>
        <meta name="description" content="NoteTaker" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <Header sessionData={session} />
        <AdminContent sessionData={session}/>
      </main>
    </HydrateClient>
  );
}
