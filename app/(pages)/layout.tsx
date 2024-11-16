import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TranslationProvider } from "@/contexts/translation-provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TranslationProvider>
      <div className="flex flex-col min-h-screen text-[#2D2D2D]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </TranslationProvider>
  );
}
