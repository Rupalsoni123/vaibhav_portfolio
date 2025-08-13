import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-gray-200 dark:bg-gray-700',
    card: 'bg-gray-100 dark:bg-gray-800',
    text: 'bg-gray-300 dark:bg-gray-600',
    avatar: 'bg-gray-200 dark:bg-gray-700 rounded-full',
    button: 'bg-gray-200 dark:bg-gray-700 rounded-lg'
  };

  return (
    <motion.div
      className={`${variants[variant]} ${className}`}
      style={{
        width,
        height,
        borderRadius: variant === 'avatar' ? '50%' : borderRadius
      }}
      animate={{
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const ProjectCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
    <SkeletonLoader height="200px" className="mb-4" variant="card" />
    <SkeletonLoader width="80%" height="24px" className="mb-2" variant="text" />
    <SkeletonLoader width="100%" height="16px" className="mb-2" />
    <SkeletonLoader width="60%" height="16px" className="mb-4" />
    <div className="flex gap-2 mb-4">
      <SkeletonLoader width="60px" height="24px" variant="button" />
      <SkeletonLoader width="80px" height="24px" variant="button" />
      <SkeletonLoader width="70px" height="24px" variant="button" />
    </div>
    <div className="flex gap-2">
      <SkeletonLoader width="100px" height="36px" variant="button" />
      <SkeletonLoader width="80px" height="36px" variant="button" />
    </div>
  </div>
);

export const SkillCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
    <SkeletonLoader width="48px" height="48px" className="mb-3 mx-auto" variant="avatar" />
    <SkeletonLoader width="80%" height="18px" className="mb-2 mx-auto" variant="text" />
    <SkeletonLoader width="60%" height="14px" className="mx-auto" />
  </div>
);

export default SkeletonLoader;
