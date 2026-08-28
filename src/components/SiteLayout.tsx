import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlineaChatbot from "@/components/AlineaChatbot";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <main className="min-h-screen bg-background">
    <Navbar />
    {children}
    <Footer />
    <AlineaChatbot />
  </main>
);

export default SiteLayout;