import { Note } from '@prisma/client';
import Link from 'next/link';
import { use } from 'react';
import CreateNote from './createNote';

async function getNotes() {
  const res = await fetch('http://localhost:3000/api/getNotes', {cache: 'no-store'});
  const data = await res.json();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return data as Note[];
}


export default async function NotesPage() {
  const notes: Note[] = await getNotes();
  // console.log(notes)
  //const notes = use(getNotes())
  //const notes = getNotes()

  
  return (
    <div>
      <h1>Notes</h1>
      {/* <button onClick={() => console.log('click')}>create note</button> */}
      <CreateNote/>
      {
        notes?.map( (note) => {
          return <NoteViewer key={note.id} note={note}/>
        })
      }
    </div>
  )
}

function NoteViewer({ note }: { note: Note }) {
  const { id, title, content, created } = note || {};

  return (
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        {/* <p>{created.toUTCString()}</p> */}
      </div>
    // <Link href={`/notes/${id}`}>
    // </Link>
  );
}