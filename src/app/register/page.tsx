"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UserPlus, ShieldOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPasswordError('');

    // VULNERABILIDAD: VALIDACIÓN DE CONTRASEÑA DÉBIL
    // Solo verifica la longitud, pero no la complejidad.
    if (password.length < 4) {
      setPasswordError('La contraseña es demasiado corta. Debe tener al menos 4 caracteres.');
      return;
    }

    toast({
      title: "¡Registro Exitoso! (Simulado)",
      description: "Su cuenta ha sido creada. Ahora puede iniciar sesión.",
    });
    // En una aplicación real, aquí se redirigiría al usuario o se manejaría el estado de la sesión.
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-accent/20 p-3 rounded-full">
                <UserPlus className="h-8 w-8 text-accent" />
              </div>
            </div>
            <CardTitle>Crear una Cuenta</CardTitle>
            <CardDescription>Regístrese para acceder a todas las funciones.</CardDescription>
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
                  placeholder="Cree una contraseña"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={passwordError ? 'border-destructive' : ''}
                />
                {passwordError && (
                  <p className="text-sm text-destructive">{passwordError}</p>
                )}
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Registrarse
              </Button>
            </form>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              ¿Ya tiene una cuenta?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Iniciar Sesión
              </Link>
            </p>
          </CardContent>
        </Card>

        <Alert variant="destructive">
          <ShieldOff className="h-4 w-4" />
          <AlertTitle>Vulnerabilidad: Contraseña Débil</AlertTitle>
          <AlertDescription>
            Este formulario de registro permite contraseñas muy débiles (ej. "1234"). Una política de contraseñas robusta debería exigir complejidad (mayúsculas, minúsculas, números, símbolos) y una longitud mayor para prevenir ataques de fuerza bruta.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
