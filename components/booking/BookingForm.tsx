"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Phone,
  Calendar,
  Users,
  MapPin,
  Car,
  Plus,
  Upload,
  Eye,
  Trash2,
  FileText,
  Loader,
} from "lucide-react";
import { useBookingForm } from "@/hooks/useBookingForm";

export function BookingForm({
  variant = "page",
}: {
  variant?: "page" | "inline";
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [attachmentPreviewUrl, setAttachmentPreviewUrl] = useState<
    string | null
  >(null);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const {
    formData,
    vehicles,
    pickupLocations,
    dropoffLocations,
    loadingSystemData,
    loadingPickupLocations,
    loadingDropoffLocations,
    loadingPrice,
    submitting,
    errors,
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
  } = useBookingForm();

  useEffect(() => {
    return () => {
      if (attachmentPreviewUrl) URL.revokeObjectURL(attachmentPreviewUrl);
    };
  }, [attachmentPreviewUrl]);

  const steps = [
    { id: 1, title: "Personal Details", icon: Users },
    { id: 2, title: "Trip Details", icon: MapPin },
    { id: 3, title: "Schedule", icon: Calendar },
    { id: 4, title: "Review", icon: CheckCircle2 },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    const result = await submitBooking();

    if (result && result.success) {
      setBookingId(result.bookingId);
      setIsSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  };

  const handleAttachmentChange = (file: File | null) => {
    setAttachment(file);
    setAttachmentPreviewUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      if (!file) return null;
      if (file.type.startsWith("image/") || file.type === "application/pdf") {
        return URL.createObjectURL(file);
      }
      return null;
    });
  };

  const canProceedFromStep1 = formData.guestName && formData.contact;
  const canProceedFromStep2 =
    formData.pickupLocationId &&
    formData.dropoffLocationId &&
    formData.vehicleId;
  const canProceedFromStep3 =
    formData.pickupDate &&
    formData.pickupTime &&
    (formData.noOfAdults > 0 ||
      formData.noOfChilds > 0 ||
      formData.noOfInfants > 0);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center p-4 relative overflow-hidden">
        {showConfetti && <ConfettiAnimation />}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 max-w-2xl w-full text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-[var(--green)]/20 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 size={48} className="text-[var(--green)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-4"
          >
            Booking Submitted Successfully!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[var(--text-2)] mb-4"
          >
            Thank you for choosing Haramain Umrah Taxi. Our team will contact
            you shortly to confirm your booking.
          </motion.p>

          {bookingId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-[var(--bg-alt)] rounded-2xl p-4 mb-8 border border-[var(--gold)]/20"
            >
              <p className="text-sm text-[var(--text-2)] mb-1">
                Your Booking ID
              </p>
              <p className="text-2xl font-heading font-bold text-[var(--gold)]">
                {bookingId}
              </p>
            </motion.div>
          )}

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setBookingId(null);
            }}
            className="px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all"
          >
            Book Another
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`bg-[var(--bg)] px-4 ${variant === "page" ? "min-h-screen pt-32 pb-12" : "py-16"}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)]">
            Our Taxi Booking Form
          </h2>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      backgroundColor: isActive
                        ? "var(--gold)"
                        : isCompleted
                          ? "var(--green)"
                          : "var(--bg-alt)",
                      borderColor: isActive
                        ? "var(--gold)"
                        : isCompleted
                          ? "var(--green)"
                          : "var(--border)",
                    }}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isActive
                        ? "text-white"
                        : isCompleted
                          ? "text-white"
                          : "text-[var(--text-2)]"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <Icon size={18} />
                    )}
                  </motion.div>
                  <span
                    className={`text-[10px] md:text-xs font-heading font-semibold mt-2 ${
                      isActive
                        ? "text-[var(--gold)]"
                        : isCompleted
                          ? "text-[var(--green)]"
                          : "text-[var(--text-2)]"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 md:w-16 h-0.5 mx-2 md:mx-4 ${
                      isCompleted ? "bg-[var(--green)]" : "bg-[var(--border)]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Form Container */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full max-w-3xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[32px] p-6 md:p-8 lg:p-12 shadow-lg"
        >
          {errors.submission && (
            <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-600">
              {errors.submission}
            </div>
          )}

          {(errors.pickupLocations ||
            errors.dropoffLocations ||
            errors.price ||
            errors.systemData) && (
            <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm text-amber-700">
              {errors.pickupLocations ||
                errors.dropoffLocations ||
                errors.price ||
                errors.systemData}
            </div>
          )}

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <Step1PersonalInfo
                formData={formData}
                onChange={handleInputChange}
              />
            )}
            {currentStep === 2 && (
              <Step2TripDetails
                formData={formData}
                onChange={handleInputChange}
                vehicles={vehicles}
                pickupLocations={pickupLocations}
                dropoffLocations={dropoffLocations}
                loadingPickupLocations={loadingPickupLocations}
                loadingDropoffLocations={loadingDropoffLocations}
                loadingPrice={loadingPrice}
                onPickupLocationChange={handlePickupLocationChange}
                onDropoffLocationChange={handleDropoffLocationChange}
                onVehicleChange={handleVehicleChange}
                attachmentPreviewUrl={attachmentPreviewUrl}
                setAttachment={handleAttachmentChange}
                fetchPickupLocations={fetchPickupLocations}
              />
            )}
            {currentStep === 3 && (
              <Step3Schedule
                formData={formData}
                onChange={handleInputChange}
                onPassengerChange={handlePassengerChange}
              />
            )}
            {currentStep === 4 && <Step4Review formData={formData} />}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-8 border-t border-[var(--border)]">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold transition-all ${
                currentStep === 1
                  ? "bg-[var(--bg-alt)] text-[var(--text-3)] cursor-not-allowed"
                  : "bg-[var(--bg-alt)] text-[var(--text-1)] hover:bg-[var(--border)]"
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {currentStep < steps.length ? (
              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !canProceedFromStep1) ||
                  (currentStep === 2 && !canProceedFromStep2) ||
                  (currentStep === 3 && !canProceedFromStep3)
                }
                className={`flex items-center gap-2 px-6 py-3 font-heading font-semibold rounded-xl transition-all ${
                  (currentStep === 1 && !canProceedFromStep1) ||
                  (currentStep === 2 && !canProceedFromStep2) ||
                  (currentStep === 3 && !canProceedFromStep3)
                    ? "bg-[var(--gold)]/50 text-white/50 cursor-not-allowed"
                    : "bg-[var(--gold)] text-white hover:scale-105"
                }`}
              >
                Next
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className={`flex items-center gap-2 px-6 py-3 font-heading font-semibold rounded-xl transition-all ${
                  submitting
                    ? "bg-[var(--green)]/70 text-white cursor-not-allowed"
                    : "bg-[var(--green)] text-white hover:scale-105"
                }`}
              >
                {submitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <CheckCircle2 size={20} />
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Step1PersonalInfo({
  formData,
  onChange,
}: {
  formData: any;
  onChange: (field: string, value: any) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-[var(--text-1)]">
          Personal Details
        </h2>
        <p className="text-[var(--text-2)] mt-1">
          Please provide your contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Guest Name *
          </label>
          <input
            type="text"
            value={formData.guestName}
            onChange={(e) => onChange("guestName", e.target.value)}
            className="w-full px-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
            placeholder="Enter guest name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full px-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Contact *
          </label>
          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="tel"
              value={formData.contact}
              onChange={(e) => {
                const next = e.target.value;
                onChange("contact", next);
                if (formData.whatsappSameAsContact) {
                  onChange("whatsapp", next);
                }
              }}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              placeholder="+966XXXXXXXXX"
              required
            />
          </div>
          <p className="text-[11px] text-[var(--text-3)] mt-2">
            Please enter complete number with country code
          </p>
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            WhatsApp
          </label>
          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => {
                onChange("whatsapp", e.target.value);
                onChange("whatsappSameAsContact", false);
              }}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              placeholder="+966XXXXXXXXX"
            />
          </div>
          <label className="mt-2 flex items-center gap-2 text-[11px] text-[var(--text-2)]">
            <input
              type="checkbox"
              checked={formData.whatsappSameAsContact}
              onChange={(e) => {
                const checked = e.target.checked;
                onChange("whatsappSameAsContact", checked);
                if (checked) {
                  onChange("whatsapp", formData.contact);
                }
              }}
              className="accent-[var(--green)]"
            />
            Same as contact
          </label>
        </div>
      </div>
    </div>
  );
}

