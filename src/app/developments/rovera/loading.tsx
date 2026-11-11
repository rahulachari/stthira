import Image from "next/image";

export default function RoveraLoading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none">
      <div className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] max-w-[85vw] aspect-[551/308]">
        <Image
          src="/images/rovera-loading.gif"
          alt="ROVERA"
          fill
          priority
          unoptimized
          className="object-contain"
        />
      </div>
    </div>
  );
}
