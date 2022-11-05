import { Note } from '@prisma/client';
import Link from 'next/link';
import '../styles/globals.css';

export function NoteCard({ note }: { note: Note }) {
  const { id, title, content, created } = note || {};

  return (
    <article className="container bg-white drop-shadow rounded-2xl p-5">
        <h1 className="font-bold text-indigo-500">{title}</h1>
        <p className="font-light text-gray-500">{content}</p>
        <h6 className="text-sm text-gray-300 mb-5">{/* <p>{created.toUTCString()}</p> */}</h6>
        <Link href={'/note/'+id} className="rounded-lg py-2 px-4 text-center text-white bg-indigo-400 hover:bg-indigo-500">Zur Notiz</Link>
    </article>
    // <Link href={`/notes/${id}`}>
    // </Link>
  );
}