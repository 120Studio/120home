import Head from 'next/head'
import Card, { ICardProps } from '../components/Card'
import Header, { IHeaderProps } from '../components/Header'
import Layout from '../components/Layout'
import Showcase, { IShowcaseProps } from '../components/Showcase'

export default function ExtForTiktok() {
  const header: IHeaderProps = {
    name: " Extension for Tiktok ",
    desc: "A free chrome extension to enhance Tiktok user experience!",
    installPath: "https://chrome.google.com/webstore/detail/extension-for-tiktok/keahbhfgjpfnmedeldbjfjjpilhjaiie",
    facebookShare: "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Fextension-for-tiktok%2Fkeahbhfgjpfnmedeldbjfjjpilhjaiie%3Fhl%3Den&layout=button&size=small&appId=370678740170181&width=67&height=20"
  }

  const tiktokExt: ICardProps = {
    name: "Extension for Tiktok",
    desc: "A free chrome extension to download Tiktok videos or open them in PictureInPicture. And more great user experience.",
    icon: "./assets/tiktok/icon-128.png",
    href: "./tiktok.ext.html",
    installPath: "https://chrome.google.com/webstore/detail/extension-for-tiktok/keahbhfgjpfnmedeldbjfjjpilhjaiie",
    details: [
      "Download videos with one right click!",
      "Play videos in PictureInPicture mode and enjoying scrolling for next fun."
    ]
  }

  const showcase: IShowcaseProps = {
    name: "Download videos with one right click!",
    caseImg: "./assets/tiktok/tiktok-downloadvideo.png"
  }

  const showcase2: IShowcaseProps = {
    name: "Play videos in PictureInPicture mode and enjoying scrolling for next fun.",
    caseImg: "./assets/tiktok/tiktok-picinpic.png"
  }

  return (
    <div>
      <Head>
        <title>Extension for Tiktok by 120Studio</title>
        <meta property="og:title" content="Extension for Tiktok - A free chrome extension to enhance Tiktok user experience!" />
        <meta property="og:description" content="" />
        <meta property="og:image:url" content="https://120studio.github.io/120home/assets/tiktok/icon-256.png" />
        <meta property="og:image:secure_url" content="https://120studio.github.io/120home/assets/tiktok/icon-256.png" />
        <link rel="icon" href="./assets/tiktok/icon-16.png" type="image/x-icon"></link>
        <meta name="description" content="Extension for Tiktok - A free chrome extension to enhance Tiktok user experience!" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <Layout>
        <Header {...header} />
        <Card {...tiktokExt} />
        <Showcase {...showcase} />
        <Showcase {...showcase2} />
      </Layout>
    </div>
  )
}
