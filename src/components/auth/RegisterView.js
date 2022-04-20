import { Link } from 'react-router-dom'
import validator from 'validator'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { setError } from '../../actions/ui'

export const RegisterView = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    name: 'Carolina',
    lastname: 'Pava',
    email: 'carito9018@gmail.com',
    password: '12345'
  })

  const { name, lastname, email, password } = formValues

  const handleRegister = (e) => {
    e.preventDefault()
    if (isFormValid()) {
      console.log('Formulario correcto')
    }
  }
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'))
      return false
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false
    } else if (password.length < 5) {
      dispatch(setError('Password should be at least 6 characteres'))
      return false
    }

    return true
  }
  return (
    <div className='auth__background-register'>

      <div className='auth__title'>
        <h1
          className='auth__title-register'
        >Registro
        </h1>
        <h2>FORMULARIO INVALIDO</h2>
        <form onSubmit={handleRegister}>
          <div className='auth__form'>
            <input
              type="text"
              placeholder='Nombre'
              name='name'
              className='auth__input'
              autoComplete='off'
              values={name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder='Apellido'
              name='lastname'
              className='auth__input'
              values={lastname}
              onChange={handleInputChange}
            />

            <input
              type="text"
              placeholder='Email'
              name='email'
              className='auth__input'
              autoComplete='off'
              values={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder='Password'
              name='password'
              className='auth__input'
              values={password}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='btn-primary btn-green'
            >
              Registrarse
            </button>
            <Link
              to='/auth/login'
              className=' btn-primary btn-link'
            >
              <p>Tengo una cuenta</p>
            </Link>
            <p>O iniciar sesión con</p>
            <div className='auth__form'>

              <div
                className='auth__redes'>
                <button
                  className='btn-primary btn-mini btn-google'
                >
                  <i className="fa-brands fa-google-plus-g mr-5"></i>
                  Google
                </button>

              </div>
            </div>
          </div>
        </form>
        <p>Carolina Pava - 2022</p>

      </div>
    </div>
  )
}
