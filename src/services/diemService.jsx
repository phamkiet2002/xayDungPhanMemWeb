import axios from "axios";


const URL_BASE = 'http://localhost:8080/api/diem';

const fetchAllDiem = () => {
    return axios.get(URL_BASE);
}

export  {fetchAllDiem}
