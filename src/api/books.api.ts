import axios from "axios"
import { CreateBookProps, GetBooksCallback } from "../types/books.type"

export const BookApi = {
  READ: async (callback?: GetBooksCallback) => {
    try {
      const { data: books } = await axios.get("http://localhost:3000/book")
      if (callback) callback(books)
      return books
    } catch (error) {
      console.error(error)
    }
  },
  CREATE: async (data: CreateBookProps) => {
    try {
      const response = await axios.post("http://localhost:3000/book", data)
      console.log(response);
      
    } catch (error) {
      console.error(error)
    }
  }
}
