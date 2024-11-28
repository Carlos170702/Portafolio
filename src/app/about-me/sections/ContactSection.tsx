import { RenderModel } from "@/components/RenderModel"
import { SectionTitle } from "@/components/SectionTitle"
import { Message3DModel } from "../components/MessageModel3D"

const ContactSection = () => {
    return (
        <section>
            <SectionTitle sectionTitle={"Contacto"} position="center" />

            {/* Contact */}
            <article className="grid md:grid-cols-[auto,300px] lg:grid-cols-[auto,500px]">
                <div className="flex-1 space-y-5">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="Nombre" className="font-semibold">Nombre</label>
                        <input type="text" id="Nombre" name="Nombre" className="outline-none border-2 rounded flex-1 px-3 py-1" placeholder="Tu nombre" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="Nombre" className="font-semibold">Correo</label>
                        <input type="text" id="Nombre" name="Nombre" className="outline-none border-2 rounded flex-1 px-3 py-1" placeholder="Tu COrreo" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="Nombre" className="font-semibold">mensaje</label>
                        <textarea minLength={5} id="Nombre" name="Nombre" className="outline-none border-2 rounded flex-1 px-3 py-1" placeholder="Tu nombre" />
                    </div>
                    <button className="bg-black text-white py-2 px-4 rounded w-full">Enviar</button>
                </div>
                <div className="h-[600px] hidden md:block relative">
                    <RenderModel>
                        <Message3DModel />
                    </RenderModel>
                </div>
            </article>
        </section>
    )
}
export default ContactSection