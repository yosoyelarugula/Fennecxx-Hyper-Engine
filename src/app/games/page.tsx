import ParticleCanvas from '@/components/ParticleCanvas';
import GameCard from '@/components/GameCard';

import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

interface Game {
  name: string;
  source: string;
  image: string;
  desc: string;
}

async function getGames(): Promise<Game[]> {
  const filePath = path.join(process.cwd(), 'public/json/games.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

export default async function GamesPage() {
  const games = await getGames();

  return (
    <main className="min-h-screen relative">
      <ParticleCanvas />
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16">


        {/* Games section */}
        <section>
          <h1 className="text-4xl font-bold text-white mb-1 text-center">Games</h1>
          <p className="text-gray-400 font-bold text-1.5xl text-sm mb-12 text-center">games from <Link href='https://gitlab.com/3kh0/3kh0-assets' >3kh0</Link> ❤️</p>
          <div className="flex flex-wrap justify-center gap-6">
            {games.map((game, index) => (
              <GameCard
                key={index}
                name={game.name}
                desc={game.desc}
                image={game.image}
                source={game.source}
              />
            ))}
          </div>
        </section>

      </div>

    </main>
  );
}