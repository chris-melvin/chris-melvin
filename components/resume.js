import { AiOutlineFilePdf } from "react-icons/ai";
export default function () {
  return (
    <div className=" bg-white  fixed z-50 right-0 top-5 ">
      <a className="text-3xl" href="/Resume.pdf">
        <AiOutlineFilePdf className="text-primary" />
      </a>
    </div>
  );
}
