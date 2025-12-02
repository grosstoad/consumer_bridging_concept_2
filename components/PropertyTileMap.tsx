import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'

export default function PropertyTileMap() {
	return (
		<MapContainer
			center={[-37.770, 144.995]}
			zoom={13}
			style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
			zoomControl={false}
			scrollWheelZoom={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	)
}


