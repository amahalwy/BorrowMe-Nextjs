import React from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/something")}>Router!!</button>This is
      now the signup page!!
    </div>
  );
}

/////heloooooo
