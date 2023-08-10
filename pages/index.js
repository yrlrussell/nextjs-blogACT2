import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I'm Yrl Russell Aniceta a 3rd Year Computer Engineering.</p>
        <p>My Hobbies Are Playing Dota 2, Valorant, Codm, Ml and Basketball.
        My Favorite Music Is Soft Rock and, My Favorite Food Is Chicken Teriyaki.</p>
        <p> Other Things About Myself as A Former "Sk Kagawad" Signifies My Dedication
          to Public Service Where I Directly Impacted the Lives of People Within My Barangay.
          This Experience Show My Leadership Skills, Ability to Work Within a Team,
          Understanding of Local Governance Processes, And Commitment to Community Welfare.</p>
          <p></p>
          <p>The career that i see myself exploring after graduation is Hardware Engineer
          Design and develop computer hardware components and systems. 
          That includes designing circuit boards, processors, memory systems, and other hardware components or
          Software Engineer Develop, design, and maintain software applications and systems.
          That role involves coding, testing, and debugging software to meet user needs.</p>
      </section>
    </Layout>
  );
}