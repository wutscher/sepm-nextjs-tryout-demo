import { NoteCard } from "../../../components/note";
import { prisma } from "../../../utils/database";

export default async function NotePage({ params, searchParams }){

  const a = await prisma.note.findUnique({
    where: {id: parseInt(params.id)}
  })
  
  return (
    <NoteCard note={a}></NoteCard>
  )
}