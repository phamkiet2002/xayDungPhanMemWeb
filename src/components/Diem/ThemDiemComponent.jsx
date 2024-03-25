import React, { useEffect, useState } from 'react'
import { fetchAllDiem } from '../../services/diemService';

const ThemDiemComponent = () => {

    const [diem, setDiem] = useState('');
    const [sinhVien, setSinhVien] = useState('');
    const [monhoc, setMonHoc] = useState('')
    //const { id } = useParams();
    const [diems, setDiems] = useState([]);

    useEffect(() => {
        listDiem();
    }, [])

    function listDiem() {
        fetchAllDiem().then(response => {
            setDiems(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function handleChange(event) {
        const selectedMonhoc = event.target.value; 
        setMonHoc(selectedMonhoc); 
    }

    return (
        <div className='container'>
            <br /> <br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-2">
                                <label className="form-label">Mon hoc:</label>
                                <select value={monhoc} onChange={handleChange}>
                                    <option  onChange={(e) => setMonHoc(e.target.value)} value="">Select</option>
                                    {diems.map(diem => (
                                        <option key={diem.id} value={diem.id}>
                                            {diem.monhoc.tenMH}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Sinh vien:</label>
                                <input
                                    type="text"
                                    placeholder='Enter sinh vien'
                                    name='sinhVien'
                                    value={sinhVien}
                                    onChange={(e) => setSinhVien(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Diem:</label>
                                <input
                                    type="diem"
                                    placeholder='Enter diems'
                                    name='diem'
                                    value={diem.diem}
                                    onChange={(e) => setDiem(e.target.value)}
                                />
                            </div>

                            <div className="btn btn-success" >Submit</div>
                            {/* onClick={saveOrUpdateEmployee} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemDiemComponent
