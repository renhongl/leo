import React from 'react';
import Layout from '@theme/Layout';
import Resume from '@site/src/components/Resume';

export default function Home() {
  return (
    <Layout
      title={`Resume`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Resume />
      </main>
    </Layout>
  );
}
