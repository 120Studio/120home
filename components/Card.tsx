export interface ICardProps {
  name: string;
  href: string;
  installPath: string;
  desc: string;
  details?: string[]
  icon: string;
  tips: string[];
}

function Card(props: ICardProps) {
  return (
    <div className="w3-row-padding w3-padding-64 w3-container">
      <div className="w3-content">
        <div className="w3-twothird">
          <h1><a href={props.href}>{props.name}</a></h1>
          <h5 className="w3-padding-32">{props.desc}
            {props.details && props.details.map(d => <ul>{d}</ul>)}
          </h5>

          <p className="w3-text-grey">
            {props.tips.map(d => <div>{d}</div>)}
          </p>
        </div>

        <div className="w3-third w3-center">
          <a href={props.installPath}>
            <img src={props.icon} className="fa fa-anchor w3-padding-64"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card