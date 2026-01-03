import React, { useEffect } from 'react';

function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20 pt-40">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#101920] mb-8">
          Terms of Service
        </h1>
        
        <p className="text-gray-600 mb-12">
          Last Updated: December 30, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern access to and use of the services provided by Omnisales, Inc. ("Omnisales," "we," "our," or "us"), including our website located at{' '}
              <a href="https://azops.ai" className="text-[#4756ff] hover:underline">
                https://azops.ai
              </a>{' '}
              and related services (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using the Services, or by signing a Business Associate Agreement ("BAA") with us, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree, you may not use the Services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              2. Eligibility
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Services are intended for use by businesses and authorized representatives only.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You must be at least 18 years old to use the Services.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              3. Description of Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omnisales provides AI-powered voice agents designed to assist dental practices with insurance verification workflows, including automated phone calls and related data processing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The Services are provided on a usage-based pricing model, billed per successful verification, unless otherwise agreed in writing.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              4. Business Associate Agreement (BAA)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a Covered Entity or Business Associate under HIPAA and use the Services to process Protected Health Information ("PHI"), you must enter into a Business Associate Agreement (BAA) with Omnisales.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The BAA governs the handling of PHI and is incorporated by reference into these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If no BAA is executed, you may not use the Services to process PHI.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              5. Account Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your credentials</li>
              <li>Ensure all use of the Services complies with applicable laws</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for all activity conducted under your account.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              6. Acceptable Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Use the Services for unlawful purposes</li>
              <li>Misuse, interfere with, or disrupt the Services</li>
              <li>Reverse engineer, copy, or attempt to extract source code or models</li>
              <li>Use the Services to train competing systems</li>
              <li>Use the Services outside the scope of healthcare operations</li>
              <li>Abuse, harass, or harm others</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate access for violations.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              7. Fees & Payment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pricing is usage-based per successful verification, unless otherwise agreed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fees are non-refundable except where explicitly agreed in writing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Failure to pay may result in suspension or termination of access.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              8. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate the agreement at any time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Access to the Services will cease</li>
              <li>Data handling will follow the applicable BAA or written agreement</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              9. Data & Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our collection and use of personal data is governed by our Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Customers retain ownership of their data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Omnisales may use anonymized and aggregated data to improve its services.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              10. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omnisales retains all rights to its software, systems, models, and intellectual property.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Customers retain ownership of their data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No rights are granted except as expressly stated.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              11. Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Services are provided "as is" and "as available."
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omnisales does not provide medical, legal, or insurance advice.
              The Services are intended to assist workflows, not replace professional judgment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not guarantee uninterrupted or error-free operation.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              12. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Omnisales' total liability shall not exceed the fees paid by the customer in the 12 months preceding the claim.</li>
              <li>Omnisales shall not be liable for indirect, incidental, consequential, or punitive damages.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              13. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify and hold harmless Omnisales from any claims arising from:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4">
              <li>Your misuse of the Services</li>
              <li>Your violation of applicable laws</li>
              <li>Your failure to obtain required patient consent</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              14. Governing Law & Dispute Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-law principles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All disputes shall be resolved through binding arbitration, and class actions are waived.
            </p>
          </section>

          {/* Section 15 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              15. Changes to These Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Updates will be posted on our website with a revised "Last Updated" date.
            </p>
          </section>

          {/* Section 16 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              16. Contact Information
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Omnisales, Inc.</strong>
              </p>
              <p className="text-gray-700 mb-2">
                455 Market St Ste 1940 PMB 530276<br />
                San Francisco, CA 94105-2448<br />
                United States
              </p>
              <p className="text-gray-700">
                📧{' '}
                <a href="mailto:sezer@azops.ai" className="text-[#4756ff] hover:underline font-semibold">
                  sezer@azops.ai
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;

