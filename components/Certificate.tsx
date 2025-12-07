import React from 'react';
import { Star } from 'lucide-react';

interface CertificateProps {
  userName: string;
}

const Certificate: React.FC<CertificateProps> = ({ userName }) => {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white p-8 rounded-lg shadow-inner border-4 border-gray-100 max-w-2xl mx-auto relative overflow-hidden">
      {/* Decorative Stars */}
      <Star className="absolute top-8 left-8 text-brand-yellow w-12 h-12 rotate-[-15deg]" fill="currentColor" />
      <Star className="absolute top-12 right-12 text-brand-yellow w-10 h-10 rotate-[15deg]" fill="currentColor" />
      <Star className="absolute bottom-20 left-12 text-brand-blue w-8 h-8 opacity-50" fill="currentColor" />

      <div className="text-center font-sans">
        <p className="text-xl font-bold tracking-wide mb-4">the super very official</p>
        
        {/* Pixel Art Style Title Attempt with CSS Text Shadow or Font */}
        <h1 className="text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 tracking-widest uppercase" style={{ fontFamily: 'monospace' }}>
          COMPUTER
        </h1>
        <h1 className="text-4xl md:text-5xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 tracking-widest uppercase" style={{ fontFamily: 'monospace' }}>
          EXPLORER
        </h1>

        <p className="text-lg text-gray-400 font-light mb-8">award goes to</p>

        <div className="border-4 border-brand-dark rounded-2xl p-6 mb-12 transform -rotate-1 bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark break-words">
            {userName}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
            {/* Badge */}
            <div className="relative">
                <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center relative z-10 animate-bounce-slow">
                    <div className="text-center transform -rotate-12">
                        <div className="font-black text-2xl text-brand-dark">A+</div>
                        <div className="font-bold text-sm leading-tight text-brand-dark">Great<br/>Job!</div>
                    </div>
                </div>
                {/* Sun rays for badge */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-brand-yellow rounded-full z-0 animate-spin-slow opacity-50 blur-sm"></div>
            </div>

            {/* Signature Box */}
            <div className="border-4 border-brand-dark rounded-xl px-8 py-4 relative bg-white w-full md:w-auto">
                 <p className="text-[10px] text-gray-400 mb-1 tracking-[0.2em] text-center">
                    01000010 01101001 01110100 01100001
                 </p>
                 <div className="h-0.5 w-full bg-gray-200 mb-2"></div>
                 <p className="font-bold text-xl text-center text-brand-dark">Bita</p>
            </div>
        </div>

        <p className="mt-8 text-xs text-gray-400">given this {currentDate}</p>
      </div>
    </div>
  );
};

export default Certificate;