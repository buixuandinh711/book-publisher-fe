export function LoginMain() {
  return (
    <section className="w-full float-left py-8 text-red-700 text-sm">
      <div className="container">
        <h1 className="mb-8 text-2xl font-bold uppercase w-full float-left leading-snug">
          Đăng nhập tài khoản
        </h1>
        <div className="-mx-4">
          <div className="w-1/2 float-left relative px-4">
            <div className="mb-8">
              <div id="login">
                <p className="mb-4">
                  Nếu bạn đã có tài khoản, đăng nhập tại đây.
                </p>
                <form
                  method="post"
                  action="/account/login"
                  id="customer_login"
                  acceptCharset="UTF-8"
                >
                  <input
                    name="FormType"
                    type="hidden"
                    defaultValue="customer_login"
                  />
                  <input name="utf8" type="hidden" defaultValue="true" />
                  <div className="form-signup"></div>
                  <div className="w-full float-left">
                    <fieldset className="pb-2">
                      <label className="block mb-[2px] max-w-full font-bold">
                        Email:{" "}
                      </label>
                      <input
                        type="email"
                        className="block w-full min-h-[40px] py-1 px-2 text-gray-300 bg-white h-10 border border-gray-300 max-w-full rounded-md"
                        name="email"
                        id="customer_email"
                        placeholder="Email"
                      />
                    </fieldset>
                    <fieldset className="pb-2">
                      <label className="block mb-[2px] max-w-full font-bold">
                        Mật khẩu:{" "}
                      </label>
                      <input
                        type="password"
                        className="block w-full min-h-[40px] py-1 px-2 text-gray-300 bg-white h-10 border border-gray-300 max-w-full rounded-md"
                        name="password"
                        id="customer_password"
                        placeholder="Mật khẩu"
                      />
                    </fieldset>
                    <div className="mt-6">
                      <button
                        className="bg-red-700 text-white border border-red-700 rounded-md min-w-[160px] relative cursor-pointer inline-block h-10 leading-[40px] text-center outline-none"
                        type="submit"
                        value="Đăng nhập"
                      >
                        <span>Đăng nhập</span>
                      </button>
                      <button
                        className="bg-white text-red-700 border border-red-700 rounded-md min-w-[160px] ml-2 relative px-8 cursor-pointer inline-block h-10 leading-[40px] text-center outline-none"
                        type="submit"
                        value="Đăng nhập"
                      >
                        <span>Đăng ký</span>
                      </button>
                    </div>
                  </div>
                </form>
                <span className="mt-8 block float-left underline cursor-pointer">
                  Bạn quên mật khẩu?
                </span>
              </div>
            </div>
          </div>
          <div className="w-1/2 float-left relative px-4 border-l border-gray-300 hidden">
            <div id="recover-password" className="w-full float-left">
              <p className="mb-4">
                Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua
                email.
              </p>
              <form
                method="post"
                action="/account/recover"
                id="recover_customer_password"
                acceptCharset="UTF-8"
              >
                <input
                  name="FormType"
                  type="hidden"
                  defaultValue="recover_customer_password"
                />
                <input name="utf8" type="hidden" defaultValue="true" />
                <div className="form-signup aaaaaaaa"></div>
                <div className="w-full float-left">
                  <fieldset className="pb-2">
                    <label className="block mb-[2px] max-w-full font-bold">
                      Email:{" "}
                    </label>
                    <input
                      type="email"
                      className="block w-full min-h-[40px] py-1 px-2 text-gray-300 bg-white h-10 border border-gray-300 max-w-full rounded-md"
                      name="Email"
                      id="recover-email"
                      placeholder="Email"
                    />
                  </fieldset>
                </div>
                <div className="mt-6 w-full float-left">
                  <button
                    className="bg-red-700 text-white border border-red-700 rounded-md min-w-[160px] relative cursor-pointer inline-block h-10 leading-[40px] text-center outline-none"
                    type="submit"
                    value="Lấy lại mật khẩu"
                  >
                    <span>Lấy lại mật khẩu</span>
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
