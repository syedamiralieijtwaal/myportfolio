import Image from "next/image";

export default function Hero() {
  return (
    <section className="pb-12 pt-20">
      <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">Syed Amir Ali</h1>
      <p className="mt-2 text-lg font-medium text-accent">
        Product Development Engineer @ HBL
      </p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
        React Native Specialist &amp; Full Stack Engineer focused on rescuing and modernizing
        legacy mobile apps. Instead of costly rewrites, I upgrade, stabilize, and optimize
        existing codebases — helping companies save hundreds of thousands in rebuild costs.
        15+ apps delivered across fintech, e-commerce, social, and healthcare.
      </p>

      {/* Social Links */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
        <SocialLink href="mailto:syedamirali14@gmail.com" label="Email">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/syedamirali14" label="LinkedIn">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </SocialLink>
        <SocialLink href="https://stackoverflow.com/users/11834626/syed-amir-ali" label="Stack Overflow">
          <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-3.99l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l-1.43 1.07 5.36 7.21 1.43-1.07L14.64 2zM6.59 18.41v-1.8h9.02v1.8H6.59z" />
        </SocialLink>
        <SocialLink href="tel:+923102151412" label="+92 310 2151412">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </SocialLink>
      </div>

      {/* Download Resume */}
      <a
        href="/Syed Amir Ali - CV.pdf"
        download
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M5 20h14v-2H5v2zm7-18v12.17l3.59-3.58L17 12l-5 5-5-5 1.41-1.41L12 14.17V2z" />
        </svg>
        Download Resume
      </a>
        </div>
        <Image
          src="/AmirDP.jpeg"
          alt="Syed Amir Ali"
          width={180}
          height={180}
          className="rounded-full border-4 border-accent/30 shadow-lg"
          priority
        />
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
    >
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        {children}
      </svg>
      {label}
    </a>
  );
}
