import React from "react";

import { useParams, useHistory } from "react-router-dom";
import { Spinner, Card, CardDeck, Button } from "react-bootstrap";
import axios from "axios";

const Detailpage = () => {
  const { id, title } = useParams();
  const history = useHistory();

  const [detail, setDetail] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);

  const getData = async (id) => {
    try {
      setloading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id,
        {
          cancelToken: cancelToken.current.token,
        }
      );
      setDetail(resp.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();
    getData(id);
    return () => {
      cancelToken.current.cancel();
    };
  }, [id]);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    // return (
    //   <div className="text-center mt-5 text-danger">
    //     <p>เกิดข้อผิดพลาดกรุณาลองใหม่</p>
    //     <p>{error.response.data.message}</p>
    //   </div>
    // );
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <Button
            variant="secondary"
            onClick={() => {
              history.goBack();
            }}
          >
            ย้อนกลับ
          </Button>
          <h2>
            {title} - {id}
          </h2>
          <div className="row">
            {detail.length > 0 ? (
              <CardDeck>
                {detail.map((d, index) => {
                  return (
                    <div className="col-md-4" key={d.ch_id}>
                      <Card className="mb-4 shadow-sm">
                        <Card.Body>
                          <Card.Title>{d.ch_title}</Card.Title>
                          <Card.Text>{d.ch_dateadd}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </CardDeck>
            ) : (
              <p className="mx-auto">ไม่พบข้อมูล</p>
            )}
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
