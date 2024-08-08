const Video=()=>{
  return <div className="btn-flex">
    <div>
      <button className="quick-btns" >All</button>
    </div>
    <div>
      <button className="quick-btns" >Entertainment</button>
    </div>
    <div>
      <button className="quick-btns" >Comedy</button>
    </div>
    <div>
      <button className="quick-btns" >Horror</button>
    </div>
    <div>
      <button className="quick-btns" >Music</button>
    </div>
    <div>
      <button className="quick-btns" >Live</button>
    </div>
    <div>
      <button className="quick-btns" >Stories</button>
    </div>
    <div>
      <button className="quick-btns" >Action Thriller</button>
    </div>
    <div>
      <button className="quick-btns" >Mythology</button>
    </div>
    <div>
      <button className="quick-btns" >Ancient History</button>
    </div>
    <div>
      <button className="quick-btns" >Indian Pop Music</button>
    </div>
  </div>
}
const ButtonContainer = () => {
  return <div className="button_container">
    <Video/>

  </div>
}
export default ButtonContainer;