"use client";

import { ChangeEvent, FormEvent, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Check, Mail, X } from "lucide-react";
import { seatsGroup } from "@/lib/constants/seatsgroup";

const INTERESTS = [
  "Partnerships",
  "Suppliers",
  "Technology",
  "Hospitality",
  "Press & Media",
  "Other",
] as const;

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
};

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])';

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const descId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const nodes = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((node) => node.offsetParent !== null || node === closeRef.current);

      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setStatus("idle");
    }
  }, [open]);

  if (!mounted || !open) return null;

  const update =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setStatus("success");
    setForm(EMPTY_FORM);
  };

  return createPortal(
    <div className="sg-contact" role="presentation">
      <button
        type="button"
        className="sg-contact-backdrop"
        aria-label="Close contact form"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        className="sg-contact-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <button
          ref={closeRef}
          type="button"
          className="sg-contact-close"
          aria-label="Close"
          onClick={onClose}
        >
          <X className="h-4 w-4" strokeWidth={2.2} />
        </button>

        {status === "success" ? (
          <div className="sg-contact-success">
            <span className="sg-contact-success-icon" aria-hidden>
              <Check className="h-6 w-6" strokeWidth={2.4} />
            </span>
            <p className="eyebrow sg-contact-eyebrow">Message sent</p>
            <h2 id={titleId} className="heading sg-contact-title">
              Thanks for getting in touch.
            </h2>
            <p id={descId} className="sg-contact-copy">
              Our team will review your enquiry and reply to you shortly at the
              email you provided.
            </p>
            <button type="button" className="sg-contact-submit" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="sg-contact-head">
              <p className="eyebrow sg-contact-eyebrow">
                <span className="sg-contact-dash" aria-hidden />
                Get in Touch
              </p>
              <h2 id={titleId} className="heading sg-contact-title">
                Tell us how we can help.
              </h2>
              <p id={descId} className="sg-contact-copy">
                {seatsGroup.enquiryLabel} We typically respond within one
                business day.
              </p>
              <a href={`mailto:${seatsGroup.email}`} className="sg-contact-email">
                <Mail className="h-3.5 w-3.5" strokeWidth={1.8} />
                {seatsGroup.email}
              </a>
            </div>

            <form className="sg-contact-form" onSubmit={onSubmit} noValidate={false}>
              <div className="sg-contact-grid">
                <label className="sg-contact-field">
                  <span>First name</span>
                  <input
                    name="firstName"
                    autoComplete="given-name"
                    required
                    value={form.firstName}
                    onChange={update("firstName")}
                  />
                </label>
                <label className="sg-contact-field">
                  <span>Last name</span>
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    required
                    value={form.lastName}
                    onChange={update("lastName")}
                  />
                </label>
              </div>

              <div className="sg-contact-grid">
                <label className="sg-contact-field">
                  <span>Work email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                  />
                </label>
                <label className="sg-contact-field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={update("phone")}
                  />
                </label>
              </div>

              <div className="sg-contact-grid">
                <label className="sg-contact-field">
                  <span>Company</span>
                  <input
                    name="company"
                    autoComplete="organization"
                    required
                    value={form.company}
                    onChange={update("company")}
                  />
                </label>
                <label className="sg-contact-field">
                  <span>I&apos;m interested in</span>
                  <select
                    name="interest"
                    required
                    value={form.interest}
                    onChange={update("interest")}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {INTERESTS.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="sg-contact-field">
                <span>How can we help?</span>
                <textarea
                  name="message"
                  rows={3}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Share a little about your enquiry..."
                />
              </label>

              <div className="sg-contact-actions">
                <button
                  type="submit"
                  className="sg-contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                  {status === "idle" ? (
                    <span className="sg-contact-submit-icon" aria-hidden>
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  ) : null}
                </button>
                <p className="sg-contact-note">
                  By sending this form you agree to be contacted about your
                  enquiry.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
