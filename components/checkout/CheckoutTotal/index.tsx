import { useCartQuery, usePreviewOrderMutation } from "@/contexts/slices/apiSlice";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CheckoutTotal() {
  const cartQuery = useCartQuery({});

  const [_, shippingResult] = usePreviewOrderMutation({
    fixedCacheKey: "shared-preview-order",
  });

  if (!cartQuery.isSuccess) {
    return (
      <div className="mt-2 rounded-md border border-gray-300 px-2 py-3">
        <FontAwesomeIcon icon={faCircleExclamation} className="mr-1" />
        Failed to load data
      </div>
    );
  }

  const subtotal = cartQuery.data.reduce((accumulator, item) => accumulator + item.book.currentPrice * item.quantity, 0);
  const shippingFee = shippingResult.isSuccess ? shippingResult.data.shippingFee : 0;

  return (
    <div className="mt-2 rounded-md border border-gray-300 px-2 py-3">
      <div className="flex items-center justify-between pb-2">
        <span>Subtotal:</span>
        <span className="font-medium">{subtotal.toLocaleString()}</span>
      </div>
      {shippingFee > 0 && (
        <div className="flex items-center justify-between pb-2">
          <span>Shipping:</span>
          <span className="font-medium">{shippingFee.toLocaleString()}</span>
        </div>
      )}
      <div className="flex items-center justify-between border-t border-gray-300 pt-2">
        <span className="text-base font-medium">Total:</span>
        <span className="text-lg font-bold">{(subtotal + shippingFee).toLocaleString()}</span>
      </div>
    </div>
  );
}
