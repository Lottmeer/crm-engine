export class AppService {
  getHealth() {
    return {
      ok: true,
      service: 'crm-api',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    };
  }

  getStats() {
    return {
      pipelineValue: 268400,
      wonQuarter: 183100,
      openDeals: 84,
      activityCount: 126,
      winRate: 42.8,
      conversionRate: 68.4
    };
  }

  getDeals() {
    return [
      {
        id: 'DEAL-1042',
        company: 'Northstar Labs',
        contact: 'Alicia Chen',
        amount: 24500,
        stage: 'qualified',
        owner: 'Maya Ross',
        priority: 'High'
      },
      {
        id: 'DEAL-1088',
        company: 'Cobalt Health',
        contact: 'Noah Patel',
        amount: 36800,
        stage: 'proposal',
        owner: 'Ethan Cole',
        priority: 'High'
      },
      {
        id: 'DEAL-1016',
        company: 'SummitWorks',
        contact: 'Mia Torres',
        amount: 9800,
        stage: 'lead',
        owner: 'Ava Brooks',
        priority: 'Medium'
      }
    ];
  }
}