function Step2TripDetails({
  formData,
  onChange,
  vehicles,
  pickupLocations,
  dropoffLocations,
  loadingPickupLocations,
  loadingDropoffLocations,
  loadingPrice,
  onPickupLocationChange,
  onDropoffLocationChange,
  onVehicleChange,
  attachmentPreviewUrl,
  setAttachment,
  fetchPickupLocations,
}: {
  formData: any;
  onChange: <K extends string>(field: K, value: any) => void;
  vehicles: any[];
  pickupLocations: any[];
  dropoffLocations: any[];
  loadingPickupLocations: boolean;
  loadingDropoffLocations: boolean;
  loadingPrice: boolean;
  onPickupLocationChange: (id: string, name: string) => void;
  onDropoffLocationChange: (id: string, name: string) => void;
  onVehicleChange: (id: string, name: string) => void;
  attachmentPreviewUrl: string | null;
  setAttachment: (file: File | null) => void;
  fetchPickupLocations: (hotelName: string) => Promise<void>;
}) {
  const canPreview = Boolean(attachmentPreviewUrl);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-[var(--text-1)]">
            Trip Details
          </h2>
          <p className="text-[var(--text-2)] mt-1">
            Select your route and preferred vehicle.
          </p>
        </div>

        <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--green)] text-white font-heading font-bold text-xs cursor-pointer whitespace-nowrap">
          <Upload size={16} />
          Upload attachment
          <input
            type="file"
            className="hidden"
            accept="image/*,.pdf,.doc,.docx"
            onChange={(e) => setAttachment(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      {formData.attachment && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              {formData.attachment.type.startsWith("image/") &&
              attachmentPreviewUrl ? (
                <img
                  src={attachmentPreviewUrl}
                  alt="Attachment preview"
                  className="h-14 w-14 rounded-xl object-cover border border-[var(--border)]"
                />
              ) : (
                <div className="h-14 w-14 rounded-xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)]">
                  <FileText size={22} />
                </div>
              )}

              <div className="min-w-0">
                <div className="font-heading font-bold text-[var(--text-1)] truncate">
                  {formData.attachment.name}
                </div>
                <div className="text-xs text-[var(--text-2)]">
                  {Math.ceil(formData.attachment.size / 1024)} KB
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  if (attachmentPreviewUrl)
                    window.open(
                      attachmentPreviewUrl,
                      "_blank",
                      "noopener,noreferrer",
                    );
                }}
                disabled={!canPreview}
                className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl font-heading font-bold text-xs transition-all ${
                  canPreview
                    ? "bg-[var(--gold)] text-white hover:scale-[1.02]"
                    : "bg-[var(--bg)] text-[var(--text-3)] border border-[var(--border)] cursor-not-allowed"
                }`}
              >
                <Eye size={16} />
                Preview
              </button>
              <button
                type="button"
                onClick={() => setAttachment(null)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-heading font-bold text-xs bg-[var(--bg)] border border-[var(--border)] text-[var(--text-1)] hover:border-red-500/40 hover:text-red-600 transition-colors"
              >
                <Trash2 size={16} />
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Pickup Location *
          </label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            {loadingPickupLocations ? (
              <div className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] flex items-center gap-2">
                <Loader size={16} className="animate-spin" />
                Loading...
              </div>
            ) : (
              <select
                value={formData.pickupLocationId}
                onChange={(e) => {
                  const selected = pickupLocations.find(
                    (p) => p.hotels_id === e.target.value,
                  );
                  if (selected) {
                    onPickupLocationChange(selected.hotels_id, selected.name);
                  }
                }}
                className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
                required
              >
                <option value="">Select Pickup Location</option>
                {pickupLocations.map((loc: any) => (
                  <option key={loc.hotels_id} value={loc.hotels_id}>
                    {loc.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Dropoff Location *
          </label>
          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            {loadingDropoffLocations ? (
              <div className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] flex items-center gap-2">
                <Loader size={16} className="animate-spin" />
                Loading...
              </div>
            ) : (
              <select
                value={formData.dropoffLocationId}
                onChange={(e) => {
                  const selected = dropoffLocations.find(
                    (d) => d.routes_dropoff_id === e.target.value,
                  );
                  if (selected) {
                    onDropoffLocationChange(
                      selected.routes_dropoff_id,
                      selected.location_name,
                    );
                  }
                }}
                className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
                required
                disabled={!formData.pickupLocationId}
              >
                <option value="">
                  {formData.pickupLocationId
                    ? "Select Dropoff Location"
                    : "Select Pickup Location First"}
                </option>
                {dropoffLocations.map((loc: any) => (
                  <option
                    key={loc.routes_dropoff_id}
                    value={loc.routes_dropoff_id}
                  >
                    {loc.location_name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Select Vehicle *
          </label>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Car
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
              />
              <select
                value={formData.vehicleId}
                onChange={(e) => {
                  const selected = vehicles.find(
                    (v) => v.vehicles_id === e.target.value,
                  );
                  if (selected) {
                    onVehicleChange(
                      selected.vehicles_id,
                      selected.vehicle_name,
                    );
                  }
                }}
                className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
                required
              >
                <option value="">Select Vehicle</option>
                {vehicles.map((v: any) => (
                  <option key={v.vehicles_id} value={v.vehicles_id}>
                    {v.vehicle_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loadingPrice && (
            <div className="mt-3 flex items-center gap-2 text-sm text-[var(--text-2)]">
              <Loader size={14} className="animate-spin" />
              Fetching pricing...
            </div>
          )}

          {formData.bookedFare > 0 && (
            <div className="mt-3 rounded-xl bg-[var(--bg-alt)] p-3 border border-[var(--border)]">
              <div className="text-xs text-[var(--text-2)] mb-2">
                Pricing Information
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-[var(--text-3)]">Booked Fare</div>
                  <div className="font-bold text-[var(--text-1)]">
                    ${formData.bookedFare}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--text-3)]">Agent Fare</div>
                  <div className="font-bold text-[var(--text-1)]">
                    ${formData.agentFare}
                  </div>
                </div>
                <div>
                  <div className="text-[var(--text-3)]">Actual Fare</div>
                  <div className="font-bold text-[var(--gold)]">
                    ${formData.actualFare}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Step3Schedule({
  formData,
  onChange,
  onPassengerChange,
}: {
  formData: any;
  onChange: <K extends string>(field: K, value: any) => void;
  onPassengerChange: (type: string, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-[var(--text-1)]">
          Schedule
        </h2>
        <p className="text-[var(--text-2)] mt-1">When should we pick you up?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Pickup Date *
          </label>
          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="date"
              value={formData.pickupDate}
              onChange={(e) => onChange("pickupDate", e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Pickup Time *
          </label>
          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="time"
              value={formData.pickupTime}
              onChange={(e) => onChange("pickupTime", e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Number of Adults *
          </label>
          <div className="relative">
            <Users
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="number"
              min={0}
              value={formData.noOfAdults}
              onChange={(e) => onPassengerChange("noOfAdults", e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              placeholder="Number of adults"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Number of Children
          </label>
          <div className="relative">
            <Users
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="number"
              min={0}
              value={formData.noOfChilds}
              onChange={(e) => onPassengerChange("noOfChilds", e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              placeholder="Number of children"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Number of Infants
          </label>
          <div className="relative">
            <Users
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="number"
              min={0}
              value={formData.noOfInfants}
              onChange={(e) => onPassengerChange("noOfInfants", e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] focus:border-[var(--gold)] focus:outline-none transition-colors"
              placeholder="Number of infants"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-heading font-semibold text-[var(--text-1)] mb-2">
            Total Passengers
          </label>
          <div className="relative">
            <Users
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-3)]"
            />
            <input
              type="number"
              value={
                formData.noOfAdults + formData.noOfChilds + formData.noOfInfants
              }
              readOnly
              className="w-full pl-12 pr-4 py-3 bg-[var(--bg-alt)] border border-[var(--border)] rounded-xl text-[var(--text-1)] cursor-not-allowed opacity-75"
              placeholder="Auto-calculated"
            />
          </div>
          <p className="text-[11px] text-[var(--text-3)] mt-2">
            Auto-calculated based on adults, children, and infants
          </p>
        </div>
      </div>
    </div>
  );
}

function Step4Review({ formData }: { formData: any }) {
  const totalPassengers =
    formData.noOfAdults + formData.noOfChilds + formData.noOfInfants;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6">
        Review and Confirm Journey
      </h2>

      <div className="space-y-4">
        <ReviewSection
          title="Your Personal Details"
          items={[
            { label: "Guest Name", value: formData.guestName },
            { label: "Email", value: formData.email },
            { label: "Contact", value: formData.contact },
            { label: "WhatsApp", value: formData.whatsapp || formData.contact },
          ]}
        />

        <ReviewSection
          title="Your Journey Details"
          items={[
            { label: "Pickup Location", value: formData.pickupLocation },
            { label: "Dropoff Location", value: formData.dropoffLocation },
            { label: "Vehicle", value: formData.selectedVehicle },
          ]}
        />

        <ReviewSection
          title="Passengers Details"
          items={[
            { label: "Pickup Date", value: formData.pickupDate },
            { label: "Pickup Time", value: formData.pickupTime },
            { label: "Number of Adults", value: String(formData.noOfAdults) },
            { label: "Number of Children", value: String(formData.noOfChilds) },
            { label: "Number of Infants", value: String(formData.noOfInfants) },
            { label: "Total Passengers", value: String(totalPassengers) },
          ]}
        />

        {formData.bookedFare > 0 && (
          <ReviewSection
            title="Fare Details"
            items={[
              { label: "Booked Fare", value: `$${formData.bookedFare}` },
              { label: "Agent Fare", value: `$${formData.agentFare}` },
              { label: "Actual Fare", value: `$${formData.actualFare}` },
            ]}
          />
        )}
      </div>
    </div>
  );
}

function ReviewSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string | undefined }[];
}) {
  return (
    <div className="bg-[var(--bg-alt)] rounded-2xl p-6">
      <h3 className="text-lg font-heading font-bold text-[var(--gold)] mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-[var(--text-2)]">{item.label}</span>
            <span className="text-[var(--text-1)] font-semibold">
              {item.value || "-"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfettiAnimation() {
  const colors = [
    "var(--gold)",
    "var(--green)",
    "#FFD700",
    "#32CD32",
    "#FF6B6B",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            opacity: 1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            ease: "easeOut",
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          }}
        />
      ))}

      {/* Party Popper Effect */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{ duration: 0.5, times: [0, 0.5, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: Math.cos((i / 20) * Math.PI * 2) * 200,
              y: Math.sin((i / 20) * Math.PI * 2) * 200,
              opacity: 0,
            }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute w-2 h-8 rounded-full"
            style={{
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
              transform: `rotate(${(i / 20) * 360}deg)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
