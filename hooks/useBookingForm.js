"use client";

import { useState, useEffect, useCallback } from "react";

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

  // Loading states
  const [loadingSystemData, setLoadingSystemData] = useState(true);
  const [loadingPickupLocations, setLoadingPickupLocations] = useState(false);
  const [loadingDropoffLocations, setLoadingDropoffLocations] = useState(false);
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

  // Load system data on mount
  useEffect(() => {
    const loadSystemData = async () => {
      setLoadingSystemData(true);
      setErrors((prev) => ({ ...prev, systemData: null }));

      try {
        const response = await fetch("/api/system-data");
        if (!response.ok) {
          const body = await response.text();
          throw new Error(
            `Failed to load system data: ${response.status} ${body}`,
          );
        }

        const data = await response.json();

        // Parse vehicles
        if (data.vehicles && Array.isArray(data.vehicles)) {
          setVehicles(data.vehicles);
        }

        // Parse visa types
        if (data.visa_types && Array.isArray(data.visa_types)) {
          setVisaTypes(data.visa_types);
        }

        // Parse service types
        if (data.service_types && Array.isArray(data.service_types)) {
          setServiceTypes(data.service_types);
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

  // Fetch pickup locations
  const fetchPickupLocations = useCallback(async (hotelName) => {
    if (!hotelName) return;

    setLoadingPickupLocations(true);
    setErrors((prev) => ({ ...prev, pickupLocations: null }));

    try {
      const response = await fetch("/api/dependent-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data_type: "get_pickup_hotels",
          hotel_name: hotelName,
        }),
      });

      if (!response.ok) throw new Error("Failed to load pickup locations");

      const data = await response.json();
      if (data.hotels && Array.isArray(data.hotels)) {
        setPickupLocations(data.hotels);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      setErrors((prev) => ({ ...prev, pickupLocations: message }));
    } finally {
      setLoadingPickupLocations(false);
    }
  }, []);

  // Fetch dropoff locations
  const fetchDropoffLocations = useCallback(async (pickupId) => {
    if (!pickupId) return;

    setLoadingDropoffLocations(true);
    setErrors((prev) => ({ ...prev, dropoffLocations: null }));

    try {
      const response = await fetch("/api/dependent-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data_type: "get_dropoff_locations",
          routes_pickup_id: pickupId,
        }),
      });

      if (!response.ok) throw new Error("Failed to load dropoff locations");

      const data = await response.json();
      if (data.locations && Array.isArray(data.locations)) {
        setDropoffLocations(data.locations);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
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
      const response = await fetch("/api/routes-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routes_pickup_id: pickupId,
          routes_dropoff_id: dropoffId,
          vehicles_id: vehicleId,
          service_type: "Normal",
        }),
      });

      if (!response.ok) throw new Error("Failed to load price data");

      const data = await response.json();

      // Update pricing data
      setFormData((prev) => ({
        ...prev,
        routesId: data.routes_id || "",
        bookedFare: parseFloat(data.booked_fare) || 0,
        agentFare: parseFloat(data.agent_fare) || 0,
        actualFare: parseFloat(data.actual_fare) || 0,
      }));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      setErrors((prev) => ({ ...prev, price: message }));
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
    (locationId, locationName) => {
      setFormData((prev) => ({
        ...prev,
        pickupLocationId: locationId,
        pickupLocation: locationName,
        dropoffLocation: "",
        dropoffLocationId: "",
      }));

      // Fetch dropoff options
      fetchDropoffLocations(locationId);
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
      }));
    },
    [],
  );

  // Handle vehicle selection with price fetch
  const handleVehicleChange = useCallback(
    (vehicleId, vehicleName) => {
      setFormData((prev) => ({
        ...prev,
        vehicleId,
        selectedVehicle: vehicleName,
      }));

      // Fetch price data
      if (formData.pickupLocationId && formData.dropoffLocationId) {
        fetchPriceData(
          formData.pickupLocationId,
          formData.dropoffLocationId,
          vehicleId,
        );
      }
    },
    [formData.pickupLocationId, formData.dropoffLocationId, fetchPriceData],
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

      // Prepare booking data
      const bookingData = {
        users_agents_id: 1,
        booked_by: "Agents",
        source: "Website",
        routes_id: formData.routesId,
        routes_pickup_id: formData.pickupLocationId,
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
        pickup_hotel: formData.pickupLocationId,
        dropoff_hotel: formData.dropoffLocationId,
        booked_fare: formData.bookedFare,
        agent_fare: formData.agentFare,
        actual_fare: formData.actualFare,
      };

      // Submit to booking API
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) throw new Error("Failed to create booking");

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
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
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
    // Loading states
    loadingSystemData,
    loadingPickupLocations,
    loadingDropoffLocations,
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
