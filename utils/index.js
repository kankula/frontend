export function getStrapiMedia(url) {
    if (url == null) {
      return null;
    }
    if (url.startsWith('http') || url.startsWith('//')) {
      return url;
    }
    return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${url}`;
  }
  
export function getStrapiURL(path) {
    return `${
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
    }/api${path}`;
  }