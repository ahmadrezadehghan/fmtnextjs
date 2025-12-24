// src/components/layout/PurpleFlame.tsx
import React, { useEffect, useState } from 'react';

interface StyleWithVars extends React.CSSProperties {
  '--wind-angle'?: string;
  '--curve-x1'?: string;
  '--curve-y1'?: string;
  '--curve-x2'?: string;
  '--curve-y2'?: string;
  '--curve-x3'?: string;
  '--curve-y3'?: string;
  '--max-height'?: string;
  '--spark-curve-x1'?: string;
  '--spark-curve-y1'?: string;
  '--spark-curve-x2'?: string;
  '--spark-curve-y2'?: string;
}
const PurpleFlame = () => {
  console.log('PurpleFlame rendering');
  const [windDirection, setWindDirection] = useState(0);

  useEffect(() => {
    const windInterval = setInterval(() => {
      setWindDirection(-8 + Math.random() * 16);
    }, 5000);

    return () => clearInterval(windInterval);
  }, []);

  return (
    <div className="w-full h-full bg-transparent overflow-hidden"> {/* Changed from h-screen */}
      <div className="fire-container relative w-full h-full"> {/* Changed from h-screen */}
        <div className="fire-wrapper absolute bottom-0 w-full"
          style={{ '--wind-angle': `${windDirection}deg` } as StyleWithVars}>
          <div className="continuous-flame absolute bottom-0 w-full h-96" />

          {[...Array(32)].map((_, i) => (
            <div
              key={`flame-section-${i}`}
              className="flame-section absolute bottom-0"
              style={{
                left: `${(i / 32) * 100}%`,
                width: '6%',
                transform: `translateX(-50%) scale(${0.8 + Math.random() * 0.4})`,
              }}
            >
              {[...Array(4)].map((_, j) => (
                <div
                  key={`flame-${i}-${j}`}
                  className="flame absolute bottom-0 left-1/2 -translate-x-1/2"
                  style={{
                    '--curve-x1': `${-80 + Math.random() * 160}`,
                    '--curve-y1': `${-100 + Math.random() * 50}`,
                    '--curve-x2': `${-100 + Math.random() * 200}`,
                    '--curve-y2': `${-200 + Math.random() * 150}`,
                    '--curve-x3': `${-120 + Math.random() * 240}`,
                    '--curve-y3': `${-250 + Math.random() * 200}`,
                    '--max-height': `${200 + Math.random() * 300}`,
                    animationDuration: `${4 + Math.random() * 3}s`,
                    animationDelay: `${-Math.random() * 4}s`,
                  } as StyleWithVars}
                />
              ))}
            </div>
          ))}

          {[...Array(50)].map((_, i) => (
            <div
              key={`spark-${i}`}
              className="spark absolute bottom-0"
              style={{
                left: `${Math.random() * 100}%`,
                '--spark-curve-x1': `${-50 + Math.random() * 100}`,
                '--spark-curve-y1': `${-100 + Math.random() * 50}`,
                '--spark-curve-x2': `${-100 + Math.random() * 200}`,
                '--spark-curve-y2': `${-200 - Math.random() * 200}`,
                animationDelay: `${-Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              } as StyleWithVars}
            />
          ))}
        </div>

        <style>{`
          .continuous-flame {
            background: linear-gradient(to top,
              rgba(147, 51, 234, 0.4) 0%,
              rgba(147, 51, 234, 0.1) 50%,
              transparent 100%
            );
            filter: blur(20px);
            transform-origin: bottom;
            animation: baseFlame 5s ease-in-out infinite;
          }

          .flame {
            width: 3px;
            height: 3px;
            opacity: 0.8;
            animation: flameRise ease-out infinite;
          }

          .flame::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top,
              rgb(147, 51, 234),
              rgb(168, 85, 247),
              rgb(192, 132, 252),
              transparent
            );
            filter: blur(4px);
            transform-origin: bottom;
            animation: flameFlicker 1s ease-out infinite alternate;
          }

          @keyframes baseFlame {
            0%, 100% {
              transform: rotate(calc(var(--wind-angle) * 0.3));
            }
            50% {
              transform: rotate(calc(var(--wind-angle) * 0.5));
            }
          }

          @keyframes flameRise {
            0% {
              height: 3px;
              opacity: 0.8;
              transform: translateX(0) translateY(0);
            }
            33% {
              height: calc(var(--max-height) * 0.4px);
              opacity: 1;
              transform:
                translateX(calc(var(--curve-x1) * 1px))
                translateY(calc(var(--curve-y1) * 1px))
                rotate(calc(var(--wind-angle) * 1deg));
            }
            66% {
              height: calc(var(--max-height) * 0.7px);
              opacity: 0.7;
              transform:
                translateX(calc(var(--curve-x2) * 1px))
                translateY(calc(var(--curve-y2) * 1px))
                rotate(calc(var(--wind-angle) * 1.5deg));
            }
            100% {
              height: calc(var(--max-height) * 1px);
              opacity: 0;
              transform:
                translateX(calc(var(--curve-x3) * 1px))
                translateY(calc(var(--curve-y3) * 1px))
                rotate(calc(var(--wind-angle) * 2deg))
                scale(0.2);
            }
          }

          @keyframes flameFlicker {
            0% {
              transform: scaleY(1) scaleX(1) rotate(calc(var(--wind-angle) * 0.2deg));
            }
            100% {
              transform: scaleY(${0.9 + Math.random() * 0.2}) scaleX(${0.9 + Math.random() * 0.2})
                rotate(calc(var(--wind-angle) * 0.3deg));
            }
          }

          .spark {
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgb(216, 180, 254);
            border-radius: 50%;
            filter: blur(1px);
            animation: sparkFloat ease-out infinite;
          }

          @keyframes sparkFloat {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            50% {
              transform: translate(
                calc(var(--spark-curve-x1) * 1px),
                calc(var(--spark-curve-y1) * 1px)
              );
              opacity: 0.5;
            }
            100% {
              transform: translate(
                calc(var(--spark-curve-x2) * 1px),
                calc(var(--spark-curve-y2) * 1px)
              ) scale(0);
              opacity: 0;
            }
          }

          .fire-wrapper::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: -10%;
            right: -10%;
            height: 30px;
            background: radial-gradient(
              ellipse at center,
              rgba(147, 51, 234, 0.4) 0%,
              rgba(147, 51, 234, 0.1) 50%,
              transparent 100%
            );
            filter: blur(10px);
            animation: glowPulse 4s ease-in-out infinite alternate;
          }

          @keyframes glowPulse {
            0% {
              opacity: 0.3;
              transform: scaleY(0.8);
            }
            100% {
              opacity: 0.5;
              transform: scaleY(1.2);
            }
          }

          .flame-section::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -100%;
            right: -100%;
            height: 100%;
            background: radial-gradient(
              ellipse at center,
              rgba(147, 51, 234, 0.2) 0%,
              transparent 70%
            );
            filter: blur(8px);
          }
        `}</style>
      </div>
    </div>
  );
};

export default PurpleFlame;
