import { useEffect, useState } from "react";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#1E1B4B]">
                <a
                  href="https://arzhost.com/"
                  className="hover:text-[#3E00FF] transition-colors"
                >
                  ARZ Host
                </a>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="https://arzhost.com/vps/"
                className="text-[#1E1B4B] hover:text-[#3E00FF] font-medium transition-colors"
              >
                VPS Server Hong Kong
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-[#1E1B4B] hover:text-[#3E00FF] font-medium transition-colors"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-[#1E1B4B] hover:text-[#3E00FF] font-medium transition-colors"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-[#1E1B4B] hover:text-[#3E00FF] font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-[#1E1B4B] hover:text-[#3E00FF] font-medium transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-[#1E1B4B] hover:text-[#3E00FF]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E1B4B] to-[#3E00FF] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            China‑Ready <span className="text-yellow-300">VPS Hosting</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Power your site from inside China fast, compliant, and always on.
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Low‑latency servers,{" "}
            <a
              href="https://en.wikipedia.org/wiki/ICP_license"
              className="underline hover:text-yellow-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              ICP‑license
            </a>{" "}
            assistance, and enterprise‑grade security in one affordable package.
          </p>
          <a
            href="https://arzhost.com/vps/"
            className="inline-block bg-yellow-400 text-[#1E1B4B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
          >
            ➜ Launch My China VPS
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
            💡 Why Host Inside Mainland China?
          </h2>

          <div className="overflow-x-auto mt-12">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[#1E1B4B] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Benefit</th>
                  <th className="px-6 py-4 text-left font-bold">
                    What It Means for You
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-[#1E1B4B]">
                    Ultra‑Low Latency
                  </td>
                  <td className="px-6 py-4 text-[#4B4B4B]">
                    Pages open in milliseconds for visitors across Beijing,
                    Shanghai, Shenzhen, and beyond no Great‑Firewall slow‑downs.
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#1E1B4B]">
                    Baidu & Local‑SEO Boost
                  </td>
                  <td className="px-6 py-4 text-[#4B4B4B]">
                    Search engines rank sites hosted on Chinese IPs higher,
                    giving you front‑page visibility for local keywords.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-[#1E1B4B]">
                    Legal Compliance
                  </td>
                  <td className="px-6 py-4 text-[#4B4B4B]">
                    We walk you through ICP filing, keeping your brand 100% in
                    line with MIIT regulations.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#1E1B4B]">
                    Chinese CDN Access
                  </td>
                  <td className="px-6 py-4 text-[#4B4B4B]">
                    Nationwide content delivery ensures lightning‑fast image,
                    video, and file loads even during peak traffic.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
            📦 VPS Plans & Pricing — Powered by{" "}
            <a
              href="https://arzhost.com/"
              className="text-[#3E00FF] hover:underline"
            >
              ARZ Host
            </a>
          </h2>

          <div className="overflow-x-auto mt-12">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden border">
              <thead className="bg-gradient-to-r from-[#1E1B4B] to-[#3E00FF] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Plan</th>
                  <th className="px-6 py-4 text-left font-bold">CPU / RAM</th>
                  <th className="px-6 py-4 text-left font-bold">NVMe SSD</th>
                  <th className="px-6 py-4 text-left font-bold">Bandwidth</th>
                  <th className="px-6 py-4 text-left font-bold">
                    Monthly Price*
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    plan: "Starter VPS",
                    cpu: "1 vCore / 2 GB",
                    storage: "20 GB",
                    bandwidth: "250 Mbit",
                    price: "$12.50",
                  },
                  {
                    plan: "Value VPS",
                    cpu: "1 vCore / 2 GB",
                    storage: "40 GB",
                    bandwidth: "250 Mbit",
                    price: "$16.00",
                  },
                  {
                    plan: "Essential VPS",
                    cpu: "2 vCores / 4 GB",
                    storage: "80 GB",
                    bandwidth: "250 Mbit",
                    price: "$34.00",
                  },
                  {
                    plan: "Comfort VPS",
                    cpu: "4 vCores / 8 GB",
                    storage: "160 GB",
                    bandwidth: "250 Mbit",
                    price: "$54.00",
                  },
                  {
                    plan: "Elite VPS",
                    cpu: "8 vCores / 8–32 GB",
                    storage: "160–640 GB",
                    bandwidth: "250 Mbit",
                    price: "$60.00 +",
                  },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-semibold text-[#1E1B4B]">
                      {item.plan}
                    </td>
                    <td className="px-6 py-4 text-[#4B4B4B]">{item.cpu}</td>
                    <td className="px-6 py-4 text-[#4B4B4B]">{item.storage}</td>
                    <td className="px-6 py-4 text-[#4B4B4B]">
                      {item.bandwidth}
                    </td>
                    <td className="px-6 py-4 font-bold text-[#3E00FF]">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-[#4B4B4B] mt-4">
              *Pricing verified July 1 2025.{" "}
              <a
                href="https://arzhost.com/"
                className="text-[#3E00FF] hover:underline"
              >
                arzhost.com
              </a>
            </p>
            <div className="text-center mt-6">
              <a
                href="https://arzhost.com/vps/"
                className="inline-block bg-[#3E00FF] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1E1B4B] transition-all shadow-lg"
              >
                Choose Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1B4B] mb-12">
            🔑 What's Included Every Plan
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Root Access",
                description:
                  "Install any OS or software stack; you're in total control.",
              },
              {
                title: "NVMe‑Backed Storage",
                description:
                  "Up to 6× faster reads/writes than SATA SSDs for snappy databases and CMSs.",
              },
              {
                title: "KVM Virtualization",
                description:
                  "Dedicated CPU & RAM, isolated from noisy neighbors for stable performance.",
              },
              {
                title: "DDoS Shield",
                description:
                  "Always‑on mitigation keeps your site online when attacks strike.",
              },
              {
                title: "24/7 Bilingual Support",
                description:
                  "Mandarin & English engineers on live chat, email, and phone.",
              },
              {
                title: "Weekly Snapshots",
                description:
                  "Automated backups with single‑click restores safeguard your data.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="font-bold text-[#1E1B4B] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4B4B4B]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Recommendations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1B4B] mb-12">
            🎯 Which Plan Fits You?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Starter / Value",
                description:
                  "Perfect for personal blogs, small business sites, or staging servers. Two gigs of RAM keep WordPress, Joomla, or Ghost running smoothly while NVMe drives slash load times.",
              },
              {
                title: "Essential",
                description:
                  "A dual‑core boost for growing stores or SaaS MVPs. Handles moderate traffic, small databases, and light API workloads without breaking the bank.",
              },
              {
                title: "Comfort",
                description:
                  "Quad‑core muscle and 8 GB RAM deliver headroom for high‑traffic e‑commerce, multiple client sites, or real‑time apps. Great choice when uptime and speed drive revenue.",
              },
              {
                title: "Elite",
                description:
                  "Enterprise horsepower for large catalogs, media platforms, or regional clusters. Scale RAM to 32 GB and storage to 640 GB as demand spikes—no migration needed.",
              },
            ].map((plan, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-[#1E1B4B] mb-3 text-xl">
                  {plan.title}
                </h3>
                <p className="text-[#4B4B4B]">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#3E00FF] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ⚙️ From Checkout to Go‑Live—in Three Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Pick a Plan",
                description: "Order online; servers provision in minutes.",
              },
              {
                step: "2",
                title: "Submit ICP Docs",
                description:
                  "We review and file with MIIT, guiding every requirement.",
              },
              {
                step: "3",
                title: "Deploy & Scale",
                description:
                  "Upload your code, attach a Chinese CDN, and expand resources anytime from your dashboard.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 text-[#1E1B4B] w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://arzhost.com/vps/"
              className="inline-block bg-yellow-400 text-[#1E1B4B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg"
            >
              ➜ Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1B4B] mb-8">
            Learn More About{" "}
            <a
              href="https://arzhost.com/"
              className="text-[#3E00FF] hover:underline"
            >
              VPS Hosting Hong Kong
            </a>
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/p8qVXz_2mPI"
              title="VPS Hosting Hong Kong"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1B4B] mb-12">
            ⭐ Client Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <p className="text-[#4B4B4B] text-lg mb-4 italic">
                "Switching to a mainland VPS cut our page load from 4 s to under
                1 s. Baidu rankings jumped within weeks."
              </p>
              <p className="font-semibold text-[#1E1B4B]">
                — Liang Z., Head of E‑Commerce, Shenzhen
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <p className="text-[#4B4B4B] text-lg mb-4 italic">
                "The{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-[#3E00FF] hover:underline"
                >
                  ARZ team
                </a>{" "}
                made the ICP process painless. Our China microsite was live
                ahead of schedule and under budget."
              </p>
              <p className="font-semibold text-[#1E1B4B]">
                — Rachel M., Global Marketing Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1B4B] mb-12">
            ❓ Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                question: "Do I really need an ICP license?",
                answer:
                  "Yes. Any public website hosted on a Chinese server must display a valid ICP number. Hosting without one risks takedown by local ISPs. We handle the paperwork, translations, and direct submission so you can focus on launch day.",
              },
              {
                question: "Can a foreign‑owned company apply for ICP?",
                answer:
                  "Absolutely. You'll need a Chinese‑registered business entity or a local partner; we'll outline acceptable structures, gather the required ID & corporate docs, and liaise with MIIT until approval comes through (typically 2–3 weeks).",
              },
              {
                question: "What if my traffic suddenly spikes?",
                answer:
                  "Our on‑demand scaling adds CPU, RAM, or storage in seconds, with no downtime. Combined with unmetered 250 Mbit bandwidth and optional Chinese CDN nodes, your site stays quick—even during flash sales or viral campaigns.",
              },
              {
                question: "Is the VPS fully managed?",
                answer:
                  "By default, servers are self‑managed to give you maximum freedom. If you prefer hands‑off operations, add a managed‑service pack and our sysadmins will handle updates, hardening, and monitoring 24/7—backed by strict SLAs.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "Each instance lives in an isolated KVM container with its own firewall. Weekly snapshots plus optional daily backups let you roll back any time. Enterprise‑grade DDoS filtering and 24/7 security ops keep threats at bay.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-[#1E1B4B] mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-[#4B4B4B]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#3E00FF] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🌟 Ready to Dominate the Chinese Market?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Launch a compliant, high‑performance VPS today—backed by local
            expertise and global‑grade infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://arzhost.com/vps/"
              className="bg-yellow-400 text-[#1E1B4B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg"
            >
              Start My China VPS
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="https://www.arzhost.com/contact-us/"
              className="text-white hover:text-yellow-300 font-semibold"
            >
              Live Chat
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="tel:+8640012341567"
              className="text-white hover:text-yellow-300 font-semibold"
            >
              +86‑400‑123‑4567
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1B4B] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">
                <a
                  href="https://arzhost.com/"
                  className="hover:text-yellow-300 transition-colors"
                >
                  ARZ Host
                </a>
              </h3>
              <p className="text-gray-300 mb-4">
                Professional{" "}
                <a
                  href="https://arzhost.com/"
                  className="text-yellow-300 hover:underline"
                >
                  VPS hosting Hong Kong
                </a>{" "}
                solutions for businesses targeting the Chinese market.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  Website:{" "}
                  <a
                    href="https://arzhost.com"
                    className="text-yellow-300 hover:underline"
                  >
                    arzhost.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+16315948060"
                    className="text-yellow-300 hover:underline"
                  >
                    +1 (631) 594-8060
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://arzhost.com/vps/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    VPS Server Hong Kong
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    VPS Region
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="text-gray-300 hover:text-yellow-300 transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>
              &copy; 2025{" "}
              <a
                href="https://arzhost.com/"
                className="text-yellow-300 hover:underline"
              >
                ARZ Host
              </a>
              . All rights reserved. | Professional VPS hosting solutions for
              the Chinese market.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
