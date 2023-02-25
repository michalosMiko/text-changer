import Textwriter from "./Textwriter"

const App = () => {
  const texts = [
    'Vítejte na našem webu',
    'Nabízíme vám širokou škálu produktů',
    'Kontaktujte nás pro více informací',
    'Děkujeme, že jste navštívili náš web'
  ];
  return (
    <div>App
     <Textwriter texts={texts} /> 
    </div>
  )
}

export default App