"use client"

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      if (!container.current) return;

      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": true,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "15",
          "locale": "en",
          "save_image": true,
          "style": "0",
          "symbol": "EIGHTCAP:USDBRL",
          "theme": "dark",
          "timezone": "Etc/UTC",
          "backgroundColor": "#0F0F0F",
          "gridColor": "rgba(242, 242, 242, 0.06)",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "width": 1200,
          "height": 700
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/USDBRL/?exchange=EIGHTCAP" rel="noopener nofollow" target="_blank"><span className="blue-text">USDBRL chart</span></a><span className="trademark"> by TradingView</span></div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
