export const stageColors = {
  'lead': '#7c3aed',
  'qualified': '#1d4ed8',
  'proposal': '#f59e0b',
  'negotiation': '#f97316',
  'won': '#10b981',
  'lost': '#ef4444'
} as const;

export type DealStage = keyof typeof stageColors;

export type Deal = {
  id: string;
  company: string;
  contact: string;
  amount: number;
  stage: DealStage;
  owner: string;
  priority: 'High' | 'Medium' | 'Low';
  expectedClose: string;
  leadSource: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
};

export const deals: Deal[] = [
  {
    id: 'DEAL-1042',
    company: 'Northstar Labs',
    contact: 'Alicia Chen',
    amount: 24500,
    stage: 'qualified',
    owner: 'Maya Ross',
    priority: 'High',
    expectedClose: '2026-10-12',
    leadSource: 'Website'
  },
  {
    id: 'DEAL-1088',
    company: 'Cobalt Health',
    contact: 'Noah Patel',
    amount: 36800,
    stage: 'proposal',
    owner: 'Ethan Cole',
    priority: 'High',
    expectedClose: '2026-10-22',
    leadSource: 'Outbound'
  },
  {
    id: 'DEAL-1016',
    company: 'SummitWorks',
    contact: 'Mia Torres',
    amount: 9800,
    stage: 'lead',
    owner: 'Ava Brooks',
    priority: 'Medium',
    expectedClose: '2026-10-06',
    leadSource: 'Referral'
  },
  {
    id: 'DEAL-1120',
    company: 'SignalGrid',
    contact: 'Oliver Wu',
    amount: 51200,
    stage: 'negotiation',
    owner: 'Liam Cooper',
    priority: 'High',
    expectedClose: '2026-10-18',
    leadSource: 'Partner'
  },
  {
    id: 'DEAL-990',
    company: 'Beacon Cloud',
    contact: 'Sofia Nguyen',
    amount: 42000,
    stage: 'won',
    owner: 'Maya Ross',
    priority: 'High',
    expectedClose: '2026-10-02',
    leadSource: 'Inbound'
  },
  {
    id: 'DEAL-1187',
    company: 'Harbor AI',
    contact: 'Daniel Price',
    amount: 15500,
    stage: 'lost',
    owner: 'Emma Stone',
    priority: 'Low',
    expectedClose: '2026-10-14',
    leadSource: 'Conference'
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: 'Pipeline value', value: '$268.4K', change: '+12.4%', trend: 'up' },
  { label: 'Won this quarter', value: '$183.1K', change: '+8.1%', trend: 'up' },
  { label: 'Open deals', value: '84', change: '-3.6%', trend: 'down' },
  { label: 'Activities today', value: '126', change: '+24.2%', trend: 'up' }
];

export const pipelineStages: Array<{ key: DealStage; label: string }> = [
  { key: 'lead', label: 'Lead' },
  { key: 'qualified', label: 'Qualified' },
  { key: 'proposal', label: 'Proposal' },
  { key: 'negotiation', label: 'Negotiation' },
  { key: 'won', label: 'Won' },
  { key: 'lost', label: 'Lost' }
];
