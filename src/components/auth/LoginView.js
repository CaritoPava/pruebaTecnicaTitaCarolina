import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';

export const LoginView = () => {

  const dispach = useDispatch();


  const [formValues, handleInputChange] = useForm({
    email: 'carito9018@gmail.com',
    password: '12345'
  })
  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)
    dispach(startLoginEmailPassword(email, password))
  }

  const handleGoogleLogin = () => {
    dispach(startGoogleLogin())
  }

  return (
    <div className='auth__title'>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <div className='auth__form'>

          <input
            type="text"
            placeholder='Email'
            name='email'
            className='auth__input'
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder='Password'
            name='password'
            className='auth__input'
            value={password}
            onChange={handleInputChange}
          />
          <button
            type='submit'
            className='btn-primary'
          >
            Iniciar
          </button>
          <Link
            to='/auth/register'
            className=' btn-primary btn-link'
          >
            <p>Crear una cuenta</p>
          </Link>
          <p>O iniciar sesión con</p>
          <div className='auth__form'>
            <div
              className='auth__redes'>
              <button
                className='btn-primary btn-mini btn-google'
                onClick={handleGoogleLogin}
              >
                <i className="fa-brands fa-google-plus-g mr-5"></i>
                Google
              </button>
            </div>
          </div>
        </div>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <p>Carolina Pava - 2022</p>

    </div>
  )
}
