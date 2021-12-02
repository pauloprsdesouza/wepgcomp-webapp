import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:4004'
})

export const get = async(url, setDado) => {
    console.log(123)
    const resposta = await api.get(url);
    setDado(resposta.data)
}