const dimensions = {
  "/images/hero/architecture-01-v2.jpg": [1024, 1536],
  "/images/hero/architecture-02-v2.jpg": [1024, 1536],
  "/images/hero/architecture-03-v2.jpg": [1024, 1536],
  "/images/hero/architecture-04-v2.jpg": [1024, 1536],
  "/images/projects/project-01-optimized.jpg": [2000, 1500],
  "/images/projects/project-03.jpeg": [1080, 763],
  "/images/projects/project-04.jpeg": [1080, 763],
  "/images/projects/project-05.jpeg": [1080, 763],
  "/images/projects/project-06.jpeg": [1080, 763],
  "/images/projects/project-07.jpeg": [1600, 1130],
  "/images/projects/project-10.jpeg": [3000, 2250],
  "/images/projects/project-11.jpeg": [1600, 1200],
  "/images/projects/project-12.jpeg": [1600, 1200],
};

function optimizedPath(src, width) {
  const extensionIndex = src.lastIndexOf(".");
  return `${src.slice(0, extensionIndex).replace("/images/", "/images/optimized/")}-${width}.webp`;
}

export default function ResponsiveImage({
  src,
  alt,
  sizes,
  className = "",
  pictureClassName = "block h-full w-full",
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  ...imageProps
}) {
  const [width, height] = dimensions[src] ?? [1600, 1200];

  return (
    <picture className={pictureClassName}>
      <source
        type="image/webp"
        srcSet={`${optimizedPath(src, 480)} 480w, ${optimizedPath(src, 960)} 960w`}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        fetchpriority={fetchPriority}
        decoding={decoding}
        className={className}
        {...imageProps}
      />
    </picture>
  );
}
