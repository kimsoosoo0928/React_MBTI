import React, { useState } from 'react';
import {Route,Link} from 'react-router-dom'

export default function Step2 ({match}) {
    const [imgBase64, setImgBase64] = useState(""); // 파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일	
    
    const handleChangeFile = (event) => {
      let reader = new FileReader();
  
      reader.onloadend = () => {
        // 2. 읽기가 완료되면 아래코드가 실행됩니다.
        const base64 = reader.result;
        if (base64) {
          setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        }
      }
      if (event.target.files[0]) {
        reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
        setImgFile(event.target.files[0]); // 파일 상태 업데이트
      }
    }
    return (
        <div>
        
    <h2>당신의 유형별 평균관상은?</h2>
    <p>당신은 XXXX 입니다!</p>
    <img src="C:/Users/kimhs/Desktop/REACT/src/m.jpg" width="128" height="128"/>
    <p>(유형별 평균얼굴)</p>
    <p>ENFP는 !@#%$ .....</p>
    <h3>당신의 얼굴을 추가해서 더욱 정교화된 유형별 관상을 보여주세요!</h3>

    <div className="Upload">
      <div style={{"backgroundColor": "#efefef", "width":"150px", "height" : "150px"}}>
      </div>
      <div>
      	{/* onChange 추가 */}
        <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile}/>
      </div>
      <img src="C:/Users/kimhs/Desktop/REACT/src/w.png" width="128" height="128"/>
      <img src="C:/Users/kimhs/Desktop/REACT/src/w.png" width="128" height="128"/>
      
    </div>
    

    </div>

    );
}


