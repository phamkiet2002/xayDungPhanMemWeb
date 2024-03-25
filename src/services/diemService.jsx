import axios from "axios";


const URL_BASE = 'https://xaydungphanmemwebbe-production.up.railway.app/api/diem';

const fetchAllDiem = () => {
    return axios.get(URL_BASE);
}

const themDiem = (diem) => {
    return axios.post(URL_BASE, diem);
}

const updateDiem = (idDiem, diem) => {
    return axios.put(URL_BASE + '/' + idDiem, diem);
}

export  {fetchAllDiem, themDiem, updateDiem}
