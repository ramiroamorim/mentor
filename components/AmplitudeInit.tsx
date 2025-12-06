'use client';

import { useEffect } from 'react';
import * as amplitude from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

export function AmplitudeInit() {
  useEffect(() => {
    const sessionReplay = sessionReplayPlugin({ sampleRate: 1 });
    amplitude.add(sessionReplay);
    
    amplitude.init('aa66bfa34df78988646cc11ada7efa75', {
      logLevel: amplitude.Types.LogLevel.Debug,
      flushIntervalMillis: 100,
      flushQueueSize: 1,
      autocapture: {
        attribution: true,
        fileDownloads: true,
        formInteractions: true,
        pageViews: true,
        sessions: true,
        elementInteractions: true,
        networkTracking: true,
        webVitals: true,
        frustrationInteractions: true
      }
    });
  }, []);

  return null;
}