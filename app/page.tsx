import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#E8E5D3]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Image src="/images/1.jpeg" alt="Ensaladas en Frasco + Salsas" width={800} height={200} className="mb-8" />
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl">
              <div>
                <Image
                  src="/images/10.webp"
                  alt="Ensalada fresca"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <Image
                  src="/images/7.webp"
                  alt="Ensalada en frasco"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <Button size="lg" className="mt-8 bg-[#5B6B3E] hover:bg-[#4A5A2E] text-white px-12 py-6 text-xl font-bold">
              ¡QUIERO LAS RECETAS!
            </Button>
          </div>
        </div>
      </section>

      {/* What You'll Find Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B6B3E] mb-2">lo que vas a</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B6B3E]">
              <span className="uppercase">encontrar:</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Funciona con cualquier frasco",
              "60 ensaladas deliciosas",
              "Salsas irresistibles",
              "El secreto de las capas",
              "Conservación de 7 días",
              "Listas en 30 minutos",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-lg">
                <Check className="text-[#5B6B3E] flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Image
              src="/images/2.jpeg"
              alt="Información sobre preparación"
              width={800}
              height={600}
              className="mx-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" className="bg-[#5B6B3E] hover:bg-[#4A5A2E] text-white px-12 py-6 text-xl font-bold">
              ¡QUIERO LAS RECETAS!
            </Button>
          </div>
        </div>
      </section>

      {/* Sample Salads Section */}
      <section className="py-16 bg-[#E8E5D3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B6B3E] mb-2">ALGUNAS ENSALADAS</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B6B3E]">
              <span className="uppercase">que aprenderás:</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <Image
                src="/images/6.webp"
                alt="Ensalada Refrescante"
                width={400}
                height={500}
                className="w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#5B6B3E] mb-2">ENSALADA REFRESCANTE</h3>
                <p className="text-sm text-gray-600">+ SALSA CÍTRICA</p>
                <p className="text-sm mt-2">Conservación: 7 días</p>
                <p className="text-sm">Calorías: 100 kcal</p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/images/7.webp"
                alt="Ensalada Caprese"
                width={400}
                height={500}
                className="w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#5B6B3E] mb-2">ENSALADA CAPRESE</h3>
                <p className="text-sm mt-2">Conservación: 7 días</p>
                <p className="text-sm">Calorías: 120 kcal</p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/images/8.webp"
                alt="Ensalada Caesar"
                width={400}
                height={500}
                className="w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#5B6B3E] mb-2">ENSALADA CAESAR</h3>
                <p className="text-sm text-gray-600">+ SALSA ORIGINAL</p>
                <p className="text-sm mt-2">Conservación: 7 días</p>
                <p className="text-sm">Calorías: 115 kcal</p>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-[#5B6B3E] hover:bg-[#4A5A2E] text-white px-12 py-6 text-xl font-bold">
              ¡QUIERO LAS RECETAS!
            </Button>
          </div>
        </div>
      </section>

      {/* More Salads */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <Image
                src="/images/9.png"
                alt="Ensaladas variadas"
                width={500}
                height={600}
                className="w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#5B6B3E] mb-2">ENSALADA BIG MAC</h3>
                <p className="text-sm text-gray-600">+ SALSA ESPECIAL</p>
                <p className="text-sm mt-2">Conservación: 7 días</p>
                <p className="text-sm">Calorías: 180 kcal</p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="/images/5.webp"
                alt="Ensalada Mediterránea"
                width={500}
                height={600}
                className="w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#5B6B3E] mb-2">ENSALADA MEDITERRÁNEA</h3>
                <p className="text-sm text-gray-600">+ SALSA AGRIDULCE</p>
                <p className="text-sm mt-2">Conservación: 7 días</p>
                <p className="text-sm">Calorías: 120 kcal</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fresh Section */}
      <section className="py-16 bg-[#5B6B3E] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-2">Frescura en el</h2>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="uppercase">PLATO</span>
            </h2>
            <p className="text-2xl mt-4">+ salsas irresistibles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Image src="/images/3.webp" alt="Ensalada 1" width={400} height={500} className="rounded-xl shadow-lg" />
            <Image src="/images/4.webp" alt="Ensalada 2" width={400} height={500} className="rounded-xl shadow-lg" />
            <Image src="/images/9.png" alt="Ensalada 3" width={400} height={500} className="rounded-xl shadow-lg" />
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-[#5B6B3E] hover:bg-gray-100 px-12 py-6 text-xl font-bold">
              ¡QUIERO LAS RECETAS!
            </Button>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B6B3E] mb-2">RECIBE ADEMÁS</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5B6B3E]">
              <span className="uppercase">+ 3 bonos exclusivos:</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <div className="mb-4">
                <span className="text-sm font-bold text-[#5B6B3E] uppercase">BONO 1:</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">SMOOTHIES DETOX</h3>
              <p className="text-xl mb-4">20 RECETAS</p>
              <p className="text-gray-500 line-through text-lg">$29.90</p>
              <p className="text-2xl font-bold text-[#5B6B3E]">¡HOY ES GRATIS!</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="mb-4">
                <span className="text-sm font-bold text-[#5B6B3E] uppercase">BONO 2:</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">SHOTS MATINALES</h3>
              <p className="text-xl mb-4">5 RECETAS</p>
              <p className="text-gray-500 line-through text-lg">$29.90</p>
              <p className="text-2xl font-bold text-[#5B6B3E]">¡HOY ES GRATIS!</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="mb-4">
                <span className="text-sm font-bold text-[#5B6B3E] uppercase">BONO 3:</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">AGUAS SABORIZADAS</h3>
              <p className="text-xl mb-4">15 RECETAS</p>
              <p className="text-gray-500 line-through text-lg">$29.90</p>
              <p className="text-2xl font-bold text-[#5B6B3E]">¡HOY ES GRATIS!</p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="bg-[#5B6B3E] hover:bg-[#4A5A2E] text-white px-12 py-6 text-xl font-bold">
              ¡QUIERO LAS RECETAS!
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-[#E8E5D3]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#5B6B3E] mb-2">¿ESTO TE PASA</h3>
              <h3 className="text-3xl font-bold text-[#5B6B3E]">A TI?</h3>
            </div>

            <div className="space-y-4 mb-12">
              {[
                "Pereza de lavar y cortar ensalada todos los días.",
                "Tiras la ensalada antes de poder usarla.",
                "Dejas de comer ensalada algunos días de la semana.",
                "Te cansaste de lechuga y tomate.",
                "Ya comes saludable, pero fallas con la ensalada.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Check className="text-[#5B6B3E] mt-1 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#5B6B3E]">Entonces necesitas esto:</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center border-4 border-[#5B6B3E]">
              <h2 className="text-3xl font-bold text-[#5B6B3E] mb-6">ENSALADAS EN FRASCO + SALSAS IRRESISTIBLES</h2>

              <div className="space-y-3 mb-8 text-left">
                {[
                  "+60 RECETAS DE ENSALADAS",
                  "+RECETAS DE SALSAS",
                  "+20 RECETAS DE SMOOTHIES",
                  "+5 RECETAS DE SHOTS MATINALES",
                  "+15 RECETAS DE AGUAS SABORIZADAS",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-[#5B6B3E]" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="text-gray-500 line-through text-2xl">De $129.00...</p>
                <p className="text-4xl font-bold text-[#5B6B3E] mt-2">6x de $5.66</p>
                <p className="text-2xl mt-2">o $29.90 al contado</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-[#5B6B3E] hover:bg-[#4A5A2E] text-white py-6 text-2xl font-bold mb-4"
              >
                ¡COMPRAR AHORA!
              </Button>

              <p className="text-red-600 font-bold">**OFERTA EXPIRA HOY**</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#E8E5D3]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#5B6B3E] mb-12">PREGUNTAS FRECUENTES</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-[#5B6B3E] mb-3">¿Cómo recibo mis recetas?</h3>
              <p className="text-gray-700 leading-relaxed">
                Tan pronto como se confirme el pago, recibirás acceso inmediato por WhatsApp y correo electrónico con
                las 60 recetas de ensaladas, las salsas irresistibles y todos los bonos. Todo disponible para que
                descargues y empieces a usar al instante. Sin espera, sin complicaciones.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-[#5B6B3E] mb-3">¿El curso tiene garantía?</h3>
              <p className="text-gray-700 leading-relaxed">
                ¡Sí! Tienes 7 días de garantía incondicional para probar las recetas. Si no te gusta por cualquier
                motivo, solo pide el reembolso y te devolvemos el 100% del valor invertido. Así de simple.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-[#5B6B3E] mb-3">¿Necesito frascos especiales?</h3>
              <p className="text-gray-700 leading-relaxed">
                ¡No necesitas! Cualquier frasco que ya tengas en casa funciona perfectamente. Puede ser de plástico, de
                vidrio, grande o pequeño. Lo importante es que cierre bien para mantener la ensalada fresca. Nada de
                gastar dinero extra en equipamiento.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-[#5B6B3E] mb-3">¿Las recetas incluyen las salsas?</h3>
              <p className="text-gray-700 leading-relaxed">
                ¡Por supuesto! Todas las 60 recetas vienen con salsas específicas y deliciosas. Son salsas caseras,
                fáciles de hacer y que transforman completamente el sabor de la ensalada. Nunca más necesitarás comprar
                esas salsas industriales caras y llenas de conservantes.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-[#5B6B3E] mb-3">
                ¿Cuánto tiempo dura la ensalada en frasco en el refrigerador?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cuando se monta correctamente siguiendo el método de capas que enseño, la ensalada dura de 5 a 7 días
                fresca en el refrigerador. Esto significa que preparas todo el domingo y tienes almuerzo o cena
                saludable lista toda la semana. Cero desperdicio, cero trabajo diario.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-[#5B6B3E] mb-3">
                ¿Puedo preparar toda la ensalada de una vez el fin de semana para toda la semana?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sí, ¡ese es exactamente el método que enseño! La mayoría de las personas preparan el sábado o domingo
                las ensaladas de toda la semana en aproximadamente 30 minutos. Es mucho más práctico que tener que
                picar, lavar y armar ensalada todos los días.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#5B6B3E] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">¡Transforma tu alimentación hoy!</h2>
          <Button size="lg" className="bg-white text-[#5B6B3E] hover:bg-gray-100 px-12 py-6 text-xl font-bold">
            ¡QUIERO LAS RECETAS!
          </Button>
        </div>
      </section>
    </div>
  )
}
