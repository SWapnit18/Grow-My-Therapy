import Image from "next/image";

export default function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
    >
      <rect width="32" height="32" rx="8" fill="#3B5249" />
      <path
        d="M8 22V10L16 17L24 10V22"
        stroke="#FAF8F5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
