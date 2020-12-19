export default function FetchCookie(name) {
  const result = document.cookie.match(`(^|[^;]+)\\s*${name}\\s*=\\s*([^;]+)`);
  return result ? result.pop() : '';
}
