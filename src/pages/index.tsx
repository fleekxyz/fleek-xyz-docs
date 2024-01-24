import React, { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head'; 


export default function Home(): JSX.Element {
  const docsPath = useBaseUrl('/docs');

  useEffect(() => {
    window.location.href = docsPath;
  }, []);

  return (
    <Head>
    <meta name="description" content="Welcome to the documentation for the alpha of Fleek.xyz. Whether you are an expert or an absolute beginner, you'll find your answers here." />    
    </Head>
  );
}
