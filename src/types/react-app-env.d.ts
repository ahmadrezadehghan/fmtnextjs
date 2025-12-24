// src/types/react-app-env.d.ts

import 'react';

declare module 'react' {
  interface CSSProperties {
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
    '--wind-angle'?: string;
  }
}
