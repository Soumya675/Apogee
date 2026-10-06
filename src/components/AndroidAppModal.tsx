import React from 'react';
import { X, Smartphone, Download, Star, ShieldCheck, QrCode } from 'lucide-react';

interface AndroidAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AndroidAppModal: React.FC<AndroidAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadApk = () => {
    const blob = new Blob(
      [
        'Apogee CTS - Jobskul Android Mobile Learning App APK.\nVisit https://apogeects.com for live credentials.',
      ],
      { type: 'application/vnd.android.package-archive' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ApogeeCTS_Jobskul_v4.2.apk';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 mb-2">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile Learning Everywhere</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          ApogeeCTS &amp; Jobskul Android App
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          Access daily speed math drills, mock aptitude quizzes, video lectures, and live campus placement drive alerts directly on your mobile device.
        </p>

        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 mb-6 flex flex-col sm:flex-row items-center gap-6">
          {/* Mock QR Code */}
          <div className="w-28 h-28 bg-white p-2 rounded-xl flex flex-col items-center justify-center shrink-0 border border-slate-200 shadow-sm">
            <QrCode className="w-20 h-20 text-slate-900" />
            <span className="text-[9px] font-bold text-slate-700 mt-1 uppercase font-mono">
              Scan to Install
            </span>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 text-amber-500 font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
              <span className="text-slate-900 text-xs ml-1 font-mono font-bold">4.8 / 5.0 (28K+ Reviews)</span>
            </div>
            <p className="text-slate-500 text-xs font-medium">
              Over 100,000+ active student downloads across 500+ Indian engineering colleges.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Safe by Google Play Protect</span>
            </div>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-slate-700 font-medium">
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
            ✓ 15-Min Daily Aptitude Sprint
          </div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
            ✓ Push Alerts for Campus Drives
          </div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
            ✓ Offline Video Lectures
          </div>
          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
            ✓ Instant All-India Rank (AIR)
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadApk}
            className="flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Official APK (v4.2)</span>
          </button>
          <button
            onClick={() => {
              alert('Opening Google Play Store page for ApogeeCTS Jobskul Learning App.');
            }}
            className="py-3 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Google Play
          </button>
        </div>
      </div>
    </div>
  );
};
