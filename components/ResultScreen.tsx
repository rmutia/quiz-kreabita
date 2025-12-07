import React, { useState } from 'react';
import Button from './Button';
import Certificate from './Certificate';
import { RotateCcw, Award, Download, Share2 } from 'lucide-react';
// @ts-ignore
import html2canvas from 'html2canvas';

interface ResultScreenProps {
  score: number;
  userName: string;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, userName, totalQuestions, onRestart }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const count = totalQuestions > 0 ? totalQuestions : 10;
  const percentage = (score / count) * 100;
  const isPass = percentage >= 60; // 60% to pass

  const handleDownload = async () => {
    const element = document.getElementById('certificate-container');
    if (!element) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution
        backgroundColor: null,
      });
      const dataUrl = canvas.toDataURL('image/png');
      
      const link = document.createElement('a');
      link.download = `Sertifikat-Kreabita-${userName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate certificate', error);
      alert('Maaf, gagal menyimpan sertifikat. Coba screenshot manual ya!');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in zoom-in duration-500 pb-10">
      <div className="bg-white rounded-[40px] p-8 md:p-12 text-center shadow-2xl border-b-8 border-gray-100">
        <div className="mb-8">
          {isPass ? (
            <div className="inline-flex p-6 rounded-full bg-green-100 text-green-500 mb-6 animate-bounce">
              <Award size={64} strokeWidth={3} />
            </div>
          ) : (
             <div className="inline-flex p-6 rounded-full bg-orange-100 text-orange-500 mb-6">
              <RotateCcw size={64} strokeWidth={3} />
            </div>
          )}
          
          <h2 className="text-4xl font-black mb-3 text-brand-dark">
            {isPass ? 'Waaah Hebat!' : 'Jangan Menyerah!'}
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Kamu menjawab <span className="inline-block bg-brand-blue text-white px-3 py-1 rounded-lg mx-1 shadow-sm transform -rotate-2">{score}</span> dari {count} soal dengan benar.
          </p>
        </div>

        {isPass ? (
          <div className="mb-10">
            <p className="text-brand-dark font-bold mb-6 flex items-center justify-center gap-2">
                👇 Ini sertifikat keren buat kamu! 👇
            </p>
            {/* Wrapper for capture that preserves styling */}
            <div className="overflow-hidden rounded-xl shadow-lg mb-6 transform transition-transform hover:scale-[1.02] duration-300">
               <div id="certificate-container" className="bg-white">
                 <Certificate userName={userName} />
               </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                    onClick={handleDownload} 
                    variant="success"
                    size="lg" 
                    className="flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    disabled={isDownloading}
                >
                    {isDownloading ? 'Menyimpan...' : (
                        <>
                            <Download size={24} />
                            Simpan Sertifikat
                        </>
                    )}
                </Button>
            </div>
          </div>
        ) : (
          <div className="bg-orange-50 p-8 rounded-3xl border-2 border-orange-100 mb-10 max-w-2xl mx-auto">
            <p className="text-orange-800 text-lg font-bold">
              "Tidak apa-apa! Belajar komputer memang butuh latihan. <br/>
              Ayo baca bukunya lagi dan mainkan kuisnya. Bita tunggu ya!"
            </p>
          </div>
        )}

        <div className="pt-6 border-t border-gray-100">
            <Button onClick={onRestart} size="lg" className="w-full md:w-auto min-w-[240px] gap-3 flex items-center justify-center mx-auto text-lg py-4 bg-gray-100 text-gray-600 hover:bg-gray-200 border-transparent shadow-none">
            <RotateCcw size={24} />
            Main Lagi
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;