import axios from "../../network/axios-config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Trip } from "./recently-viewed-trips.types";

const useRecentlyViewedTripsHook = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    axios
      .get<Trip[]>("trips")
      .then((e) => setTrips(e.data))
      .catch(() => toast.error("Failed to load data"));
  }, []);

  return { trips };
};

export { useRecentlyViewedTripsHook };
