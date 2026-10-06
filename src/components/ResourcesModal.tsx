import React, { useState } from 'react';
import { X, Download, Check, BookMarked } from 'lucide-react';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESOURCES = [
  {
    id: 'res-tcs',
    title: 'TCS NQT 2026 Ultimate Preparation Handbook',
    category: 'Company Papers',
    format: 'PDF · 84 Pages',
    downloads: '24,500+',
    desc: 'Contains 150+ real aptitude, reasoning, and advanced coding problems with test cases.',
  },
  {
    id: 'res-speed-math',
    title: 'Mental Arithmetic & Speed Math Formula Blueprint',
    category: 'Aptitude Mastery',
    format: 'PDF · 42 Pages',
    downloads: '41,200+',
    desc: 'Authored by World Record Holder Shashank D Sagar. 50 shortcut rules for percentages, ratios, and time-work.',
  },
  {
    id: 'res-tech-interview',
    title: 'Top 200 Technical Interview Questions (OOPs, DBMS, OS & CN)',
    category: 'Technical Core',
    format: 'PDF · 112 Pages',
    downloads: '38,900+',
    desc: 'The essential core computer science handbook asked across Cognizant, Capgemini, and Infosys interviews.',
  },
  {
    id: 'res-genc-pseudo',
    title: 'Cognizant GenC Next Pseudo-Code & Automata Question Bank',
    category: 'Company Papers',
    format: 'PDF · 60 Pages',
    downloads: '19,300+',
    desc: 'Bitwise logic, recursion traces, loop invariant exercises, and data structures debugging.',
  },
];

export const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleDownload = (id: string, title: string) => {
    setDownloadedIds((prev) => [...prev, id]);
    const blob = new Blob(
      [`Apogee CTS Placement Resource: ${title}\nVisit https://apogeects.com for full curriculum & training.`],
      { type: 'text/plain' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 mb-2">
          <BookMarked className="w-4 h-4" />
          <span>ACTS Open Learning Library</span>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Placement E-Books, Formula Sheets &amp; Papers
        </h3>
        <p className="text-xs text-slate-500 mb-6">
          High-yield preparation resources curated by ACTS master trainers, accessible to all campus candidates.
        </p>

        <div className="space-y-3.5">
          {RESOURCES.map((res) => {
            const isDownloaded = downloadedIds.includes(res.id);
            return (
              <div
                key={res.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-blue-400 hover:bg-white hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono mb-1">
                    <span className="text-blue-700 font-bold">{res.category}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500 font-medium">{res.format}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-emerald-700 font-semibold">{res.downloads} Downloads</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{res.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{res.desc}</p>
                </div>

                <button
                  onClick={() => handleDownload(res.id, res.title)}
                  className={`py-2 px-3.5 text-xs font-bold rounded-lg flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer shadow-xs ${
                    isDownloaded
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isDownloaded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Downloaded
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      Download Guide
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
