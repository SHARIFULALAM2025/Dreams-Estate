import React, { useContext } from 'react'
import { AuthContext } from '../Authentication/AuthContext'

const Conditions = () => {
  const { theme } = useContext(AuthContext)

  return (
    <div
      className={`min-h-screen  transition-colors duration-300
      ${theme === 'dark' ? 'bg-slate-950 text-slate-300' : 'bg-slate-50 text-slate-600'}`}
    >
      <div
        className={` shadow-sm border transition-all
        ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
      >
        <header className="mb-10 text-center md:text-left">
          <h1
            className={`text-3xl md:text-4xl font-extrabold mb-4
            ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Terms & Conditions
          </h1>
          <p className="text-sm opacity-75">
            Please read these terms carefully before using our services.
          </p>
          <div className="h-1 w-24 bg-blue-500 mt-4 rounded-full mx-auto md:mx-0"></div>
        </header>

        <div className="space-y-8">
          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to{' '}
              <span className="font-semibold text-blue-500">Dreams Estate</span>
              . By accessing or using our platform—whether via web, mobile, or
              any other interface—you acknowledge that you have read,
              understood, and agree to be bound by these terms and conditions
              ("Terms"), our Privacy Policy, and any other policies or
              guidelines that we publish.
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Acceptance of Terms
            </h2>
            <p>
              By accessing or using the estate property located at{' '}
              <span className="italic">[Estate Address]</span>, you agree to
              comply with and be bound by these Terms and Conditions. If you do
              not agree to these terms, you may not use the estate.
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Booking and Payment
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>
                Reservations must be confirmed with a signed agreement and a
                non-refundable deposit of{' '}
                <span className="font-bold">[percentage]%</span> of the total
                cost.
              </li>
              <li>
                The balance must be paid in full by{' '}
                <span className="font-bold">[number]</span> days before the
                event or stay.
              </li>
              <li>
                Payment methods accepted: e.g., bank transfer, credit card,
                PayPal.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Use of Property
            </h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>
                The estate is to be used for{' '}
                <span className="italic">
                  [type of use, e.g., private events]
                </span>{' '}
                only.
              </li>
              <li>
                Maximum occupancy is{' '}
                <span className="font-bold">[number of guests]</span> unless
                otherwise agreed in writing.
              </li>
              <li>
                No commercial activity may take place on the property without
                prior written approval.
              </li>
            </ul>
          </section>

          <section
            className={`p-5 rounded-xl border ${theme === 'dark' ? 'bg-slate-800/40 border-slate-700' : 'bg-blue-50/50 border-blue-100'}`}
          >
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Rules and Conduct
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span> No smoking inside
                the buildings.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span> No pets allowed
                unless prior permission is granted.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span> The client is
                responsible for the conduct of all guests and any damage caused.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Cancellations and Refunds
            </h2>
            <p className="mb-2">
              Cancellations made 02 days before the reservation date will
              receive a <span className="font-bold">[percentage]%</span> refund,
              excluding the deposit.
            </p>
            <p>
              No refunds will be issued for cancellations within{' '}
              <span className="font-bold">[number]</span> days of the
              reservation date.
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Force Majeure
            </h2>
            <p>
              The estate shall not be liable for any failure to perform due to
              causes beyond its reasonable control, including natural disasters,
              government restrictions, or pandemics.
            </p>
          </section>

          <section>
            <h2
              className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}
            >
              Governing Law
            </h2>
            <p>
              These terms and conditions shall be governed by and interpreted
              according to the laws of{' '}
              <span className="font-semibold text-blue-500">London</span>.
            </p>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <button
            onClick={() => window.print()}
            className="text-sm font-medium text-blue-500 hover:text-blue-600 underline"
          >
            Download or Print Terms
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Conditions
