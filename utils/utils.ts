import { ParsedUrlQuery } from "querystring";

export const orUpdating = (value: any) => {
  return value || "Đang cập nhật";
};
export const ceilToNearest5 = (num: number): number => {
  return Math.ceil(num / 5) * 5;
};

export const calculateDiscountPercentage = (originalPrice: number, currentPrice: number): number => {
  if (originalPrice <= 0 || currentPrice <= 0 || currentPrice >= originalPrice) {
    return 0;
  }

  const discount = originalPrice - currentPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return ceilToNearest5(discountPercentage);
};

export const parsedUrlQueryToURLSearchParams = (query: ParsedUrlQuery): URLSearchParams => {
  const searchParams = new URLSearchParams();

  // Convert each key-value pair in the query object to URLSearchParams
  for (const key in query) {
    const value = query[key];
    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, v));
    } else {
      if (value !== undefined) {
        searchParams.append(key, value);
      }
    }
  }

  return searchParams;
};
