
export default function Cards({objeto}) {
    return (
        <section class="flex flex-col items-center lg:flex-row lg:items-stretch justify-center gap-8">
            <article class="card shadow-morado">
                <img class="h-2/3 " src={objeto.imagen} alt={objeto.titulo} />
                <div class="px-6 py-4 flex flex-col gap-4 items-center">
                    <h2 class="uppercase font-bold text-2xl">{objeto.nombre}</h2>
                    <p>{objeto.texto}</p>
                    <button class="btn w-4/5">
                        <span class="btn__span">Leer bio</span>
                    </button>
                </div>
            </article>


        </section>
    );
}
