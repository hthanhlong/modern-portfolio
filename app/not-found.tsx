import Link from "next/link";
import { Wrapper } from "@/components";

export default function NotFound() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-2">404 - Not Found</h2>
        <p className="text-gray-500 mb-4">
          The page you are looking for does not exist.
        </p>
        <Link href="/" className="btn">
          Go to Home
        </Link>
      </div>
    </Wrapper>
  );
}
