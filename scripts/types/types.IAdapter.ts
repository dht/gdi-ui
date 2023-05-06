// ====================== IAdapter ======================//

export interface IAdapter {
  providerType: DataProvider;
  baseUrl: string;
  port: number;
  paths: {
    create: string;
    logs: string;
  };
}

export type DataProvider = 'AI-RUNNER' | 'REST' | 'FIRESTORE' | 'STATIC';
