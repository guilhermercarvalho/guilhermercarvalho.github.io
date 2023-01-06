import Stack from "@/components/Stack";

export default function Experience() {
  return (
    <section id="experience" className="">
      <h1 className="text-xl font-medium">Services</h1>
      <p className="mt-1 text-base">I do tons of shit</p>

      <div className="mt-4 flex flex-col md:flex-row gap-8 ">
        <Stack
          title="Software Development"
          description="Fullstack development"
          tools={["NodeJS", "React"]}
        />
        <Stack
          title="Software Development"
          description="Fullstack development"
          tools={["NodeJS", "React"]}
        />
        <Stack
          title="Software Development"
          description="Fullstack development"
          tools={["NodeJS", "React"]}
        />
      </div>
    </section>
  );
}
