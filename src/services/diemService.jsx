import axios from "axios";


const URL_BASE = 'https://xaydungphanmemwebbe-production.up.railway.app/api/diem';

const fetchAllDiem = () => {
    return axios.get(URL_BASE);
}

export  {fetchAllDiem}
