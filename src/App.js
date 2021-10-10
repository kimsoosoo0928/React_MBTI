import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Step2 from './Step2' 
import Step3 from './Step3'


class App extends Component {
  render() {
    return (
      <BrowserRouter>           
        <div style={{padding:20, border:'5px solid gray'}}>
          <Link to="/">HOME</Link><br/>    
          <Link to="/step1">STEP_1</Link><br/>
          <Link to="/step2">STEP_2</Link><br/>
          <Link to="/step3">STEP_3</Link><br/>
          <Switch>               
            <Route exact path="/" component={Home}/>  
            <Route path="/step1" component={Step1}/>
            <Route path="/step2" component={Step2}/>
            <Route path="/step3" component={Step3}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
/*HOME*/
function Home({match}){
  return (<h2>MBTI 평균 얼굴 구하기</h2>
    )
}
/*STEP1*/
function Step1({match}) {
  return <article>
    <h2>MBTI를 입력하자!</h2>
    <p>당신의 성별은 무엇인가요?</p>
    <button onclick="activateLasers()">
    남자
    </button>
    <button onclick="activateLasers()">
    여자
    </button>
    <p>당신의 MBTI를 작성해주세요!</p>
    
    <form>
<label>MBTI를 입력하세요:
<input type="text" />
</label>
</form>

<p>만약 내 MBTI를 모르겠다면?</p>
<a href="https://www.16personalities.com/ko">지금 바로 테스트 하러가기!</a>

<p><button type="submit">Submit</button></p>
</article> 
}



export default App;