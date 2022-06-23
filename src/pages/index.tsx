/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';

import { attributes, react as HomeContent } from '@/content/home.md';
import type { Cats } from '@/models/cats';

export default function Home() {
  const { first, second } = attributes;

  const title: string = first as string;
  const cats: Cats[] = second as Cats[];

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
