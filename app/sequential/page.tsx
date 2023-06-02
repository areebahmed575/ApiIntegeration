import React from 'react'

type book={
    id:number,
    name:string,
    type:string,
    available : boolean
  }
  
  async function getFiction() {
    const response=await fetch("https://simple-books-api.glitch.me/books?type=fiction",{
      cache:"no-store"
    })
    const data=response.json()
    return data
  
    
  }
  async function getNonFiction() {
    const response=await fetch("https://simple-books-api.glitch.me/books?type=non-fiction",{
      cache:"no-store"
    })
    const data=response.json()
    return data
  
    
  }

export default async function page() {
    const fictionBooks=await getFiction();
    const nonFictionBooks=await getNonFiction();

  return (
    <div>
        <div>
          <h1>Fiction books</h1>
            {fictionBooks.map((book:book)=>(
                <ul key={book.id}>
                    <li>{book.name} {book.type}</li>

                </ul>

            ))}
  
         <h1>non Fiction books</h1>
            {nonFictionBooks.map((book:book)=>(
                <ul key={book.id}>
                    <li>{book.name} {book.type}</li>

                </ul>

            ))}    
        </div>
      
    </div>
  )
}
