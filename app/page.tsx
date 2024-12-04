"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Video, Mic, Users, Shield, Menu, X } from "lucide-react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      <header className="py-4 px-6 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center">

          <Link href="/" className="text-2xl font-bold text-blue-600">
            ConnectEase
          </Link>
          <nav className="hidden md:flex md:justify-center md:items-center space-x-4">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600"
            >
              Features
            </Link>

            <Link href="#" className="text-gray-600 hover:text-blue-600">
              About
            </Link>

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Get Started
            </button>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-gray-600 hover:text-blue-600"
            >
              Features
            </Link>

            <Link href="#" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link href="/call">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Get Started
              </button>
            </Link>
          </nav>
        </div>
      )}

      <main>
        <section className="py-20 bg-gradient-to-b from-white to-blue-50  ">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:gap-[15rem] justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Connect with Ease, Anytime, Anywhere
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience crystal-clear voice and video calls with ConnectEase.
                Stay connected with friends, family, and colleagues
                effortlessly.
              </p>
              <div className="space-x-4 ">
                <Link href="/call">
                  <button className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-7 py-3 rounded">
                    Start for Free
                  </button>
                </Link>
                <button className="text-blue-600 border border-blue-600 hover:bg-blue-50 text-lg px-7 py-3 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 ">
              <Image
                src="/hero.webp"
                alt="ConnectEase App Interface"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose ConnectEase?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Video className="h-10 w-10 text-blue-600" />,
                  title: "HD Video Calls",
                  description:
                    "Enjoy high-definition video calls with exceptional clarity and smoothness.",
                },
                {
                  icon: <Mic className="h-10 w-10 text-blue-600" />,
                  title: "Crystal Clear Audio",
                  description:
                    "Experience pristine audio quality for seamless conversations.",
                },
                {
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                  title: "Group Conferencing",
                  description:
                    "Host or join group calls with multiple participants effortlessly.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-blue-600" />,
                  title: "Secure Communication",
                  description:
                    "Your calls are protected with end-to-end encryption for maximum privacy.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Connect with Ease?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied users and experience the future of
              communication.
            </p>
            <Link href="/call">
              <button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 rounded">
                Get Started for Free
              </button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2023 prathamsk.me . All rights reserved.
            </div>
            <nav className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
