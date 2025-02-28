import React, { useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Button, Container, Alert, Spinner, Row, Col } from "react-bootstrap";

const Login = () => {
  const initialValues = { email: "", password:"", };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("password is required"),
  });

  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current?.focus(); 
  }, []);

  return (
    <Container>
      <Row className="justify-content-center py-5">
        <Col md={5}>
          <h2 className="text-center mb-4">Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log("Form Submitted:", values);
              setTimeout(() => {
                alert("Form submitted successfully! 🎉");
                resetForm(); 
                setSubmitting(false);
                firstInputRef.current?.focus(); 
              }, 1000);
            }}
          >
            {({ isSubmitting, handleChange, values }) => (
              <BootstrapForm as={Form} className="p-4 border rounded shadow">

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email} 
                  />
                  <ErrorMessage name="email" component={Alert} variant="danger" className="mt-2" />
                </BootstrapForm.Group>

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password} 
                  />
                  <ErrorMessage name="password" component={Alert} variant="danger" className="mt-2" />
                </BootstrapForm.Group>

                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-100">
                  {isSubmitting ? <Spinner animation="border" size="sm" /> : "Login"}
                </Button>
              </BootstrapForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
