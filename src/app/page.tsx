import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8 gap-8 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Create Your Custom Storage!</h1>
        <p className="text-lg text-gray-600">Design, customize, and order your perfect Gridfinity setup.</p>
      </header>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/canvas" className="rounded-lg bg-blue-600 text-white px-6 py-3 font-semibold text-lg shadow hover:bg-blue-700 transition">Start Designing</Link>
        <Link href="/checkout" className="rounded-lg bg-gray-200 text-gray-800 px-6 py-3 font-semibold text-lg shadow hover:bg-gray-300 transition">Checkout</Link>
      </div>
      <section className="mt-10 max-w-xl text-center">
        <details className="bg-white rounded-lg shadow p-4 cursor-pointer">
          <summary className="font-semibold text-blue-700">What is Gridfinity?</summary>
          <p className="mt-2 text-gray-700">Gridfinity is a modular storage system for makers, using a 42mm grid of baseplates and bins. <a href="https://makerworld.com/en/models/47599-ultimate-gridfinity-bins-collection-parametric" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Learn more on MakerWorld</a>.</p>
        </details>
      </section>
    </div>
  );
}
