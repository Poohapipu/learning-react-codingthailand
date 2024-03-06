import React from "react";
import Logo from "./Logo";

const Header = () => {
  let companyName = "PPH";
  const companyAddress = "udon";
  let num = 10;
  const ShowMessege = () => {
    return companyName + ".com";
  };
  const isLogin = true;
  const showMe =() => {
    alert('hi React')
  }
  const products = [
    {id:1, Name : 'pepsi'},
    {id:2, Name : 'coke'}
  ]
  

  return (
    <div>
      <h1>ชื่อ {companyName}</h1>
      {companyAddress}
      {num + 100} <br />
      {ShowMessege()}
      {isLogin === true && (
        <>
          <p>ยินดีต้อนรับ</p>
          <p>ยินดีต้อนรับ2</p>
        </>
      )}
      {isLogin ? <Logo /> : <p>not found</p>}
      <br />
      <button onClick={showMe}>Click here</button>
      <hr />
      <br />
      <ul>
      {
        products.map((product, index) => {
          return (
            <li key = {product.id}>{product.Name} {index+1}</li>
          )
        })
      }
      </ul>
    </div>
  );
};

export default Header;
