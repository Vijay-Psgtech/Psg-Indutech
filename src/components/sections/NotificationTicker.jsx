import React from 'react'
import { brandColors } from '../common/brand.js'
import { notifications } from '../data/NotificationsData.js'

const NotificationTicker = () => {
  return (
    <div
      className="w-full overflow-hidden py-3"
      style={{ background: brandColors.primary }}
    >
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .ticker-track {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker 28s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="ticker-track">
        {notifications.map((n, i) => (
          <a
            key={i}
            href={n.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 mx-8 text-white text-sm font-semibold tracking-wide hover:underline transition-opacity duration-200 hover:opacity-80"
          >
            {/* accent dot instead of broken emoji */}
            <span
              className="flex-shrink-0 w-2 h-2 rounded-full"
              style={{ background: brandColors.accent }}
            />
            {n.text}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NotificationTicker