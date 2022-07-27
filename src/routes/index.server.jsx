import { Suspense } from "react";
import SlickHome from "../components/SlickHome.client";

export default function Home() {
  return (
    <Suspense>
      <SlickHome />
    </Suspense>
  );
}
