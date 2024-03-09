import Contact from '@/components/Contact';
import Head from 'next/head'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import { meta } from '@/data/config';
import Experience from '@/components/Experience';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div>
        <Hero />
        <div className="p-0 space-y-10">
          <Experience />
          <Projects />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
}
