export default function TextCardComponent({
  text,
  number,
}: {
  text: string;
  number: number;
}) {
  return (
    <div
      className="card text-white"
      style={{
        backgroundColor: "#2b2830ff",
        boxShadow: "0 2px 15px rgba(90, 90, 90, 0.1)",
      }}
    >
      <div className="card-body d-flex align-items-center">
        <div className="">
          <div
            className="badge text-white p-3 me-2 mb-1"
            style={{
              backgroundColor: "#3a3a3aff",
              fontSize: "1.1rem",
            }}
          >
            {number}
          </div>
        </div>
        <p className="p-0 m-0">{text}</p>
      </div>
    </div>
  );
}
