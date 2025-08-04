import axios from 'axios';
import _ from 'lodash';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { KeyRound, Library } from 'lucide-react';

// FAKE API KEY: This is intentionally hardcoded for secret scanning demonstration.
const API_KEY = "ghp_a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPost() {
  try {
    // Using a vulnerable version of axios (0.21.1)
    const response = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return null;
  }
}

export default async function VulnerableFetchPage() {
  const post = await getPost();
  
  // Using a vulnerable version of lodash (4.17.20)
  const postTitle = _.get(post, 'title', 'Failed to load title');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Vulnerable Data Fetching</h1>
      
      <Alert variant="destructive">
        <KeyRound className="h-4 w-4" />
        <AlertTitle>Hardcoded Secret Detected</AlertTitle>
        <AlertDescription>
          A fake API key is hardcoded in this page's source code. Secret scanning tools should flag this. 
          <pre className="mt-2 text-xs bg-black/20 p-2 rounded-md"><code>const API_KEY = "{API_KEY}";</code></pre>
        </AlertDescription>
      </Alert>

      <Alert>
        <Library className="h-4 w-4" />
        <AlertTitle>Outdated Dependencies</AlertTitle>
        <AlertDescription>
          This page uses `axios@0.21.1` and `lodash@4.17.20`, which have known security vulnerabilities. Dependabot should detect these outdated packages.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Fetched Content</CardTitle>
          <CardDescription>This content was fetched from a public API using a vulnerable library.</CardDescription>
        </CardHeader>
        <CardContent>
          {post ? (
            <article className="prose dark:prose-invert">
              <h2 className="text-xl font-semibold">{postTitle}</h2>
              <p className="text-muted-foreground">{post.body}</p>
            </article>
          ) : (
            <p className="text-destructive">Could not fetch post data.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
