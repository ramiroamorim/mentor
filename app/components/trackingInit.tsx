// app/components/trackingInit.tsx
'use client';

import { useEffect } from 'react';
import { initializeTracking } from '@/lib/trackingUtils';
import { initScrollTracking } from '@/types/services/sections';

export function TrackingInit() {
    useEffect(() => {
        // PageView (você já tem)
        initializeTracking().catch(console.error);
        
        initScrollTracking();
        
    }, []);

    return null;
}