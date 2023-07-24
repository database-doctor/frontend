"use client";
export const getBearerFromToken = (token: string) => {
  return `Bearer ${token}`;
};
