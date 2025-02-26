import ParticleCanvas from '@/components/ParticleCanvas';
import AppCard from '@/components/AppCard';
import { promises as fs } from 'fs';
import path from 'path';

interface App {
  name: string;
  source: string;
  image: string;
  desc: string;
}

async function getApps(): Promise<App[]> {
  const filePath = path.join(process.cwd(), 'public/json/apps.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

export default async function AppsPage() {
  const apps = await getApps();

  return (
    <main className="min-h-screen relative">
      <ParticleCanvas />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        {/* Apps section */}
        <section>
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Apps</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {apps.map((app, index) => (
              <AppCard
                key={index}
                name={app.name}
                desc={app.desc}
                image={app.image}
                source={app.source}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}