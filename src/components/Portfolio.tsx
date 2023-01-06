import Project from "@/components/Project";

export default function Portfolio() {
  return (
    <section id="portfolio" className="mt-1o">
      <h1 className="text-xl font-medium">Portfolio</h1>
      <p className="mt-1 text-base">
        Here ara some of my public projects that I have managed
      </p>

      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <Project
          title="Test"
          description="Some description"
          date={new Date()}
        />

        <Project
          title="Test"
          description="Some description"
          date={new Date()}
        />

        <Project
          title="Test"
          description="Some description"
          date={new Date()}
        />
      </div>
    </section>
  );
}
