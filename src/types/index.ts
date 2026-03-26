// ─── Superscript ─────────────────────────────────────
export interface SuperscriptParts {
  base: string;
  sup: string;
  rest: string;
}

// ─── Awards ──────────────────────────────────────────
export interface AwardItem {
  title: string;
  titleSuperscript: SuperscriptParts;
  org: string;
  orgSuperscript: SuperscriptParts | null;
  year: string;
  desc: string;
  img: string;
}

// ─── Qualifications ──────────────────────────────────
export interface QualDetail {
  label?: string;
  value: string;
}

export interface Qualification {
  id: string;
  dotColor: string;
  type: string;
  title: string;
  institution: string;
  subInstitution?: string | null;
  period?: string | null;
  badge?: { label: string; variant: string } | null;
  membershipNo?: string;
  details: QualDetail[];
}

// ─── Projects ────────────────────────────────────────
export interface Project {
  title: string;
  type: string;
  location: string;
  area: string;
  frameType: string;
  foundationType: string;
  phase: string;
  img: string;
}