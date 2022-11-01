import { Parser } from "html-to-react";
import DOMPurify from "isomorphic-dompurify";

export default function SanitizeHtml({ html }: { html: string }) {
  return Parser().parse(DOMPurify.sanitize(html));
}
