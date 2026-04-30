function Image({ value }) {
  return(<img src={value}  
      style={{height:'250px', width:'100%',maxWidth: '300px', borderTopLeftRadius:'10px', borderTopRightRadius:'10px'}}></img>);
}
export default Image;