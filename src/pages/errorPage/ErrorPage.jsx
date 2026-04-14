import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg text-center">
        <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>

        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page not found
        </h2>

        <p className="text-gray-500 mt-3">
          {error?.statusText ||
            error?.message ||
            "The page you're looking for doesn't exist."}
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Go Home
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-400">
          <p>Need help? Contact support</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
