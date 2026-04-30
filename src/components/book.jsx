import Name from "./bookname";
import Author from "./bookauthor";
import Price from "./bookprice";
import Image from "./image"
function Book() {
  const books = [
    {name: "The Adventures of Sherlock Holmes", author: "Sir Arthur Conan Doyle", price: "10.99", link:"https://images.booksense.com/images/972/545/9798629545972.jpg" },
    {name: "The Death on The Nile", author: "Agatha Christie", price: "12.85", link:"https://m.media-amazon.com/images/I/71vCWe+y8YL._AC_UF1000,1000_QL80_.jpg"  },
    {name: "Crime and Punishment", author: "Fyodor Dostoyevskiy", price: "12.32",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeCHf6ggkwzRDzyheD9fIAe6PM6F1UIjVhQ&s"  },
    {name:"A Hero of Our Time", author:"Mikhail Lermontov", price:"12.25",link:"https://www.globalgreyebooks.com/content/book-covers/mikhail-lermontov_hero-of-our-time-large.jpg" },
     {name:"The Adventures of Tom Sawyer", author:"Mark Twain", price:"10.65",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5AazW04z41RO7f2iiZEKP0D68R26jIet4g&s" },
      {name:"To Kill a Mockinbird", author:"Harper Lee", price:"17.25",link:"https://hive.dmmserver.com/media/640/97804340/9780434020485.jpg" }
  ];
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns:'repeat(3,250px)',
    rowGap:'40px',
    justifyContent:'space-around'
  };
  return (
    <><p style={{textAlign:'center', margin:'20px 0px 40px 0px', fontSize:'30px', fontWeight:'900', color:'#f2e9e4'}}>BOOKS</p>
    <div  style={gridStyle}>   
      {books.map((book) => (
        <div  onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.border='5px, #c9ada7, dotted';
      }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.border='1px, #C0C0C0, solid';
      }} style={{ display: 'contents', display:'flex', flexDirection:'column', gap:'10px', width:'250px', border:'1px,#C0C0C0,solid', borderRadius:'10px', transition:'0.4s', backgroundColor:'#ffe5d9'}}>
         <Image value={book.link}/>
         <div style={{padding:'5px', display:'flex', flexDirection:'column', gap:'10px'}}>
               <Name value={book.name} />
          <div style={{display:'flex', justifyContent:'space-between', width:'230px'}}>
                <Author value={book.author} />
          <Price value={book.price}  />
          </div>
         </div>
       
      
        </div>
      ))}
    </div></>
  );
}

export default Book;