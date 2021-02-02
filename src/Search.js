import React from "react";
import "./Search.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Search() {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search a city"
            />
          </Col>
          <Col>
            <button
              type="submit"
              className="btn btn-primary"
              id="submit-button"
            >
              Search
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
