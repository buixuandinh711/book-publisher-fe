import { useLoginMutation } from "@/contexts/slices/apiSlice";
import { passwordRegex } from "@/utils/constant";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format.").required("Email is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password should be at least 8 characters.")
    .matches(passwordRegex, "Password should contain at least one letter and one digit."),
});

export function LoginMain() {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <section className="float-left w-full py-8 text-sm text-red-700">
      <div className="container">
        <h1 className="float-left mb-8 w-full text-2xl font-bold uppercase leading-snug">Log in to your account</h1>
        <div className="-mx-4">
          <div className="relative float-left w-1/2 px-4">
            <div className="mb-8">
              <div id="login">
                <p className="mb-4">If you already have an account, log in here.</p>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                    setSubmitting(false);
                    try {
                      await login({ email: values.email, password: values.password }).unwrap();
                      router.replace("/");
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  {({ errors, touched }) => (
                    <Form method="post" action="/account/login" id="customer_login" acceptCharset="UTF-8">
                      <input name="FormType" type="hidden" defaultValue="customer_login" />
                      <input name="utf8" type="hidden" defaultValue="true" />
                      <div className="form-signup"></div>
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
                        <div className="mt-8">
                          <button
                            className="relative inline-block h-10 min-w-[160px] cursor-pointer rounded-md border border-red-700 bg-red-700 text-center leading-[40px] text-white outline-none"
                            type="submit"
                            value="Log in"
                          >
                            <span>Log in</span>
                          </button>
                          <Link
                            className="relative ml-2 inline-block h-10 min-w-[160px] cursor-pointer rounded-md border border-red-700 bg-white px-8 text-center leading-[40px] text-red-700 outline-none"
                            href="/account/register"
                          >
                            <span>Sign up</span>
                          </Link>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>

                <span className="float-left mt-8 block cursor-pointer underline">Forgot your password?</span>
              </div>
            </div>
          </div>
          <div className="relative float-left hidden w-1/2 border-l border-gray-300 px-4">
            <div id="recover-password" className="float-left w-full">
              <p className="mb-4">Forgot your password? Enter your email address to reset your password via email.</p>
              <form method="post" action="/account/recover" id="recover_customer_password" acceptCharset="UTF-8">
                <input name="FormType" type="hidden" defaultValue="recover_customer_password" />
                <input name="utf8" type="hidden" defaultValue="true" />
                <div className="form-signup aaaaaaaa"></div>
                <div className="float-left w-full">
                  <fieldset className="pb-2">
                    <label className="mb-[2px] block max-w-full font-bold">Email: </label>
                    <input
                      type="email"
                      className="block h-10 min-h-[40px] w-full max-w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-300"
                      name="Email"
                      id="recover-email"
                      placeholder="Email"
                    />
                  </fieldset>
                </div>
                <div className="float-left mt-6 w-full">
                  <button
                    className="relative inline-block h-10 min-w-[160px] cursor-pointer rounded-md border border-red-700 bg-red-700 text-center leading-[40px] text-white outline-none"
                    type="submit"
                    value="Reset Password"
                  >
                    <span>Reset Password</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
