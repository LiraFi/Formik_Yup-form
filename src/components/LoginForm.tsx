import { Box, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../components/LoginForm.css";

const Login = () => {
	type InitialValues = {
		name: "";
		email: "";
		password: "";
	};

	const initialValues: InitialValues = {
		name: "",
		email: "",
		password: "",
	};

	const FormSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, "Too short!")
			.max(30, "Too long!")
			.required("Name is required."),
		email: Yup.string()
			.email("Invalid email")
			.required("Enter email to login."),
		password: Yup.string()
			.min(8, "Too short!")
			.max(20, "Too long!")
			.required("Enter password to login!")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character!"
			),
	});

	const sendTheForm = (values: InitialValues) => {
		console.log(values);
	};

	return (
		<Box>
			<h2>Please, login here!</h2> <br />
			<Formik
				initialValues={initialValues}
				validationSchema={FormSchema}
				onSubmit={sendTheForm}
			>
				{({ errors, touched, handleChange }) => (
					<Form>
						<Box>
							<div>
								<div className="form-input">
									<TextField
										id="outlined"
										label="Full Name"
										type="name"
										name="name"
										onChange={handleChange}
									/>
									{errors.name && touched.name ? (
										<div className="error-msg">{errors.name}</div>
									) : null}
								</div>
								<div className="form-input">
									<TextField
										id="outlined"
										label="Your email"
										type="email"
										name="email"
										onChange={handleChange}
									/>
									{errors.email && touched.email ? (
										<div className="error-msg">{errors.email}</div>
									) : null}
								</div>
								<div className="form-input">
									<TextField
										label="Password"
										type="password"
										onChange={handleChange}
									/>
									{errors.password && touched.password ? (
										<div className="error-msg">{errors.password}</div>
									) : null}
								</div>
								<button type="submit">Submit</button>
							</div>
						</Box>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default Login;
