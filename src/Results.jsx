import { Col, Row, Card } from "react-bootstrap";

function Results({ results }) {
  if (!results) {
    return (
      <h2 style={{ marginTop: "100px", textAlign: "center" }}>
        Type in keywords to begin searching
      </h2>
    );
  }
  if (results.length === 0) {
    return <h2>No results returned.</h2>;
  }
  return (
    <Row>
      {results.map((result) => {
        if (result.image_id) {
          return (
            <Col key={result.id} xs={8} sm={6} md={4} lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`}
                  alt={result.thumbnail?.alt_text}
                  height={250}
                />
                <Card.Body>
                  <Card.Title>{result.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        }
        return null;
      })}
    </Row>
  );
}

export default Results;
