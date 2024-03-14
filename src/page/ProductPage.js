import React from "react";
import { Table, Image, Badge, Spinner } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { Link } from 'react-router-dom'
import { BsEyeFill} from 'react-icons/bs'

const ProductPage = () => {
  const [product, setProduct] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);

  const getData = async () => {
    try {
      setloading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course",
        {
          cancelToken: cancelToken.current.token,
        }
      );
      setProduct(resp.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData();
    return () => {
      cancelToken.current.cancel();
    };
  }, []);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    // return (
    //   <div className="text-center mt-5">
    //     <p>กรุณาลองอีกครั้ง</p>
    //   </div>
    // );
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2>สินค้า</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>ชื่อคอร์ส</th>
                <th>รายละเอียด</th>
                <th>วันที่สร้าง</th>
                <th>view</th>
                <th>รูปภาพ</th>
                <th>เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {product.map((p, index) => {
                return (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{p.detail}</td>
                    <td>{format(new Date(p.date), "dd/MM/yy")}</td>
                    <td>
                      <Badge variant="success">{p.view}</Badge>
                    </td>
                    <td>
                      <Image
                        src={p.picture}
                        thumbnail
                        alt={p.title}
                        width={100}
                      />
                    </td>
                    <td>
                      <Link to={`/detail/${p.id}/title/${p.title}`}>
                        <BsEyeFill/>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
