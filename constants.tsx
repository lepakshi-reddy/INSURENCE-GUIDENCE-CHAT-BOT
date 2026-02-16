
import React from 'react';
import { ClaimStage, ClaimStageInfo, ClaimType, ClaimTypeData } from './types';

export const SYSTEM_INSTRUCTION = `
You are the ClaimGuide AI, a specialized assistant for insurance claims operations.
Your ONLY goal is to explain the insurance claims process, workflows, and common requirements.

CONSTRAINTS:
1. Explain only: registration, document verification, assessment, and settlement stages.
2. Provide information on standard documentation needed for common claim types (Auto, Home, Health, Life).
3. DO NOT approve or reject any claims.
4. DO NOT interpret specific policy coverage or legal documents.
5. DO NOT make coverage decisions or promises about payouts.
6. If a user asks about their specific claim status or a decision, politely redirect them to their insurer's official portal.
7. Provide clear, step-by-step educational content.

Use a professional, empathetic, and clear tone.
`;

export const CLAIM_STAGES: Record<ClaimStage, ClaimStageInfo> = {
  [ClaimStage.REGISTRATION]: {
    title: 'Claim Registration',
    description: 'The initial step where you notify your insurer about the incident.',
    icon: '📝',
    keySteps: ['File FNOL (First Notice of Loss)', 'Obtain Claim Number', 'Initial Documentation'],
  },
  [ClaimStage.VERIFICATION]: {
    title: 'Document Verification',
    description: 'The insurer reviews submitted proofs to ensure authenticity and validity.',
    icon: '🔍',
    keySteps: ['ID Verification', 'Policy Validity Check', 'Evidence Review'],
  },
  [ClaimStage.ASSESSMENT]: {
    title: 'Claim Assessment',
    description: 'Adjusters evaluate the extent of damage or loss based on your policy.',
    icon: '⚖️',
    keySteps: ['Loss Valuation', 'Damage Inspection', 'Liability Determination'],
  },
  [ClaimStage.SETTLEMENT]: {
    title: 'Final Settlement',
    description: 'The resolution of the claim through payment or repairs.',
    icon: '🤝',
    keySteps: ['Final Approval', 'Payment Disbursement', 'Claim Closure'],
  },
};

export const CLAIM_TYPES: Record<ClaimType, ClaimTypeData> = {
  [ClaimType.AUTO]: {
    title: 'Auto Insurance Claim',
    icon: '🚗',
    documents: [
      'Police Incident Report',
      'Photos of Vehicle Damage',
      'Other Driver\'s Insurance Information',
      'Valid Driver\'s License',
      'Detailed Repair Estimate'
    ]
  },
  [ClaimType.HOME]: {
    title: 'Home Insurance Claim',
    icon: '🏠',
    documents: [
      'Proof of Property Ownership',
      'Photos or Videos of Damages',
      'Inventory of Lost/Damaged Items',
      'Professional Repair Quotes',
      'Receipts for Emergency Repairs'
    ]
  },
  [ClaimType.HEALTH]: {
    title: 'Health Insurance Claim',
    icon: '🏥',
    documents: [
      'Original Medical Bills & Invoices',
      'Prescription Lists',
      'Diagnostic Test Reports',
      'Discharge Summary (for In-patient)',
      'Completed Claim Form'
    ]
  },
  [ClaimType.LIFE]: {
    title: 'Life Insurance Claim',
    icon: '📜',
    documents: [
      'Official Death Certificate',
      'Original Policy Document',
      'Beneficiary Identity Proof',
      'Bank Account Details for Settlement',
      'Physician\'s Statement (if applicable)'
    ]
  }
};

export const SUGGESTED_QUERIES = [
  "Explain insurance claim process",
  "What documents are needed for claims?",
  "Explain claim assessment stage",
  "Why do claims take time?",
  "Common reasons for delays"
];
