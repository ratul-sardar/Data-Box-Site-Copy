import React, { useState } from 'react';
import { menuData } from './data';
import { ArrowRight, Sparkles, DatabaseZap } from 'lucide-react';

// Reusable styling components
const Badge = ({ text }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
    {text}
  </span>
);

export function ProductPanel() {
  const { items } = menuData.product;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left side: Grid of features */}
      <div className="flex-[3]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a key={idx} href="#" className="block p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group group-hover:bg-gray-50 flex flex-col h-full bg-white">
                <div className="flex items-start gap-4 mb-2">
                  <div className="text-gray-400 group-hover:text-brand transition-colors">
                    <Icon strokeWidth={1.5} size={22} />
                  </div>
                  <div className="flex flex-col gap-1 w-full relative -top-1">
                    <h3 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                      {item.title}
                      {item.badge && <Badge text={item.badge} />}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mt-2 pl-9">{item.description}</p>
              </a>
            );
          })}
        </div>
      </div>

      {/* Right side: Promo */}
      <div className="flex-1 bg-purple-50 rounded-xl p-6 border border-purple-100 flex flex-col">
        <Badge text="New" />
        <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2 flex items-center gap-2">
          Meet Genie, your AI Analyst
          <span className="text-purple-600"><Sparkles size={24} /></span>
        </h3>
        <p className="text-sm text-gray-600 mb-6 flex-1">
          Ask questions about your performance and get clear, contextual answers in seconds so you can make decisions faster.
        </p>

        <div className="mb-6 space-y-3">
          <div className="text-xs text-gray-500"><strong className="text-gray-700">BUILD</strong> Metrics, Dashboards, Datasets</div>
          <div className="text-xs text-gray-500"><strong className="text-gray-700">ANALYZE</strong> Data, Trends, Performance</div>
          <div className="text-xs text-gray-500"><strong className="text-gray-700">EXPLORE</strong> Insights, Anomalies</div>
        </div>

        <a href="#" className="flex justify-center items-center gap-2 w-full py-2.5 px-4 bg-white border border-gray-200 rounded-lg text-brand font-medium text-sm hover:border-brand transition-colors">
          Learn more <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

