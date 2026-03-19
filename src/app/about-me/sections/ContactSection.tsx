import { SectionTitle } from "@/components/SectionTitle"

const ContactSection = () => {
    return (
        <section id="contact" className="scroll-mt-20">
            <SectionTitle sectionTitle={"Contacto"} position="center" />

            <article className="max-w-[600px] mx-auto">
                <div className="space-y-5">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="Nombre" className="font-semibold">Nombre</label>
                        <input type="text" id="Nombre" name="Nombre" className="outline-none border-2 rounded flex-1 px-3 py-1" placeholder="Tu nombre" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="Correo" className="font-semibold">Correo</label>
                        <input type="text" id="Correo" name="Correo" className="outline-none border-2 rounded flex-1 px-3 py-1" placeholder="Tu correo" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="Mensaje" className="font-semibold">Mensaje</label>
                        <textarea minLength={5} id="Mensaje" name="Mensaje" className="outline-none border-2 rounded flex-1 px-3 py-1" placeholder="Tu mensaje" />
                    </div>
                    <button className="bg-black text-white py-2 px-4 rounded w-full">Enviar</button>
                </div>
            </article>
        </section>
    )
}
export default ContactSection
