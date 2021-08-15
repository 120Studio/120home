export interface IShowcaseProps {
  name: string;
  caseImg: string;
}

function Showcase(props: IShowcaseProps) {
  return (
    <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
      <div className="w3-content">
        <div>
          <h1>{props.name}</h1>
          <img style={{ width: "100%" }} src={props.caseImg} />
        </div>
      </div>
    </div>
  )
}

export default Showcase