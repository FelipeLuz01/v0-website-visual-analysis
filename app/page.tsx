import Image from 'next/image'
import Link from 'next/link'
import { Smile, Plus, UtensilsCrossed, Eye, Clock, ClipboardList } from 'lucide-react'

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <Image 
          src="/images/design-20sem-20nome-20-282-29.png" 
          alt="Ensaladas en Frasco + Salsas" 
          className="logo-img"
          width={1920}
          height={480}
          priority
        />
        <p className="tagline">
          <strong>60 RECETAS</strong> para hacer en tu casa y nunca más quedarte sin ensalada lista en la nevera, <strong>¡7 días sin marchitarse!</strong>
        </p>
        <Image 
          src="/img/hero-salada.png" 
          alt="Ensalada en frasco deliciosa" 
          className="hero-salada"
          width={350}
          height={467}
          priority
        />
        <Link href="#comprar" className="btn-primary">¡QUIERO LAS RECETAS!</Link>
      </section>

      {/* Beneficios */}
      <section className="beneficios">
        <h2>LO QUE VAS<br /><strong>A ENCONTRAR:</strong></h2>
        <ul className="lista-beneficios">
          <li>
            <span className="icon-circle">
              <Smile size={18} strokeWidth={2.5} />
            </span>
            <span>Funciona con cualquier frasco</span>
          </li>
          <li>
            <span className="icon-circle">
              <Plus size={20} strokeWidth={3} />
            </span>
            <span>60 ensaladas deliciosas</span>
          </li>
          <li>
            <span className="icon-circle">
              <UtensilsCrossed size={18} strokeWidth={2.5} />
            </span>
            <span>Salsas irresistibles</span>
          </li>
          <li>
            <span className="icon-circle">
              <Eye size={18} strokeWidth={2.5} />
            </span>
            <span>El secreto de las capas</span>
          </li>
          <li>
            <span className="icon-circle">
              <Plus size={20} strokeWidth={3} />
            </span>
            <span>Conservación de 7 días</span>
          </li>
          <li>
            <span className="icon-circle">
              <Clock size={18} strokeWidth={2.5} />
            </span>
            <span>Listas en 30 minutos</span>
          </li>
          <li>
            <span className="icon-circle">
              <ClipboardList size={18} strokeWidth={2.5} />
            </span>
            <span>Paso a paso de preparación</span>
          </li>
        </ul>
        <Image 
          src="/img/2.png" 
          alt="Ensaladas organizadas en la nevera" 
          className="beneficios-img"
          width={380}
          height={500}
        />
        <Link href="#comprar" className="btn-primary">¡QUIERO LAS RECETAS!</Link>
      </section>

      {/* Recetas */}
      <section className="recetas">
        <h2>ALGUNAS ENSALADAS<br /><strong>QUE TE VAN A ENCANTAR:</strong></h2>
        
        <div className="receta-card">
          <Image 
            src="/img/3.webp" 
            alt="Ensalada Refrescante"
            width={340}
            height={453}
          />
          <h3>ENSALADA REFRESCANTE<br />+ SALSA CÍTRICA</h3>
          <p>Conservación: 7 días<br />Calorías: 100 kcal</p>
        </div>

        <div className="receta-card">
          <Image 
            src="/img/4.webp" 
            alt="Ensalada Caprese"
            width={340}
            height={453}
          />
          <h3>ENSALADA CAPRESE</h3>
          <p>Conservación: 7 días<br />Calorías: 120 kcal</p>
        </div>

        <div className="receta-card">
          <Image 
            src="/img/5.webp" 
            alt="Ensalada Caesar"
            width={340}
            height={453}
          />
          <h3>ENSALADA CAESAR<br />+ SALSA ORIGINAL</h3>
          <p>Conservación: 7 días<br />Calorías: 115 kcal</p>
        </div>

        <Link href="#comprar" className="btn-primary">¡QUIERO LAS RECETAS!</Link>

        <div className="receta-card">
          <Image 
            src="/img/6.webp" 
            alt="Ensalada Big Mac"
            width={340}
            height={453}
          />
          <h3>ENSALADA BIG MAC<br />+ SALSA ESPECIAL</h3>
          <p>Conservación: 7 días<br />Calorías: 180 kcal</p>
        </div>

        <div className="receta-card">
          <Image 
            src="/img/7.webp" 
            alt="Ensalada Mediterránea"
            width={340}
            height={453}
          />
          <h3>ENSALADA MEDITERRÁNEA<br />+ SALSA AGRIDULCE</h3>
          <p>Conservación: 7 días<br />Calorías: 120 kcal</p>
        </div>

        <div className="receta-card">
          <Image 
            src="/img/8.webp" 
            alt="Ensalada Toscana"
            width={340}
            height={453}
          />
          <h3>ENSALADA TOSCANA<br />+ SALSA SICILIANA</h3>
          <p>Conservación: 7 días<br />Calorías: 130 kcal</p>
        </div>

        <div className="receta-card">
          <Image 
            src="/img/9.png" 
            alt="Ensalada Rústica"
            width={340}
            height={453}
          />
          <h3>ENSALADA RÚSTICA<br />+ MOSTAZA Y MIEL</h3>
          <p>Conservación: 7 días<br />Calorías: 160 kcal</p>
        </div>

        <Link href="#comprar" className="btn-primary">¡QUIERO LAS RECETAS!</Link>
      </section>

      {/* Salsas */}
      <section className="salsas">
        <h2>FRESCURA EN EL PLATO + <strong>SALSAS IRRESISTIBLES</strong></h2>
        <Image 
          src="/img/10.webp" 
          alt="Salsa verde sobre ensalada" 
          className="section-img"
          width={400}
          height={400}
        />
        <Image 
          src="/img/11.webp" 
          alt="Salsa cremosa" 
          className="section-img"
          width={400}
          height={400}
        />
        <Link href="#comprar" className="btn-primary">¡QUIERO LAS RECETAS!</Link>
      </section>

      {/* Video Preview */}
      <section className="video-section">
        <h2>MIRA LA PREVIA<br /><strong>DE LA CLASE 1:</strong></h2>
        <div className="video-placeholder">
          <Image 
            src="/img/12.webp" 
            alt="Tutorial de las capas" 
            className="section-img"
            width={400}
            height={300}
          />
          <div className="play-btn">▶</div>
        </div>
      </section>

      {/* Bonos */}
      <section className="bonos">
        <h2>RECIBE ADEMÁS<br /><strong>+ 3 BONOS EXCLUSIVOS:</strong></h2>
        
        <div className="bono-card">
          <Image 
            src="/img/13.webp" 
            alt="Smoothies Detox"
            width={300}
            height={300}
          />
          <h3>BONO 1:</h3>
          <h4>SMOOTHIES DETOX<br />20 RECETAS</h4>
          <p><span className="precio-tachado">$29.90</span> <span className="gratis">¡HOY ES GRATIS!</span></p>
        </div>

        <div className="bono-card">
          <Image 
            src="/img/14.webp" 
            alt="Shots Matinales"
            width={300}
            height={300}
          />
          <h3>BONO 2:</h3>
          <h4>SHOTS MATINALES<br />5 RECETAS</h4>
          <p><span className="precio-tachado">$29.90</span> <span className="gratis">¡HOY ES GRATIS!</span></p>
        </div>

        <div className="bono-card">
          <Image 
            src="/img/15.webp" 
            alt="Aguas Saborizadas"
            width={300}
            height={300}
          />
          <h3>BONO 3:</h3>
          <h4>AGUAS SABORIZADAS<br />15 RECETAS</h4>
          <p><span className="precio-tachado">$29.90</span> <span className="gratis">¡HOY ES GRATIS!</span></p>
        </div>

        <Link href="#comprar" className="btn-primary">¡QUIERO LAS RECETAS!</Link>
      </section>

      {/* Problemas */}
      <section className="problemas">
        <h2>¿ESTO TE PASA<br /><strong>A TI?</strong></h2>
        <ul className="lista-problemas">
          <li><span className="x-icon">✕</span> Pereza de lavar y cortar ensalada todos los días.</li>
          <li><span className="x-icon">✕</span> Tiras la ensalada antes de poder usarla.</li>
          <li><span className="x-icon">✕</span> Dejas de comer ensalada algunos días de la semana.</li>
          <li><span className="x-icon">✕</span> Ya te cansaste de lechuga y tomate.</li>
          <li><span className="x-icon">✕</span> Comes saludable, pero fallas con la ensalada.</li>
        </ul>
        <p className="entonces">ENTONCES NECESITAS ESTO:</p>
      </section>

      {/* Oferta Principal */}
      <section className="oferta" id="comprar">
        <div className="oferta-card">
          <h2>ENSALADAS EN FRASCO +<br /><strong>SALSAS IRRESISTIBLES</strong></h2>
          <Image 
            src="/img/16.webp" 
            alt="Mockup del producto" 
            className="mockup-img"
            width={200}
            height={250}
          />
          
          <ul className="lista-incluye">
            <li>+ 60 RECETAS DE ENSALADAS</li>
            <li>+ RECETAS DE SALSAS</li>
            <li>+ 20 RECETAS DE SMOOTHIES</li>
            <li>+ 5 RECETAS DE SHOTS MATINALES</li>
            <li>+ 15 RECETAS DE AGUAS SABORIZADAS</li>
          </ul>

          <p className="precio-original">De <s>$129.00</s>...</p>
          <p className="precio-parcelas">por 6x de<br /><span className="valor">$5.66</span></p>
          <p className="precio-vista">O $29.90 DE CONTADO</p>
          
          <a href="https://conocimientos.space/checkout" className="btn-comprar">¡COMPRAR AHORA!</a>
          <p className="urgencia">**LA OFERTA EXPIRA HOY**</p>
        </div>
      </section>

      {/* Sobre */}
      <section className="sobre">
        <h2>ENSALADAS DE LA NUTRI<br /><strong>AURORA PRADO</strong></h2>
        <Image 
          src="/img/1.png" 
          alt="Aurora Prado" 
          className="foto-aurora"
          width={280}
          height={150}
        />
        <p>Mis recetas de Ensaladas en Frasco y Salsas Irresistibles siempre fueron un éxito en internet. Decidí reunir las 60 mejores recetas en un solo lugar y compartir este conocimiento contigo también.</p>
        <p className="testimonios-titulo"><strong>Mira los mensajes</strong> que recibo casi todos los días:</p>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>PREGUNTAS FRECUENTES</h2>
        
        <details className="faq-item">
          <summary>¿Cómo recibo mis recetas?</summary>
          <p>Recibirás acceso inmediato por correo electrónico después de confirmar tu compra. El acceso es 100% online.</p>
        </details>

        <details className="faq-item">
          <summary>¿El curso tiene garantía?</summary>
          <p>¡Sí! Tienes 7 días de garantía incondicional. Si no te gusta, te devolvemos el 100% de tu dinero.</p>
        </details>

        <details className="faq-item">
          <summary>¿Necesito frascos especiales?</summary>
          <p>¡No! Funciona con cualquier frasco de vidrio que tengas en casa. No necesitas comprar nada especial.</p>
        </details>

        <details className="faq-item">
          <summary>¿Las recetas incluyen las salsas?</summary>
          <p>¡Sí! Cada receta viene con su salsa perfecta. También incluimos recetas de salsas para que combines como quieras.</p>
        </details>

        <details className="faq-item">
          <summary>¿Cuánto tiempo dura la ensalada en frasco en la nevera?</summary>
          <p>¡Hasta 7 días! El secreto está en el orden de las capas que te enseñamos.</p>
        </details>

        <details className="faq-item">
          <summary>¿Puedo preparar todas las ensaladas el fin de semana para toda la semana?</summary>
          <p>¡Claro que sí! Esa es la idea. En 30 minutos preparas ensaladas para 7 días.</p>
        </details>

        <details className="faq-item">
          <summary>¿Puedo vender ensaladas en frasco? ¿Cuánto puedo cobrar?</summary>
          <p>¡Sí! Muchas alumnas venden y ganan dinero extra. Te damos tips de precios y empaque.</p>
        </details>

        <details className="faq-item">
          <summary>¿Las recetas son fáciles de hacer?</summary>
          <p>¡Súper fáciles! Paso a paso con fotos. Cualquiera puede hacerlas.</p>
        </details>

        <details className="faq-item">
          <summary>¿Los ingredientes son fáciles de encontrar?</summary>
          <p>¡Sí! Usamos ingredientes que encuentras en cualquier supermercado o mercado local.</p>
        </details>

        <details className="faq-item">
          <summary>¿Necesito balanza o utensilios especiales?</summary>
          <p>¡No! Solo necesitas un cuchillo, tabla de cortar y frascos. Nada más.</p>
        </details>
      </section>

      {/* CTA Final */}
      <section className="cta-final">
        <Link href="#comprar" className="btn-primary">¡QUIERO LAS RECETAS!</Link>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Ensaladas en Frasco. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
