const RESPONSIVE_WIDTHS = [640, 960, 1280];

export function getResponsiveImageSrcSet(src: string) {
  if (!src.startsWith("/optimized-images/") || !src.endsWith(".webp")) {
    return undefined;
  }

  const responsiveBase = src
    .replace("/optimized-images/", "/responsive-images/")
    .replace(/\.webp$/, "");

  return RESPONSIVE_WIDTHS
    .map((width) => `${encodeURI(`${responsiveBase}-${width}.webp`)} ${width}w`)
    .join(", ");
}
