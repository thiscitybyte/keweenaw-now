// Minimal Airtable fetcher (optional). Uses browser fetch against Airtable REST API v0 (classic).
// For real-world use, consider proxying via serverless function to keep API keys secret.

export async function fetchEventsFromAirtable() {
  const key = import.meta.env.AIRTABLE_API_KEY;
  const base = import.meta.env.AIRTABLE_BASE_ID;
  const table = import.meta.env.AIRTABLE_EVENTS_TABLE || 'Events';
  if (!key || !base) return null;
  const url = `https://api.airtable.com/v0/${base}/${encodeURIComponent(table)}?sort[0][field]=start`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${key}` } });
  if (!res.ok) throw new Error('Airtable fetch failed');
  const data = await res.json();
  return (data.records || []).map((r:any) => ({
    id: r.id,
    title: r.fields.title || r.fields.Name || 'Event',
    start: r.fields.start || r.fields.Start,
    end: r.fields.end || r.fields.End,
    location: r.fields.location || r.fields.Location,
    url: r.fields.url || r.fields.URL,
    source: r.fields.source || 'Airtable',
  }));
}