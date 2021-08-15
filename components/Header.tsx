export interface IHeaderProps {
  name: string;
  desc: string;
  installPath?: string;
  facebookShare?: string;
}

function Header(props: IHeaderProps) {
  return (
    <header className="w3-container w3-purple w3-center titlePadding">
      <h1 className="w3-margin w3-jumbo">
        {props.name}
        {props.facebookShare && <iframe src={props.facebookShare}
          width="59" height="20" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0"
          allowTransparency={true} allow="encrypted-media"></iframe>
        }
      </h1>
      <p className="w3-xlarge">{props.desc}</p>
      {props.installPath && <a href={props.installPath}>
        <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">Install</button>
      </a>}
      <a style={{ paddingLeft: "20px" }} href="https://github.com/120Studio/120home">
        <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">Support</button>
      </a>
    </header>
  )
}

export default Header