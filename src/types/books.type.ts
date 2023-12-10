export interface Book {
  author: string
  country: string
  imageLink: string
  language: string
  link: string
  pages: number
  title: string
  year: number
  id: number
}

export type GetBooksCallback = (bs: Book[]) => void

export interface CreateBookProps {
  title?: string
  year?: number
}
