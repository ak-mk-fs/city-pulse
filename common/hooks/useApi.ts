import { useState, useEffect, useCallback } from "react";

export interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: (...args: any[]) => Promise<T>;
}

/**
 * useApi - Generic hook to call an async API function
 * @param apiFn - Async function returning a Promise<T>
 * @param deps - Dependency array to refetch automatically
 * @param immediate - Whether to call apiFn immediately on mount
 */
export function useApi<T>(
  apiFn: (...args: any[]) => Promise<T>,
  deps: any[] = [],
  immediate: boolean = true
): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (...args: any[]) => {
    setLoading(true);
    setError(null);

    try {
      const result = await apiFn(...args);
      setData(result);
      setLoading(false);
      return result;
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
      setLoading(false);
      throw err;
    }
  }, [apiFn]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, deps);

  return { data, loading, error, execute };
}
