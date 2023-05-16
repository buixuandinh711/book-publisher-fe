import Link from "next/link";

export default function Error404() {
  return (
    <section className="w-full float-left">
      <div className="container">
        <div className="-mx-4">
          <div className="w-full float-left relative min-h-[50vh] px-4 py-8">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <h2 className="text-3xl font-semibold text-gray-600 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              The page you are looking for does not exist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
