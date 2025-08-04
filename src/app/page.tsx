import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Siren } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Welcome to VulnHub</h1>
        <p className="text-lg text-muted-foreground">
          A demonstration application for showcasing security vulnerabilities.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>About This Application</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            VulnHub is intentionally designed with security flaws to demonstrate the capabilities of security scanning tools like GitHub Advanced Security. Explore the different pages to see examples of hardcoded secrets, vulnerable dependencies, and cross-site scripting (XSS) vulnerabilities.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-4">
               <Siren className="w-8 h-8 text-destructive" />
              <div>
                <CardTitle>Vulnerable Fetch & Secrets</CardTitle>
                <CardDescription>Dependencies and hardcoded secrets.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              This page fetches data using an outdated library (`axios`) with a known vulnerability. It also contains a hardcoded API key, which would be flagged by secret scanning tools.
            </p>
            <Button asChild>
              <Link href="/vulnerable-fetch">
                Visit Page <ArrowRight className="ml-2 h-4 w-4" />
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
                <CardDescription>A common web application flaw.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              This page demonstrates a reflected XSS vulnerability. User-provided input from the URL is rendered directly into the page without proper sanitization, allowing for malicious script execution.
            </p>
            <Button asChild>
              <Link href="/vulnerable-xss">
                Visit Page <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
