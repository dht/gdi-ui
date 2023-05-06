// ====================== IBoard ======================//
// source: igrid

export interface IBoard {
  id: string;
  boardInfo: IBoardInfo;
  adapters?: IAdapters;
  examplesUrl?: string;
  examples?: {
    [key: string]: IExample;
  };
  siblingsUrl?: string;
  siblings?: {
    [key: string]: ISibling;
  };
  dependencies: Json;
  elements: {
    default: {
      [key: string]: IElement;
    };
    mobile?: {
      [key: string]: IElement;
    };
    tablet?: {
      [key: string]: IElement;
    };
    '720p'?: {
      [key: string]: IElement;
    };
    HD?: {
      [key: string]: IElement;
    };
    'HD+'?: {
      [key: string]: IElement;
    };
    '1080p'?: {
      [key: string]: IElement;
    };
    '2k'?: {
      [key: string]: IElement;
    };
    '4k'?: {
      [key: string]: IElement;
    };
    '8k'?: {
      [key: string]: IElement;
    };
  };
}

export interface IExample {
  id: string;
  name: string;
  requestId: string;
}

export interface IBoardInfo {
  name: string;
  imageUrl: string;
  description: string;
  fields: InfoField[];
  isPlayback: boolean;
  showIntro: boolean;
  githubUrl?: string;
}

export interface InfoField {
  label: string;
  content: string;
}

export interface IElement {
  id: string;
  widgetId: string;
  title?: string;
  position?: ICoordinates;
  dimension?: IDimension;
  boardId?: string;
  flavour?: string;
  flags?: IElementFlags;
  props?: Json;
  state?: Json;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IDimension {
  x: number;
  y: number;
}

export interface IElementFlags {
  hideHeader?: boolean;
  isTransparent?: boolean;
  allowOverflow?: boolean;
  isFullPage?: boolean;
  isFloating?: boolean;
  isHidden?: boolean;
}

export interface Json {
  [key: string]: any;
}

export type Resolution =
  | 'default'
  | 'mobile'
  | 'tablet'
  | '720p'
  | 'HD'
  | 'HD+'
  | '1080p'
  | '2k'
  | '4k'
  | '8k';

export type ISibling = {
  id: string;
  name: string;
  requestId: string;
};

export interface IAdapter {
  providerType: DataProvider;
  baseUrl: string;
  port: number;
  paths: {
    create: string;
    logs: string;
  };
}

export interface IAdapters {
  playbackAdapterUrl?: string;
  playbackAdapter?: IAdapter;
  promptAdapterUrl?: string;
  promptAdapter?: IAdapter;
  dbAdapterUrl?: string;
  dbAdapter?: IAdapter;
}

export type DataProvider = 'AI-RUNNER' | 'REST' | 'FIRESTORE' | 'STATIC';
