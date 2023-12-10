import { useContext } from "react"
import { AppContext, AppContextType } from "../context"
import { Link } from "react-router-dom"

export const Header = () => {
  const { user, logout } = useContext(AppContext) as AppContextType
  
  return <nav>
    {user ? <button onClick={logout}>Logout from {user}</button> : <Link to={'/Login'}>Login</Link>}
  </nav>
}
