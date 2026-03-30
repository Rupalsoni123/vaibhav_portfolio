import React from 'react';
import { useOS } from './OSContext';

const SettingsApp = () => {
  const { settings, updateSetting } = useOS();

  const walls = [
    { id: 'ubuntu', label: 'Classic Ubuntu', colors: 'linear-gradient(150deg, #2c001e 0%, #401030 40%, #502020 80%, #2c001e 100%)' },
    { id: 'dark', label: 'Midnight', colors: 'linear-gradient(135deg, #111 0%, #222 100%)' },
    { id: 'indigo', label: 'Indigo Night', colors: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' },
    { id: 'glass', label: 'Frosted Glass', colors: 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)' }
  ];

  return (
    <div className="flex flex-col h-full bg-[#1c1c1e] text-gray-100 font-sans select-none overflow-hidden rounded-b-lg p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-100 tracking-tight mb-1">Settings</h2>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global Configuration</p>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto pr-2 custom-scrollbar">
        {/* WALLPAPER SECTION */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Wallpaper & Backdrop</h3>
          <div className="grid grid-cols-2 gap-3">
            {walls.map(w => (
              <button 
                key={w.id}
                onClick={() => updateSetting('wallpaper', w.id)}
                className={`group relative h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  settings.wallpaper === w.id ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-white/5 hover:border-white/20'
                }`}
              >
                <div className="absolute inset-0" style={{ background: w.colors }} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-[10px] font-bold uppercase tracking-tighter">Apply</span>
                </div>
                {settings.wallpaper === w.id && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* SYSTEM SWITCHES */}
        <div className="space-y-3">
          <h3 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">User Experience</h3>
          <div className="bg-[#1a1a1b] rounded-xl border border-white/5 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-semibold">Native Animations</span>
                <span className="text-[9px] text-gray-500">Enable system-wide transitions</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={settings.animations} onChange={() => updateSetting('animations', !settings.animations)} />
                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-semibold">Sound Effects</span>
                <span className="text-[9px] text-gray-500">Audio feedback on interaction</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked={settings.sounds} onChange={() => updateSetting('sounds', !settings.sounds)} />
                <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* SYSTEM INFO */}
        <div className="pt-4 border-t border-white/5">
           <div className="flex items-center gap-3 opacity-40">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold">V</div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">VaibhavOS 3.0</span>
                <span className="text-[10px]">Production Stable Build</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsApp;
