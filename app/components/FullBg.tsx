import React from "react";

export default function FullBg({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt="Background"
      className="fixed inset-0 w-full h-full object-cover object-center z-0"
      style={{ minHeight: '100vh', minWidth: '100vw' }}
    />
  );
}
