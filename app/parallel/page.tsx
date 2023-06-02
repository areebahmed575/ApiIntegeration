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
    const fictionBooks=getFiction();
    const nonFictionBooks=getNonFiction();
    const [fiction,nonFiction]=await Promise.all([fictionBooks,nonFictionBooks])
  return (
    <div>
        <div>
          <h1>Fiction books</h1>
            {fiction.map((book:book)=>(
                <ul key={book.id}>
                    <li>{book.name} {book.type}</li>

                </ul>

            ))}
  
         <h1>non Fiction books</h1>
            {nonFiction.map((book:book)=>(
                <ul key={book.id}>
                    <li>{book.name} {book.type}</li>

                </ul>

            ))}    
        </div>
      
    </div>
  )
}
