import React from "react";

import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";


const UploadFilePage = () => {
  const history = useHistory();
  const { handleSubmit, formState: {errors} , register } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <h1> อัพโหลดไฟล์ </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                Example file input
              </label>
              <input
                type="file"
                name="picture"
                ref={register({
                  required: "กรุณาเลือกรูปภาพ",
                })}
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Upload...
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadFilePage;
