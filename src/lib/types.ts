export type LiveItem = {
  id: string;
  ts: string; // ISO
  title: string;
  summary?: string;
  sourceUrl?: string;
};
export type EventItem = {
  id: string;
  title: string;
  start: string; // ISO
  end?: string; // ISO
  location?: string;
  url?: string;
  source?: string;
};