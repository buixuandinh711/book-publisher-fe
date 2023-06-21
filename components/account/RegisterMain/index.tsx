import { useRegisterMutation } from "@/contexts/slices/apiSlice";
import { nameRegex, passwordRegex } from "@/utils/constant";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().max(50, "First name should not exceed 50 characters.").matches(nameRegex).required("First name is required."),
  lastName: Yup.string().max(50, "Last name should not exceed 50 characters.").matches(nameRegex).required("Last name is required."),
  email: Yup.string().email("Invalid email format.").required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password should be at least 8 characters.")
    .matches(passwordRegex, "Password should contain at least one letter and one digit."),
});

export function RegisterMain() {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <section className="float-left w-full py-8 text-sm text-red-700">
      <div className="container">
        <h1 className="float-left mb-8 w-full text-2xl font-bold uppercase leading-snug">Register New Account</h1>
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
                await register({
                  name: `${values.firstName} ${values.lastName}`,
                  email: values.email,
                  password: values.password,
                }).unwrap();
                router.replace("/");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form acceptCharset="UTF-8">
                <div className="relative float-left w-1/2 px-4">
                  <div className="mb-8">
                    <div>
                      <div className="float-left w-full">
                        <fieldset className="relative mb-6">
                          <label htmlFor="firstName" className="mb-[2px] block max-w-full cursor-pointer font-bold">
                            First Name:{" "}
                          </label>
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                            placeholder="First Name"
                          />
                          {errors.firstName && touched.firstName ? (
                            <div className="absolute bottom-0 left-0 translate-y-full">{errors.firstName}</div>
                          ) : null}
                        </fieldset>
                        <fieldset className="relative mb-6">
                          <label htmlFor="lastName" className="mb-[2px] block max-w-full font-bold">
                            Last Name:{" "}
                          </label>
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                            placeholder="Last Name"
                          />
                          {errors.lastName && touched.lastName ? (
                            <div className="absolute bottom-0 left-0 translate-y-full">{errors.lastName}</div>
                          ) : null}
                        </fieldset>
                        <div className="mt-8">
                          <button
                            className="relative inline-block h-10 min-w-[160px] cursor-pointer rounded-md border border-red-700 bg-red-700 text-center leading-[40px] text-white outline-none"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative float-left w-1/2 px-4">
                  <div className="float-left w-full">
                    <div className="float-left w-full">
                      <fieldset className="relative mb-6">
                        <label htmlFor="email" className="mb-[2px] block max-w-full font-bold">
                          Email:{" "}
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
                          placeholder="Email"
                        />
                        {errors.email && touched.email ? (
                          <div className="absolute bottom-0 left-0 translate-y-full">{errors.email}</div>
                        ) : null}
                      </fieldset>
                    </div>
                    <div className="float-left w-full">
                      <fieldset className="relative mb-6">
                        <label htmlFor="password" className="mb-[2px] block max-w-full font-bold">
                          Password:{" "}
                        </label>
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-900 outline-none"
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
