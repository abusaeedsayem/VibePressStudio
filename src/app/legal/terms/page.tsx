import termsData from "@/content/terms.json";

export default function TermsPage() {
  const { title, updated, sections } = termsData;

  return (
    <div className="container px-4 md:px-6 py-16 mx-auto max-w-4xl min-h-screen prose prose-slate dark:prose-invert">
      <h1>{title}</h1>
      <p>{updated}</p>
      
      {sections.map((s, idx) => (
        <div key={idx}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
