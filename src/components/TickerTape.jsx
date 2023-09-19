import React, { useEffect } from 'react';

const TickerTape = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: '', proName: 'NASDAQ:AAPL' },
        { description: '', proName: 'NASDAQ:MSFT' },
        { description: '', proName: 'NASDAQ:TSLA' },
        { description: '', proName: 'NASDAQ:NVDA' },
        { description: '', proName: 'NASDAQ:AMZN' },
        { description: '', proName: 'NASDAQ:GOOGL' },
        { description: '', proName: 'NASDAQ:NFLX' },
      ],
      showSymbolLogo: true,
      colorTheme: 'light',
      isTransparent: true,
      displayMode: 'regular',
      locale: 'en',
    });

    // Add an onload event handler to ensure the script executes after it's fully loaded
    script.onload = () => {
      // After the script has loaded, you can safely manipulate the DOM
      const widgetContainer = document.querySelector('.tradingview-widget-container__widget');
      if (widgetContainer) {
        // Add the script to the widget container
        widgetContainer.appendChild(script);
      }
    };

    // Append the script to the document head
    document.head.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TickerTape;
