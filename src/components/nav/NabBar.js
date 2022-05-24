
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../actions/auth"


export const NabBar = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.auth.name)

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <div className="nav__navBar">
      <h2>TITAGRAM</h2>
      <div className="nav__navBar-user">
        <h2>{user}</h2>
        <button
          className='btn '
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </div>
  )
}
