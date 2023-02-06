import React from "react";
import './Headar.css'


export default function Headar() {
  return (
    <div className="divHeadar">
<div className="divFoto"> <img className="logo" src="Group.png" alt="Logo" /></div>
<div className="divSilok">
    <div className="silka1"> <a className="a" href="https://www.figma.com/file/Eyl0VIeYh7VQtTGVHZvtKe/Counter?node-id=1%3A2">Главная</a> </div>
<div className="silka2"><a className="a" href="https://github.com/intocode/drill-babel-webpack-challenge">О нас</a></div>
<div> <a className="a" href="https://github.com/intocode/drill-babel-webpack-challenge">Контакты</a></div>
<hr className="hr" />
</div>
    </div>
  );
}
