import ItemList from "/app/components/ItemList.js";
import TextBlock from "/app/components/TextBlock.js";
import ImageWithText from "/app/components/ImageWithText.js";
function HomePage() {
    return( <div style={{ display: 'flex', 'align-items': 'center', 'justify-content': 'center','flex-direction':'column','flex-wrap': 'wrap' }}>
    <h1 style={{margin:'15px'}}>Amelia Rymanowska</h1>
    <ItemList/>
    <TextBlock/>
    <ImageWithText
    imageUrl="https://www.dictionary.com/e/wp-content/uploads/2018/09/moai-emoji.png"
    text="image"/>
    </div>
    );
  }
  export default HomePage;
