function Donation() {
  return (
    <div className="w3-container w3-black w3-center w3-opacity w3-padding-16">
      <h1 className="w3-margin w3-xlarge">
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style={{ display: "inline" }}>
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="6R8T89JWF7WFE" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" name="submit"
            title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
        <span style={{ verticalAlign: "top", fontSize: 20 }}> $2 to support us</span>
      </h1>
    </div >
  )
}

export default Donation