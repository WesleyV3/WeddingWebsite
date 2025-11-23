import React from "react";

interface GoogleMapProps {
  query: string;
  label?: string;
}

export default function GoogleMap({ query, label }: GoogleMapProps) {
  return (
    <div className="mb-6">
      <iframe
        title={label || "Map"}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '1rem', width: '100%' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-2xl shadow-lg"
      ></iframe>
      {label && <div className="text-xs text-gray-500 mt-1">{label}</div>}
    </div>
  );
}
