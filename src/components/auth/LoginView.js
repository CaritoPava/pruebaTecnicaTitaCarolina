import { Link } from 'react-router-dom'

export const LoginView = () => {
  return (
    <div className='auth__title'>
      <h1>Iniciar sesión</h1>
      <form>
        <div className='auth__form'>

          <input
            type="text"
            placeholder='Email'
            name='email'
            className='auth__input'
            autoComplete='off'
          />
          <input
            type="password"
            placeholder='Password'
            name='password'
            className='auth__input'
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
            <button
              className='btn-primary btn-apple'
            >
              <i className="fa-brands fa-apple mr-5"></i>
              Con Apple
            </button>
            <div
              className='auth__redes'>
              <button
                className='btn-primary btn-mini btn-google'
              >
                <i className="fa-brands fa-google-plus-g mr-5"></i>
                Google
              </button>
              <button
                className='btn-primary btn-mini btn-facebook'
              >
                <i className="fa-brands fa-facebook-f mr-5"></i>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </form>
      <p>Carolina Pava - 2022</p>

    </div>
  )
}
