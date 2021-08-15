import Head from 'next/head'
import Card, { ICardProps } from '../components/Card'
import Header, { IHeaderProps } from '../components/Header'
import Layout from '../components/Layout'
import Showcase, { IShowcaseProps } from '../components/Showcase'

export default function ExtForInstagram() {
  const header: IHeaderProps = {
    name: " Extension for Instagram ",
    desc: "A free chrome extension to enhance Instagram User experience!",
    installPath: "https://chrome.google.com/webstore/detail/web-instagram/dkfmiibnoifcbiblibjpfalbdfpdoeni",
    facebookShare: "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fextension-for-instagram%2Fdkfmiibnoifcbiblibjpfalbdfpdoeni%3Fhl%3Den&layout=button&size=small&appId=370678740170181&width=67&height=20"
  }

  const instagram: ICardProps = {
    name: "Extension for Instagram",
    desc: "A free chrome extension to view instagram with all mobile features.",
    icon: "./assets/instagram-128.png",
    href: "./webinstagram.html",
    installPath: "https://chrome.google.com/webstore/detail/extension-for-instagram/dkfmiibnoifcbiblibjpfalbdfpdoeni",
    details: [
      "Post photos (to story) directly from your desktop",
      "Download videos and photos with one right-click",
      "Mini video player to view and scroll at the same time"
    ],
    tips: [
      "Do you want to upload pictures to Instagram from your desktop? We make it possible!",
      "Do you see non-clickable links? We make them clickable!"
    ]
  }

  const mobileExp: IShowcaseProps = {
    name: "View Instagram posts in mobile experience",
    caseImg: "./assets/web-instagram-home-1280.png"
  }

  const uploadExp: IShowcaseProps = {
    name: "Upload photos/videos from your desktop directly",
    caseImg: "./assets/web-instagram-upload-1280.png"
  }

  const miniVideo: IShowcaseProps = {
    name: "Play video on mini player and you can continue scroll",
    caseImg: "./assets/web-instagram-miniplayer-1280.png"
  }

  const clickableExp: IShowcaseProps = {
    name: "Make links clickable",
    caseImg: "./assets/web-instagram-clickable-url-1280.png"
  }

  const darkThemeExp: IShowcaseProps = {
    name: "Dark Theme",
    caseImg: "./assets/web-instagram-dark-theme.png"
  }

  const switchExp: IShowcaseProps = {
    name: "Easily turn on/off features to best fit your experience!",
    caseImg: "./assets/web-instagram-feature-switcher.png"
  }

  return (
    <div>
      <Head>
        <title>Extension for Instagram by 120Studio</title>
        <meta property="og:title" content="Extension for Instagram - A free chrome extension to enhance Instagram user experience!" />
        <meta property="og:description" content="Direct download photos/videos! Mini video plyaer available when you continue to scroll!" />
        <meta property="og:image:url" content="https://120studio.github.io/120home/assets/instagram-200.png" />
        <meta property="og:image:secure_url" content="https://120studio.github.io/120home/assets/instagram-200.png" />
        <link rel="icon" href="./assets/instagram-16.png" type="image/x-icon"></link>
        <meta name="description" content="Extension for Instagram - A free chrome extension to enhance Instagram user experience!" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <Layout>
        <Header {...header} />
        <Card {...instagram} />
        <Showcase {...mobileExp} />
        <Showcase {...uploadExp} />
        <Showcase {...miniVideo} />
        <Showcase {...clickableExp} />
        <Showcase {...darkThemeExp} />
        <Showcase {...switchExp} />
      </Layout>
    </div>
  )
}
