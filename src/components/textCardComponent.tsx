export default function TextCardComponent({
  text,
  number,
}: {
  text: string;
  number: number;
}) {
  return (
    <div
      className="card-enhanced p-4 text-white h-100"
    >
      <div className="d-flex align-items-center h-100">
        <div className="">
          <div
            className="badge text-white p-3 me-3 mb-1"
            style={{
              backgroundColor: "#3a3a3aff",
              fontSize: "1.1rem",
            }}
          >
            {number}
          </div>
        </div>
        <p className="fs-7 p-0 m-0">{text}</p>
      </div>
    </div>
  );
}
