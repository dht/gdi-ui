// ====================== IAdapter ======================//

export interface IAdapter {
  adapterType: AdapterType;
  baseUrl: string;
  port: number;
  paths: {
    create: string;
    logs: string;
  };
}

export type AdapterType = 'AI-RUNNER' | 'REST' | 'FIRESTORE' | 'STATIC';
