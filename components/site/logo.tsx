import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/star-city-logo.jpeg"
      alt="Star City Douala Bonamoussadi logo"
      width={150}
      height={104}
      priority
      className={`h-16 w-auto object-contain ${className}`}
    />
  )
}
