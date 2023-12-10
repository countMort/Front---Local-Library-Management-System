import { useEffect, useState } from "react"
import { Book } from "../types/books.type"
import { BookApi } from "../api/books.api"

export const Home = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    BookApi.READ((bs) => setBooks(bs))
  }, [])

  return (
    <>
      <ul>
        {books.slice(books.length - 11).map((book, i) => (
          <li key={`book-${i}`}>{book.title}</li>
        ))}
      </ul>
    </>
  )
}
