import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthContext'

const Policy = () => {
  const { theme } = useContext(AuthContext)

  return (
    <div
      className={`min-h-screen    transition-colors duration-300
      ${theme === 'dark' ? 'bg-slate-950 text-slate-300' : 'bg-slate-50 text-slate-600'}`}
    >
      <div
        className={`mx-auto  shadow-sm border transition-all
        ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
      >
        <header className="mb-10">
          <h1
            className={`text-3xl md:text-4xl font-extrabold mb-4
            ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Privacy Policy
          </h1>
          <p className="text-sm italic opacity-75">
            Last Updated: May 15, 2026
          </p>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full"></div>
        </header>

        <div className="space-y-8">
          <section>
            <p className="leading-relaxed">
              At{' '}
              <span className="font-semibold text-emerald-500">
                Dreams Estate
              </span>
              , we are committed to protecting your privacy. This policy
              outlines how we handle your information:
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Introduction
            </h2>
            <p>
              Dreams Estate operates the Dreams Estate platform the Service,
              which enables users to browse, book, and manage estate properties.
              We're committed to protecting your privacy and handling your
              personal information with care.
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Dreams Estate platform—including our
              website, mobile applications, APIs, and any other services we
              provide—you acknowledge and agree that you have read, understood,
              and accept these Terms and Conditions ("Terms"), our Privacy
              Policy, and any other policies or guidelines that we may post from
              time to time.
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500">
              <li>
                <span className="font-bold">Provide & Improve Service:</span> To
                operate, maintain, and enhance the Dreams Estate platform.
              </li>
              <li>
                <span className="font-bold">Communications:</span> To send
                booking confirmations, updates, security alerts, and support
                messages.
              </li>
              <li>
                <span className="font-bold">Personalization:</span> To tailor
                search results, recommendations, and marketing communications.
              </li>
              <li>
                <span className="font-bold">Payments & Fraud Prevention:</span>{' '}
                To process payments, verify identities, and detect or prevent
                fraud.
              </li>
              <li>
                <span className="font-bold">Legal Compliance:</span> To comply
                with applicable laws, regulations, or legal processes.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Sharing Your Information
            </h2>
            <p className="mb-3">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500">
              <li>Hosts and Property Managers for booking details.</li>
              <li>Service Providers for payment processing and analytics.</li>
              <li>Legal Authorities when required by law to protect rights.</li>
              <li>Business Transfers in connection with a merger or sale.</li>
            </ul>
          </section>

          <section
            className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-slate-800/50' : 'bg-slate-50'}`}
          >
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Data Security
            </h2>
            <p>
              We implement reasonable technical and organizational
              measures—encryption, access controls, and secure servers—to
              protect your information. However, no method of transmission over
              the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We'll notify
              you of material changes by posting the new policy on this page
              with a new "Last Updated" date.
            </p>
          </section>
        </div>


      </div>
    </div>
  )
}

export default Policy
