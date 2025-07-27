'use client'
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Unicode Symbol</h2>
          <div className="text-8xl text-gradient font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            ∞
          </div>
    </main>
  );
}