export function SolutionsPanel() {
  const { industry, role, problems, whyDatabox } = menuData.solutions;
  const [activeTab, setActiveTab] = useState('who-were-for');

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Sidebar */}
      <div className="w-full lg:w-[200px] flex lg:flex-col gap-2 shrink-0">
        <button 
          onClick={() => setActiveTab('who-were-for')}
          className={`text-left px-4 py-3 rounded-lg font-medium text-sm flex justify-between items-center group transition-colors ${activeTab === 'who-were-for' ? 'bg-gray-50 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
          Who We're For
          <ArrowRight size={16} className={`transition-colors ${activeTab === 'who-were-for' ? 'text-gray-400' : 'opacity-0 group-hover:opacity-100 text-gray-400 group-hover:text-blue-600'}`} />
        </button>
        <button 
          onClick={() => setActiveTab('problems-we-solve')}
          className={`text-left px-4 py-3 rounded-lg font-medium text-sm flex justify-between items-center group transition-colors ${activeTab === 'problems-we-solve' ? 'bg-gray-50 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
          Problems We Solve
          <ArrowRight size={16} className={`transition-colors ${activeTab === 'problems-we-solve' ? 'text-gray-400' : 'opacity-0 group-hover:opacity-100 text-gray-400 group-hover:text-blue-600'}`} />
        </button>
      </div>

      <div className="flex-1 right-content">
        {activeTab === 'who-were-for' ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">BY INDUSTRY</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col h-full">
                      <div className={`h-24 rounded-lg mb-4 flex items-center justify-center ${idx === 0 ? 'bg-blue-50' : 'bg-orange-50'}`}>
                        <Icon size={32} className={idx === 0 ? 'text-brand' : 'text-orange-500'} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs mb-4 flex-1">{item.description}</p>
                      <a href={item.link} className="inline-block mt-auto text-center w-full py-2 px-4 rounded-md border border-gray-200 text-brand text-sm font-medium hover:border-brand transition-colors">
                        Learn more
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-3 border-t lg:border-t-0 lg:border-l border-gray-100 pl-0 lg:pl-8 pt-6 lg:pt-0">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">BY ROLE</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {role.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col h-full">
                      <div className={`h-24 rounded-lg mb-4 flex items-center justify-center bg-indigo-50`}>
                        <Icon size={32} className="text-indigo-600" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs mb-4 flex-1">{item.description}</p>
                      <a href={item.link} className="inline-block mt-auto text-center w-full py-2 px-4 rounded-md border border-gray-200 text-brand text-sm font-medium hover:border-brand transition-colors">
                        Learn more
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 h-full">
            {/* Problems Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-[2.5]">
              {problems.map((problem, idx) => {
                const Icon = problem.icon;
                return (
                  <div key={idx} className="p-5 rounded-lg border border-gray-100 bg-white hover:border-gray-200 transition-colors h-full flex flex-col">
                    <Icon size={20} className={`mb-3 ${problem.color}`} strokeWidth={2} />
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{problem.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{problem.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Why Databox Sidebar */}
            <div className="flex-1 bg-gray-50/50 rounded-xl p-6 border border-gray-100 flex flex-col min-w-[280px]">
              <h3 className="font-semibold text-gray-900 text-[15px] mb-6">Why Databox?</h3>
              <ul className="space-y-[15px] mb-8">
                {whyDatabox.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-start gap-4 text-[13px] text-gray-600">
                      <Icon size={18} className="text-indigo-400 shrink-0 relative top-0.5" strokeWidth={1.5} />
                      <span className="leading-snug">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center justify-center py-2 px-4 bg-white border border-gray-200 rounded-lg text-blue-600 font-medium text-sm hover:border-gray-300 transition-colors">
                  Learn more <ArrowRight size={14} className="ml-1.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function IntegrationsPanel() {
  const { columns } = menuData.integrations;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* 3 Columns */}
      <div className="flex-[3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((col, idx) => {
          const Icon = col.icon;
          return (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 text-sm mb-4 flex items-center gap-2">
                <Icon size={16} className="text-gray-400" />
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-600 hover:text-brand flex items-center gap-2 group">
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                        {/* Placeholder for small brand icons */}
                        <div className="w-3 h-3 bg-gray-300 rounded-full group-hover:bg-brand"></div>
                      </div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              {idx === 0 && (
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <a href="#" className="w-full py-2 px-4 rounded-md border border-gray-200 text-brand text-sm font-medium flex justify-center hover:border-brand transition-colors">
                    See all 130+ Integrations
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Column */}
      <div className="flex-[1] border-t lg:border-t-0 lg:border-l border-gray-100 pl-0 lg:pl-8 pt-6 lg:pt-0 flex flex-col gap-8">
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
            <Sparkles size={16} className="text-gray-400" />
            Build custom integrations
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Build your own custom integration by connecting to any application via API. No coding required.
          </p>
          <a href="#" className="text-sm font-medium text-brand hover:underline flex items-center gap-1">
            Learn more <ArrowRight size={14} />
          </a>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-2 flex items-center gap-2">
            <DatabaseZap size={16} className="text-gray-400" />
            Ingest your data via API
          </h4>
          <p className="text-xs text-gray-500 mb-3">
            Push raw, structured data into Databox from anywhere, and build dashboards, reports and gather insights on top of it.
          </p>
          <a href="#" className="text-sm font-medium text-brand hover:underline flex items-center gap-1">
            Explore Developer Documentation <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ResourcesPanel() {
  const { columns } = menuData.resources;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Columns */}
      <div className="flex-[3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((col, idx) => {
          const Icon = col.icon;
          return (
            <div key={idx}>
              <h4 className="font-semibold text-gray-900 text-sm mb-4 flex items-center gap-2">
                <Icon size={18} className="text-gray-500" strokeWidth={1.5} />
                {col.title}
              </h4>
              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-600 hover:text-brand transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Right Column: Blog Card */}
      <div className="flex-[1] bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col">
        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">LATEST FROM BLOG</h4>
        <div className="rounded-lg overflow-hidden mb-4 bg-gray-200 aspect-[16/9] relative">
          {/* Add a simple placeholder visual for the blog image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 to-purple-800 flex items-center justify-center">
            <Sparkles size={40} className="text-white/20" />
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 text-sm mb-3">
          BI Tools Comparison: A Framework for Revenue Teams Who've Been Burned Before
        </h3>
        <div className="mt-auto flex justify-between items-center pt-4">
          <span className="text-xs text-gray-400">Apr 2</span>
          <a href="#" className="text-sm font-medium text-brand hover:underline flex items-center gap-1">
            Read post <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
