import { UserDispatchContext } from "@/contexts/UserContext";
import { nameRegex, passwordRegex } from "@/utils/constant";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { useContext } from "react";
import * as Yup from "yup";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "First name should not exceed 50 characters.")
    .matches(nameRegex)
    .required("First name is required."),
  lastName: Yup.string()
    .max(50, "Last name should not exceed 50 characters.")
    .matches(nameRegex)
    .required("Last name is required."),
  email: Yup.string().email("Invalid email format.").required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password should be at least 8 characters.")
    .matches(passwordRegex, "Password should contain at least one letter and one digit."),
});

export function RegisterMain() {
  const router = useRouter();
  const userDispatch = useContext(UserDispatchContext);

  return (
    <section className="w-full float-left py-8 text-red-700 text-sm">
      <div className="container">
        <h1 className="mb-8 text-2xl font-bold uppercase w-full float-left leading-snug">Register New Account</h1>
        <div className="-mx-4">
          <p className="mb-4 px-4">{"If you don't have an account, please register here"}</p>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values: RegisterFormValues, { setSubmitting }: FormikHelpers<RegisterFormValues>) => {
              setSubmitting(false);
              const formData = new URLSearchParams();
              formData.append("name", `${values.firstName} ${values.lastName}`);
              formData.append("email", values.email);
              formData.append("password", values.password);

              try {
                const response = await fetch(`http://${process.env.NEXT_PUBLIC_HOST}/user/register`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",

                  },
                  body: formData.toString(),
                  credentials: "include",
                });
                if (response.ok) {
                  const user = await response.json();
                  if (userDispatch) {
                    userDispatch({ type: "LOGIN", user });
                  }
                  router.replace("/");
                } else {
                  console.log("Register failed");
                }
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form acceptCharset="UTF-8">
                <div className="w-1/2 float-left relative px-4">
                  <div className="mb-8">
                    <div>
                      <div className="w-full float-left">
                        <fieldset className="relative mb-6">
                          <label htmlFor="firstName" className="block mb-[2px] max-w-full font-bold cursor-pointer">
                            First Name:{" "}
                          </label>
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                            placeholder="First Name"
                          />
                          {errors.firstName && touched.firstName ? (
                            <div className="absolute bottom-0 left-0 translate-y-full">{errors.firstName}</div>
                          ) : null}
                        </fieldset>
                        <fieldset className="relative mb-6">
                          <label htmlFor="lastName" className="block mb-[2px] max-w-full font-bold">
                            Last Name:{" "}
                          </label>
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                            placeholder="Last Name"
                          />
                          {errors.lastName && touched.lastName ? (
                            <div className="absolute bottom-0 left-0 translate-y-full">{errors.lastName}</div>
                          ) : null}
                        </fieldset>
                        <div className="mt-8">
                          <button
                            className="bg-red-700 text-white border border-red-700 rounded-md min-w-[160px] relative cursor-pointer inline-block h-10 leading-[40px] text-center outline-none"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 float-left relative px-4">
                  <div className="w-full float-left">
                    <div className="w-full float-left">
                      <fieldset className="relative mb-6">
                        <label htmlFor="email" className="block mb-[2px] max-w-full font-bold">
                          Email:{" "}
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                          placeholder="Email"
                        />
                        {errors.email && touched.email ? (
                          <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                        ) : null}
                      </fieldset>
                    </div>
                    <div className="w-full float-left">
                      <fieldset className="relative mb-6">
                        <label htmlFor="password" className="block mb-[2px] max-w-full font-bold">
                          Password:{" "}
                        </label>
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="block w-full min-h-[40px] py-1 px-2 text-gray-900 bg-white h-10 border border-gray-300 max-w-full rounded-md outline-none"
                          placeholder="Password"
                        />
                        {errors.password && touched.password ? (
                          <div className="absolute bottom-0 left-0 translate-y-full">{errors.password}</div>
                        ) : null}
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
