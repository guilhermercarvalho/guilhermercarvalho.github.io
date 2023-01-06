type StackProps = {
  title: string;
  description: string;
  tools: string[];
};

export default function Stack(props: StackProps) {
  const { title, description, tools } = props;
  return (
    <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
      <img
        src="https://source.unsplash.com/random"
        alt="soft"
        className="w-48"
      />
      <h2 className="text-xl">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <p className="text-xl">Tools Used</p>
      <ul>
        {tools.map((t, i) => {
          return <li key={i}>{t}</li>;
        })}
      </ul>
    </div>
  );
}
