import { FC, PropsWithChildren, createContext, useState } from "react"
import { Book } from "../types/books.type"

export interface AppContextType {
  user?: string
  books: Book[]
  title?: string
  year?: number
  saveBooks: (books: Book[]) => void
  deleteBook: (id: number) => void
}
export const AppContext = createContext<AppContextType | null>(null)

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [books, setBooks] = useState<Book[]>([])
  const [title] = useState<string>()
  const [year] = useState<number>()

  const saveBooks = (bs: Book[]) => {
    setBooks(bs)
  }
  const deleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <AppContext.Provider value={{ books, title, year, saveBooks, deleteBook }}>
      {children}
    </AppContext.Provider>
  )
}
