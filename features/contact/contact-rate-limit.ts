const WINDOW_MS = 10 * 60 * 1_000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, { count: number; resetsAt: number }>();

export function checkContactRateLimit(key: string, now = Date.now()) {
  const current = attempts.get(key);
  if (!current || current.resetsAt <= now) {
    attempts.set(key, { count: 1, resetsAt: now + WINDOW_MS });
    pruneExpiredEntries(now);
    return { allowed: true as const, retryAfterSeconds: 0 };
  }

  if (current.count >= MAX_ATTEMPTS) {
    return {
      allowed: false as const,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetsAt - now) / 1_000)),
    };
  }

  current.count += 1;
  return { allowed: true as const, retryAfterSeconds: 0 };
}

function pruneExpiredEntries(now: number) {
  if (attempts.size < 1_000) return;
  for (const [key, value] of attempts) {
    if (value.resetsAt <= now) attempts.delete(key);
  }
}
