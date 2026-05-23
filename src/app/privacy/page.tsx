"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";

export default function Privacy() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
        <h1 className="font-playfair text-4xl text-on-background mb-8 font-medium">Privacy Policy</h1>
        
        <div className="font-inter text-sm text-on-surface-variant space-y-6 leading-relaxed">
          <p className="font-semibold text-on-background">Effective Date: May 23, 2026</p>
          
          <p>
            At STUDIO INTERIORS, we respect your privacy and are committed to protecting any personal information you share with us. This policy describes how we collect, use, and handle your data when you visit our website or inquire about our services.
          </p>

          <h2 className="font-playfair text-xl text-on-background pt-4 font-semibold">1. Information We Collect</h2>
          <p>
            When you use our contact form or request a consultation, we collect the personal details you provide to us, which may include your name, email address, phone number, and any project details you disclose.
          </p>

          <h2 className="font-playfair text-xl text-on-background pt-4 font-semibold">2. How We Use Your Information</h2>
          <p>
            We use your contact information solely to respond to your inquiries, schedule design consultations, and coordinate project services. We will never sell, lease, or distribute your personal details to third parties.
          </p>

          <h2 className="font-playfair text-xl text-on-background pt-4 font-semibold">3. Security</h2>
          <p>
            We take reasonable physical and electronic measures to secure and safeguard the data we collect. However, no internet transmission is entirely secure, and we cannot guarantee absolute security of data transmitted online.
          </p>

          <h2 className="font-playfair text-xl text-on-background pt-4 font-semibold">4. Cookies</h2>
          <p>
            Our website uses cookies and similar traffic analytics tags to monitor browsing activity and improve site performance. You can disable cookies in your browser settings at any time.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
