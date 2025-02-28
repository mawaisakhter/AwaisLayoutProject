import React, { useEffect, useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Form as BootstrapForm, Button, Container, Spinner, Row, Col } from "react-bootstrap";

const Register = () => {
  const initialValues = { 
    Fname: "", 
    Lname: "", 
    email: "", 
    password: "",
    confirmPassword: "" 
  };

  const validationSchema = Yup.object({
    Fname: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("First Name is required"),
    
    Lname: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Last Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const firstInputRef = useRef(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center py-5">
        <Col md={5}>
          <h2 className="text-center mb-4">Create Account</h2>
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
            {({ isSubmitting, handleChange, values, errors, touched }) => (
              <BootstrapForm as={Form} className="p-4 border rounded shadow">

                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>First Name</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="text"
                    name="Fname"
                    onChange={handleChange}
                    value={values.Fname}
                    ref={firstInputRef}
                    isInvalid={touched.Fname && errors.Fname}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.Fname}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>


                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="text"
                    name="Lname"
                    onChange={handleChange}
                    value={values.Lname}
                    isInvalid={touched.Lname && errors.Lname}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.Lname}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

      
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    isInvalid={touched.email && errors.email}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.email}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>


                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Password</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    isInvalid={touched.password && errors.password}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.password}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

        
                <BootstrapForm.Group className="mb-3">
                  <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                    isInvalid={touched.confirmPassword && errors.confirmPassword}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-100">
                  {isSubmitting ? <Spinner animation="border" size="sm" /> : "Submit"}
                </Button>
              </BootstrapForm>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
