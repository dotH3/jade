
interface Props {
  name?: string
  url: string;
  className?: string;
}

export const HistorialCard = ({ name, url, className }: Props) => {
  return (
    <div
      className={
        `p-2 rounded-md border-white/10 border gap-2 flex flex-col  ` +
        className
      }
    >
      <span className="truncate">{name || url}</span>
    </div>
  );
};
