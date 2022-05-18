
import { useSelector } from "react-redux"
import { login } from "../../actions/auth"


export const NabBar = () => {
  const user = useSelector(state => state.auth.name)
  const { payload } = login()
  console.log(payload)

  return (
    <div className="nav__navBar">
      <h2>TITAGRAM</h2>
      <div className="nav__navBar-user">
        <h2>{user}</h2>
        {/* <button className='btn '>
          Logout
        </button> */}

      </div>
    </div>
  )
}
