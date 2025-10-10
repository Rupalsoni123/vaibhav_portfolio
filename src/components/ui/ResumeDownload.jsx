import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnalytics } from './Analytics';

const ResumeDownload = ({ 
  className = '',
  variant = 'button', // button, card, inline
  showPreview = true,
  customText = null
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPreview, setShowPreviewModal] = useState(false);
  const { trackResumeDownload } = useAnalytics();

  const resumeData = {
    filename: 'Vaibhav_Soni_DevOps_Engineer_Resume.pdf',
    url: '/resume/Vaibhav_Soni_Resume.pdf',
    lastUpdated: '2025-10-10',
    size: '245 KB',
    pages: 2
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    trackResumeDownload();

    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = resumeData.url;
      link.download = resumeData.filename;
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate download delay for UX
      setTimeout(() => {
        setIsDownloading(false);
      }, 1500);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
      
      // Fallback: open in new tab
      window.open(resumeData.url, '_blank');
    }
  };

  const handlePreview = () => {
    setShowPreviewModal(true);
  };

  if (variant === 'card') {
    return (
      <>
        <motion.div
          className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Resume
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                DevOps Engineer
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Last updated:</span>
              <span className="text-gray-900 dark:text-white">{resumeData.lastUpdated}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Size:</span>
              <span className="text-gray-900 dark:text-white">{resumeData.size}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Pages:</span>
              <span className="text-gray-900 dark:text-white">{resumeData.pages}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors flex items-center justify-center ${
                isDownloading ? 'cursor-not-allowed' : ''
              }`}
              whileHover={!isDownloading ? { scale: 1.02 } : {}}
              whileTap={!isDownloading ? { scale: 0.98 } : {}}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </>
              )}
            </motion.button>

            {showPreview && (
              <motion.button
                onClick={handlePreview}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Preview Modal */}
        <AnimatePresence>
          {showPreview && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreviewModal(false)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Resume Preview
                  </h3>
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <iframe
                    src={resumeData.url}
                    className="w-full h-96 border-0"
                    title="Resume Preview"
                  />
                  <div className="mt-4 flex justify-center">
                    <motion.button
                      onClick={handleDownload}
                      className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Download Resume
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  if (variant === 'inline') {
    return (
      <motion.div
        className={`flex items-center space-x-4 ${className}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
          <span className="text-gray-700 dark:text-gray-300">
            {customText || 'Download my resume'}
          </span>
        </div>
        <motion.button
          onClick={handleDownload}
          disabled={isDownloading}
          className="text-blue-500 hover:text-blue-600 disabled:text-blue-400 font-medium"
          whileHover={!isDownloading ? { scale: 1.05 } : {}}
          whileTap={!isDownloading ? { scale: 0.95 } : {}}
        >
          {isDownloading ? 'Downloading...' : 'PDF'}
        </motion.button>
      </motion.div>
    );
  }

  // Default button variant
  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors flex items-center space-x-2 ${
        isDownloading ? 'cursor-not-allowed' : ''
      } ${className}`}
      whileHover={!isDownloading ? { scale: 1.05 } : {}}
      whileTap={!isDownloading ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isDownloading ? (
        <>
          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>{customText || 'Download Resume'}</span>
        </>
      )}
    </motion.button>
  );
};

export default ResumeDownload;
