import { useState } from "react"
import axios from 'axios'
import { toast } from "react-toastify"
import visibilityIcon from '/assets/svg/visibilityIcon.svg'
import { useNavigate } from "react-router-dom"

function SignIn() {
    const [formData, setFormatData] = useState({ email: '', password: '', })
    const [selected, setSelected] = useState(true)
    const [isError, setIsError] = useState(false)
    const navigate = useNavigate()

    const { email, password } = formData

    const handleSubmit = async (e, type) => {
        e.preventDefault()
        try {
            if (type === 'register') {

                const res = await axios.post('http://localhost:8000/register', {
                    email: email,
                    password: password
                })
                localStorage.setItem('session', JSON.stringify(res.data))
                navigate('/')
            } else if (type === 'login') {
                const res = await axios.post('http://localhost:8000/login', {
                    email: email,
                    password: password
                })
                localStorage.setItem('session', JSON.stringify(res.data))
                navigate('/')
            }
            console.log(formData, type)
        } catch (error) {
            setIsError(true)
            toast.error(error.response.data)
        }
    }


    const onChange = (e) => {
        setFormatData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <div className={selected ? 'container' : 'container right-panel-active'}>
            <div className="form-container sign-in-container">
                <header>
                    <h1>Bine ai venit!</h1>
                    <p>Am deja cont</p>
                </header>
                <form className={isError ? 'form_error sign_form' : 'sign_form'} onSubmit={(e) => { handleSubmit(e, 'login') }}>
                    <input
                        type="email"
                        className="emailInput"
                        placeholder="Introdu adresa de email"
                        id="email"
                        value={email}
                        onChange={onChange}
                    />
                    <div className="passwordInputDiv">
                        <input
                            type="password"
                            className="passwordInput"
                            placeholder="Introdu parola"
                            id="password"
                            value={password}
                            onChange={onChange}
                        />
                        <img src={visibilityIcon}
                            alt="show password"
                            className='showPassword' />

                    </div>
                    <button className='signInButton'>
                        Logare
                    </button>
                </form>
            </div>
            <div className="form-container sign-up-container">
                <header>
                    <h1>Vreau sa imi creez cont!</h1>
                    <p></p>
                </header>
                <form className={isError ? 'form_error sign_form' : 'sign_form'} onSubmit={(e) => { handleSubmit(e, 'register') }}>
                    <input
                        type="email"
                        className="emailInput"
                        placeholder="Introdu adresa de email"
                        id="email"
                        value={email}
                        onChange={onChange}
                    />
                    <div className="passwordInputDiv">
                        <input
                            type="password"
                            className="passwordInput"
                            placeholder="Introdu parola"
                            id="password"
                            value={password}
                            onChange={onChange}
                        />
                        <img src={visibilityIcon}
                            alt="show password"
                            className='showPassword' />

                    </div>
                    <button className='signUpButton'>
                        Inregistrare
                    </button>
                </form>

            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Vreau un cont nou</h1>
                        <p>Pentru a rămâne conectat cu noi, vă rugăm să vă introduceți informațiile dumneavoastră personale</p>
                        <button className="ghost" id="signIn" onClick={() => { setSelected(true) }}>Logheaza-te in cont</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello!</h1>
                        <p>Introduceți datele dumneavoastră personale și începeți călătoria cu noi</p>
                        <button className="ghost" id="signUp" onClick={() => { setSelected(false) }}>Inregistrare</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignIn
