export function formatSecondsToHms(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  const hStr = String(hours).padStart(2, '0');
  const mStr = String(minutes).padStart(2, '0');
  const sStr = String(seconds).padStart(2, '0');

  return `${hStr}:${mStr}:${sStr}`;
}

export function calculateProgressPercentage(currentIndex: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  const ratio = (currentIndex + 1) / totalSlides;
  const clamped = Math.min(1, Math.max(0, ratio));
  return Math.round(clamped * 1000) / 10;
}

export function getSlidePacingPercentage(elapsedSeconds: number, totalSessionSeconds = 7200): number {
  if (totalSessionSeconds <= 0) return 0;
  const ratio = elapsedSeconds / totalSessionSeconds;
  return Math.min(100, Math.max(0, Math.round(ratio * 100)));
}
