import type { Metadata } from "next";
import { EditNavbar } from "@/components/edit/edit-navbar";

export const metadata: Metadata = {
  title: "FH EDIT — Curated Premium Fashion",
  description:
    "Discover curated premium fashion from select sellers. FH Edit brings you the finest pieces, chosen for quality and style.",
};

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-edit-ivory font-edit text-edit-graphite">
      <EditNavbar />
      <main>{children}</main>
    </div>
  );
}
