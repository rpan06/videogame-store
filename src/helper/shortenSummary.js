export default function shortenSummary(summary) {
  const summaryArray = summary.split(/[?!.]/).slice(0, 2);
  return `${summaryArray.join('.')}.`;
}
