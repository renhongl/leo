import React from 'react';
import Layout from '@theme/Layout';
import Resume from '@site/src/components/Resume';

// function addScript(url) {
//   var script = document.createElement('script');
//   script.type = 'application/javascript';
//   script.src = url;
//   document.head.appendChild(script);
// }
// addScript(
//   'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js'
// );

export default function Home() {
  // const downloadPdf = () => {
  //   var element = document.getElementById('resume');
  //   var opt = {
  //     margin: 1,
  //     filename: 'myfile.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  //   };
  //   html2pdf().set(opt).from(element).save();
  // };

  return (
    <Layout
      title={`Resume`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Resume />
        {/* <button onClick={downloadPdf}>pdf</button> */}
      </main>
    </Layout>
  );
}
