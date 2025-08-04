"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { LogIn, AlertTriangle, KeyRound } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // VULNERABILIDAD: SIMULACIÓN DE INYECCIÓN SQL
    // En una aplicación real, esta consulta sería vulnerable.
    // Aquí, simplemente verificamos si la contraseña contiene un fragmento de inyección común.
    const sqlInjectionAttempt = /' OR '1'='1/.test(password);

    if (sqlInjectionAttempt) {
      toast({
        variant: "destructive",
        title: "¡Inicio de Sesión Exitoso! (Simulado)",
        description: "Se ha detectado un intento de inyección SQL. Acceso concedido.",
      });
    } else {
      toast({
        title: "Datos de Prueba",
        description: `Email: ${email}, Contraseña: ${password}. En un escenario real, esto se enviaría a un backend.`,
      });
    }
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <LogIn className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>Ingrese a su cuenta para continuar.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Su contraseña"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              ¿No tiene una cuenta?{' '}
              <Link href="/register" className="font-medium text-primary hover:underline">
                Regístrese
              </Link>
            </p>
          </CardContent>
        </Card>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Vulnerabilidad: Inyección SQL</AlertTitle>
          <AlertDescription>
            Este formulario es vulnerable a ataques de inyección SQL (simulado). Intente usar el siguiente payload en el campo de contraseña para obtener acceso:
            <pre className="mt-2 text-xs bg-black/20 p-2 rounded-md">
              <code>' OR '1'='1</code>
            </pre>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
