import { useEffect } from "react";
import { buildHead, applyHead, setSsrHead } from "../../lib/seo";

/*
 * Declares a page's head. Render exactly one of these per route, as the first
 * thing the page returns.
 *
 * Renders nothing. During the static prerender it records the page's head
 * descriptor for entry-server.jsx to hand back to the build; in the browser it
 * writes the same descriptor to document.head after paint.
 *
 * The recording happens in the render body rather than an effect because
 * effects never run during renderToString — this is the one place where a
 * side effect in render is the correct tool, and it is guarded so it can only
 * ever happen on the server.
 */
export default function Seo(props) {
  const head = buildHead(props);

  if (import.meta.env.SSR) setSsrHead(head);

  /*
   * Serialised into the dep array so the effect re-runs when any field
   * changes, without callers having to memoise the schema array they pass in.
   */
  const key = JSON.stringify(head);
  useEffect(() => {
    applyHead(JSON.parse(key));
  }, [key]);

  return null;
}
