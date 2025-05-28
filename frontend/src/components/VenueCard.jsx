// import '../styles/VenueCard.css'

// function VenueCard({ venue }) {
//   return (
//     <div className="venue-card">
//       <h3>{venue.name}</h3>
//       <p>Click for details</p>
//     </div>
//   )
// }

// export default VenueCard;
function VenueCard({ venue }) {
    return (
      <div className="venue-card">
        <h3>{venue.name}</h3>
        <p>{venue.description}</p>
        <p>
          Neighborhoods:{' '}
          {venue.neighborhood?.map((n) => n.name).join(', ') || 'None'}
        </p>
        <p>{venue.happyHourDetails}</p>
      </div>
    );
  }
  
  export default VenueCard;