import Header from '../../layout/user/header/header'
import Footer from '../../layout/user/footer/footer'
import banner from '../../assest/images/bannerdp.jpg'
import nangtam from '../../assest/images/nangtam.png'
import {getMethod} from '../../services/request'
import {formatMoney} from '../../services/money'
import { useState, useEffect } from 'react'
import { Parser } from "html-to-react";
import avatar from '../../assest/images/avatar.jpg'
import ReactPaginate from 'react-paginate';


function PublicBookingRoom(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
      const getService = async() =>{
          var result = await getMethod('http://localhost:8080/api/services/public/findAll');
          setItems(result)
      };
      getService();
  }, []);


    return(
        <div class="contentmain">
        <section>
            <div class="bannerdatphong">
                <img src={banner} class="bannerdp" />
                <div class="blockbookingtime">
                    <div class="row">
                        <div class="col-sm-12">
                            <label class="lbbookingsp">Chọn loại phòng</label>
                            <select class="form-control" id="listcategoryselect">
                                <option value="-1">Tất cả loại phong</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <label class="lbbookingsp">Thời gian nhận phòng</label>
                            <input type="date" class="form-control" id="fromdate"/>
                        </div>
                        <div class="contenttimebk col-sm-4">
                            <label class="lbbookingsp">Số ngày</label>
                            <select class="form-control" id="songay">
                                <option value="">1 Ngày</option>
                            </select>
                        </div>
                        <div class="contenttimebk col-sm-4">
                            <label class="lbbooking">Trả phòng</label>
                            <span id="ngaytraphong" class="ngaytraphong">Thứ 5, 16 thg 1, 2023</span>
                        </div>
                        <div class="divbtnsearchrooms">
                            <button onclick="loadAllRoom()" class="btnsearchroom"><i class="fa fa-search"></i> Tìm kiếm phòng</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <p class="titlept">Danh sách phòng trống <span id="sophongtrong"></span></p>
                    <div class="row" id="listRoom">
                        <div class="row singleroom">
                            <div class="col-4">
                                <img src="image/room.webp" data-bs-toggle="modal" data-bs-target="#modaldeail" class="imgroom pointer"/>
                            </div>
                            <div class="col-8">
                                <div class="nameroomdiv">
                                    <span class="roomnames pointer">Executive Room Only</span>
                                    <span data-bs-toggle="modal" data-bs-target="#modaldeail" class="motaroom pointer">Xem mô tả & ảnh phòng</span>
                                </div>
                                <div class="d-flex numbedroom">
                                    <span><i class="fa fa-bed"></i> Số giường: 4</span>
                                    <span><i class="fa fa-users"></i> Số người tối đa: 4</span>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <div class="row">
                                            <div class="col-sm-6 singletich">
                                                <i class="fa fa-wifi"></i> WiFi miễn phí
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <span class="priceroom">993.338 VND</span>
                                        <span class="phongdem">/ phòng / đêm</span>
                                        <label class="checkbox-custom"> Chọn phòng
                                            <input type="checkbox"/><span class="checkmark-checkbox"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 toppad">
                    <div class="timebooking row">
                        <div class="headertimebk">
                            Phòng đã chọn
                        </div>
                        <div class="contenttimebooking">
                            <div class="row" id="listroomdc">
                                <div class="row">
                                    <div class="col-7"><span>Phòng Medium 102</span></div>
                                    <div class="col-3"><span>5600000</span></div>
                                    <div class="col-2"><i class="fa fa-trash pointer"></i></div>
                                </div>
                            </div>
                            <br/><button onclick="checkOut()" class="btn btn-primary form-control">Đặt lịch</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default PublicBookingRoom;