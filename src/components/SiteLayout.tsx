import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <main className="min-h-screen bg-background">
    <Navbar />
    {children}
    <Footer />
  </main>
);

export default SiteLayout;