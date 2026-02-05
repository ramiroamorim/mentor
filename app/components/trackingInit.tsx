// app/components/trackingInit.tsx
'use client';

import { useEffect } from 'react';
import { initializeTracking } from '@/lib/trackingUtils';


export function TrackingInit() {
    useEffect(() => {
        // PageView (você já tem)
        initializeTracking().catch(console.error);
        
        
    }, []);

    return null;
}