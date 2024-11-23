import { MESSAGE_ABOUT_ME } from "@/assets/common/messages";

const InformationAboutMe = () => {
  return (
    <div>
      <div className="px-4 py-0.5 border w-max rounded-lg border-green-300 bg-green-50 font-medium">
        <p>Disponibilidad de trabajo</p>
      </div>
      <h2 className="mb-4 mt-2 text-2xl font-bold uppercase text-dark/75">
        Desarrollador Frontend
      </h2>
      <div className="max-w-[600px]">
        {MESSAGE_ABOUT_ME.map((message, index) => (
          <p key={index} className="font-normal mb-4 text-base text-dark ">
            {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InformationAboutMe;
