import Head from 'next/head'
import Card, { ICardProps } from '../components/Card'
import Header, { IHeaderProps } from '../components/Header'
import Layout from '../components/Layout'

export default function Home() {
  const header: IHeaderProps = {
    name: "120 Studio",
    desc: "Provide free productivity tools for you!"
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

  return (
    <div>
      <Head>
        <title>120Studio - Home</title>
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

        <Card {...driveMark} />
        <Card {...instagram} />
      </Layout>
    </div>
  )
}
