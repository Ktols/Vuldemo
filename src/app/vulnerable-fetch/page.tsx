import axios from 'axios';
import _ from 'lodash';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { KeyRound, Library } from 'lucide-react';

// CLAVE DE API FALSA: Esto está intencionalmente hardcodeado para la demostración de escaneo de secretos.
const API_KEY = "ghp_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0s";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPost() {
  try {
    // Usando una versión vulnerable de axios (0.21.1)
    const response = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

export default async function VulnerableFetchPage() {
  const post = await getPost();
  
  // Usando una versión vulnerable de lodash (4.17.20)
  const postTitle = _.get(post, 'title', 'No se pudo cargar el título');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Obtención de Datos Vulnerable</h1>
      
      <Alert variant="destructive">
        <KeyRound className="h-4 w-4" />
        <AlertTitle>Secreto Hardcodeado Detectado</AlertTitle>
        <AlertDescription>
          Una clave de API falsa está hardcodeada en el código fuente de esta página. Las herramientas de escaneo de secretos deberían detectar esto.
          <pre className="mt-2 text-xs bg-black/20 p-2 rounded-md"><code>const API_KEY = "{API_KEY}";</code></pre>
        </AlertDescription>
      </Alert>

      <Alert>
        <Library className="h-4 w-4" />
        <AlertTitle>Dependencias Desactualizadas</AlertTitle>
        <AlertDescription>
          Esta página usa `axios@0.21.1` y `lodash@4.17.20`, que tienen vulnerabilidades de seguridad conocidas. Dependabot debería detectar estos paquetes desactualizados.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Contenido Obtenido</CardTitle>
          <CardDescription>Este contenido fue obtenido desde una API pública usando una librería vulnerable.</CardDescription>
        </CardHeader>
        <CardContent>
          {post ? (
            <article className="prose dark:prose-invert">
              <h2 className="text-xl font-semibold">{postTitle}</h2>
              <p className="text-muted-foreground">{post.body}</p>
            </article>
          ) : (
            <p className="text-destructive">No se pudieron obtener los datos de la publicación.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
