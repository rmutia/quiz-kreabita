import React, { useState } from 'react';
import { Rocket, Cpu, Play } from 'lucide-react';
import Button from './Button';

interface StartScreenProps {
  onStart: (name: string) => void;
}

// Bita Character Component
const BitaCharacter = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" className="animate-float">
    {/* Shadow */}
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="#000" opacity="0.1" />
    
    {/* Body/Screen Bezel */}
    <rect x="20" y="20" width="160" height="120" rx="20" fill="#4FC3F7" stroke="#29B6F6" strokeWidth="4" />
    
    {/* Screen */}
    <rect x="35" y="35" width="130" height="90" rx="10" fill="#FFF9C4" />
    
    {/* Face */}
    {/* Eyes */}
    <circle cx="70" cy="70" r="10" fill="#37474F" />
    <circle cx="130" cy="70" r="10" fill="#37474F" />
    {/* Shine in eyes */}
    <circle cx="73" cy="67" r="3" fill="white" />
    <circle cx="133" cy="67" r="3" fill="white" />
    
    {/* Cheeks */}
    <circle cx="60" cy="85" r="8" fill="#FF8A65" opacity="0.6" />
    <circle cx="140" cy="85" r="8" fill="#FF8A65" opacity="0.6" />
    
    {/* Mouth */}
    <path d="M 85 85 Q 100 100 115 85" stroke="#37474F" strokeWidth="5" fill="none" strokeLinecap="round" />
    
    {/* Keyboard / Base */}
    <path d="M 30 140 L 170 140 L 180 160 C 180 170 170 180 160 180 L 40 180 C 30 180 20 170 20 160 Z" fill="#0288D1" />
    
    {/* Keys decoration */}
    <rect x="40" y="150" width="20" height="10" rx="2" fill="#81D4FA" />
    <rect x="65" y="150" width="20" height="10" rx="2" fill="#81D4FA" />
    <rect x="90" y="150" width="20" height="10" rx="2" fill="#81D4FA" />
    <rect x="115" y="150" width="20" height="10" rx="2" fill="#81D4FA" />
    <rect x="140" y="150" width="20" height="10" rx="2" fill="#81D4FA" />
    <rect x="70" y="165" width="60" height="10" rx="2" fill="#FFD54F" />
  </svg>
);

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStart(name);
  };

  return (
    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center relative overflow-hidden border-8 border-white ring-4 ring-brand-blue/30">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-yellow rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-blue rounded-full translate-x-1/3 translate-y-1/3 opacity-20 blur-3xl" />
      
      <div className="relative z-10 flex flex-col items-center">
        
        <div className="mb-6 transform hover:scale-110 transition-transform duration-500 cursor-pointer">
          <BitaCharacter />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-2 tracking-tight drop-shadow-sm">
          Kuis Petualangan
        </h1>
        <h2 className="text-3xl md:text-4xl font-black text-brand-blue mb-6 tracking-wide drop-shadow-sm">
           DUNIA KOMPUTER
        </h2>
        
        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto leading-relaxed font-medium">
          Halo! Aku <span className="text-brand-blue font-bold">Bita</span>. Ayo kita main tebak-tebakan seru tentang komputer!
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col items-center gap-6">
          <div className="w-full relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-2xl">👋</span>
            </div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tulis namamu disini..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-gray-50 border-4 border-gray-100 focus:border-brand-blue focus:bg-white outline-none text-xl font-bold text-brand-dark transition-all placeholder:font-medium placeholder:text-gray-300 shadow-inner"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full py-5 text-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 bg-gradient-to-r from-brand-blue to-cyan-400"
          >
            <Play fill="currentColor" size={28} />
            Mulai Main!
          </Button>
        </form>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-400 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"><Cpu size={16} className="text-brand-purple"/> 10 Soal Acak</span>
            <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"><Rocket size={16} className="text-brand-orange"/> Edisi Kreabita</span>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;