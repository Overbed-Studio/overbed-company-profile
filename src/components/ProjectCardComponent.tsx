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
      <div className="card bg-dark text-white">
        <Image
          src={src}
          className="card-img-top"
          alt={alt}
          width={400}
          height={200}
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link href={link} className="btn btn-primary">
            View Project
          </Link>
        </div>
      </div>
    </>
  );
}
