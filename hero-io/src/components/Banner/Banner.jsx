import heroImg from '../../assets/hero.png';

const Banner = () => {
  return (
    <section className="bg-gray-50 pt-16 pb-0 px-4">
      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
          We Build{' '}
          <span className="text-[#7C3AED]">Productive</span>
          {' '}Apps
        </h1>

        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">

          {/* Google Play badge */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.4C.19 1.74 0 2.28 0 2.98v18.04c0 .7.19 1.24.51 1.58l.08.08 10.1-10.1v-.24L.58 1.32.5 1.4zM20.49 10.5l-2.72-1.57-3.04 3.04 3.04 3.04 2.74-1.58c.78-.45.78-1.48-.02-1.93zM4.17.24L16.77 7.5l-2.72 2.72L3.18.45C3.48.01 3.87-.1 4.17.24z" />
            </svg>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-gray-300">Get it on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>

          {/* App Store badge */}
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left leading-tight">
              <p className="text-[10px] text-gray-300">Download on the</p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>

        </div>

        <img
          src={heroImg}
          alt="App Preview"
          className="w-full max-w-sm mx-auto object-contain drop-shadow-xl block"
        />

      </div>
    </section>
  );
};

export default Banner;
