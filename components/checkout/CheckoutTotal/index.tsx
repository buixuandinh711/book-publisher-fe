export function CheckoutTotal() {
  return (
    <div className="mt-2 rounded-md border border-gray-300 px-2 py-3">
      <div className="flex items-center justify-between pb-2">
        <span>Subtotal:</span>
        <span className="font-medium">20$</span>
      </div>
      <div className="flex items-center justify-between pb-2">
        <span>Shipping:</span>
        <span className="font-medium">2$</span>
      </div>
      <div className="flex items-center justify-between border-t border-gray-300 pt-2">
        <span className="text-base font-medium">Total:</span>
        <span className="text-lg font-bold">22$</span>
      </div>
    </div>
  );
}