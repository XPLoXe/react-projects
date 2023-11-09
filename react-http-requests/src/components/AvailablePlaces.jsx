import Places from "./Places.jsx";
import { useState, useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    // SOLUTION 1: Using async/await
    async function fetchPlaces() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:3000/places");
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        const data = await response.json();
        setAvailablePlaces(data.places);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }

    fetchPlaces();

    // SOLUTION 2: Using fetch() and then()
    // setIsLoading(true);
    // setError(null);
    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch.");
    //     }

    //     return response.json();
    //   })
    //   .then((data) => {
    //     // const transformedPlaces = data.map((place) => ({
    //     //   id: place.alpha3Code,
    //     //   name: place.name,
    //     //   image: place.flag,
    //     // }));

    //     setAvailablePlaces(data.places);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p className="fallback-text">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>{error}</p>
      </section>
    );
  }

  if (availablePlaces.length === 0) {
    return (
      <section>
        <p>No places available.</p>
      </section>
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
