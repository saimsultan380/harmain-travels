# Quick Start - API Integration Reference

## 🚀 What Was Built

✅ **4 API Proxy Routes** - Server-side CORS workaround
✅ **Custom Hook** - `useBookingForm` - All state & API logic
✅ **Updated Component** - Integrated API calls with UI
✅ **Environment Config** - `.env.local` setup

---

## 📋 File Overview

| File                                 | Purpose                                 |
| ------------------------------------ | --------------------------------------- |
| `.env.local`                         | API credentials                         |
| `app/api/system-data/route.js`       | Get vehicles, visa types, service types |
| `app/api/dependent-data/route.js`    | Get pickup/dropoff locations            |
| `app/api/routes-data/route.js`       | Get pricing data                        |
| `app/api/booking/route.js`           | Submit final booking                    |
| `hooks/useBookingForm.js`            | State management + API calls            |
| `components/booking/BookingForm.tsx` | Updated component using hook            |

---

## 🔌 Hook Usage in Component

```typescript
import { useBookingForm } from "@/hooks/useBookingForm";

export function BookingForm() {
  const {
    // State
    formData,
    vehicles,
    pickupLocations,
    dropoffLocations,

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
    setAttachment,
    submitBooking,
  } = useBookingForm();

  // Use in component...
}
```

---

## 📊 Form Data Structure

```typescript
{
  // Step 1
  guestName: string,
  email: string,
  contact: string,
  whatsapp: string,
  whatsappSameAsContact: boolean,

  // Step 2
  pickupLocation: string,          // name
  pickupLocationId: string,        // hotels_id
  dropoffLocation: string,         // name
  dropoffLocationId: string,       // routes_dropoff_id
  selectedVehicle: string,         // name
  vehicleId: string,               // vehicles_id
  vehicles: string[],
  attachment: File | null,

  // Step 3
  pickupDate: string,              // YYYY-MM-DD
  pickupTime: string,              // HH:MM
  noOfAdults: number,
  noOfChilds: number,
  noOfInfants: number,

  // From API
  routesId: string,
  bookedFare: number,
  agentFare: number,
  actualFare: number,
}
```

---

## 🔄 API Call Flow

```
1. Component mounts
   └─ Hook calls: GET /api/system-data
      └─ Populates vehicles dropdown

2. User selects pickup location
   └─ Hook calls: POST /api/dependent-data
      └─ Populates dropoff dropdown

3. User selects dropoff location
   └─ Dropoff ID stored

4. User selects vehicle
   └─ Hook calls: POST /api/routes-data
      └─ Returns pricing data

5. User submits (Step 4)
   └─ Hook calls: POST /api/booking
      └─ Also posts to Web3Forms for email
      └─ Returns booking ID
      └─ Shows success screen
```

---

## 🎨 UI Integration Points

| Component Part    | Hook Property                              | Usage                      |
| ----------------- | ------------------------------------------ | -------------------------- |
| Vehicles dropdown | `vehicles`                                 | `.map()` to render options |
| Pickup dropdown   | `pickupLocations`                          | `.map()` + loading state   |
| Dropoff dropdown  | `dropoffLocations`                         | `.map()` + loading state   |
| Vehicle dropdown  | `vehicles`                                 | `.map()` + loading state   |
| Pricing cards     | `formData.bookedFare/agentFare/actualFare` | Display when > 0           |
| Error messages    | `errors.*`                                 | Display at top of form     |
| Next button       | Validation checks                          | Disable when fields empty  |
| Submit spinner    | `submitting`                               | Show while posting         |

---

## 💾 Hardcoded Values (API Requirement)

```javascript
// In submitBooking() - these never change:
users_agents_id: 1;
booked_by: "Agents";
source: "Website";
service_type_id: 1;
visa_types_id: 1;
payment_type: "cash";
```

---

## ✅ Validation Rules

| Step  | Requirements                                                 |
| ----- | ------------------------------------------------------------ |
| **1** | guestName + contact filled                                   |
| **2** | pickupLocationId + dropoffLocationId + vehicleId selected    |
| **3** | pickupDate + pickupTime + (at least 1 passenger type) filled |
| **4** | All required fields populated                                |

---

## 🐛 Debugging Tips

**Check API calls:**

```javascript
// In hook or component
console.log("Form data:", formData);
console.log("Errors:", errors);
console.log("Loading:", {
  loadingPickupLocations,
  loadingDropoffLocations,
  loadingPrice,
});
```

**Monitor network requests:**

- DevTools → Network tab
- Filter by XHR to see API calls
- Check `/api/` routes for successful responses

**Test loading states:**

- DevTools → Network → Throttle to "Slow 3G"
- Dropdowns will show loading spinners

---

## 🚨 Common Issues & Fixes

| Issue                  | Solution                                                  |
| ---------------------- | --------------------------------------------------------- |
| Dropoff not populating | Check if pickup ID being passed to POST request           |
| Pricing not showing    | Verify all three selections made, check network tab       |
| Form won't submit      | Check browser console for validation errors               |
| Email not received     | Verify `NEXT_PUBLIC_WEB3FORMS_KEY` is set in `.env.local` |

---

## 📞 Data Format Details

### Pickup/Dropoff API Response

```json
{
  "hotels": [
    {
      "hotels_id": "123",
      "name": "Makkah Hotel"
    }
  ]
}
```

### Routes Data Response

```json
{
  "routes_id": "456",
  "booked_fare": "100",
  "agent_fare": "90",
  "actual_fare": "110"
}
```

### Booking Success Response

```json
{
  "booking_id": "789",
  "message": "Booking created successfully"
}
```

---

Done! Everything is ready for production. 🎉
