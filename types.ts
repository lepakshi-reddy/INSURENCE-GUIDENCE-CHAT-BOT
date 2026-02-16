
export type MessageRole = 'user' | 'model';

export interface ChatMessage {
  role: MessageRole;
  text: string;
}

export enum ClaimStage {
  REGISTRATION = 'Registration',
  VERIFICATION = 'Verification',
  ASSESSMENT = 'Assessment',
  SETTLEMENT = 'Settlement'
}

export interface ClaimStageInfo {
  title: string;
  description: string;
  icon: string;
  keySteps: string[];
}

export enum ClaimType {
  AUTO = 'Auto',
  HOME = 'Home',
  HEALTH = 'Health',
  LIFE = 'Life'
}

export interface ClaimTypeData {
  title: string;
  icon: string;
  documents: string[];
}
