import { HydrateClient } from "~/trpc/server";
import Head from "next/head";
import React from "react";
import HomeContent from "~/components/HomeContent";

import { db } from "~/server/db";
import { BlogHeader } from "~/components/BlogHeader";
const publisherId = process.env.BLOG_PUBLISHER;

const initialPublicTopics = await db.topic.findMany({
  where: {
    userId: publisherId,
  },
  include: {
    notes: {
      orderBy: {
        createdAt: "desc",
      },
      skip: 0,
      take: 1,
    },
  },
});

const initialPublicNotes = initialPublicTopics.map((topic) => {
  return { ...topic.notes[0] };
});

export default async function Home() {

  return (
    <HydrateClient>
      <Head>
        <title>NoteTaker</title>
        <meta name="description" content="NoteTaker" />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <BlogHeader />
        <HomeContent publicNotes={initialPublicNotes} />
      </main>
    </HydrateClient>
  );
}
