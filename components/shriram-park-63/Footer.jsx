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
          marginBottom: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
        data-aos="fade-in"
      >
        Shriram Park 63
      </h2>
      <p
        style={{
          fontSize: "13px",
          color: "var(--color-teal)",
          fontFamily: F_JOST,
          fontWeight: "700",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        Ready to Move-In · 3 BHK · Price Starting ₹1.51 Cr*
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <span
          style={{
            width: "36px",
            height: "2.5px",
            background:
              "linear-gradient(90deg, var(--color-teal), var(--color-teal-light))",
            borderRadius: "2px",
          }}
        />
      </div>
      <p
        style={{
          fontSize: "15px",
          color: "#bbb",
          fontFamily: F_SANS,
          lineHeight: 1.8,
          marginBottom: "32px",
          textAlign: "justify",
        }}
        data-aos="fade-in"
        data-aos-delay="100"
      >
        Shriram Park 63 is a vibrant 11.78-acre township in Perungalathur,
        Chennai, offering uber luxury 3 BHK residences with 40+ state-of-the-art
        amenities. Developed by Shriram Properties along the high-growth GST Road
        corridor, it features statuesque high-rise towers with MIVAN construction
        technology, EDGE certified green building standards, and free interiors
        offer worth ₹8 Lakhs* — crafted for those seeking a ready-to-move premium lifestyle.
      </p>
      {/* <div style={{ borderTop: '1px solid #333', marginBottom: '24px' }} /> */}
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 py-4 px-6 border-t border-[#222] text-center sm:text-left max-w-[1200px] mx-auto">
      <p style={{ fontSize: "13px", color: "#888", fontFamily: F_SANS }}>
        &copy; 2026 Shriram Park 63. All rights reserved.
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

    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "12px 24px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "10.5px",
          color: "#999",
          fontFamily: F_SANS,
          lineHeight: 1.7,
          textAlign: "justify",
        }}
      >
        <strong style={{ color: "#bbb" }}>Disclaimer:</strong> This is not the
        official website of the developer. The information depicted herein,
        including master plans, floor plans, furniture layout, fittings,
        illustrations, specifications, designs, dimensions, rendered views,
        colours, amenities and facilities etc., are subject to change without
        notification as may be required by the relevant authorities or the
        Developer&apos;s architect. This advertisement is an invitation to offer
        and shall not be construed as an offer or contract. * Prices subject to
        change without notice. All taxes extra as applicable.
      </p>
    </div>
  </footer>
);

export default Footer;
