import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { fetchAllDiem } from '../../services/diemService';
const DiemConponent = () => {

    const [diems, setDiem] = useState([]);
    // const [sinhVien, setSinhVien] = useState('');
    // const [monhoc, setMonhoc] = useState('');

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

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>diem</th>
                        <th>sinh vien</th>
                        <th>mon hoc</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        diems.map((diem) =>
                            <tr key={diem.id}>
                                <td>{diem.id}</td>
                                <td>{diem.diem}</td>
                                <td>{diem.sinhVien.ten}</td>
                                <td>{diem.monhoc.tenMH}</td>
                                <td>
                                    <button  className='btn btn-success ms-2'>Update</button>
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
