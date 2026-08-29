import disclosureData from "@/content/affiliate-disclosure.json";

export default function AffiliateDisclosurePage() {
  const { title, updated, paragraphs, section } = disclosureData;

  return (
    <div className="container px-4 md:px-6 py-16 mx-auto max-w-4xl min-h-screen prose prose-slate dark:prose-invert">
      <h1>{title}</h1>
      <p>{updated}</p>
      
      {paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
      
      <h2>{section.heading}</h2>
      <p>{section.body}</p>
    </div>
  );
}
