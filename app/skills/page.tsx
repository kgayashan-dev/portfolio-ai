import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const techSkills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React/Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Cloud Architecture', level: 75 },
  { name: 'DevOps', level: 70 },
];

const musicSkills = [
  { name: 'Piano', level: 95 },
  { name: 'Music Production', level: 85 },
  { name: 'Sound Design', level: 80 },
  { name: 'Music Theory', level: 90 },
  { name: 'Live Performance', level: 85 },
];

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
              <div className="space-y-6">
                {techSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Musical Skills</h2>
              <div className="space-y-6">
                {musicSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}