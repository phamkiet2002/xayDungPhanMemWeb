import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { fetchAllDiem } from '../../services/diemService';
import { useNavigate } from 'react-router-dom';
const DiemConponent = () => {

    const [diems, setDiem] = useState([]);
    
    const navigator = useNavigate();

    useEffect(() => {
        listDiem();
    }, [])

    function listDiem() {
        fetchAllDiem().then(response => {
            setDiem(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    function addDiem() {
        navigator('/add-diem')
    }

    return (
        <div>
            <div className='my-3 them_diem'>
                <span><b>Thêm Điểm:</b></span>
                <button onClick={addDiem} className='btn btn-success'>Thêm Điểm</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>sinh vien</th>
                        <th>mon hoc</th>
                        <th>diem</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        diems.map((diem) =>
                            <tr key={diem.id}>
                                <td>{diem.id}</td>
                                <td>{diem.sinhVien.ten}</td>
                                <td>{diem.monhoc.tenMH}</td>
                                <td>{diem.diem}</td>
                                <td>
                                    <button className='btn btn-success ms-2'>Update</button>
                                    {/* onClick={() => Update(employee.id)} */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default DiemConponent
