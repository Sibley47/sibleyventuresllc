

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050503] px-6 text-white">
      <div className="max-w-xl text-center rounded-2xl border border-[#d4af37]/40 bg-[#f8f5ec] text-[#12110c] p-8 shadow-2xl">
        <h1 className="text-3xl font-black">Thank You</h1>

        <p className="mt-4 text-lg">
          Your request has been submitted successfully.
        </p>

        <p className="mt-2 text-gray-600">
          Sibley Ventures LLC will reach out to you shortly.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-md bg-[#d4af37] px-6 py-3 font-bold text-black hover:bg-[#f3d675]"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}