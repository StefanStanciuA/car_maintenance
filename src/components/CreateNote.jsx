import axios from 'axios'
import { useState } from "react"
import { useParams } from 'react-router-dom'


function CreateNote({ getServiceInformation }) {
    const [data, setData] = useState('')
    const [body, setBody] = useState('')
    const params = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:8000/info/`, {
                data: data,
                body: body,
                id_car: params.id
            })
            setData('')
            setBody('')
            getServiceInformation()
        } catch (error) {
            toast.error('A aparut o eroare')
        }
    }

    return (
        <div className="create">
            <h2>Adauga o noua intrare in istoric</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Data</label>
                <input className="emailInput"
                    type="date" id="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)} />
                <label htmlFor="text">Descriere</label>
                <textarea className="emailInput"
                    type="date"
                    id="text"
                    rows='5'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>

                <button className="form_button">Salveaza</button>
            </form>
        </div>
    )
}

export default CreateNote
