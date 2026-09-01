import type { Metadata } from "next";
import { SettingsPage } from "@/components/SettingsPage";

export const metadata: Metadata = {
  title: "Settings",
  description: "ShelfMaster application settings and update management",
};

export default function SettingsRoute() {
  return (
    <div className="flex flex-col bg-muted/20">
      <div className="max-w-5xl mx-auto w-full py-8 md:py-12">
        <div className="px-4 md:px-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage library policies and keep ShelfMaster up to date.
          </p>
        </div>
        <SettingsPage />
      </div>
    </div>
  );
}
