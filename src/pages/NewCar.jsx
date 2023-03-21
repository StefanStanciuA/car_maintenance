import { useState } from "react"
import axios from 'axios'

function NewCar() {
    const [marca, setMarca] = useState('')
    const [sofer, setSofer] = useState('')
    const [motor, setMotor] = useState('')
    const [an, setAn] = useState('')
    const [np, setNp] = useState('')
    const [cp, setCp] = useState('')
    const [combustibil, setCombustibil] = useState('')
    const [img, setImg] = useState('')

    async function postCarData(e) {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/cars', {
                marca: marca,
                sofer: sofer,
                motor: motor,
                anul: an,
                norma_poluare: np,
                putere: cp,
                combustibil: combustibil,
                img: img
            })
            setSofer('')
            setMarca('')
            setMotor('')
            setAn('')
            setCombustibil('')
            setCp('')
            setImg('')
            setNp('')
        } catch (error) {
            toast.error('Datele nu au putut fi transmise')
        }

    }
    return (
        <div>
            <header>
                <h1>Adaugă o maşină nouă</h1>
            </header>
            <main>
                <form className="new_car_form" onSubmit={postCarData}>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Marca - Model</label>
                        <input className="createInput" type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </div>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Sofer</label>
                        <input className="createInput" type="text" value={sofer} onChange={(e) => setSofer(e.target.value)} />
                    </div>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Motorizare</label>
                        <input className="createInput" type="text" value={motor} onChange={(e) => setMotor(e.target.value)} />
                    </div>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Anul</label>
                        <input className="createInput" type="text" value={an} onChange={(e) => setAn(e.target.value)} />
                    </div>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Norma de poluare</label>
                        <input className="createInput" type="text" value={np} onChange={(e) => setNp(e.target.value)} />
                    </div>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Putere</label>
                        <input className="createInput" type="text" value={cp} onChange={(e) => setCp(e.target.value)} />
                    </div>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Combustibil</label>
                        <input className="createInput" type="text" value={combustibil} onChange={(e) => setCombustibil(e.target.value)} />
                    </div>
                    <div className="new_car_wrapper">
                        <label htmlFor="">Adauga imagine</label>
                        <input type="text" value={img} onChange={(e) => setImg(e.target.value)}
                            className="createInput"
                        />
                    </div>

                    <button className="form_button">Salveaza</button>


                </form>
            </main>
        </div>
    )
}

export default NewCar
