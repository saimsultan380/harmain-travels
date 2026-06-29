"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useBookingForm() {
  // Main form data
  const [formData, setFormData] = useState({
    // Step 1
    guestName: "",
    email: "",
    contact: "",
    whatsapp: "",
    whatsappSameAsContact: true,
    // Step 2
    pickupLocation: "",
    pickupLocationId: "",
    routesPickupId: "",
    dropoffLocation: "",
    dropoffLocationId: "",
    selectedVehicle: "",
    vehicleId: "",
    vehicles: [],
    // Step 3
    pickupDate: "",
    pickupTime: "",
    noOfAdults: 0,
    noOfChilds: 0,
    noOfInfants: 0,
    // Pricing data
    routesId: "",
    bookedFare: 0,
    agentFare: 0,
    actualFare: 0,
    // Step 2 attachment
    attachment: null,
  });

  // Dropdown options
  const [vehicles, setVehicles] = useState([]);
  const [pickupLocations, setPickupLocations] = useState([]);
  const [dropoffLocations, setDropoffLocations] = useState([]);
  const [visaTypes, setVisaTypes] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [vehicleAvailability, setVehicleAvailability] = useState({});

  // Loading states
  const [loadingSystemData, setLoadingSystemData] = useState(true);
  const [loadingPickupLocations, setLoadingPickupLocations] = useState(false);
  const [loadingDropoffLocations, setLoadingDropoffLocations] = useState(false);
  const [loadingVehicleAvailability, setLoadingVehicleAvailability] =
    useState(false);
  const [loadingPrice, setLoadingPrice] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Error states
  const [errors, setErrors] = useState({
    systemData: null,
    pickupLocations: null,
    dropoffLocations: null,
    price: null,
    submission: null,
  });

  const vehicleAvailabilityRequestId = useRef(0);

  const fetchPickupLocations = useCallback(async (hotelName = "Makkah") => {
    setLoadingPickupLocations(true);
    setErrors((prev) => ({ ...prev, pickupLocations: null }));

    try {
      console.log("[PICKUP-LOCATIONS] Fetching with hotel_name:", hotelName);
      const response = await fetch("/api/dependent-data/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data_type: "get_pickup_hotels",
          hotel_name: hotelName,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed: ${response.status} ${body}`);
      }

      const data = await response.json();
      console.log("[PICKUP-LOCATIONS] Response:", data);
      console.log("[PICKUP-LOCATIONS] Response keys:", Object.keys(data));

      if (data.hotels && Array.isArray(data.hotels)) {
        console.log("[PICKUP-LOCATIONS] Hotels found:", data.hotels.length);
        setPickupLocations(data.hotels);
      } else if (data.data && Array.isArray(data.data)) {
        console.log(
          "[PICKUP-LOCATIONS] Hotels found in data.data:",
          data.data.length,
        );
        setPickupLocations(data.data);
      } else {
        console.warn(
          "[PICKUP-LOCATIONS] No hotels array found. Full response:",
          data,
        );
        setPickupLocations([]);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("[PICKUP-LOCATIONS] Error:", message);
      setErrors((prev) => ({ ...prev, pickupLocations: message }));
    } finally {
      setLoadingPickupLocations(false);
    }
  }, []);

  const checkVehiclesForRoute = useCallback(
    async (pickupId, dropoffId) => {
      if (!pickupId || !dropoffId || !Array.isArray(vehicles) || !vehicles.length)
        return;

      const requestId = (vehicleAvailabilityRequestId.current += 1);
      setLoadingVehicleAvailability(true);
      setVehicleAvailability(() => {
        const next = {};
        vehicles.forEach((v) => {
          next[v.vehicles_id] = { status: "checking" };
        });
        return next;
      });

      try {
        const results = await Promise.all(
          vehicles.map(async (v) => {
            try {
              const response = await fetch("/api/routes-data/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  routes_pickup_id: pickupId,
                  routes_dropoff_id: dropoffId,
                  vehicles_id: v.vehicles_id,
                  service_type: "Normal",
                }),
              });

              if (!response.ok) {
                const text = await response.text();
                let laravelMessage = null;
                try {
                  const parsed = JSON.parse(text);
                  const laravelRaw = parsed?.laravel_response;
                  const laravelObj =
                    typeof laravelRaw === "string" ? JSON.parse(laravelRaw) : null;
                  laravelMessage = laravelObj?.message || parsed?.message || null;
                } catch {}

                return {
                  vehicles_id: v.vehicles_id,
                  available: false,
                  laravelMessage,
                };
              }

              return { vehicles_id: v.vehicles_id, available: true };
            } catch (e) {
              const laravelMessage =
                e instanceof Error ? e.message : "Unknown error occurred";
              return { vehicles_id: v.vehicles_id, available: false, laravelMessage };
            }
          }),
        );

        if (vehicleAvailabilityRequestId.current !== requestId) return;

        const next = {};
        results.forEach((r) => {
          const msg =
            typeof r.laravelMessage === "string" ? r.laravelMessage : "";
          const isNoRoute =
            msg.toLowerCase().includes("no route found") ||
            msg.toLowerCase().includes("no route");

          if (r.available) {
            next[r.vehicles_id] = { status: "available" };
          } else if (isNoRoute) {
            next[r.vehicles_id] = {
              status: "unavailable",
              label: "Not available for this route",
            };
          } else {
            next[r.vehicles_id] = {
              status: "unavailable",
              label: "Not available",
            };
          }
        });

        setVehicleAvailability(next);
      } finally {
        if (vehicleAvailabilityRequestId.current === requestId) {
          setLoadingVehicleAvailability(false);
        }
      }
    },
    [vehicles],
  );

  // Load system data on mount
  useEffect(() => {
    const loadSystemData = async () => {
      setLoadingSystemData(true);
      setErrors((prev) => ({ ...prev, systemData: null }));

      try {
        const response = await fetch("/api/system-data/");
        if (!response.ok) {
          const body = await response.text();
          throw new Error(
            `Failed to load system data: ${response.status} ${body}`,
          );
        }

        const data = await response.json();
        console.log("[SYSTEM-DATA-FRONTEND] Full response:", data);
        console.log("[SYSTEM-DATA-FRONTEND] Response keys:", Object.keys(data));

        // Parse vehicles
        const vehiclesArray = Array.isArray(data?.vehicles)
          ? data.vehicles
          : Array.isArray(data?.data?.vehicles)
            ? data.data.vehicles
            : Array.isArray(data?.system_data?.vehicles)
              ? data.system_data.vehicles
              : null;

        if (vehiclesArray) {
          console.log(
            "[SYSTEM-DATA-FRONTEND] Vehicles found:",
            vehiclesArray.length,
          );
          setVehicles(vehiclesArray);
        } else {
          console.warn(
            "[SYSTEM-DATA-FRONTEND] No vehicles array found. Full response:",
            data,
          );
        }

        // Parse visa types
        const visaTypesArray = Array.isArray(data?.visa_types)
          ? data.visa_types
          : Array.isArray(data?.data?.visa_types)
            ? data.data.visa_types
            : Array.isArray(data?.system_data?.visa_types)
              ? data.system_data.visa_types
              : null;

        if (visaTypesArray) {
          console.log(
            "[SYSTEM-DATA-FRONTEND] Visa types found:",
            visaTypesArray.length,
          );
          setVisaTypes(visaTypesArray);
        }

        // Parse service types
        const serviceTypesArray = Array.isArray(data?.service_types)
          ? data.service_types
          : Array.isArray(data?.data?.service_types)
            ? data.data.service_types
            : Array.isArray(data?.system_data?.service_types)
              ? data.system_data.service_types
              : null;

        if (serviceTypesArray) {
          console.log(
            "[SYSTEM-DATA-FRONTEND] Service types found:",
            serviceTypesArray.length,
          );
          setServiceTypes(serviceTypesArray);
        }

        const routesPickupArray = Array.isArray(data?.routes_pickup)
          ? data.routes_pickup
          : Array.isArray(data?.data?.routes_pickup)
            ? data.data.routes_pickup
            : Array.isArray(data?.system_data?.routes_pickup)
              ? data.system_data.routes_pickup
              : null;

        if (routesPickupArray) {
          console.log(
            "[SYSTEM-DATA-FRONTEND] Routes pickup found:",
            routesPickupArray.length,
          );
          setPickupLocations(routesPickupArray);
        } else {
          console.warn(
            "[SYSTEM-DATA-FRONTEND] No routes_pickup array found. Full response:",
            data,
          );
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unknown error occurred";
        setErrors((prev) => ({ ...prev, systemData: message }));
      } finally {
        setLoadingSystemData(false);
      }
    };

    loadSystemData();
  }, []);

  useEffect(() => {
    const pickupId = formData.routesPickupId || formData.pickupLocationId;
    const dropoffId = formData.dropoffLocationId;
    if (pickupId && dropoffId) {
      checkVehiclesForRoute(pickupId, dropoffId);
    } else {
      setVehicleAvailability({});
      setLoadingVehicleAvailability(false);
    }
  }, [
    formData.routesPickupId,
    formData.pickupLocationId,
    formData.dropoffLocationId,
    checkVehiclesForRoute,
  ]);

  // Fetch dropoff locations
  const fetchDropoffLocations = useCallback(async (pickupId) => {
    if (!pickupId) return;

    setLoadingDropoffLocations(true);
    setErrors((prev) => ({ ...prev, dropoffLocations: null }));

    try {
      console.log(
        "[DROPOFF-LOCATIONS] Fetching with routes_pickup_id:",
        pickupId,
      );
      const response = await fetch("/api/dependent-data/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data_type: "get_dropoff_locations",
          routes_pickup_id: pickupId,
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed: ${response.status} ${body}`);
      }

      const data = await response.json();
      console.log("[DROPOFF-LOCATIONS] Response:", data);
      console.log("[DROPOFF-LOCATIONS] Response keys:", Object.keys(data));

      if (data.locations && Array.isArray(data.locations)) {
        console.log(
          "[DROPOFF-LOCATIONS] Locations found:",
          data.locations.length,
        );
        setDropoffLocations(data.locations);
      } else if (data.data && Array.isArray(data.data)) {
        console.log(
          "[DROPOFF-LOCATIONS] Locations found in data.data:",
          data.data.length,
        );
        setDropoffLocations(data.data);
      } else {
        console.warn(
          "[DROPOFF-LOCATIONS] No locations array found. Full response:",
          data,
        );
        setDropoffLocations([]);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("[DROPOFF-LOCATIONS] Error:", message);
      setErrors((prev) => ({ ...prev, dropoffLocations: message }));
    } finally {
      setLoadingDropoffLocations(false);
    }
  }, []);

  // Fetch price/routes data
  const fetchPriceData = useCallback(async (pickupId, dropoffId, vehicleId) => {
    if (!pickupId || !dropoffId || !vehicleId) return;

    setLoadingPrice(true);
    setErrors((prev) => ({ ...prev, price: null }));

    try {
      console.log("[PRICE-DATA] Fetching with:", {
        pickupId,
        dropoffId,
        vehicleId,
      });
      const response = await fetch("/api/routes-data/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routes_pickup_id: pickupId,
          routes_dropoff_id: dropoffId,
          vehicles_id: vehicleId,
          service_type: "Normal",
        }),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed: ${response.status} ${body}`);
      }

      const data = await response.json();
      console.log("[PRICE-DATA] Response:", data);
      console.log("[PRICE-DATA] Response keys:", Object.keys(data));

      // Update pricing data
      const payload = data?.data && typeof data.data === "object" ? data.data : data;
      const routesId = payload?.routes_id || payload?.id || "";
      const fareRaw =
        payload?.fare ??
        payload?.booked_fare ??
        payload?.booking_fare ??
        payload?.actual_fare ??
        payload?.actual ??
        0;
      const bookedFare = parseFloat(fareRaw || 0);
      const agentFare = parseFloat(payload?.agent_fare || 0);
      const actualFare = parseFloat(payload?.actual_fare || fareRaw || 0);

      console.log("[PRICE-DATA] Extracted fares:", {
        routesId,
        bookedFare,
        agentFare,
        actualFare,
      });

      setFormData((prev) => ({
        ...prev,
        routesId,
        bookedFare,
        agentFare,
        actualFare,
      }));
    } catch (error) {
      const rawMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("[PRICE-DATA] Error:", rawMessage);

      let isNoRoute = false;

      try {
        const start = rawMessage.indexOf("{");
        const failedPart =
          rawMessage.includes("Failed:") && start >= 0 ? rawMessage.slice(start) : null;
        const parsed = failedPart ? JSON.parse(failedPart) : null;
        const laravelRaw = parsed?.laravel_response;
        const laravelObj =
          typeof laravelRaw === "string" ? JSON.parse(laravelRaw) : null;
        const laravelMessage = laravelObj?.message || parsed?.message;

        if (typeof laravelMessage === "string") {
          isNoRoute = laravelMessage.toLowerCase().includes("no route found");
        }
      } catch {}

      if (isNoRoute) {
        setVehicleAvailability((prev) => ({
          ...prev,
          [vehicleId]: {
            status: "unavailable",
            label: "Not available for this route",
          },
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          price:
            "Unable to load route details right now. Please try again in a moment.",
        }));
      }

      setFormData((prev) => ({
        ...prev,
        vehicleId: isNoRoute ? "" : prev.vehicleId,
        selectedVehicle: isNoRoute ? "" : prev.selectedVehicle,
        routesId: "",
        bookedFare: 0,
        agentFare: 0,
        actualFare: 0,
      }));
    } finally {
      setLoadingPrice(false);
    }
  }, []);

  // Handle input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };

      // Handle whatsapp sync with contact
      if (field === "contact" && prev.whatsappSameAsContact) {
        updated.whatsapp = value;
      }

      return updated;
    });
  }, []);

  // Handle pickup location selection
  const handlePickupLocationChange = useCallback(
    (locationId, locationName, routesPickupId) => {
      const pickupIdForApi = routesPickupId || locationId;
      setFormData((prev) => ({
        ...prev,
        pickupLocationId: locationId,
        pickupLocation: locationName,
        routesPickupId: pickupIdForApi,
        dropoffLocation: "",
        dropoffLocationId: "",
        selectedVehicle: "",
        vehicleId: "",
        routesId: "",
        bookedFare: 0,
        agentFare: 0,
        actualFare: 0,
      }));

      // Fetch dropoff options
      fetchDropoffLocations(pickupIdForApi);
    },
    [fetchDropoffLocations],
  );

  // Handle dropoff location selection
  const handleDropoffLocationChange = useCallback(
    (locationId, locationName) => {
      setFormData((prev) => ({
        ...prev,
        dropoffLocationId: locationId,
        dropoffLocation: locationName,
        selectedVehicle: "",
        vehicleId: "",
        routesId: "",
        bookedFare: 0,
        agentFare: 0,
        actualFare: 0,
      }));
    },
    [],
  );

  // Handle vehicle selection with price fetch
  const handleVehicleChange = useCallback(
    (vehicleId, vehicleName) => {
      const pickupIdForApi = formData.routesPickupId || formData.pickupLocationId;
      setFormData((prev) => ({
        ...prev,
        vehicleId,
        selectedVehicle: vehicleName,
        routesId: "",
        bookedFare: 0,
        agentFare: 0,
        actualFare: 0,
      }));

      // Fetch price data
      if (pickupIdForApi && formData.dropoffLocationId) {
        fetchPriceData(
          pickupIdForApi,
          formData.dropoffLocationId,
          vehicleId,
        );
      }
    },
    [
      formData.routesPickupId,
      formData.pickupLocationId,
      formData.dropoffLocationId,
      fetchPriceData,
    ],
  );

  // Handle passenger count changes
  const handlePassengerChange = useCallback((type, value) => {
    const numValue = parseInt(value) || 0;
    setFormData((prev) => ({
      ...prev,
      [type]: Math.max(0, numValue),
    }));
  }, []);

  // Submit booking
  const submitBooking = useCallback(async () => {
    if (submitting) return;

    setSubmitting(true);
    setErrors((prev) => ({ ...prev, submission: null }));

    try {
      // Validate required fields
      if (
        !formData.guestName ||
        !formData.contact ||
        !formData.pickupLocationId ||
        !formData.dropoffLocationId ||
        !formData.vehicleId ||
        !formData.pickupDate ||
        !formData.pickupTime
      ) {
        throw new Error("Please fill in all required fields");
      }

      if (!formData.routesId) {
        throw new Error(
          "Route details not loaded yet. Please re-select your vehicle to load the route.",
        );
      }

      // Prepare booking data
      const bookingData = {
        users_agents_id: 1,
        booked_by: "Agents",
        source: "Website",
        routes_id: formData.routesId,
        routes_pickup_id: formData.routesPickupId || formData.pickupLocationId,
        routes_dropoff_id: formData.dropoffLocationId,
        service_type_id: 1,
        visa_types_id: 1,
        name: formData.guestName,
        contact: formData.contact,
        whatsapp: formData.whatsapp || formData.contact,
        email: formData.email || "",
        payment_type: "cash",
        pickup_date: formData.pickupDate,
        pickup_time: formData.pickupTime,
        no_of_adults: formData.noOfAdults,
        no_of_childs: formData.noOfChilds,
        no_of_infants: formData.noOfInfants,
        no_of_passengers:
          formData.noOfAdults + formData.noOfChilds + formData.noOfInfants,
        "vehicles_id[0]": formData.vehicleId,
        pickup_hotel: formData.pickupLocation || "",
        dropoff_hotel: formData.dropoffLocation || "",
        booked_fare: formData.bookedFare,
        agent_fare: formData.agentFare,
        actual_fare: formData.actualFare,
      };

      // Submit to booking API
      const response = await fetch("/api/booking/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed to create booking: ${response.status} ${body}`);
      }

      const result = await response.json();

      // Also submit to Web3Forms for email notification
      if (process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
        const web3formsPayload = new FormData();
        web3formsPayload.append(
          "access_key",
          process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        );
        web3formsPayload.append(
          "subject",
          `New Booking Request from ${formData.guestName}`,
        );
        web3formsPayload.append("from_name", "Haramain Umrah Taxi Booking");

        web3formsPayload.append("guestName", formData.guestName);
        web3formsPayload.append("contact", formData.contact);
        web3formsPayload.append(
          "whatsapp",
          formData.whatsapp || formData.contact,
        );
        web3formsPayload.append("email", formData.email);
        web3formsPayload.append("pickupLocation", formData.pickupLocation);
        web3formsPayload.append("dropoffLocation", formData.dropoffLocation);
        web3formsPayload.append("selectedVehicle", formData.selectedVehicle);
        web3formsPayload.append("pickupDate", formData.pickupDate);
        web3formsPayload.append("pickupTime", formData.pickupTime);
        web3formsPayload.append(
          "totalPassengers",
          String(
            formData.noOfAdults + formData.noOfChilds + formData.noOfInfants,
          ),
        );

        if (formData.attachment) {
          web3formsPayload.append("attachment", formData.attachment);
        }

        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: web3formsPayload,
          });
        } catch (e) {
          console.error("Failed to send email notification:", e);
          // Don't throw - booking was already created successfully
        }
      }

      return {
        success: true,
        bookingId: result.booking_id || result.id,
        message: "Booking submitted successfully",
      };
    } catch (error) {
      const rawMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("[BOOKING-SUBMIT] Error:", rawMessage);

      let message =
        "Unable to submit booking right now. Please try again in a moment.";

      if (
        typeof rawMessage === "string" &&
        rawMessage.toLowerCase().includes("price/route not loaded")
      ) {
        message = rawMessage;
      }

      setErrors((prev) => ({ ...prev, submission: message }));
      return { success: false, message };
    } finally {
      setSubmitting(false);
    }
  }, [formData, submitting]);

  // Add/remove vehicles from list
  const addVehicleToList = useCallback((vehicle) => {
    setFormData((prev) => ({
      ...prev,
      vehicles: prev.vehicles.includes(vehicle)
        ? prev.vehicles
        : [...prev.vehicles, vehicle],
      selectedVehicle: "",
    }));
  }, []);

  const removeVehicleFromList = useCallback((vehicle) => {
    setFormData((prev) => ({
      ...prev,
      vehicles: prev.vehicles.filter((v) => v !== vehicle),
    }));
  }, []);

  // Set attachment
  const setAttachment = useCallback((file) => {
    setFormData((prev) => ({ ...prev, attachment: file }));
  }, []);

  return {
    // State
    formData,
    vehicles,
    pickupLocations,
    dropoffLocations,
    visaTypes,
    serviceTypes,
    vehicleAvailability,
    // Loading states
    loadingSystemData,
    loadingPickupLocations,
    loadingDropoffLocations,
    loadingVehicleAvailability,
    loadingPrice,
    submitting,
    // Error states
    errors,
    // Handlers
    handleInputChange,
    handlePickupLocationChange,
    handleDropoffLocationChange,
    handleVehicleChange,
    handlePassengerChange,
    addVehicleToList,
    removeVehicleFromList,
    setAttachment,
    submitBooking,
    fetchPickupLocations,
  };
}
