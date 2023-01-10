import axios from "axios";
import { useState } from "react";
const CustomerAdd = () => {
  const [file, setFile] = useState();
  const [userName, setUserName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [job, setJob] = useState();
  const [fileName, setFileName] = useState();
  const changeFileHandler = (e) => {
    setFile(e.target.files[0]);
  };
  const changeUserNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const changeBirthdayHandler = (e) => {
    setBirthday(e.target.value);
  };
  const changeGenderHandler = (e) => {
    setGender(e.target.value);
  };
  const changeJobHandler = (e) => {
    setJob(e.target.value);
  };
  const addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", userName);
    formData.append("birthday", birthday);
    formData.append("gender", gender);
    formData.append("job", job);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    return axios.post(url, formData, config);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await addCustomer();
    console.log(res)
    setFile();
    setUserName();
    setBirthday();
    setGender();
    setJob();
    setFileName();
    window.location.reload();
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>고객 추가</h1>
      <div>
        프로필 이미지 : <input type="file" name="file" onChange={changeFileHandler} />
      </div>
      <div>
        이름 : <input type="text" name="userName" onChange={changeUserNameHandler} value={userName} />
      </div>
      <div>
        생년월일 : <input type="text" name="birthday" onChange={changeBirthdayHandler} value={birthday} />
      </div>
      <div>
        성별 : <input type="text" name="gender" onChange={changeGenderHandler} value={gender} />
      </div>
      <div>
        직업 : <input type="text" name="job" onChange={changeJobHandler} value={job} />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default CustomerAdd;
