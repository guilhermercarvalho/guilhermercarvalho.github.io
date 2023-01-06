type ProjectProps = {
  title: string;
  description: string;
  date: Date;
};

export default function Project(props: ProjectProps) {
  const { title, description, date } = props;
  return (
    <div className="w-full md:w-2/6 shadow-md rounded">
      <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
        <img src="https://source.unsplash.com/random" alt="soft" />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-medium">{title}</h1>
        <p>{description}</p>
        <p className="text-sm text-gray-500">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
