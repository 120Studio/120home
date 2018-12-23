import Head from 'next/head'

export interface IHeaderProps {
  title: string
  icon?: string
  ogTitle?: string;
  ogDescription: string;
  ogImage?: string;
}

export default (props: IHeaderProps) => {
  const inlineStyle = `
  body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}
  .w3-bar,h1,button {font-family: "Montserrat", sans-serif}
  .fa-anchor,.fa-coffee {font-size:200px}
  `

  const gtagJS = `
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'UA-131223065-1');
  `

  return <Head>
    <title>{props.title}</title>
    {props.icon && <link rel="icon" href={props.icon} type="image/x-icon"></link>}

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <style>{inlineStyle}</style>
    
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131223065-1"></script>
    <script>{gtagJS}</script>
  </Head>
}