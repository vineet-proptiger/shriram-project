"use client";
import React from "react";
import Link from "next/link";

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const F_JOST = "var(--font-jost), Montserrat, sans-serif";

const Footer = () => (
  <footer style={{ background: "var(--color-dark)", color: "#fff" }}>
    <div
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "56px 24px 32px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "800",
          fontFamily: F_JOST,
          marginBottom: "18px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
        data-aos="fade-in"
      >
        Shriram Properties
      </h2>

      <p
        style={{
          fontSize: "15px",
          color: "#bbb",
          fontFamily: F_SANS,
          lineHeight: 1.8,
          marginBottom: "32px",
          textAlign: "center",
        }}
        data-aos="fade-in"
        data-aos-delay="100"
      >
        Shriram Properties is a reputed real estate developer in South India,
        known for delivering quality residential projects with a focus on design,
        functionality, and customer satisfaction. With a strong track record and
        a commitment to excellence, the company continues to create developments
        that offer both lifestyle value and strong investment potential.
      </p>

      <div style={{ borderTop: "1px solid #222", marginBottom: "24px" }} />

      <p
        style={{
          fontSize: "15px",
          color: "#fff",
          fontFamily: F_SANS,
          fontWeight: "700",
          marginBottom: "0",
        }}
      >
        Project RERA NO.: TN/01/Building/0112/2019 (Subject to official approvals)
      </p>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: "13px", color: "#888", fontFamily: F_SANS }}>
        &copy; 2026 Shriram Park 63. All rights reserved
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <Link
          href="/shriram-park-63/privacy-policy"
          style={{
            fontSize: "13px",
            color: "var(--color-teal)",
            fontFamily: F_SANS,
          }}
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
