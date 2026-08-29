import changelogData from "@/content/changelog.json";

export default function ChangelogPage() {
  const { title, subtitle, entries } = changelogData;

  return (
    <div className="container px-4 md:px-6 py-16 mx-auto max-w-4xl min-h-screen">
      <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground mb-12">
        {subtitle}
      </p>

      <div className="space-y-12">
        {entries.map((log, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            <div className="md:grid md:grid-cols-4 gap-6 items-baseline">
              <div className="mb-4 md:mb-0 md:text-right">
                <span className="text-sm font-medium text-muted-foreground">{log.date}</span>
              </div>
              <div className="md:col-span-3 border-l-2 border-primary/20 pl-6 pb-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5" />
                <h3 className="text-xl font-bold mb-4">{log.version}</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {log.changes.map((change, i) => (
                    <li key={i}>{change}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
