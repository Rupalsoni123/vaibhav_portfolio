import React from "react";
import avif1x from "../assets/Avatars/optimized/93f50dd8-9dec-4f20-ad88-d40acc26dec5.avif";
import avif2x from "../assets/Avatars/optimized/93f50dd8-9dec-4f20-ad88-d40acc26dec5@2x.avif";
import webp1x from "../assets/Avatars/optimized/93f50dd8-9dec-4f20-ad88-d40acc26dec5.webp";
import webp2x from "../assets/Avatars/optimized/93f50dd8-9dec-4f20-ad88-d40acc26dec5@2x.webp";
import jpg1x from "../assets/Avatars/optimized/93f50dd8-9dec-4f20-ad88-d40acc26dec5.jpg";
import jpg2x from "../assets/Avatars/optimized/93f50dd8-9dec-4f20-ad88-d40acc26dec5@2x.jpg";

const Avatar = ({ size = 180, alt = "Vaibhav Soni", style = {}, eager = false, ...rest }) => (
  <picture>
    <source type="image/avif" srcSet={`${avif1x} 1x, ${avif2x} 2x`} />
    <source type="image/webp" srcSet={`${webp1x} 1x, ${webp2x} 2x`} />
    <img
      src={jpg1x}
      srcSet={`${jpg1x} 1x, ${jpg2x} 2x`}
      alt={alt}
      width={size}
      height={size}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchpriority={eager ? "high" : "auto"}
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        borderRadius: "50%",
        display: "block",
        ...style,
      }}
      {...rest}
    />
  </picture>
);

export default Avatar;
