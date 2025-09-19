import Image from "next/image";
import Link from "next/link";

export default function ProjectCardComponent({
  src,
  alt,
  title,
  description,
  link,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <>
      <div className="card-enhanced p-4 bg-dark text-white h-100">
        <Image
          src={src}
          className="card-img-top"
          alt={alt}
          width={400}
          height={200}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body mt-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link href={link} className="btn btn-gradient px-3 py-1 rounded">
            View Project
          </Link>
        </div>
      </div>
    </>
  );
}
