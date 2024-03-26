import axios from 'axios';


const URL_BASE = 'http://localhost:8080/api/sinhvien';

const fetchAllSinhVien = () => {
  return axios.get(URL_BASE);
}

export {fetchAllSinhVien}
