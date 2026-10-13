import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <main style={{ minHeight: "100vh", padding: "48px", background: "#141513", color: "#eeece7", fontFamily: "system-ui, sans-serif" }}>
        <h1>Connect your Sanity project</h1>
        <p>Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET in your environment, then restart or redeploy the site.</p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
