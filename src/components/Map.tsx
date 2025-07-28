import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MapProps {
  onTokenSubmit?: (token: string) => void;
}

const Map: React.FC<MapProps> = ({ onTokenSubmit }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSubmitted, setIsTokenSubmitted] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !isTokenSubmitted || !mapboxToken) return;

    // Dynamically import mapbox-gl only when needed
    import('mapbox-gl').then((mapboxgl) => {
      // Initialize map
      mapboxgl.default.accessToken = mapboxToken;
      
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [37.6173, 55.7558], // Moscow coordinates
        zoom: 12,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.default.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for the store location
      new mapboxgl.default.Marker({
        color: '#8B5A3C', // Wood color
      })
        .setLngLat([37.6173, 55.7558])
        .setPopup(
          new mapboxgl.default.Popup()
            .setHTML('<div><strong>Наш магазин мебели</strong><br>Москва, ул. Примерная, 123</div>')
        )
        .addTo(map.current);
    }).catch((error) => {
      console.error('Error loading Mapbox GL:', error);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken, isTokenSubmitted]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setIsTokenSubmitted(true);
      onTokenSubmit?.(mapboxToken);
    }
  };

  if (!isTokenSubmitted) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Карта расположения магазина</h3>
            <p className="text-sm text-muted-foreground">
              Для отображения карты необходимо указать Mapbox токен. Получите бесплатный токен на{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wood hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Введите ваш Mapbox токен"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleTokenSubmit} variant="wood">
                Показать карту
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;