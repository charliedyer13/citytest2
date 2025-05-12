
import Head from 'next/head'
import { useState } from 'react'

const denverData = {
  city: "Denver",
  attractions: [
    "Red Rocks Amphitheatre",
    "Denver Art Museum",
    "Union Station",
    "Denver Botanic Gardens"
  ],
  avoid: [
    "Some areas in Five Points at night",
    "Colfax Avenue east of downtown"
  ],
  hotels: [
    "The Crawford Hotel",
    "Grand Hyatt Denver",
    "The Jacquard, Autograph Collection"
  ],
  coworking: [
    "Industrious Denver",
    "WeWork – 16th Street",
    "Alchemy Creative Workspace"
  ],
  transport: [
    "Uber/Lyft widely available",
    "Denver RTD Light Rail",
    "Scooters and bike shares"
  ]
}

export default function Home() {
  const [city, setCity] = useState('')
  const [showInfo, setShowInfo] = useState(false)

  const handleSearch = () => {
    if (city.toLowerCase() === 'denver') {
      setShowInfo(true)
    } else {
      setShowInfo(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>City Guide</title>
      </Head>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">City Guide</h1>
        <input
          type="text"
          placeholder="Enter a city (e.g., Denver)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>

        {showInfo && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Top Places to Visit</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.attractions.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Places to Avoid</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.avoid.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Hotels for Business Travelers</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.hotels.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Coworking Spaces</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.coworking.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Getting Around</h2>
            <ul className="list-disc ml-5 mb-4">
              {denverData.transport.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2 className="text-xl font-semibold mb-2">Visiting the Main Office</h2>
            <p className="mb-2">
              Our Denver office is an easy-going, professional space designed for comfort and collaboration.
            </p>
            <ul className="list-disc ml-5 mb-4">
              <li>Business casual dress code</li>
              <li>Open-plan layout encourages teamwork</li>
              <li>C-suite executives have private offices</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">U.S. Visa Requirements</h2>
            <p className="mb-2">
              If you're visiting Denver from outside the U.S., ensure proper visa arrangements.
            </p>
            <ul className="list-disc ml-5 mb-2">
              <li><strong>Visa Waiver Program (VWP):</strong> 90-day stay with ESTA for eligible countries.</li>
              <li><strong>B-1 Visa:</strong> Business activities like meetings or conferences.</li>
              <li><strong>B-2 Visa:</strong> Tourism or visiting family/friends.</li>
            </ul>
            <p className="mb-4">
              Learn more at the 
              <a href="https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" className="text-blue-600 underline" target="_blank"> U.S. State Department</a>.
            </p>
          </div>
        )}
      
            <h2 className="text-xl font-semibold mb-2">✈️ Arriving in Denver</h2>
            <p className="mb-4">
              We’re excited to host you in Denver! Here are some notes to help make your trip run smoothly. 
              Please reach out to your manager or the People Operations Team with any questions.
            </p>

            <h3 className="text-lg font-semibold mb-1">🚖 Booking Your Ride – Lyft/Uber</h3>
            <ul className="list-disc ml-5 mb-4">
              <li>Set pickup location to "Denver International Airport" or "DEN" and select EAST or WEST terminal.</li>
              <li><a className="text-blue-600 underline" href="#" target="_blank">Click here</a> for current airline-terminal list.</li>
              <li><a className="text-blue-600 underline" href="#" target="_blank">Click here</a> for DIA transportation info.</li>
              <li>Tip: Book your ride after reaching the main terminal and collecting all baggage.</li>
            </ul>

            <h3 className="text-lg font-semibold mb-1">🛬 After Landing</h3>
            <ul className="list-disc ml-5 mb-4">
              <li>Follow signs to baggage claim and take the train to the main terminal.</li>
              <li>Collect checked luggage.</li>
              <li>Proceed to Level 5: Follow "Ground Transportation" or "Ride App Pick-up" signs.</li>
              <li>Exit terminal via:
                <ul className="list-disc ml-5">
                  <li>West Side: Doors 504–510</li>
                  <li>East Side: Doors 506–510</li>
                </ul>
              </li>
              <li>Meet your driver at Island 5 for ride app pickups.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">🏢 Denver Office Logistics</h2>
            <ul className="list-disc ml-5 mb-4">
              <li><strong>Address:</strong> 555 17th Street, Denver CO, 80202 – 15th floor</li>
              <li><strong>Arrival:</strong> Check in at the lobby desk for Topia or ping Mackenzy, MaKenna, or your team.</li>
              <li><strong>Access:</strong> You’ll receive a visitor card for the week (required before 8am and after 5pm).</li>
              <li><strong>WiFi:</strong> Network: Topia</li>
            </ul>
</div>
    </div>
  )
}
