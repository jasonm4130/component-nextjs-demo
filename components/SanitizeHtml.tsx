import { Parser } from "html-to-react";
import DOMPurify from "dompurify";

export default function SanitizeHtml({ html }: { html: string }) {
  return Parser().parse(DOMPurify.sanitize(html));
}
