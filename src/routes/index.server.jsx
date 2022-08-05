import { Suspense } from "react";
import SimpleSlider from "../components/SimpleSlider.client";

export default function Home() {
  return (
    <Suspense>
      <SimpleSlider />
    </Suspense>
  );
}
