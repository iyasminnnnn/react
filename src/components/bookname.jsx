function Name({ value }) {
  return (<span
     onMouseEnter={(e) => {
        e.target.style.color = '#c9ada7';
      }}
    onMouseLeave={(e) => {
        e.target.style.color = 'black';
      }}
      onClick={(e)=>{
        window.location.href='https://openlibrary.org/'
      }} style={{fontSize:'18px',  fontWeight:'800'}}>{value}</span>);
}
export default Name;