'use client';

import React from 'react';

const StatusIndicator = () => {
  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
        .status-indicator {
          position: relative;
          width: 8px;
          height: 8px;
        }
        .status-dot {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #00DE6F;
        }
        .status-pulse {
          position: absolute;
          top: -2px;
          left: -2px;
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          border-radius: 50%;
          background-color: #00DE6F;
          opacity: 0.7;
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      <div className="status-indicator">
        <div className="status-dot"></div>
        <div className="status-pulse"></div>
      </div>
    </>
  );
};

export default StatusIndicator;