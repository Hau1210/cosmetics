import React, {
  useState,
  Component
} from "react";
import "./Header.scss";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import 'font-awesome/css/font-awesome.min.css';
import './fontawesome-web-5.15.3/css/all.min.css';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import makeup from './img/makeup.png';
import skincare from './img/skincare.png';
import body from './img/body.png';
import hair from './img/hair.png';
import perfume from './img/perfume.png';
import other from './img/other.png';
import Carousel from 'react-bootstrap/Carousel'
import biaOne from './img/bia.jpg';
import biaTwo from './img/bia3.png';
import icfacebook from './img/icfacebook.svg';
import icYoutobe from './img/icYoutobe.svg';
import icig from './img/icig.svg';
import Card from 'react-bootstrap/Card';
import kemCN from './img/kemCN.jpg';
import duongda from './img/duongda.png';
import kemTriMun from './img/kemTriMun.jpg';
import sonHot from './img/sonHot.jpg';

class Header extends Component {
  render() {
    return (
       <>
      <div className = "header-container" >
      <div className = "content-product" >
        <a href = "/"
        className = "header__logo-link" >
        <img className = "custom-logo"src = "https://annashop.vn/wp-content/uploads/2021/02/logo-anna1.png"class = "custom-logo"alt = "Mỹ phẩm Anna Shop"srcset = "https://annashop.vn/wp-content/uploads/2021/02/logo-anna1.png 905w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-800x194.png 800w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-768x186.png 768w, https://annashop.vn/wp-content/uploads/2021/02/logo-anna1-600x145.png 600w"sizes = "(max-width: 100px) 100vw, 200px" /></a>  </div> 
        < div className = "header-content" > 
        <div className = "header-content-nav1" >
        <a href = ""className = "header-content-phone" >
        <i class = "fas fa-phone-square-alt" > </i> 
        <b > 0988880999 </b>  </a > </div> 
        <marquee className = "header-content-nav2" >Anna Cosmetics - Hệ thống mỹ phẩm thương hiệu chính hãng - Top 1 Việt Nam </marquee> 
        <div className = "header-content-nav3" >
        <div className = "container-language" >
        <a href = "" > VN </a>|<a href="">EN</a >
        </div> 
        <div className = "container-login" >
          <a href = "" > <i class = "far fa-question-circle" > Hỗ trợ </i> </a >
        </div> </div> </div> 
        <div className = "header-content-1" >
        <div className = "content-search" >
        <InputGroup className = "mb-3" >
        <FormControl placeholder = "Search product"
        aria-label = "Recipient's username"
        aria-describedby = "basic-addon2"
        className = "search" />
        <Button variant = "outline-secondary"
        id = "button-addon2" >Search </Button> </InputGroup > </div> 
        <div className = "content-cart" >
        <MenuItem >
        <a href = ""className = "content-iconcart" >
        <i className = "fas fa-cart-plus" > </i> </a >
        <IconButton size = "large"
        aria-label = "show 3 new mails"
        color = "inherit" >
        <Badge badgeContent = {
          3
        }
        color = "error" >
        <MailIcon />
        </Badge> </IconButton > </MenuItem> 
        <MenuItem >
        <IconButton size = "large"
        aria-label = "show 3 new notifications"
        color = "inherit" >
        <Badge badgeContent = {3}
        color = "error" >
        <NotificationsIcon />
        </Badge> </IconButton > </MenuItem> 
        <MenuItem >
        <IconButton size = "large"
        aria-label = "account of current user"
        aria-controls = "primary-search-account-menu"
        aria-haspopup = "true"
        color = "inherit" 
        className="user">
          
        <AccountCircle className="logo-user">
        <div className="menu-user">
                  <a href="">Đăng nhập</a> 
                  <a href="">Đăng xuất</a> 
                  <a href="">Thoát</a> 
               </div> 
        </AccountCircle>
        </IconButton> </MenuItem></div> </div > </div>
        <div className = "banner-nav" >
        <div className = "banner-left-header" >
        <div className = "icon-banner-left" >
        <a href = "" >
        <i class = "fas fa-bars" > </i> </a> </div> 
        <div className = "header-banner-left" >
        <a href = "" > DANH MỤC SẢN PHẨM </a></div> </div> 
        <div className = "banner-nav-product" >
        <ul >
        <li > <a href = ""className = "product1" > Giới thiệu </a> </li >
        <li > <a href = ""className = "product2" > Thương hiệu </a></li >
        <li > <a href = ""className = "product3" > Khuyến mại </a></li >
        <li > <a href = ""className = "product4" > Xu hướng làm đẹp </a></li >
        </ul> </div > 
        <div className = "banner-nav-QR" >
        <a href = "" > < i class = "fas fa-mobile-alt" > </i>  Tải ứng dụng</a >
        </div> </div > 
        <div className = "content-banner" >
        <div className = "content-banner-left" >
          <ul>
          <li className="makeup">
            <a href = "" className="Name_makeup" > < img src = {makeup} alt = "" /> TRANG ĐIỂM - MAKEUP 
               <div className="menu-makeup">
                  <a href="">Kem nền</a> 
                  <a href="">Mascara</a> 
                  <a href="">Phấn phủ</a> 
               </div> 
            </a> 
          </li> 
        <li><a href = "" > < img src = {skincare} alt = "" /> CHĂM SÓC DA - SKINCARE   </a> </li> 
        <li><a href = "" > < img src = {body} alt = "" /> CHĂM SÓC CƠ THỂ - BODY </a> </li> 
        <li><a href = "" > < img src = {hair} alt = "" /> CHĂM SÓC TÓC - HAIR </a> </li> 
        <li><a href = "" > < img src = {perfume} alt = "" /> NƯỚC HOA - PERFUME </a> </li> 
        <li><a href = "" > < img src = {other}alt = "" /> SẢN PHẨM KHÁC - OTHERS </a> </li> 
          </ul>
       </div> 
        <div className = "content-banner-center" >
          <Carousel >
        <Carousel.Item interval = {1000} >
        <img className = "d-block w-100 " src = {biaOne} alt = ""/>
        </Carousel.Item> 
        <Carousel.Item interval = {500} >
        <img className = "d-block w-100 " src = {biaTwo} alt = "" />
        </Carousel.Item> </Carousel > </div> 
        <div className = "content-banner-right" >
        <div className = "banner-right-link" >
        <a href = "https://www.facebook.com/profile.php?id=100013370045921" > < img src = {icfacebook} alt = "" /> </a> <br/> < br/>
        <a href = "" ><img src = {icYoutobe} alt = "" /></a> <br /> < br />
        <a href = "" ><img src = {icig} alt = "" /></a> </div> 
        <div className = "banner-right-chat" >
        <a href = ""className = "chat" > <i class = "fab fa-facebook-messenger" > </i></a ></div> </div > </div> 
        <div className = "banner-productHot" >
        <div >
        <h4 > SẢN PHẨM HOT </h4> </div > 
        <Carousel >
        <Carousel.Item >
        <div className = "tab_1" >
        <Card style = {
          {
            width: '18rem'
          }
        }>
        <Card.Img variant = "top" src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Kem chống nắng </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text >
         <Button variant = "primary" > Buy now </Button> </Card.Body > </Card> 
         <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda}/> 
        < Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Buy now </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}}>
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Buy now </Button> </Card.Body> </Card> 
        <Card style = {{width: '18rem' }} >
        <Card.Img variant = "top"src = {kemTriMun}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div > 
        <Carousel.Caption >
        <p > Nulla vitae elit libero,a pharetra augue mollis interdum. </p> </Carousel.Caption > </Carousel.Item>
        < Carousel.Item >
        <div className = "tab_1" >
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda}/> 
        < Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card>
        < Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}}>
        <Card.Img variant = "top"src = {kemTriMun}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div > </Carousel.Item>
        <Carousel.Item >
        <div className = "tab_1" >
        <Card style = {{ width: '18rem'}} >
        < Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{ width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda} /> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top" src = {kemCN } /> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of  the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top" src = { kemTriMun }/>
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div> </Carousel.Item> </Carousel > </div> 
        <div className = "banner-productTrademark" >
        <div >
        <h4 > THƯƠNG HIỆU NỔI BẬT </h4> </div > 
        <Carousel >
        <Carousel.Item >
        <div className = "tab_1" >
        <Card style = {
          {
            width: '18rem'
          }
        }>
        <Card.Img variant = "top" src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Kem chống nắng </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text >
         <Button variant = "primary" > Buy now </Button> </Card.Body > </Card> 
         <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda}/> 
        < Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Buy now </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}}>
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Buy now </Button> </Card.Body> </Card> 
        <Card style = {{width: '18rem' }} >
        <Card.Img variant = "top"src = {kemTriMun}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div > 
        <Carousel.Caption >
        <p > Nulla vitae elit libero,a pharetra augue mollis interdum. </p> </Carousel.Caption > </Carousel.Item>
        < Carousel.Item >
        <div className = "tab_1" >
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda}/> 
        < Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card>
        < Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}}>
        <Card.Img variant = "top"src = {kemTriMun}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div > </Carousel.Item>
        <Carousel.Item >
        <div className = "tab_1" >
        <Card style = {{ width: '18rem'}} >
        < Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{ width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda} /> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top" src = {kemCN } /> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of  the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top" src = { kemTriMun }/>
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div> </Carousel.Item> </Carousel > </div> 
        <div className = "banner-productMakeUp" >
        <div >
        <h5 > TRANG ĐIỂM-MAKEUP </h5> </div > 
        <Carousel >
        <Carousel.Item >
        <div className = "makeUp" >
        <Card style = {
          {
            width: '18rem'
          }
        }>
        <Card.Img variant = "top" src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Kem chống nắng </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text >
         <Button variant = "primary" > Buy now </Button> </Card.Body > </Card> 
         <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda}/> 
        < Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Buy now </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}}>
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Buy now </Button> </Card.Body> </Card> 
        <Card style = {{width: '18rem' }} >
        <Card.Img variant = "top"src = {kemTriMun}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div > 
        <Carousel.Caption >
        <p > Nulla vitae elit libero,a pharetra augue mollis interdum. </p> </Carousel.Caption > </Carousel.Item>
        < Carousel.Item >
        <div className = "tab_1" >
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda}/> 
        < Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card>
        < Card style = {{width: '18rem'}} >
        <Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}}>
        <Card.Img variant = "top"src = {kemTriMun}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div > </Carousel.Item>
        <Carousel.Item >
        <div className = "tab_1" >
        <Card style = {{ width: '18rem'}} >
        < Card.Img variant = "top"src = {kemCN}/> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk ofthe card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{ width: '18rem'}} >
        <Card.Img variant = "top"src = {duongda} /> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top" src = {kemCN } /> 
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of  the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> 
        <Card style = {{width: '18rem'}} >
        <Card.Img variant = "top" src = { kemTriMun }/>
        <Card.Body >
        <Card.Title > Card Title </Card.Title> 
        <Card.Text >Some quick example text to build on the card title and make up the bulk of the card 's content. </Card.Text > 
        <Button variant = "primary" > Go somewhere </Button> </Card.Body > </Card> </div> </Carousel.Item> </Carousel > </div> 
         </>
      );
    }
  }

  export default Header;