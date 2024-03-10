import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <div>
      <h1>Bienvenido a mi Portfolio</h1>
      {/* Contenido de tu página de inicio */}
      <nav>
        <Link href="/projects"><a>Proyectos</a></Link>
        <Link href="/contact"><a>Contacto</a></Link>
      </nav>
    </div>
      
    </main>
  );
}
