import { ReactNode } from "react";

const Card: React.FC<{
  header?: string | ReactNode;
  subheader?: string | ReactNode;
  description?: string | ReactNode;
}> = ({ description, header, subheader }) => {
  return (
    <article
      className="w-4/5 glass-effect flex justify-center items-center"
      style={{ height: "95%" }}
    >
      <div
        className="w-3/5 flex flex-col items-center justify-between p-4 h-full"
        style={{ maxHeight: "400px" }}
      >
        <header className="p-1">
          <h3 className="text-bold-effect text-center">{subheader}</h3>
        </header>

        <section>
          <h2 className="font-black text-4xl text-center">{header}</h2>
        </section>

        <footer>
          <div style={{ fontFamily: "quicksand" }} className="text-center">
            {description}
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Card;
