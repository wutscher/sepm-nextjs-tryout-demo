import "server-only"
import { Note } from '@prisma/client';
import CreateNote from '../../src/components/createNote';
import { NoteCard } from '../../src/components/note'
import { prisma } from "../../src/utils/database";


async function getNotes() {
  return await prisma.note.findMany();
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