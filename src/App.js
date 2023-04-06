import './App.css';
import Box from './components/Box';

function App() {
    let name = "둘리";
    let data = [
        {name: 'lee', age: 30},
        {name: 'kim', age: 40}
    ];

    return (
      <div className='app'>
        <h1>{name}님 Hello</h1>
        <p>처음 작성하는 리액트 문서</p>
        <p>{data[0].name}: {data[0].age}</p>
        <Box />
        <Box />
      </div>
    )
  }
  
  export default App; // 다른 문서에 내보내기 설정