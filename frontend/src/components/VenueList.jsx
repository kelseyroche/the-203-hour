// import VenueCard from './VenueCard'
// import '../styles/VenueList.css'

// function VenueList() {
//   // This will be dynamic later!
//   const dummyVenues = [
//     { name: 'Taco Bar', id: 1 },
//     { name: 'Wine Spot', id: 2 },
//   ]

//   return (
//     <div className="venue-list">
//       {dummyVenues.map((venue) => (
//         <VenueCard key={venue.id} venue={venue} />
//       ))}
//     </div>
//   )
// }

// export default VenueList;


//////////////
//////////////
///////////////
//////////////

// import { useEffect, useState } from 'react';
// import { client } from '../sanity/client';
// import VenueCard from './VenueCard';
// import '../styles/VenueList.css';

// function VenueList() {
//   const [venues, setVenues] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await client.fetch(`*[_type == "venue"]{
//         _id,
//         name,
//         slug,
//         happyHourDetails,
//         description,
//         neighborhood[]->{
//           name
//         }
//       }`);
//       setVenues(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="venue-list">
//       {venues.map((venue) => (
//         <VenueCard key={venue._id} venue={venue} />
//       ))}
//     </div>
//   );
// }

// export default VenueList;


//////////////
//////////////
///////////////
//////////////

import { useEffect, useState } from 'react'
import { client } from '../sanity/client'
import '../styles/VenueList.css'

function VenueList() {
  const [venues, setVenues] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('All')

  useEffect(() => {
    async function fetchVenues() {
      try {
        setLoading(true)
        const data = await client.fetch(`*[_type == "venue"]{
          _id,
          name,
          neighborhoods
        }`)
        setVenues(data)
      } catch (err) {
        setError('Failed to load venues')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchVenues()
  }, [])

  // Get unique neighborhoods from venues
  const allNeighborhoods = Array.from(
    new Set(venues.flatMap(venue => venue.neighborhoods ?? []))
  ).sort()

  // Filter venues based on selectedNeighborhood
  const filteredVenues =
    selectedNeighborhood === 'All'
      ? venues
      : venues.filter(venue =>
          venue.neighborhoods?.includes(selectedNeighborhood)
        )

  if (loading) return <div>Loading venues...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="venue-list-container">
      <div className="filter-container">
        <label htmlFor="neighborhood-select">Filter by neighborhood:</label>
        <select
          id="neighborhood-select"
          value={selectedNeighborhood}
          onChange={e => setSelectedNeighborhood(e.target.value)}
        >
          <option value="All">All</option>
          {allNeighborhoods.map(neighborhood => (
            <option key={neighborhood} value={neighborhood}>
              {neighborhood}
            </option>
          ))}
        </select>
      </div>

      <div className="venue-list">
        {filteredVenues.length === 0 ? (
          <div>No venues found.</div>
        ) : (
          filteredVenues.map(venue => (
            <div key={venue._id} className="venue-card">
              <h3>{venue.name}</h3>
              <p>Neighborhoods: {venue.neighborhoods?.join(', ') || 'N/A'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default VenueList