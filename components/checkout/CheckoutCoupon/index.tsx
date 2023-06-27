import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CheckoutCoupon() {
  return (
    <div className="mt-2 flex w-full items-center justify-between rounded-md border border-gray-300 pl-2">
      <div className="relative">
        <input type="text" className="h-8 outline-none" placeholder="Coupon" />
        <FontAwesomeIcon icon={faTicket} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      <button className="h-8 w-20 rounded-r-md bg-red-700 text-white">Apply</button>
    </div>
  );
}
