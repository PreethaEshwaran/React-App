import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function MenuBar(){
    
    const [menuData, setMenuData] = useState({});

    useEffect(()=>
    {
        fetchMenuData();
    },[]);
    
    const fetchMenuData = async()=>{
        const menu = await fetch("https://run.mocky.io/v3/007142cc-4a8f-4e68-a0ea-c92078b9ae50");
        const menuData = await menu.json();
        console.log(menuData);
        setMenuData(menuData);
    }

    return (
        <div className="topnav" style={{overflow: "hidden",backgroundColor: "#333"}}>
        <Link className="active menu-bar" to="/">{menuData.home}</Link>
        <Link className="menu-bar" to="/about">{menuData.about}</Link>
        <Link className="menu-bar" to="/shop">{menuData.shop}</Link>
        </div>
    );
}
export default MenuBar;