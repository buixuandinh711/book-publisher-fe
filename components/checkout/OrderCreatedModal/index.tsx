import { faCheckCircle, faArrowAltCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function OrderCreatedModal() {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
      <div className="rounded-md bg-white p-8">
        <div className="mb-4 flex items-center justify-center">
          <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-4xl text-green-500" />
          <h1 className="text-2xl font-bold">Order Created Successfully</h1>
        </div>
        <div className="mt-6 flex justify-end">
          <Link href="/" className="flex items-center rounded-md bg-red-700 px-4 py-2 text-white hover:bg-red-800">
            <span>Go to Order</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
