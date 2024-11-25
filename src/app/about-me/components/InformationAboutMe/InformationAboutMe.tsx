import { MESSAGE_ABOUT_ME } from "@/assets/common/messages";

const InformationAboutMe = () => {
  return (
    <div className="space-y-2">
      <div className="px-4 py-0.5 border w-max rounded-lg border-green-300 bg-green-50 font-medium">
        <p>Disponibilidad para trabajar</p>
      </div>
      <h2 className="text-3xl font-bold uppercase text-dark/75">
        Hola! Soy Carlos Daniel Cruz Pérez
        <span className="text-lg block text-gray-600">Desarrollador Web</span>
      </h2> 

      <div className="max-w-[600px]">
        <p className="font-normal text-base text-dark ">
          {MESSAGE_ABOUT_ME}
        </p>
      </div>
    </div>
  );
};

export default InformationAboutMe;
