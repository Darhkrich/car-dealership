// app/layout.js
import { CurrencyProvider } from "@/context/CurrencyContext";
import "./globals.css";

export const metadata = {
  title: "Car Dealership| Luxury & Premium Vehicles",
  description: "Discover a curated collection of premium vehicles. Competitive financing, certified inspections, and white-glove delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}