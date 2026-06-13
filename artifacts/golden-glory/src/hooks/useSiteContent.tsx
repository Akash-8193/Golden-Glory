import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

// In-memory cache to prevent redundant fetches across components
let cachedContent: Record<string, string> | null = null;
let fetchPromise: Promise<Record<string, string>> | null = null;

export function useSiteContent() {
  const [content, setContent] = useState<Record<string, string>>(cachedContent || {});
  const [loading, setLoading] = useState(!cachedContent);

  useEffect(() => {
    if (cachedContent) {
      setContent(cachedContent);
      setLoading(false);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = supabase
        .from('site_content')
        .select('key, value')
        .then(({ data, error }) => {
          if (error) throw error;
          const contentMap = (data || []).reduce((acc: Record<string, string>, item) => {
            acc[item.key] = item.value;
            return acc;
          }, {});
          cachedContent = contentMap;
          return contentMap;
        });
    }

    fetchPromise
      .then((data) => {
        setContent(data);
      })
      .catch((err) => {
        console.error('Failed to fetch site content:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Helper function to safely get content with a fallback
  const get = (key: string, fallback: string) => {
    if (loading) return fallback;
    return content[key] || fallback;
  };

  return { content, get, loading };
}
