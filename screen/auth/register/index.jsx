import Image from "next/image";
import GoogleIcon from "public/googleiconpng.png";

export default function ScreenRegister() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div>
        <buton className="flex flex-row items-center uppercase bg-gray-300 py-2 px-4 rounded-lg text-black font-bold">
          Registrate con google
          <Image src={GoogleIcon} alt="Google Icon" className="h-6 w-12" />
        </buton>
      </div>
    </div>
  );
}
