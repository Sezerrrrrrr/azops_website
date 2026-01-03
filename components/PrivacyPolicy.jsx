import React, { useEffect } from 'react';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20 pt-40">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#101920] mb-8">
          Privacy Policy
        </h1>
        
        <p className="text-gray-600 mb-12">
          Last updated: December 30, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omnisales, Inc. ("Omnisales," "we," "our," or "us") operates the website{' '}
              <a href="https://azops.ai" className="text-[#4756ff] hover:underline">
                https://azops.ai
              </a>{' '}
              (the "Site") and provides AI-powered voice automation services for dental practices (the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our Site or use our Services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our Services, you agree to this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              2. Who We Are
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Legal entity:</strong> Omnisales, Inc.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Jurisdiction:</strong> Delaware, United States
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Business address:</strong>
              </p>
              <p className="text-gray-700 ml-4 mb-2">
                455 Market St Ste 1940 PMB 530276<br />
                San Francisco, CA 94105-2448<br />
                United States
              </p>
              <p className="text-gray-700">
                <strong>Contact email:</strong>{' '}
                <a href="mailto:sezer@azops.ai" className="text-[#4756ff] hover:underline">
                  sezer@azops.ai
                </a>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              3. Who This Policy Applies To
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Privacy Policy applies to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Dental practices and their authorized users located in the United States</li>
              <li>Visitors to our website</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our Services are intended only for users aged 18 or older.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              4. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-[#101920] mb-3">
              4.1 Information You Provide Directly
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#101920] mb-3">
              4.2 Information Processed Through Our Services (Healthcare Data)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When providing AI voice automation for insurance verification, we may process the following on behalf of our customers:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Call audio recordings</li>
              <li>Call transcripts</li>
              <li>Patient names</li>
              <li>Patient insurance details</li>
              <li>Patient dates of birth</li>
              <li>Patient policy numbers</li>
              <li>Patient addresses</li>
              <li>Patient insurance coverage information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This information may constitute Protected Health Information (PHI) under HIPAA.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We process this data only as a service provider / business associate and strictly according to customer instructions.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              5. How We Use Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Provide and operate our Services</li>
              <li>Perform insurance verification calls</li>
              <li>Improve system reliability and accuracy</li>
              <li>Maintain security and prevent misuse</li>
              <li>Communicate with customers</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-semibold">
              We do not sell personal data.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              6. HIPAA & Healthcare Compliance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Omnisales is HIPAA-aligned and operates as a Business Associate when handling protected health information.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate administrative, technical, and physical safeguards to protect PHI, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Access controls</li>
              <li>Encryption in transit and at rest</li>
              <li>Audit logging</li>
              <li>Secure infrastructure</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We also support Business Associate Agreements (BAAs) upon request.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              7. Data Storage & Retention
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Data is stored securely using HIPAA-compliant infrastructure.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Retention periods depend on contractual agreements with our customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Data may be deleted upon request, subject to legal and operational requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              8. Third-Party Service Providers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use trusted third-party services to operate our platform, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>AWS (cloud infrastructure)</li>
              <li>Supabase (database & backend services)</li>
              <li>Vapi (voice infrastructure)</li>
              <li>Twilio (telephony services)</li>
              <li>Deepgram (speech-to-text)</li>
              <li>OpenAI, Anthropic, Groq (AI processing)</li>
              <li>Stripe (payments)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These providers are contractually required to protect data and only process it according to our instructions.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              9. Cookies & Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use essential cookies only, required for:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Security</li>
              <li>Core site functionality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not use marketing or advertising cookies.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              10. Data Subject Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may request to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Requests can be submitted to:{' '}
              <a href="mailto:sezer@azops.ai" className="text-[#4756ff] hover:underline">
                sezer@azops.ai
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will respond in accordance with applicable data protection laws.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              11. Security Measures
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security practices, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li>Encrypted data transmission</li>
              <li>Access controls</li>
              <li>Monitoring and logging</li>
              <li>SOC 2 Type I aligned controls</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Despite our efforts, no system can be 100% secure.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              12. International Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All services are intended for U.S.-based customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Data may be processed in the United States or other jurisdictions where our infrastructure providers operate, using appropriate safeguards.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              13. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Services are not intended for individuals under 18 years of age, and we do not knowingly collect data from minors.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              14. Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Last updated" date.
            </p>
          </section>

          {/* Section 15 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#101920] mb-4">
              15. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <p className="text-gray-700 leading-relaxed">
              📧{' '}
              <a href="mailto:sezer@azops.ai" className="text-[#4756ff] hover:underline font-semibold">
                sezer@azops.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

