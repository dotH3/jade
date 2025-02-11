import { HistorialCard } from "./HistorialCard";
import { Container } from "./Container";
import { useToggle } from "usehooks-ts";
import { useState } from "react";

export const Sidebar = () => {
  const [containerName, setcontainerName] = useState("Ecomenu Api");
  const [compact, toggleCompact, setCompact] = useToggle(false);

  return (
    <div>
      <Container className={"min-w-[70px] max-w-[220px] h-full p-2"}>
        <div
          className={
            compact
              ? "h-full flex flex-col justify-between"
              : "flex justify-between"
          }
        >
          {compact ? <h3 className="text-center">{containerName.slice(0, 3)}</h3> : containerName}
          <button onClick={toggleCompact}> X </button>
        </div>
        {!compact && (
          <>
            <HistorialCard
              name={"get/client"}
              url={"https://httpbin.org/post"}
            />
            <HistorialCard url={"https://httpbin.org/post"} />
          </>
        )}
      </Container>
    </div>
  );
};
