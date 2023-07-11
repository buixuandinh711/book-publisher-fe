import { formatDateTime } from "@/utils/utils";

export interface OrderItemProps {
  id: string;
  recipientName: string;
  phone: string;
  fullAddress: string;
  createdAt: string;
  total: string;
}

export function OrderItem({ id, recipientName: recipient, phone, fullAddress: address, createdAt, total }: OrderItemProps) {
  return (
    <tr className="last:border-idne cursor-pointer border-b border-b-gray-300 text-red-700 hover:bg-gray-50">
      <td className="last:border-idne border-r border-gray-300 px-2 py-3">
        <div className="flex justify-center">{formatDateTime(createdAt)}</div>
      </td>
      <td className="last:border-idne border-r border-gray-300 px-2 py-3">
        <div className="flex justify-center">{recipient}</div>
      </td>
      <td className="last:border-idne border-r border-gray-300 px-2 py-3">
        <div className="flex justify-center">{phone}</div>
      </td>
      <td className="last:border-idne border-r border-gray-300 px-2 py-3">{address}</td>

      <td className="last:border-idne border-r border-gray-300 px-2 py-3">
        <div className="flex justify-center">{total}</div>
      </td>
    </tr>
  );
}
