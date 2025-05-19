'use client';
import { useContract } from "@/store/useContract";
import React from "react";

export default function ContentMain({
  children,
}: {
  children: React.ReactNode;
}) {
    const { isContract } = useContract();
    return <div className={`px-10 pb-1 pt-2 mx-auto w-full ${isContract && 'max-w-[1400px]'}`}>{children}</div>;
}
