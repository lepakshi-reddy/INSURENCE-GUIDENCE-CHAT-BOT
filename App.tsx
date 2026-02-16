
import React, { useState } from 'react';
import { ChatInterface } from './components/ChatInterface';
import { StageCard } from './components/StageCard';
import { CLAIM_STAGES, CLAIM_TYPES } from './constants';
import { ClaimStage, ClaimType } from './types';

const App: React.FC = () => {
  const [activeStage, setActiveStage] = useState<ClaimStage>(ClaimStage.REGISTRATION);
  const [selectedClaimType, setSelectedClaimType] = useState<ClaimType>(ClaimType.AUTO);

  const handleClaimTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClaimType(e.target.value as ClaimType);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row max-w-[1600px] mx-auto overflow-hidden">
      {/* Sidebar - Educational Dashboard */}
      <aside className="lg:w-[400px] xl:w-[450px] p-6 lg:p-10 flex flex-col bg-slate-50 border-r border-slate-200 overflow-y-auto custom-scrollbar">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">ClaimGuide AI</h1>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Navigating insurance claims doesn't have to be confusing. Explore each stage of our standard workflow to understand what happens next.
          </p>
        </header>

        <section className="flex-1 space-y-8">
          {/* Claim Lifecycle Section */}
          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">The Claim Lifecycle</h2>
            <div className="grid grid-cols-2 gap-4">
              {(Object.keys(CLAIM_STAGES) as ClaimStage[]).map((stageKey) => (
                <StageCard 
                  key={stageKey}
                  stage={CLAIM_STAGES[stageKey]}
                  isActive={activeStage === stageKey}
                  onClick={() => setActiveStage(stageKey)}
                />
              ))}
            </div>

            <div className="mt-4 p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm">
                <span className="text-blue-500">{CLAIM_STAGES[activeStage].icon}</span>
                {CLAIM_STAGES[activeStage].title} Steps
              </h3>
              <ul className="space-y-2">
                {CLAIM_STAGES[activeStage].keySteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-slate-600">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[9px] font-bold mt-0.5 flex-shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Claim Documentation Section */}
          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Required Documents</h2>
            
            <div className="mb-4">
              <label htmlFor="claim-type-select" className="block text-[10px] font-bold text-slate-500 uppercase mb-2 ml-1">
                Select Claim Category
              </label>
              <div className="relative">
                <select
                  id="claim-type-select"
                  value={selectedClaimType}
                  onChange={handleClaimTypeChange}
                  className="w-full bg-white border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-3 appearance-none cursor-pointer shadow-sm hover:border-slate-300 transition-colors"
                >
                  {(Object.keys(CLAIM_TYPES) as ClaimType[]).map((typeKey) => (
                    <option key={typeKey} value={typeKey}>
                      {CLAIM_TYPES[typeKey].icon} {CLAIM_TYPES[typeKey].title}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-600 text-white rounded-2xl shadow-md transition-all">
              <h3 className="font-bold mb-3 flex items-center gap-2 text-sm">
                <span className="bg-white/20 p-1.5 rounded-lg">{CLAIM_TYPES[selectedClaimType].icon}</span>
                Standard Required Files
              </h3>
              <ul className="space-y-2.5">
                {CLAIM_TYPES[selectedClaimType].documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0 text-blue-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-blue-500/50">
                <p className="text-[10px] text-blue-100 leading-relaxed italic">
                  Note: These represent general industry standards for {CLAIM_TYPES[selectedClaimType].title.toLowerCase()}s. Your insurer may require additional documentation based on the specific incident details.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 pt-6 border-t border-slate-200 text-slate-400">
          <div className="flex gap-4 mb-4">
            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs flex-1 text-center">
              <p className="text-[10px] font-bold uppercase mb-1">Response Time</p>
              <p className="text-slate-800 font-bold tracking-tight">&lt; 1 sec</p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-xs flex-1 text-center">
              <p className="text-[10px] font-bold uppercase mb-1">Model</p>
              <p className="text-slate-800 font-bold tracking-tight">Gemini Flash</p>
            </div>
          </div>
          <p className="text-[10px] leading-relaxed">
            &copy; 2024 ClaimGuide AI. This interface is for informational purposes only and does not constitute a legal contract or policy agreement.
          </p>
        </footer>
      </aside>

      {/* Main Content - Chat Area */}
      <main className="flex-1 h-screen flex flex-col p-4 lg:p-8 bg-slate-100">
        <ChatInterface />
      </main>
    </div>
  );
};

export default App;
