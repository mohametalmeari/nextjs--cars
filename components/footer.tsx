import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "FAQs" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary mt-20 px-res py-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 text-white">
        <div className="flex-[2] lg:flex-[1]">
          <Image src="/logo.svg" alt="RoadStar Motors" width={75} height={29} />
          <p className="my-5">
            Your trusted partner in finding the perfect car.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-[1]">
          <h2 className="font-semibold">Quick Links</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 flex-[2]">
          <h2 className="font-semibold">Contact Us</h2>
          <ul>
            <li>Address: 1234 RoadStar Drive, City, State, 12345</li>
            <li>Phone: 123-456-7890</li>
            <li>Email: contact@example.com</li>
            <li>Hours: Mon-Sat: 9 AM - 6 PM | Sun: Closed</li>
          </ul>
        </div>
      </div>
      <p className="pt-20 text-white">
        &copy; {new Date().getFullYear()} RoadStar Motors. All rights reserved.
      </p>
    </footer>
  );
};
