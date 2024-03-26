import React, { useEffect, useState } from 'react'
import { fetchAllDiem } from '../../services/diemService';

const ThemDiemComponent = () => {

    const [diem, setDiem] = useState('');
    const [sinhVien, setSinhVien] = useState('');
    const [monhoc, setMonHoc] = useState('')

    //const { id } = useParams();

    //select Option
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

    function handleChangeMonHoc(event) {
        const selectedMonhoc = event.target.value;
        setMonHoc(selectedMonhoc);
    }

    function handleChangeSinhVien(event) {
        const selectedSinhVien = event.target.value;
        setSinhVien(selectedSinhVien);
    }

    //chưa trả về trang trước khi nhấn hủy
    function handleCancel() {
        //navigator('/lophoc')
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
                                <select value={monhoc} onChange={handleChangeMonHoc}>
                                    <option onChange={(e) => setMonHoc(e.target.value)} disabled value="">Select</option>
                                    {diems.map(diem => (
                                        <option key={diem.id} value={diem.id}>
                                            {diem.monhoc.tenMH}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Sinh vien:</label>
                                <select value={sinhVien} onChange={handleChangeSinhVien}>
                                    <option onChange={(e) => setSinhVien(e.target.value)} disabled value="">Select</option>
                                    {diems.map(diem => (
                                        <option key={diem.id} value={diem.id}>
                                            {diem.sinhVien.ten}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Diem:</label>
                                <input
                                    type="diem"
                                    placeholder='Enter diem'
                                    name='diem'
                                    value={diem.diem}
                                    onChange={(e) => setDiem(e.target.value)}
                                />
                            </div>

                            <div className="btn btn-success" >Submit</div>
                            {/* onClick={saveOrUpdateEmployee} */}
                            <span className='px-3' />
                            <button onClick={()=>handleCancel} className="btn btn-danger" >Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemDiemComponent
