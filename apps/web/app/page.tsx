import { ArrowRight, BarChart3, BriefcaseBusiness, CalendarClock, CheckCircle2, Mail, Search, Settings, Sparkles, TrendingUp, Users } from 'lucide-react';
import { dashboardMetrics, deals, pipelineStages, stageColors } from '@crm/shared';

const statCards = dashboardMetrics;

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

export default function Page() {
  const pipelineMap = pipelineStages.reduce<Record<string, typeof deals>>((acc, stage) => {
    acc[stage.key] = deals.filter((deal) => deal.stage === stage.key);
    return acc;
  }, {});

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-[1600px] px-4 py-6">
        <header className="mb-8 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Workspace</p>
              <h1 className="text-xl font-semibold">Northstar Sales</h1>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2 text-violet-300"><Sparkles className="h-4 w-4" /> Dashboard</span>
              <span className="flex items-center gap-2"><Users className="h-4 w-4" /> Contacts</span>
              <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Pipeline</span>
              <span className="flex items-center gap-2"><CalendarClock className="h-4 w-4" /> Activities</span>
            </nav>
            <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300">
              <Search className="h-4 w-4 text-slate-400" />
              Search deals, contacts...
            </div>
          </div>

          <button className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400">
            New deal
          </button>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
                <span>{metric.label}</span>
                <span className={`rounded-full px-2 py-1 text-xs ${metric.trend === 'up' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
                  {metric.change}
                </span>
              </div>
              <div className="mb-1 text-3xl font-semibold text-white">{metric.value}</div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                {metric.trend === 'up' ? <TrendingUp className="h-3.5 w-3.5 text-emerald-300" /> : <BarChart3 className="h-3.5 w-3.5 text-rose-300" />}
                vs last month
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8 grid gap-6 xl:grid-cols-[1.5fr_0.75fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Sales pipeline</p>
                <h2 className="mt-1 text-2xl font-semibold">Revenue funnel</h2>
              </div>
              <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-200">
                Export
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 xl:grid-cols-6">
              {pipelineStages.map((stage) => (
                <div key={stage.key} className="rounded-2xl border border-slate-800 bg-slate-950 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.12em] text-slate-400">{stage.label}</span>
                    <span className="rounded-full px-2 py-1 text-[10px] font-medium" style={{ backgroundColor: `${stageColors[stage.key]}22`, color: stageColors[stage.key] }}>
                      {pipelineMap[stage.key]?.length ?? 0}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {(pipelineMap[stage.key] ?? []).map((deal) => (
                      <div key={deal.id} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm font-medium text-white">{deal.company}</span>
                          <span className="text-xs text-slate-400">{deal.id}</span>
                        </div>
                        <div className="mb-2 text-xs text-slate-400">{deal.contact}</div>
                        <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                          <span>{deal.owner}</span>
                          <span>{deal.priority}</span>
                        </div>
                        <div className="text-lg font-semibold text-violet-300">{formatCurrency(deal.amount)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Quick actions</p>
              <div className="space-y-3">
                <button className="flex w-full items-center justify-between rounded-xl bg-slate-800 px-3 py-3 text-left text-sm text-slate-200">
                  <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-violet-300" /> Sequence email</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </button>
                <button className="flex w-full items-center justify-between rounded-xl bg-slate-800 px-3 py-3 text-left text-sm text-slate-200">
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> Log activity</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </button>
                <button className="flex w-full items-center justify-between rounded-xl bg-slate-800 px-3 py-3 text-left text-sm text-slate-200">
                  <span className="flex items-center gap-2"><Settings className="h-4 w-4 text-sky-300" /> Workflow rules</span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-slate-400">Activity feed</p>
              <div className="space-y-4 text-sm text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div className="font-medium text-white">Alicia Chen replied</div>
                  <div className="mt-1 text-slate-400">12 minutes ago · Email thread</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div className="font-medium text-white">Proposal sent to SignalGrid</div>
                  <div className="mt-1 text-slate-400">1 hour ago · Deal update</div>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                  <div className="font-medium text-white">New lead from SummitWorks</div>
                  <div className="mt-1 text-slate-400">Today · Website form</div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
