'use client';

import { Note } from '@prisma/client';
import { use } from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

async function getNotes() {
  const res = await fetch('http://localhost:3000/api/getNotes');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}


export default function CreatNote() {
  // const notes = await getNotes();
  // console.log(notes)
  //const notes = use(getNotes())
  //const notes = getNotes()

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async() => {
    await fetch('http://localhost:3000/api/createNote', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    setContent('');
    setTitle('');

    router.refresh();
  }
  
  return (
    <button onClick={create}>create note</button>
  )
}