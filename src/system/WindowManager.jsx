import React, { lazy, Suspense, Component } from 'react';
import { useOS } from './OSContext';
import Window from './Window';
import { AlertCircle, RefreshCcw } from 'lucide-react';

/**
 * KERNEL PANIC ERROR BOUNDARY
 * Mimics a professional OS crash screen within an app window.
 */
class KernelPanic extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("KERNEL PANIC DETECTED:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full bg-[#1c1c1e] text-white p-8 text-center select-none overflow-hidden">
           <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <AlertCircle size={32} className="text-red-500" />
           </div>
           
           <h2 className="text-lg font-bold mb-2 uppercase tracking-widest text-red-400">Kernel Panic</h2>
           <p className="text-[11px] text-gray-400 leading-relaxed max-w-[280px] font-mono mb-8 opacity-80">
             The application encountered a fatal exception. <br/>
             <span className="text-[9px] uppercase mt-2 block tracking-tighter opacity-50">Error: {this.state.error?.message || "Segmentation fault"}</span>
           </p>

           <div className="h-px w-32 bg-white/5 mb-8" />

           <button 
             onClick={() => window.location.reload()}
             className="flex items-center gap-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
           >
             <RefreshCcw size={14} />
             Restart System
           </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy load existing components
const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Projects = lazy(() => import('../components/Projects'));
const Blog = lazy(() => import('../components/Blog'));
const Contact = lazy(() => import('../components/Contact'));
const Terminal = lazy(() => import('./Terminal'));
const GameLauncher = lazy(() => import('./games/GameLauncher'));
const Tetris = lazy(() => import('./games/Tetris'));
const Snake = lazy(() => import('./games/Snake'));
const TicTacToe = lazy(() => import('./games/TicTacToe'));
const AssistantApp = lazy(() => import('./ai/AssistantApp'));
const SettingsApp = lazy(() => import('./SettingsApp'));

const COMPONENT_MAP = {
  About,
  Skills,
  Projects,
  Blog,
  Contact,
  Terminal,
  GameLauncher,
  Tetris,
  Snake,
  TicTacToe,
  AssistantApp,
  Settings: SettingsApp,
};

const WindowManager = () => {
  const { windows, activeWindowId, snapPreview } = useOS();

  return (
    <div className="os-window-manager">
      {windows.map(win => {
        const Component = COMPONENT_MAP[win.component];
        if (!Component) return null;

        return (
          <Window key={win.id} window={win} isActive={win.id === activeWindowId}>
            <KernelPanic appId={win.appId}>
              <Suspense fallback={
                <div className="flex items-center justify-center h-full text-gray-500 text-xs font-bold uppercase tracking-widest animate-pulse">
                  Loading Application...
                </div>
              }>
                <Component />
              </Suspense>
            </KernelPanic>
          </Window>
        );
      })}

      {/* Window Snap Preview */}
      {snapPreview && (
        <div 
          className="os-snap-preview"
          style={{
            left: snapPreview.type === 'RIGHT' ? '50%' : 0,
            top: 0,
            width: snapPreview.type === 'TOP' ? '100%' : '50%',
            height: 'calc(100vh - 32px)'
          }}
        />
      )}
    </div>
  );
};

export default WindowManager;
