import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'blur',
  quality = 75,
  sizes = '100vw',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc) => {
    const ext = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${ext}`, '');
    
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    const webpSrcSet = sizes.map(size => 
      `${baseName}-${size}w.webp ${size}w`
    ).join(', ');
    
    const fallbackSrcSet = sizes.map(size => 
      `${baseName}-${size}w.${ext} ${size}w`
    ).join(', ');

    return { webpSrcSet, fallbackSrcSet };
  };

  const { webpSrcSet, fallbackSrcSet } = generateSrcSet(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) {
      setCurrentSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [src, priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setHasError(true);
    onError?.(e);
  };

  const placeholderSvg = `data:image/svg+xml;base64,${btoa(`
    <svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="system-ui">
        ${hasError ? 'Failed to load' : 'Loading...'}
      </text>
    </svg>
  `)}`;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
        >
          <img
            src={placeholderSvg}
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
      )}

      {/* Optimized Image */}
      {currentSrc && (
        <picture>
          <source
            srcSet={webpSrcSet}
            sizes={sizes}
            type="image/webp"
          />
          <source
            srcSet={fallbackSrcSet}
            sizes={sizes}
          />
          <motion.img
            src={currentSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
