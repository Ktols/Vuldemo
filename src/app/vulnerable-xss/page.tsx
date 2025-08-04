"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Send } from 'lucide-react';
import React from 'react';

export default function VulnerableXssPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const name = searchParams.get('name') || '';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newName = formData.get('name') as string;
    router.push(`${pathname}?name=${encodeURIComponent(newName)}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Cross-Site Scripting (XSS) Reflejado</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Demostración de XSS</CardTitle>
          <CardDescription>Ingrese un valor a continuación para verlo reflejado en la página.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
            <Input name="name" defaultValue={name} placeholder="Ingrese su nombre..." className="flex-grow" />
            <Button type="submit">
              <Send className="mr-2 h-4 w-4"/> Enviar
            </Button>
          </form>
          <div className="p-4 border rounded-md bg-muted">
            <h3 className="font-semibold mb-2">Salida Renderizada:</h3>
            {/* ESTA ES LA PARTE VULNERABLE */}
            <div className="text-lg text-primary font-medium" dangerouslySetInnerHTML={{ __html: name }} />
          </div>
        </CardContent>
      </Card>

      <Alert variant="destructive">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Información sobre la Vulnerabilidad XSS</AlertTitle>
        <AlertDescription>
          <p>La salida de arriba se renderiza usando `dangerouslySetInnerHTML` con la entrada del usuario desde la URL sin sanitizar. Esto crea una vulnerabilidad de XSS reflejado.</p>
          <p className="mt-2">Intente ingresar el siguiente payload en el campo de texto para ver la vulnerabilidad en acción:</p>
          <pre className="mt-2 text-xs bg-black/20 p-2 rounded-md">
            <code>{'<img src=x onerror=alert("XSS_SUCCESS!")>'}</code>
          </pre>
        </AlertDescription>
      </Alert>
    </div>
  );
}
