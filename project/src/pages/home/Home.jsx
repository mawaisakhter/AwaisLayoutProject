import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css"; // Custom CSS import

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="text-center text-white">
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop solution for web development</p>
          <Button variant="light" size="lg" className="mt-3">
            Get Started
          </Button>
        </Container>
      </div>

      {/* Services Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {["Web Development", "UI/UX Design", "SEO Optimization"].map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="service-card text-center">
                <Card.Body>
                  <Card.Title>{service}</Card.Title>
                  <Card.Text>
                    We provide high-quality {service.toLowerCase()} services to boost your business.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
