// lib/trackingUtils.ts
/// <reference lib="es2015.collection" />
import Cookies from 'js-cookie';

interface AdditionalTrackingData {
    value?: number;
    content_name?: string;
    content_category?: string;
    event_source_url?: string;
    [key: string]: string | number | undefined;
}

export interface UserTrackingData {
    fbp?: string;
    fbc?: string;
    external_id?: string;
    event_id?: string;
    event_time?: number;
    userAgent?: string;
    clientIpAddress?: string;
}

export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function generateFbp(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `fb.1.${timestamp}.${random}`;
}

// NOVA FUNÇÃO: Calcula subdomainIndex correto
function getSubdomainIndex(): number {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    return Math.max(0, parts.length - 2);
}

// NOVA FUNÇÃO: Pega domínio raiz para cookies
function getCookieDomain(): string | undefined {
    const hostname = window.location.hostname;
    
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return undefined;
    }
    
    const parts = hostname.split('.');
    if (parts.length >= 2) {
        return '.' + parts.slice(-2).join('.');
    }
    
    return '.' + hostname;
}

export function getTrackingData(): UserTrackingData {
    if (typeof window === 'undefined') {
        return {
            event_id: generateUUID(),
            event_time: Math.floor(Date.now() / 1000),
        };
    }

    const cookieDomain = getCookieDomain();

    // FBP
    let fbp = Cookies.get('_fbp');
    if (!fbp) {
        fbp = generateFbp();
        Cookies.set('_fbp', fbp, {
            expires: 90,
            domain: cookieDomain,
            sameSite: 'lax'
        });
    }

    // External ID
    let external_id = Cookies.get('_external_id');
    if (!external_id) {
        external_id = generateUUID();
        Cookies.set('_external_id', external_id, {
            expires: 365,
            domain: cookieDomain,
            sameSite: 'lax'
        });
    }

   // 1. Captura o fbclid da URL
const urlParams = new URLSearchParams(window.location.search);
const fbclid = urlParams.get('fbclid');


if (fbclid) {
    

    const subdomainIndex = 1; 
    

    const fbcValue = `fb.${subdomainIndex}.${Date.now()}.${fbclid}`;

    
    Cookies.set('_fbc', fbcValue, {
        expires: 90, 
        domain: cookieDomain, 
        path: '/',
        sameSite: 'Lax' // Alguns navegadores exigem L maiúsculo dependendo da lib
    });

    console.log('FBC Atualizado via URL:', fbcValue);
} 
// Opcional: Se não tem fbclid na URL, o cookie antigo permanece válido e o servidor o lerá normalmente.

    return {
        fbp,
        fbc: Cookies.get('_fbc'),
        external_id,
        event_id: generateUUID(),
        event_time: Math.floor(Date.now() / 1000),
        userAgent: navigator.userAgent,
        clientIpAddress: undefined
    };
}

export async function sendTrackingEvent(eventName: string, additionalData: AdditionalTrackingData = {}): Promise<void> {
    try {
        const trackingData = getTrackingData();

        const eventData = {
            name: eventName,
            eventName,
            value: eventName === 'PageView' ? 1 : additionalData.value || 0,
            currency: 'BRL',
            productName: 'Infoprodutos Global - Landing Page',
            event_source_url: typeof window !== 'undefined' ? window.location.href : '',
            ...trackingData,
            ...additionalData
        };

        console.log('Sending to backend');

        const API_URL = 'https://api.ramiroamorim.com.br';
        const response = await fetch(`${API_URL}/api/event`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData),
        });

        if (response.ok) {
            console.log('Event sent successfully');
        } else {
            console.error('Error sending event');
        }
    } catch (error) {
        console.error('Error sending event:', error);
    }
}

export async function initializeTracking(): Promise<void> {
    getTrackingData();

    console.log('Getting cookies', {
        fbp: Cookies.get('_fbp') ? 'present' : 'created',
        fbc: Cookies.get('_fbc') ? 'present' : 'absent',
        external_id: Cookies.get('_external_id') ? 'present' : 'created',
        ClientIpAddress: Cookies.get('_clientIpAddress') ? Cookies.get('_clientIpAddress') : 'ok'
    });

    await sendTrackingEvent('PageView', {
        content_name: 'landing-page1',
        content_category: 'open-page',
        value: 1,
        event_time: Math.floor(Date.now() / 1000) as number,
        event_source: 'website',
        event_source_url: window.location.href
    });
}

export async function sendTrackingEventMentorBio(): Promise<void> {
    console.log('Tracking cookies initialized:', {
        fbp: Cookies.get('_fbp') ? 'present' : 'created',
        fbc: Cookies.get('_fbc') ? 'present' : 'absent',
        external_id: Cookies.get('_external_id') ? 'present' : 'created'
    });

    await sendTrackingEvent('ViewContent', {
        content_name: 'Mentor Section',
        content_category: 'mentor-bio',
        value: 1
    });
}

export function useTracking() {
    return {
        getTrackingData,
        generateFbp,
        generateUUID,
        initializeTracking,
        sendTrackingEvent,
        sendTrackingEventMentorBio,
    };
}