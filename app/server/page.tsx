import React from 'react'

type book={
  id:number,
  name:string,
  type:string,
  available : boolean
}

async function getBooks() {
  const response=await fetch("https://simple-books-api.glitch.me/books",{
    cache:"no-store"
  })
  const data=response.json()
  return data

  
}

export default async function page() {
  const books =await getBooks()
  //console.log(book)  
  return (
    <div>
      
        <h1>Static Side</h1>
        {books.map((book:book)=>(
          <ul key={book.id}>
            <li>{book.name} - {book.type} - {book.available}</li>
          </ul>
        )
        )}

       
        
       
      
    </div>
  )
}
