import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const ViewDiem = () => {
  return (
    <div>
    <div className="d-flex justify-content-center align-items-center ">
      <div className="container m-5 " style={{ width: 500 }}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Tên sinh viên :</td>
              <td>Huỳnh Hoàng An</td>
            </tr>
            <tr>
              <td>Mã sinh viên :</td>
              <td>Huỳnh Hoàng An</td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>Huỳnh Hoàng An</td>
            </tr>
            <tr>
              <td>Số điện thoại :</td>
              <td>Huỳnh Hoàng An</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
    <div className="m-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Mã môn học</th>
          <th scope="col">Tên môn học</th>
          <th scope="col">Điểm</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>KTLT</td>
          <td>Kỹ Thuật Lập trình</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  );
};

export default ViewDiem;
