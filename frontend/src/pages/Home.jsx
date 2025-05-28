// // src/pages/Home.jsx
// import Header from '../components/Header'
// import MapView from '../components/MapView'
// import FilterBar from '../components/FilterBar'
// import VenueList from '../components/VenueList'

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <main className="px-4 py-4 max-w-6xl mx-auto">
//         <MapView />
//         <FilterBar />
//         <VenueList />
//       </main>
//     </div>
//   )
// }

import Header from '../components/Header'
import MapView from '../components/MapView'
import FilterBar from '../components/FilterBar'
import VenueList from '../components/VenueList'

function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <MapView />
        <FilterBar />
        <VenueList />
      </main>
    </>
  )
}

export default Home;