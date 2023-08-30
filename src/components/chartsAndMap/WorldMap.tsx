import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "../../utils/marker_icon.png";

const WorldMap = ({ countriesData }: { countriesData: any }) => {
  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30],
  });
  return (
    <div>
      {countriesData?.map((country: any,index:number) => (
        <Marker
          icon={customMarker}
          key={`${country.countryInfo._id}-${index}`}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default WorldMap;
