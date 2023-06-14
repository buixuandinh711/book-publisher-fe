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
