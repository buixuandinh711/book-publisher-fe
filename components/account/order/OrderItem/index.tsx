import { formatDateTime } from "@/utils/utils";
import { useRouter } from "next/router";

export interface OrderItemProps {
  _id: string;
  recipientName: string;
  phone: string;
  fullAddress: string;
  createdAt: string;
  total: string;
}

export function OrderItem({ _id, recipientName: recipient, phone, fullAddress: address, createdAt, total }: OrderItemProps) {
  const router = useRouter();

  const handleItemOnClick = () => {
    router.push(`order/${_id}`);
  };

  return (
    <tr className="last:border-idne cursor-pointer border-b border-b-gray-300 text-red-700 hover:bg-gray-50" onClick={handleItemOnClick}>
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
