"use client"

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export const MyMap = () => {
  const position = { lat: -36.828423355464, lng: -73.05623082819149 };
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <Map
        center={position}
        zoom={14}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <Marker position={position} />
      </Map>
    </APIProvider>
  )
}
