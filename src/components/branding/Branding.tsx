import "./branding.css";
import Image from "next/image";
//TODO: Make logo dynamic in scale
const Branding = () => {
  return (
    <>
      <div className="branding-wrapper">
        <Image src={"/logo.jpeg"} width={230} height={100} alt="branding" />
      </div>
    </>
  );
};

export default Branding;
