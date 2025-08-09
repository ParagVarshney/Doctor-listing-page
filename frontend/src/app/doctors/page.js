import { Suspense } from "react";
import Doctors from "./Doctors";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading doctors...</p>}>
      <Doctors />
    </Suspense>
  );
}
