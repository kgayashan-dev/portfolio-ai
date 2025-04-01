import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Software Engineering</h2>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in software development, I specialize in
                building scalable web applications using modern technologies. My expertise
                includes React, Node.js, and cloud architecture, with a focus on creating
                efficient and maintainable solutions.
              </p>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Music Journey</h2>
              <p className="text-muted-foreground mb-4">
                As a classically trained pianist and electronic music producer, I blend
                traditional musical training with modern production techniques. My work
                spans multiple genres, from ambient electronic to contemporary classical
                compositions.
              </p>
              <Button>
                Listen on Spotify
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Latest Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">Project {i}</h3>
                        <p className="text-sm text-muted-foreground">
                          Description of project {i} and its impact.
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}