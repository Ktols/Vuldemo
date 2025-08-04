import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Siren, LogIn, UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Bienvenido a Alicorp Labs VulDemo</h1>
        <p className="text-lg text-muted-foreground">
          Una prueba de concepto de Alicorp Labs.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Acerca de esta Aplicación</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            VulnHub es una aplicación de demostración creada por Gerencias de Transición para Alicorp Labs. Está diseñada intencionalmente con fallas de seguridad para demostrar las capacidades de las herramientas de escaneo de seguridad como GitHub Advanced Security. Explore las diferentes páginas para ver ejemplos de secretos hardcodeados, dependencias vulnerables y vulnerabilidades de Cross-Site Scripting (XSS).
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
              <LogIn className="w-8 h-8 text-blue-500" />
              <div>
                <CardTitle>Login Inseguro</CardTitle>
                <CardDescription>Demostración de un formulario de inicio de sesión vulnerable.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Esta página contiene un formulario de inicio de sesión que simula una autenticación insegura, susceptible a ataques de inyección SQL.
            </p>
            <Button asChild>
              <Link href="/login">
                Visitar Página <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
              <UserPlus className="w-8 h-8 text-green-500" />
              <div>
                <CardTitle>Registro Inseguro</CardTitle>
                <CardDescription>Demostración de un formulario de registro con validación débil.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Esta página demuestra un formulario de registro que carece de validación de contraseña adecuada y podría exponer datos del usuario.
            </p>
            <Button asChild>
              <Link href="/register">
                Visitar Página <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
               <Siren className="w-8 h-8 text-destructive" />
              <div>
                <CardTitle>Fetch Vulnerable y Secretos</CardTitle>
                <CardDescription>Dependencias y secretos hardcodeados.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Esta página obtiene datos utilizando una librería desactualizada (`axios`) con una vulnerabilidad conocida y una clave de API hardcodeada.
            </p>
            <Button asChild>
              <Link href="/vulnerable-fetch">
                Visitar Página <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
              <ShieldAlert className="w-8 h-8 text-yellow-500" />
              <div>
                <CardTitle>Cross-Site Scripting (XSS)</CardTitle>
                <CardDescription>Una falla común en aplicaciones web.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Esta página demuestra una vulnerabilidad de XSS reflejado, donde la entrada del usuario se renderiza sin sanitización.
            </p>
            <Button asChild>
              <Link href="/vulnerable-xss">
                Visitar Página <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
