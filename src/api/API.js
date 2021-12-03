import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.0.12:4004'
})

export const get = async(url, setDado) => {
    const resposta = await api.get(url);
    setDado(resposta.data)
}

export const getTeste = async(url, setDado) => {
    const resposta = await api.get(url);
    setDado(resposta.data)
}