export default function ShortenSummary(summary) {
  const summaryArray = summary.split(/[?!.]/).slice(0, 2);
  return `${summaryArray.join('.')}.`;
}
