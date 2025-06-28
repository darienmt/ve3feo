import * as React from "react"
import { Link } from "gatsby"
import brokenAntenna from "../images/broken-antenna.png"

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-white text-gray-800 p-8 font-sans">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-10 max-w-lg w-full">
        <img src={brokenAntenna} alt="Broken antenna illustration" className="w-40 h-40 object-contain mb-4" />
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Page not found</h1>
        <p className="mb-6 text-lg text-gray-600 text-center">
          Sorry, we couldn’t find what you were looking for.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-700 text-white px-6 py-2 rounded shadow hover:bg-blue-800 transition-colors font-semibold"
        >
          Go home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
