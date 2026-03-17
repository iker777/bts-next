import Cards from "./Cards";
import { bts } from "@/data/miembros"
export default function ContenedorTarjetas() {
    return (
        <section class="flex flex-col items-center lg:flex-row lg:items-stretch justify-center gap-8">
            {bts.map((miembro, id) => (
                <Cards key={id} objeto={miembro} />
            ))}

        </section>


    )
}