import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
  variable: "--font-poppins", // Define a CSS variable
});

export const metadata = {
  title: "McMaster Economics Society",
  description:
    "The McMaster Economics Society (MES) is dedicated to enhance the experience of all students with a passion for Economics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="MacEconSociety" />
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
