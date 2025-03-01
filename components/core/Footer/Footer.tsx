import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row gap-2 text-xs text-gray-500 p-4 justify-between">
      <div>* I am eligible to work without the need for sponsorship.</div>

      <div className="flex items-center gap-2">
        <Image src="/nodejs.svg" alt="flag" width={24} height={24} />
        <Image src="/ts.svg" alt="flag" width={24} height={24} />
        <Image src="/js.svg" alt="flag" width={24} height={24} />
        <Image src="/nextjs.svg" alt="flag" width={24} height={24} />
        <Image src="/nestjs.svg" alt="flag" width={24} height={24} />
        <Image src="/react.svg" alt="flag" width={24} height={24} />
        <Image src="/kafka.svg" alt="flag" width={24} height={24} />
        <Image src="/aws.svg" alt="flag" width={24} height={24} />
        <Image src="/postgresql.svg" alt="flag" width={24} height={24} />
      </div>
    </div>
  );
}
