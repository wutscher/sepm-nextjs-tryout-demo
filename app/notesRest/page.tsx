import "server-only"
import { Note } from '@prisma/client';
import CreateNote from '../../src/components/createNote';
import { NoteCard } from '../../src/components/note'

async function getNotes() {
  const res = await fetch('http://localhost:3000/api/getNotes', {cache: 'no-store'});
  const data = await res.json();
  return data as Note[];
}


export default async function NotesPage() {
  const notes: Note[] = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <CreateNote/>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {
          notes?.map( (note) => {
            return <NoteCard key={note.id} note={note}/>
          })
        }
      </div>
    </div>
  )
}