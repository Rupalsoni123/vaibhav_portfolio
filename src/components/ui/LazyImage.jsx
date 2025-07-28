import React, { useState, useRef, useEffect } from 'react';
import { useLazyLoad } from '../../utils/useIntersectionObserver';

const LazyImage = ({
  src,
  alt,
  placeholder,
  className = '',
  style = {},
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const { ref, shouldLoad } = useLazyLoad();
  const imgRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad || isLoaded || hasError) return;

    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      if (onLoad) onLoad();
    };
    
    img.onerror = () => {
      setHasError(true);
      if (onError) onError();
    };
    
    img.src = src;
  }, [shouldLoad, src, isLoaded, hasError, onLoad, onError]);

  const imageStyle = {
    transition: 'opacity 0.3s ease, filter 0.3s ease',
    opacity: isLoaded ? 1 : 0.7,
    filter: isLoaded ? 'none' : 'blur(4px)',
    ...style
  };

  if (hasError) {
    return (
      <div
        ref={ref}
        className={`lazy-image-error ${className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-tertiary)',
          color: 'var(--text-tertiary)',
          minHeight: '200px',
          borderRadius: 'var(--border-radius-md)',
          ...style
        }}
      >
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <div ref={ref} className="lazy-image-container" style={{ position: 'relative' }}>
      {!isLoaded && placeholder && (
        <div
          className="lazy-image-placeholder"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg-tertiary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--border-radius-md)'
          }}
        >
          <div className="skeleton" style={{ width: '100%', height: '100%', borderRadius: 'inherit' }} />
        </div>
      )}
      
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`lazy-image ${className} ${isLoaded ? 'loaded' : ''}`}
        style={imageStyle}
        loading="lazy"
        {...props}
      />
      
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="spinner" style={{ width: '24px', height: '24px' }} />
        </div>
      )}
    </div>
  );
};

export default LazyImage;
