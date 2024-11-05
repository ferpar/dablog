import React from "react";
import type { Note } from "@prisma/client";
import { Article } from "~/components/Article";

type Props = {
    publicNotes: Partial<Note>[];
};

export default function HomeContent({ publicNotes }: Props ) {
  
    return (
        <div>
          {publicNotes.map((note, idx) => {
            return <Article key={note.id ?? idx} note={note}/>;
          })}
        </div>
    )
}