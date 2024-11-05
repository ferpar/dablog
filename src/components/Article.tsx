import ReactMarkdown from 'react-markdown';

import type { Note } from '@prisma/client';

export const Article = ({ note }: { note: Partial<Note> }) => {
  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div className="collapse-arrow collapse">
          <input type="radio" name="collapse" />
          <div className="collapse-title text-xl font-bold">{note.title ?? 'Untitled'}</div>
          <div className="collapse-content">
            <article className="prose lg:prose-xl">
              <ReactMarkdown>{note.content ?? 'no content'}</ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}