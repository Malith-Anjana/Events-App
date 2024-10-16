"use client";

import { useRouter } from "next/navigation";

type ErrorProps = {
  statusCode?:number;
  error: Error;
  reset: () => void;
};

export default function Error({error, reset, statusCode }: ErrorProps) {
  const router = useRouter();
  console.log("***The error message is***")
  console.log(error.message)
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">{statusCode && statusCode}</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oops!
        </p>

        <p className="mt-4 text-gray-500">
        {error.message !== '{}' || error.message === null ? error.message : "Something went wrong!"}
        </p>

        <button
        type="button"
        onClick={()=> router.back()}
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
      >
       Go Back!
      </button>
      </div>
    </div>
  );
}