export const isRefreshed = (timestamp: string) => {
  const day = 3600 * 1000 * 24
  const now = Date.now();
  return now - new Date(timestamp).getTime() >= day;
}