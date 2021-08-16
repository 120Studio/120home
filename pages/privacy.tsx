import Head from 'next/head'
import Card, { ICardProps } from '../components/Card'
import Header, { IHeaderProps } from '../components/Header'
import Layout from '../components/Layout'

export default function Home() {
  const header: IHeaderProps = {
    name: "Privacy Notice @ 120Studio",
    desc: "Last updated August 15, 2021"
  }

  return (
    <div>
      <Head>
        <title>120Studio - Privacy Notice</title>
        <meta name="description" content="120Stuido - Focus on your productivity" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <Layout>
        <Header {...header} />

        <div className="w3-row-padding w3-padding-64">
          <div className="w3-content">
            <p>
              Thank you for choosing to be part of our community at 120Stuido ("<strong>Company</strong>," "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>").
              We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information,
              please contact us at <a href="https://github.com/120Studio/120home/issues">https://github.com/120Studio/120home/issues</a>.
            </p>
            <p>
              This privacy notice describes how we might use your information if you:
            </p>
            <ul>
              <li>Visit our website at <a href="https://120studio.github.io/120home">https://120studio.github.io/120home</a></li>
              <li>Use our extensions at <a href="https://chrome.google.com/webstore">https://chrome.google.com/webstore</a></li>
              <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
            </ul>
            <p><b>Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.</b></p>
            <h3>1. WHAT INFORMATION DO WE COLLECT?</h3>
            <span>We don't collect any of your personal information.</span>
            <h3>2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h3>
            <span>We don't collect any of your personal information.</span>
            <h3>3. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h3>
            <span>We don't collect any of your personal information.</span>
            <h3>4. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
            <span>We don't collect any of your personal information.</span>
            <h3>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</h3>
            <span>We don't collect any of your personal information.</span>
            <h3>6. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <span>You may review, change, or terminate your account at any time.</span>
            <h3>7. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <span>Yes, we will update this notice as necessary to stay compliant with relevant laws.</span>
            <h3>8. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
            <span>If you have questions or comments about this notice, you may contact us at <a href="https://github.com/120Studio/120home/issues">https://github.com/120Studio/120home/issues</a></span>
          </div>
        </div>

      </Layout>
    </div>
  )
}
