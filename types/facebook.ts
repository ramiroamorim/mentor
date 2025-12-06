// types para o facebook
export interface EventData {
    eventName?: 'Purchase' | 'Lead' | 'AddToCart' | 'ViewContent' | 'CompleteRegistration' | 'PageView';
    name?: string;
    email?: string;
    phone?: string;
    value?: number;
    currency?: string;
    productName?: string;
    category?: string;
    content_ids?: string[];
    content_type?: string;
    contents?: Array<{
      id: string;
      quantity: number;
      item_price?: number;
    }>;
    orderId?: string;
    searchString?: string;
    numItems?: number;
    pageUrl?: string;
    referrerUrl?: string;
    customData?: Record<string, any>;

    // new tracking field about the cookies 
    fbp?: string;
    fbc?: string;
    userAgent?: string;
    ipAddress?: string;
    external_id?: string;
    event_id?: string;
    event_time?: number;

    
  }
  
  export interface ConversionResponse {
    success: boolean;
    message?: string;
    data?: string;
    error?: string;
    
  }