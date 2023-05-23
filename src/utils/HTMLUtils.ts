import DOMPurify from 'dompurify';

export const cleanHTML = (html: string): { __html: string } => {
  const sanitizedHTML = DOMPurify.sanitize(html);
  return { __html: sanitizedHTML };
};
