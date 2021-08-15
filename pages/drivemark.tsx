import Head from 'next/head'
import Card, { ICardProps } from '../components/Card'
import Header, { IHeaderProps } from '../components/Header'
import Layout from '../components/Layout'
import Showcase, { IShowcaseProps } from '../components/Showcase'

export default function DriveMark() {
  const header: IHeaderProps = {
    name: " Drive Bookmark ",
    desc: "A free chrome extension to map your Google drive to bookmark!",
    installPath: "https://chrome.google.com/webstore/detail/drive-mark/gailnkgbkabnclnnponepghblkbjgkfl",
    facebookShare: "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2F120studio.github.io%2F120home%2Fdrivemark.html&layout=button&size=small&mobile_iframe=true&appId=370678740170181&width=59&height=20"
  }

  const driveMark: ICardProps = {
    name: "Drive Bookmark",
    desc: "Map your Google Drive to your bookmark. You can easily access for your drive files including team folder via bookmark.",
    icon: "./assets/bookmark-128.png",
    href: "./drivemark.html",
    installPath: "https://chrome.google.com/webstore/detail/drive-bookmark/gailnkgbkabnclnnponepghblkbjgkfl",
    tips: [
      "How many times did you switch different Google drives to find your file?",
      "How many times did you repeatly search for the same file?",
      "How messy your bookmark is without any organize?"
    ]
  }

  const showcase: IShowcaseProps = {
    name: "One click to map your Google drive to your bookmark.",
    caseImg: "./assets/DriveMark_screen_1280.png"
  }

  return (
    <div>
      <Head>
        <title>Drive Bookmark by 120Studio</title>
        <meta property="og:title" content="Drive Bookmark - A free chrome extension to map your Google drive to bookmark!" />
        <meta property="og:description" content="How many times did you switch different Google drives to find your file? How many times did you
    repeatly search for the same file? Use DriveMark to solve all these issues for easy access your Google drive
    files, including your team folders." />
        <meta property="og:image:url" content="https://120studio.github.io/120home/assets/bookmark-200.png" />
        <meta property="og:image:secure_url" content="https://120studio.github.io/120home/assets/bookmark-200.png" />
        <link rel="icon" href="./assets/bookmark-16.png" type="image/x-icon"></link>
        <meta name="description" content="Drive Bookmark - A free chrome extension to map your Google drive to bookmark!" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <Layout>
        <Header {...header} />
        <Card {...driveMark} />
        <Showcase {...showcase} />
      </Layout>
    </div>
  )
}
