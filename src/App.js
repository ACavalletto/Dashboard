import Sidebar from './components/Sidebar'
import Analysis from './components/Analysis'
import Visitors from './components/Visitors'
import './style.css';

let sentiment = [960,122,321]

const App = () => {
  return (
  <>
    <Sidebar />
    <Analysis title="Reviews" info="1,281"/>
    <Analysis title="Average Rating" info="4.6"/>
    <Analysis title="Sentiment Analysis" info="960" info2="122" info3="321"/>
    <Visitors title="Website Visitors" info="821"/> 
  </>
  );
}

export default App;
