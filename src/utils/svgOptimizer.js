// SVG Optimization utility
export const optimizeSVG = (svgString) => {
  return svgString
    // Remove unnecessary whitespace
    .replace(/\s+/g, ' ')
    // Remove comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove unnecessary attributes
    .replace(/\s(xmlns:xlink|xml:space|enable-background)="[^"]*"/g, '')
    // Optimize path data
    .replace(/\s*([MLHVCSQTAZmlhvcsqtaz])\s*/g, '$1')
    .trim();
};

// Create optimized icon component
export const createOptimizedIcon = (name, svgContent, defaultProps = {}) => {
  const optimizedSVG = optimizeSVG(svgContent);
  
  return ({ width = defaultProps.width || 24, height = defaultProps.height || 24, ...props }) => (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: optimizedSVG
          .replace(/width="[^"]*"/, `width="${width}"`)
          .replace(/height="[^"]*"/, `height="${height}"`)
      }}
      {...props}
    />
  );
};
