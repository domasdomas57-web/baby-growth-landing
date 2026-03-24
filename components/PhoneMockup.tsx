import type { ReactNode } from "react";

type PhoneMockupProps = {
  videoSrc: string;
  poster?: string;
  className?: string;
  children?: ReactNode;
};

export default function PhoneMockup({ videoSrc, poster, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute left-1/2 top-[96%] -z-10 h-10 w-[72%] -translate-x-1/2 rounded-full bg-black/35 blur-xl sm:h-12 sm:w-[70%]" />

      <div className="phone-float">
        <div className="transform-gpu transition-transform duration-300 ease-out [transform-style:preserve-3d] [transform:perspective(1000px)_rotateY(-7deg)_rotateX(4deg)] sm:[transform:perspective(1000px)_rotateY(-13deg)_rotateX(7deg)] lg:[transform:perspective(1000px)_rotateY(-16deg)_rotateX(8deg)] hover:[transform:perspective(1000px)_rotateY(-9deg)_rotateX(4deg)_scale(1.04)]">
          <div className="relative rounded-[40px] bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-800 p-[2px] shadow-[0_44px_95px_-40px_rgba(4,7,35,0.9),0_22px_48px_-30px_rgba(4,7,35,0.8)]">
            <div className="pointer-events-none absolute inset-y-10 right-[-7px] z-30 w-[7px] rounded-r-[9px] bg-gradient-to-b from-zinc-200/60 via-zinc-500/80 to-zinc-800/90 shadow-[2px_0_8px_rgba(0,0,0,0.35)]" />

            <div className="pointer-events-none absolute bottom-20 left-[-4px] z-30 h-14 w-[3px] rounded-r-full bg-zinc-500/90 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
            <div className="pointer-events-none absolute left-[-4px] top-24 z-30 h-10 w-[3px] rounded-r-full bg-zinc-500/90 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
            <div className="pointer-events-none absolute left-[-4px] top-38 z-30 h-16 w-[3px] rounded-r-full bg-zinc-500/90 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
            <div className="pointer-events-none absolute right-[-4px] top-34 z-30 h-20 w-[3px] rounded-l-full bg-zinc-500/90 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />

            <div className="relative rounded-[38px] bg-[#0b0b0d] p-[7px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-12px_22px_rgba(0,0,0,0.45)]">
              <div className="absolute left-1/2 top-0 z-20 h-6 w-[104px] -translate-x-1/2 rounded-b-[16px] bg-black" />
              <div className="absolute left-1/2 top-[7px] z-20 h-[4px] w-10 -translate-x-1/2 rounded-full bg-white/20" />

              <div className="relative overflow-hidden rounded-[32px] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                <video
                  src={videoSrc}
                  className="h-[440px] w-[208px] object-cover sm:h-[560px] sm:w-[262px] lg:h-[620px] lg:w-[290px]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  poster={poster}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/6 to-transparent" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),inset_0_-20px_40px_rgba(0,0,0,0.2)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
