import { FormEventHandler, useState } from "react"
import { BookApi } from "../api/books.api"
import { CreateBookProps } from "../types/books.type"

export const Create = () => {
  const [newBook, setNewBook] = useState<CreateBookProps>({})

  const disabled = !newBook.title || !newBook.year

  const submit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (disabled) return

    BookApi.CREATE(newBook)
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={newBook?.title || ""}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="number"
          value={newBook?.year || 0}
          onChange={(e) => setNewBook({ ...newBook, year: +e.target.value })}
        />
        <button type="submit" disabled={disabled}>
          Create New Book
        </button>
      </form>
    </>
  )
}
