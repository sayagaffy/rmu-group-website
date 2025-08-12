"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  MessageCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  const contactLocations = [
    {
      type: "Head Office",
      name: "RMU Group Headquarters",
      address: "JL. TB Simatupang Kav. 36, RT.001/RW015, Cilandak Barat",
      city: "Jakarta Selatan",
      province: "DKI Jakarta",
      postalCode: "12430",
      phone: "+62 21 22761331",
      email: "info@rekayasamineralutama.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-blue-600 to-blue-800",
    },
    {
      type: "Laboratory",
      name: "RMU Research Laboratory",
      address: "Jl. Dangdeur Indah No.3, Sukagalih",
      city: "Bandung",
      province: "West Java",
      postalCode: "40163",
      phone: "+62 21 22761331",
      email: "info@rekayasamineralutama.com",
      hours: "Mon - Fri: 7:00 AM - 4:00 PM",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-teal-600 to-cyan-700",
    },
    {
      type: "Workshop & Pilot Plant",
      name: "RMU Future Workshop",
      address: "Bunihayu Village, Jalancagak District, Subang Regency",
      city: "Subang",
      province: "West Java",
      postalCode: "41281",
      phone: "+62 21 22761331",
      email: "info@rekayasamineralutama.com",
      hours: "Mon - Fri: 7:00 AM - 4:00 PM",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-green-600 to-teal-700",
    },
    {
      type: "Marine Operations",
      name: "PT Gemilang Kharisma",
      address:
        "Ruko Kharisma Business Centre Blok C No. 3-A, Kelurahan Sungai Harapan, Kecamatan Sekupang",
      city: "Batam",
      province: "Riau Islands",
      phone: "+62 778 4805412",
      email: "gemilangkharisma1@gmail.com",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      type: "Construction Office",
      name: "PT Kembar Jaya Abadi",
      address: "Jl. Untung Suropati, Perum GTL Blok BB No.14",
      city: "Samarinda",
      province: "East Kalimantan",
      postalCode: "75243",
      phone: "+62 541 271044",
      email: "kembarjaya_abadi@yahoo.co.id",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-orange-600 to-red-700",
    },
  ];

  const services = [
    "MPAL Technology Consultation",
    "Mining Technology Solutions",
    "Marine Sand Mining Operations",
    "Construction & Infrastructure",
    "Environmental Compliance",
    "Project Management Services",
  ];

  const openWhatsApp = (phone: string, officeName: string) => {
    const message = `Hello ${officeName}, I'm interested in learning more about RMU Group services.`;
    const formattedPhone = phone
      .replace(/\D/g, "")
      .replace(/^62/, "")
      .replace(/^0/, "");
    const whatsappPhone = `62${formattedPhone}`;
    window.open(
      `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    );
  };

  const openEmail = (email: string, subject: string) => {
    const encodedSubject = encodeURIComponent(subject);
    window.open(`mailto:${email}?subject=${encodedSubject}`);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-50 to-blue-50 section-padding"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 mb-4 px-4 py-2 rounded-full font-medium text-blue-800 text-sm">
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </div>
          <h2 className="mb-6 font-heading font-bold text-gray-900 text-4xl md:text-5xl">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 text-xl leading-relaxed">
            Ready to explore mining technology solutions or discuss your
            construction needs? Our team is here to help you achieve your goals.
          </p>
        </div>

        {/* Quick Contact CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 mb-16 p-8 lg:p-12 rounded-3xl text-white">
          <div className="items-center gap-8 grid lg:grid-cols-2">
            <div>
              <h3 className="mb-4 font-heading font-bold text-3xl">
                Get Started Today
              </h3>
              <p className="mb-6 text-blue-100 text-lg">
                Whether you need mining technology consultation, construction
                services, or marine operations support, we&apos;re ready to
                help.
              </p>
              <div className="space-y-3 text-blue-100">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-yellow-400 rounded-full w-2 h-2"></div>
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm mb-6 p-6 rounded-2xl">
                <h4 className="mb-4 font-bold text-xl">Quick Contact</h4>
                <div className="space-y-3 text-blue-100">
                  <div className="flex justify-center lg:justify-end items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>+62 21 22761331</span>
                  </div>
                  <div className="flex justify-center lg:justify-end items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">
                      info@rekayasamineralutama.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col gap-4">
                <button
                  onClick={() => openWhatsApp("+6282122761331", "RMU Group")}
                  className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
                <button
                  onClick={() =>
                    openEmail(
                      "info@rekayasamineralutama.com",
                      "Inquiry about RMU Group Services"
                    )
                  }
                  className="flex justify-center items-center gap-2 bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-blue-900 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="gap-8 grid lg:grid-cols-2 xl:grid-cols-3">
          {contactLocations.map((location, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-shadow"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-br ${location.gradient} p-6 text-white`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {location.icon}
                  </div>
                  <div>
                    <div className="bg-white/20 mb-1 px-2 py-1 rounded-full text-xs">
                      {location.type}
                    </div>
                    <h3 className="font-heading font-bold text-xl">
                      {location.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Address */}
                <div className="flex gap-3 mb-4">
                  <MapPin className="flex-shrink-0 mt-1 w-5 h-5 text-gray-400" />
                  <div className="text-gray-700">
                    <p className="font-medium">{location.address}</p>
                    <p className="text-sm">
                      {location.city}, {location.province}
                      {location.postalCode && ` ${location.postalCode}`}
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 text-sm">
                      {location.email}
                    </span>
                  </div>
                  {location.hours && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700 text-sm">
                        {location.hours}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => openWhatsApp(location.phone, location.name)}
                    className="flex flex-1 justify-center items-center gap-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-medium text-white text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  <button
                    onClick={() =>
                      openEmail(location.email, `Inquiry to ${location.name}`)
                    }
                    className="flex flex-1 justify-center items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium text-gray-700 text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white shadow-lg mx-auto p-8 rounded-2xl max-w-4xl">
            <h3 className="mb-4 font-heading font-bold text-gray-900 text-2xl">
              Ready to Start Your Project?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              Our team of experts is standing by to discuss your specific needs
              and provide tailored solutions for your mining, marine, or
              construction projects.
            </p>

            <div className="gap-6 grid md:grid-cols-3 mb-8">
              <div className="text-center">
                <div className="flex justify-center items-center bg-blue-100 mx-auto mb-3 rounded-full w-16 h-16">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="mb-1 font-semibold text-gray-900">Call Us</h4>
                <p className="text-gray-600 text-sm">
                  Immediate response during business hours
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-green-100 mx-auto mb-3 rounded-full w-16 h-16">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="mb-1 font-semibold text-gray-900">WhatsApp</h4>
                <p className="text-gray-600 text-sm">
                  Quick messaging for urgent inquiries
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center bg-purple-100 mx-auto mb-3 rounded-full w-16 h-16">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">
                  Detailed project discussions and proposals
                </p>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp("+6282122761331", "RMU Group")}
              className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-lg mx-auto px-8 py-4 rounded-lg font-semibold text-white transition-shadow"
            >
              <MessageCircle className="w-5 h-5" />
              Start Conversation Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
