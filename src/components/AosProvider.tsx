"use client";
import { useAOS } from "@/components/hooks/useAos";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useAOS();
  return <>{children}</>;
}