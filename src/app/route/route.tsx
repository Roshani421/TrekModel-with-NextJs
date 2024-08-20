import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const RouteLocation = () => {
  const [locations, setLocations] = useState<Location[]>([
    { id: 1, name: 'Base Camp', latitude: 27.9881, longitude: 86.9250 },
    { id: 2, name: 'Camp 1', latitude: 27.9772, longitude: 86.9143 },
    { id: 3, name: 'Camp 2', latitude: 27.9653, longitude: 86.9034 },
  ]);

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Route Location</h1>
      <div className="flex flex-col md:flex-row justify-center items-center mb-4">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">Locations</h2>
          <ul>
            {locations.map((location) => (
              <li key={location.id} className="py-2">
                <button
                  className="flex items-center text-left w-full p-2 hover:bg-gray-100"
                  onClick={() => handleLocationClick(location)}
                >
                  <MapPin size={24} className="mr-2" />
                  {location.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4 md:p-6 lg:p-8">
          {selectedLocation && (
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
              <h2 className="text-2xl font-bold mb-2">{selectedLocation.name}</h2>
              <p>Latitude: {selectedLocation.latitude}</p>
              <p>Longitude: {selectedLocation.longitude}</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-96 md:h-128 lg:h-160 xl:h-192 p-4 md:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-md">
        <iframe
          title="Route Location Map"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedLocation?.latitude},${selectedLocation?.longitude}`}
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default RouteLocation