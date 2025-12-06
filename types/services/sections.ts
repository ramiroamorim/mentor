// types/services/sections.ts

// types/services/sections.ts
/// <reference lib="es2015.collection" />

import { sendTrackingEvent } from '../../lib/trackingUtils';
import Cookies = require('js-cookie');


const sectionsTracked = new Set<string>();


export function initScrollTracking() {
    const sectionsToTrack = [
        { id: 'start_form', name: 'Form_start' },
        { id: 'view-mentor', name: 'mentor' },
      
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const sectionId = entry.target.id;
                    const sectionName = entry.target.getAttribute('data-section-name');
                    
                    if (sectionsTracked.has(sectionId)) {
                        continue; // ← mudou de 'return' pra 'continue'
                    }
                    
                    sectionsTracked.add(sectionId);
                    
                    sendTrackingEvent('ViewContent', {
                        content_name: sectionName || sectionId,
                        content_category: '',
                        content_type: 'section',
                        value: 1,
                        event_time: Math.floor(Date.now() / 1000) as number,
                        event_source: 'website',
                        event_source_url: window.location.href

                    });
                    
                    console.log(`section viewed: ${sectionName || sectionId}`);
                }
            }
        },
        {
            threshold: 0.5
        }
    );

    sectionsToTrack.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            element.setAttribute('data-section-name', section.name);
            observer.observe(element);
        }
    });
}