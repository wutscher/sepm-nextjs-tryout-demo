'use client';

import { Note } from '@prisma/client';
import { use } from 'react';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

async function getNotes() {
  const res = await fetch('http://localhost:3000/api/getNotes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  });
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
  //const a = use(getNotes())
  
  return (
    <div>
      <button className="rounded-lg py-2 px-4 text-center text-white bg-indigo-400 hover:bg-indigo-500" onClick={create}>create note</button>

      {/* action="/send-data-here" method="post" */}

      <form action="/send-data-here" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <input
                  type="text"
                  name="content"
                  id="content"
                  autoComplete="content"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>  
  )
}