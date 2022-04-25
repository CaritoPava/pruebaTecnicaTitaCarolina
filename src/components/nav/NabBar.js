
import { login } from "../../actions/auth"


export const NabBar = () => {
  const data = login()
  console.log(data)

  return (
    <div className="nav__navBar">
      <h2>TITAGRAM</h2>
      <div className="nav__navBar-user">
        <h2>Carolina Pava</h2>
        <button className='btn '>
          Logout
        </button>

      </div>
    </div>
  )
}
