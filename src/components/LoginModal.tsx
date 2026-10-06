import React, { useState } from 'react';
import { X, LogIn, User, Building, ShieldCheck } from 'lucide-react';
import { ActsLogo } from './ActsLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (userName: string, userRole: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [role, setRole] = useState<'student' | 'tpo'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide your registered email/roll number and password.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const name = role === 'student' ? 'Soumya Parida (GIFT)' : 'Training & Placement Cell (TPO)';
      onLoginSuccess(name, role);
      onClose();
    }, 600);
  };

  const handleQuickDemo = (demoType: 'student' | 'tpo') => {
    setRole(demoType);
    if (demoType === 'student') {
      setEmail('soumya.parida2022@gift.edu.in');
      setPassword('apogee2026');
    } else {
      setEmail('tpo.placement@gift.edu.in');
      setPassword('tpoAdmin2026');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo at top */}
        <div className="mb-4">
          <ActsLogo variant="light" size="md" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
          ACTS Unified Learning Portal
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          Access your personal test series, day-wise study schedule, and campus placement drives.
        </p>

        {/* Segmented Persona Tabs */}
        <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200 mb-5 text-xs">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
              role === 'student'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            Student / Trainee
          </button>
          <button
            type="button"
            onClick={() => setRole('tpo')}
            className={`flex-1 py-2 px-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
              role === 'tpo'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            College TPO / Faculty
          </button>
        </div>

        {error && (
          <div className="mb-4 p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {role === 'student' ? 'College Email / Student Roll Number' : 'Institutional Email'}
            </label>
            <input
              type="text"
              required
              placeholder={role === 'student' ? 'e.g. soumya.parida2022@gift.edu.in' : 'e.g. tpo@college.edu.in'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-semibold text-slate-700">Password</label>
              <button
                type="button"
                className="text-[11px] text-blue-600 hover:underline cursor-pointer font-medium"
                onClick={() => alert('Password reset link sent to your registered institutional email.')}
              >
                Forgot password?
              </button>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <LogIn className="w-4 h-4" />
            <span>{isSubmitting ? 'Authenticating...' : 'Sign In to Portal'}</span>
          </button>
        </form>

        {/* 1-Click Demo Login */}
        <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500">
          <div className="text-[11px] text-slate-400 mb-2 font-medium">Instant Demo Autofill:</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo('student')}
              className="flex-1 py-1.5 px-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded text-[11px] text-slate-700 hover:text-blue-700 transition-colors cursor-pointer font-medium"
            >
              Autofill Student Demo
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo('tpo')}
              className="flex-1 py-1.5 px-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded text-[11px] text-slate-700 hover:text-blue-700 transition-colors cursor-pointer font-medium"
            >
              Autofill TPO Demo
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>256-Bit Encrypted Campus Authentication</span>
        </div>
      </div>
    </div>
  );
};
