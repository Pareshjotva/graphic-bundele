import { Suspense } from "react";
import SuccessContent from "./SuccessContent";

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "#08090D", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
